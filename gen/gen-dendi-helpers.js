var fs = require('fs');

var FILE_NAME = "dendi-fn-helpers.js";
var CODE = '';
var cache = {};

var apiURLs = {
    'orders': [
        {
            'name': 'read',
            'operation': 'GET',
            'url': '/orders?uuid=:orderId'
        },
        {
            'name': 'create',
            'operation': 'POST',
            'url': '/orders/'
        },
        {
            'name': 'archive',
            'operation': 'DELETE',
            'url': '/orders/:orderCode/'
        },
        {
            'name': 'pools.read',
            'operation': 'GET',
            'url': '/orders/pools/'
        },
        {
            'name': 'pools.create',
            'operation': 'POST',
            'url': '/orders/pools/'
        },
        {
            'name': 'reports.read',
            'operation': 'GET',
            'url': '/orders/reports/'
        },
    ],
};

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1],
                i = 0;
            return str.replace(/:(\w+)/g, function () {
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw 'Function is not valid.';
        }
    } catch (err) {
        throw 'Function is not valid for given arguments.';
    }
};

var camelCase = function (str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        if (+match === 0) return "";
        return index == 0 ? match.toLowerCase() : match.toUpperCase();
    });
};

var setInitializers = function (fnName) {
    var tmpCode = '',
        namesArr = fnName.split('.'),
        path = '';

    for (var i in namesArr) {
        if (i == 0) {
            path = namesArr[0];
        } else {
            path += '.' + namesArr[i];
        }
        if (!cache[path]) {
            tmpCode += ENDPOINT_NAMESPACE + NAMESPACE_CONCAT_SYMBOL + path + ' = {};\n';
            cache[path] = path;
        }
    }
    return tmpCode;
};

var urlsData = {};
var endpoint = {};
var ENDPOINT_NAMESPACE = 'endpoint';
var NAMESPACE_CONCAT_SYMBOL = '.';

var makeEndpointsHelpers = function () {
    for (var domain in apiURLs) {
        if (apiURLs.hasOwnProperty(domain)) {
            var domainAction = apiURLs[domain];
            for (var key in domainAction) {
                if (domainAction.hasOwnProperty(key)) {
                    var action = domainAction[key];
                    var domainActionURL = action.url;
                    var functionName = camelCase(domain) + NAMESPACE_CONCAT_SYMBOL + camelCase(action.name);
                    var method = action['operation'].toLowerCase();
                    var numVars = (domainActionURL.match(/:/g) || []).length;//counting parameters
                    urlsData[method] = urlsData[method] || {};
                    urlsData[method][functionName] = urlsData[method][functionName] || {};
                    urlsData[method][functionName][numVars] = domainActionURL;
                }
            }
        }
    }

    for (var method in urlsData) {
        for (var fn in urlsData[method]) {
            CODE += setInitializers(fn);
            if (method == 'get') {
                var sizeStr = 'var size = arguments.length > 0 ? arguments.length : 0;';
                var parseStr = 'parse(urlsData[\'' + method + '\'][\'' + fn + '\'][size], Array.prototype.slice.call(arguments, 0, size));';
                CODE += ENDPOINT_NAMESPACE + NAMESPACE_CONCAT_SYMBOL + fn + ' = function() {\n\t' +
                    sizeStr + '\n\tvar url = ' + parseStr + '\n\tsys.logs.debug(\'[QuickBooks] ' +
                    method.toUpperCase() + ' from: \' + url);\n\treturn ' + ENDPOINT_NAMESPACE + NAMESPACE_CONCAT_SYMBOL + method + '(url);\n};\n\n';
            } else if (method == 'post') {
                var sizeStr = 'var size = arguments.length > 0 ? arguments.length : 0;\n\t';
                sizeStr += 'if(size <= 0) { return;\n\t\tsys.logs.warn(\'wrong numbers of arguments for ' + fn + '.' + method + '\');\n\t}';
                var parseStr = 'parse(urlsData[\'' + method + '\'][\'' + fn + '\'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));';
                CODE += ENDPOINT_NAMESPACE + NAMESPACE_CONCAT_SYMBOL + fn + ' = function() {\n\t' +
                    sizeStr + '\n\tvar url = ' + parseStr + '\n\tsys.logs.debug(\'[QuickBooks] ' + method.toUpperCase()
                    + ' from: \' + url);\n\treturn ' + ENDPOINT_NAMESPACE + NAMESPACE_CONCAT_SYMBOL + method
                    + '(url, arguments[arguments.length - 1]);\n};\n\n';
            }
        }
    }

    var MESSAGE = '';
    MESSAGE += '////////////////////////////////////////////////////////////////////////////\n';
    MESSAGE += '//                                                                        //\n';
    MESSAGE += '//  This file is generated with quickbooks/gen/gen-quickbooks-helpers.js  //\n';
    MESSAGE += '//                                                                        //\n';
    MESSAGE += '//  Public API - Account functions                                        //\n';
    MESSAGE += '//                                                                        //\n';
    MESSAGE += '////////////////////////////////////////////////////////////////////////////\n';

    CODE = MESSAGE + '\n\nvar urlsData = ' + JSON.stringify(urlsData, null, "\t") + ';\n\nvar parse = ' + parse.toString() + ';\n\n' + CODE;

};

makeEndpointsHelpers();

fs.writeFile("../scripts/" + FILE_NAME, CODE, function (err) {
    if (err) {
        return console.error(err);
    }

    console.info('Generator has run successfully!');
});