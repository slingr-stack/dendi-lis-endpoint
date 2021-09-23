var fs = require('fs');

var FILE_NAME = "dendi-fn-helpers.js";
var CODE = '';
var cache = {};

var apiURLs = {
    'patients': [
        {'name': 'get','operation': 'GET','url': '/patients/'},
        {'name': 'put','operation': 'PUT','url': '/patients/:patientUuid/'},
        {'name': 'post','operation': 'POST','url': '/patients/'},
        {'name': 'bop','operation': 'POST','url': '/patients/'},
    ],
    'patient_payers': [
        {'name': 'get','operation': 'GET','url': '/patient_payers/'},
        {'name': 'put','operation': 'PUT','url': '/patient_payers/:patientPayerUuid/'},
        {'name': 'post','operation': 'POST','url': '/patient_payers/'},
    ],
    'patient_guarantors': [
        {'name': 'get','operation': 'GET','url': '/orders/order_patient_guarantors/'},
    ],
    'providers': [
        {'name': 'get','operation': 'GET','url': '/providers/'},
        {'name': 'put','operation': 'PUT','url': '/providers/:provider_uuid/'},
        {'name': 'post','operation': 'POST','url': '/providers/'},
    ],
    'samples': [
        {'name': 'get','operation': 'GET','url': '/samples/'},
        {'name': 'types.get','operation': 'GET','url': '/sample_types/'},
        {'name': 'tests.get','operation': 'GET','url': '/sample_tests/'},
    ],
    'referenceLabs': [
        {'name': 'get','operation': 'GET','url': '/reference_labs/'},
    ],
    'sendouts': [
        {'name': 'get','operation': 'GET','url': '/sendouts/'},
        {'name': 'post','operation': 'POST','url': '/sendouts/'},
    ],
    'diagnosisCodes':[
        {'name': 'getAll','operation': 'GET','url': '/autocomplete/diagnosis_code/'},
    ],
    'inHouseLabLocations': [
        {'name': 'get','operation': 'GET','url': '/in_house_lab_locations/'},
    ],
    'accounts': [
        {'name': 'get','operation': 'GET','url': '/accounts/'},
        {'name': 'post','operation': 'POST','url': '/accounts/'},
    ],
    'collectors': [
        {'name': 'get','operation': 'GET','url': '/collectors/'},
        {'name': 'get','operation': 'GET','url': '/accounts/'},
        {'name': 'get','operation': 'GET','url': '/collectors/'},
    ],
    'orders': [
        {'name': 'get','operation': 'GET','url': '/orders/'},
        {'name': 'post','operation': 'POST','url': '/orders/'},
        {'name': 'delete','operation': 'DELETE','url': '/orders/:orderCode/'},
        {'name': 'pools.get','operation': 'GET','url': '/orders/pools/'},
        {'name': 'pools.post','operation': 'POST','url': '/orders/pools/'},
        {'name': 'reports.get','operation': 'GET','url': '/orders/reports/'},
        {'name': 'testsResults.get','operation': 'GET','url': '/orders/test_results/'},
        {'name': 'testsResults.put','operation': 'PUT','url': '/orders/test_results/:testUuid/'},
        {'name': 'testsResults.post','operation': 'POST','url': '/orders/test_results/'},
    ],
    'reports': [
        {'name': 'post','operation': 'POST','url': '/reports/'},
    ],
    'testTypes': [
        {'name': 'get','operation': 'GET','url': '/test_types/'},
    ],
    'testPanelTypes': [
        {'name': 'get','operation': 'GET','url': '/test_panel_types/'},
    ],
    'printers': [
        {'name': 'get','operation': 'GET','url': '/printers/'},
    ],
    'ehrIntegration': [
        {'name': 'get','operation': 'GET','url': '/ehr_integrations/'},
    ],
    'print_jobs': [
        {'name': 'post','operation': 'POST','url': '/print_jobs/?printer_id=:printeId&sample_uuid=:sampleUuid&num_copies=:numCopies/'},
    ]
};

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/:(\w+)/g, function () {
                if (typeof(args[i]) != 'string') throw 'Invalid type of argument'
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
                    var functionName = camelCase(domain) + NAMESPACE_CONCAT_SYMBOL + action.name;
                    var method = action['operation'].toLowerCase();
                    var numVars = (domainActionURL.match(/:/g) || []).length;//counting parameters
                    urlsData[method] = urlsData[method] || {};
                    urlsData[method][functionName] = domainActionURL;
                }
            }
        }
    }

    for (var method in urlsData) {
        for (var fn in urlsData[method]) {
            CODE += setInitializers(fn);
            if (method == 'get' || method == 'delete') {
                var sizeStr = 'var size = arguments.length > 0 ? arguments.length : 0;';
                var parseStr = 'parse(urlsData[\'' + method + '\'][\'' + fn + '\'], Array.prototype.slice.call(arguments, 0, size));';
                CODE += ENDPOINT_NAMESPACE + NAMESPACE_CONCAT_SYMBOL + fn + ' = function() {\n\t' +
                    sizeStr + '\n\t' +
                    'var url = ' + parseStr + '\n\t' +
                    'sys.logs.debug(\'[Dendi LIS] ' + method.toUpperCase() + ' from: \' + url);\n\t' +
                    'var params = typeof(arguments[arguments.length-1])==\'object\' ? {params: arguments[arguments.length-1]} : {};\n\t' +
                    'return ' + ENDPOINT_NAMESPACE + NAMESPACE_CONCAT_SYMBOL + method + '(url,params);\n};\n\n';
            } else if (method == 'post' || method == 'put' ) {
                var sizeStr = 'var size = arguments.length > 0 ? arguments.length : 0;\n\t';
                sizeStr += 'if(size <= 0) { return;\n\t\tsys.logs.warn(\'wrong numbers of arguments for ' + fn + '.' + method + '\');\n\t}';
                var parseStr = 'parse(urlsData[\'' + method + '\'][\'' + fn + '\'], Array.prototype.slice.call(arguments, 0, size-1));';
                CODE += ENDPOINT_NAMESPACE + NAMESPACE_CONCAT_SYMBOL + fn + ' = function() {\n\t' +
                    sizeStr + '\n\tvar url = ' + parseStr + '\n\tsys.logs.debug(\'[Dendi LIS] ' + method.toUpperCase()
                    + ' from: \' + url);\n\treturn ' + ENDPOINT_NAMESPACE + NAMESPACE_CONCAT_SYMBOL + method
                    + '(url, arguments[arguments.length - 1]);\n};\n\n';
            }
        }
    }

    var MESSAGE = '';
    MESSAGE += '////////////////////////////////////////////////////////////////////////////\n';
    MESSAGE += '//                                                                        //\n';
    MESSAGE += '//        This file is generated with dendi/gen/gen-dendi-helpers.js      //\n';
    MESSAGE += '//                                                                        //\n';
    MESSAGE += '//                   Public API - Account functions                       //\n';
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