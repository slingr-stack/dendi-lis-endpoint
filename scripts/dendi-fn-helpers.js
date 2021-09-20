//////////////////////////////////////////////////////////////////////////
//                                                                      //
//    This file is generated with gen/gen-quickbooks-payments-helpers.js//
//                                                                      //
//            Fri Sep 17 2021 15:17:42 GMT-0300 (hora estándar de Argentina)                   //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


var urlsData = {
	"orders.get": {
		"0": "/orders/?uuid=:orderId"
	},
	"orders.post": {
		"0": "/orders/"
	},
	"orders.delete": {
		"1": "/orders/:orderCode/"
	},
	"orders.pools.get": {
		"0": "/orders/pools/"
	},
	"orders.pools.post": {
		"0": "/orders/pools/"
	},
	"orders.reports.get": {
		"1": "/orders/reports/?code=:orderCode"
	},
	"reports.post": {
		"0": "/reports/"
	},
	"patients.get": {
		"0": "/patients/?account_uuid=:accountUuid"
	},
	"patients.put": {
		"1": "/patients/:patientUuid/"
	},
	"patients.post": {
		"0": "/patients/"
	},
	"providers.get": {
		"0": "/providers/"
	},
	"providers.post": {
		"0": "/providers/"
	}
};

var analyzeParams = function (args) {
    var paramsSize = 0;
    var params = [];
    var argumentsObj = null;
    for (var i = 0; i < args.length; i++) {
        if (typeof args[i] != 'object') {
            paramsSize++;
            params.push(args[i]);
        } else {
            argumentsObj = args[i];
        }

    }
    return {
        paramsSize: paramsSize,
        argumentsObj: argumentsObj,
        params: params
    };
};

var getUrl = function (url, params, args, argsToPath) {

    if (!url) {
        return null;
    }

    if (params.length > 0) {
        var i = 0;
        url = url.replace(/:(\w+)/g, function () {
            return params[i++];
        });
    }

    if (args && argsToPath) {
        var tmp = Object.keys(args).map(function (k) {
            return encodeURIComponent(k) + '=' + args[k];
        }).join('&');

        if (url.split("\?").length > 1) {
            url += '&' + tmp;
        } else {
            url += '?' + tmp;
        }
    }

    return url;
};

endpoint.orders = {};
endpoint.orders.get = function() {
	var obj = urlsData['orders.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	sys.logs.debug("LA URLS ES:"+url);
	return endpoint.get(url);
};

endpoint.orders.post = function() {
	var obj = urlsData['orders.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.orders.delete = function() {
	var obj = urlsData['orders.delete'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.delete(url);
};

endpoint.orders.pools = {};
endpoint.orders.pools.get = function() {
	var obj = urlsData['orders.pools.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.orders.pools.post = function() {
	var obj = urlsData['orders.pools.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.orders.reports = {};
endpoint.orders.reports.get = function() {
	var obj = urlsData['orders.reports.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	var reportData = endpoint.get(url);
	return endpoint._getReportFile(reportData);
};

endpoint.reports = {};
endpoint.reports.post = function() {
	var obj = urlsData['reports.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.patients = {};
endpoint.patients.get = function() {
	var obj = urlsData['patients.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.patients.put = function() {
	var obj = urlsData['patients.put'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.put(url, params.argumentsObj);
};

endpoint.patients.post = function() {
	var obj = urlsData['patients.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.providers = {};
endpoint.providers.get = function() {
	var obj = urlsData['providers.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.providers.post = function() {
	var obj = urlsData['providers.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

