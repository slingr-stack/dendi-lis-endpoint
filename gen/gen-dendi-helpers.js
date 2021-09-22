var fs = require('fs');

var FILE_NAME = "dendi-fn-helpers.js";
var CODE = '';
var cache = {};

var apiURLs = {
    'patients': [
        {'name': 'getByUuid','operation': 'GET','url': '/patients/?uuid=:patientUuid'},
        {'name': 'getAll','operation': 'GET','url': '/patients/'},
        {'name': 'put','operation': 'PUT','url': '/patients/:patientUuid/'},
        {'name': 'post','operation': 'POST','url': '/patients/'},
        {'name': 'bop','operation': 'POST','url': '/patients/'},
    ],
    'patient_payers': [
        {'name': 'get','operation': 'GET','url': '/patient_payers/'},
        {'name': 'put','operation': 'PUT','url': '/patient_payers/:patientPayerUuid/'},
        {'name': 'post','operation': 'POST','url': '/patient_payers/'},
        {'name': 'getByOrderCode','operation': 'GET','url': '/orders/order_patient_payers/?code=:code'},
    ],
    'patient_guarantors': [
        {'name': 'getByOrderCode','operation': 'GET','url': '/orders/order_patient_guarantors/?code=:code'},
    ],
    'providers': [
        {'name': 'get','operation': 'GET','url': '/providers/?npi=:providerNpi'},
        {'name': 'put','operation': 'PUT','url': '/providers/:provider_uuid/'},
        {'name': 'post','operation': 'POST','url': '/providers/'},
    ],
    'samples': [
        {'name': 'getAll','operation': 'GET','url': '/samples/'},
        {'name': 'types.getAll','operation': 'GET','url': '/sample_types/'},
        {'name': 'tests.getAll','operation': 'GET','url': '/sample_tests/'},
    ],
    'referenceLabs': [
        {'name': 'getAll','operation': 'GET','url': '/reference_labs/'},
    ],
    'sendouts': [
        {'name': 'getAll','operation': 'GET','url': '/sendouts/'},
        {'name': 'post','operation': 'POST','url': '/sendouts/'},
    ],
    'diagnosisCodes':[
        {'name': 'getAll','operation': 'GET','url': '/autocomplete/diagnosis_code/'},
        {'name': 'get','operation': 'GET','url': '/autocomplete/diagnosis_code/?q=:query'},
    ],
    'inHouseLabLocations': [
        {'name': 'getAll','operation': 'GET','url': '/in_house_lab_locations/'},
    ],
    'accounts': [
        {'name': 'getAll','operation': 'GET','url': '/accounts/'},
        {'name': 'post','operation': 'POST','url': '/accounts/'},
    ],
    'collectors': [
        {'name': 'getAll','operation': 'GET','url': '/collectors/'},
        {'name': 'getAll','operation': 'GET','url': '/accounts/'},
        {'name': 'getAll','operation': 'GET','url': '/collectors/'},
    ],
    'orders': [
        {'name': 'getByUuid','operation': 'GET','url': '/orders/?uuid=:orderId'},
        {'name': 'getAll','operation': 'GET','url': '/orders/'},
        {'name': 'post','operation': 'POST','url': '/orders/'},
        {'name': 'delete','operation': 'DELETE','url': '/orders/:orderCode/'},
        {'name': 'pools.getAll','operation': 'GET','url': '/orders/pools/'},
        {'name': 'pools.post','operation': 'POST','url': '/orders/pools/'},
        {'name': 'reports.getAll','operation': 'GET','url': '/orders/reports/'},
        {'name': 'reports.getByOrderCode','operation': 'GET','url': '/orders/reports/?code=:orderCode'},
        {'name': 'testsResults.getByOrderUuid','operation': 'GET','url': '/orders/test_results/?uuid=:uuid'},
        {'name': 'testsResults.getByOrderCode','operation': 'GET','url': '/orders/test_results/?code=:code'},
        {'name': 'testsResults.put','operation': 'PUT','url': '/orders/test_results/:testUuid/'},
        {'name': 'testsResults.post','operation': 'POST','url': '/orders/test_results/'},
    ],
    'reports': [
        {'name': 'post','operation': 'POST','url': '/reports/'},
    ],
    'testTypes': [
        {'name': 'getAll','operation': 'GET','url': '/test_types/'},
        {'name': 'getByName','operation': 'GET','url': '/test_types/?name=:name'},
    ],
    'testPanelTypes': [
        {'name': 'getAll','operation': 'GET','url': '/test_panel_types/'},
        {'name': 'getByUuid','operation': 'GET','url': '/test_panel_type_uuid/?test_panel_type_uuid=:testPanelTypeUuid'},
    ],
    'printers': [
        {'name': 'getAll','operation': 'GET','url': '/printers/'},
    ],
    'ehrIntegration': [
        {'name': 'getAll','operation': 'GET','url': '/ehr_integrations/'},
        {'name': 'getByUuid','operation': 'GET','url': '/ehr_integrations/?uuid=:uuid'},
    ],
    'print_jobs': [
        {'name': 'post','operation': 'POST','url': '/print_jobs/?printer_id=:printeId&sample_uuid=:sampleUuid&num_copies=:numCopies/'},
    ]
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
                    var functionName = camelCase(domain) + NAMESPACE_CONCAT_SYMBOL + action.name;
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
            if (method == 'get' || method == 'delete') {
                var sizeStr = 'var size = arguments.length > 0 ? arguments.length : 0;';
                var parseStr = 'parse(urlsData[\'' + method + '\'][\'' + fn + '\'][size], Array.prototype.slice.call(arguments, 0, size));';
                CODE += ENDPOINT_NAMESPACE + NAMESPACE_CONCAT_SYMBOL + fn + ' = function() {\n\t' +
                    sizeStr + '\n\tvar url = ' + parseStr + '\n\tsys.logs.debug(\'[Dendi LIS] ' +
                    method.toUpperCase() + ' from: \' + url);\n\treturn ' + ENDPOINT_NAMESPACE + NAMESPACE_CONCAT_SYMBOL + method + '(url);\n};\n\n';
            } else if (method == 'post' || method == 'put' ) {
                var sizeStr = 'var size = arguments.length > 0 ? arguments.length : 0;\n\t';
                sizeStr += 'if(size <= 0) { return;\n\t\tsys.logs.warn(\'wrong numbers of arguments for ' + fn + '.' + method + '\');\n\t}';
                var parseStr = 'parse(urlsData[\'' + method + '\'][\'' + fn + '\'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));';
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