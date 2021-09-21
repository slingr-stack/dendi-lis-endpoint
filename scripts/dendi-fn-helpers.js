////////////////////////////////////////////////////////////////////////////
//                                                                        //
//        This file is generated with dendi/gen/gen-dendi-helpers.js      //
//                                                                        //
//                   Public API - Account functions                       //
//                                                                        //
////////////////////////////////////////////////////////////////////////////


var urlsData = {
	"get": {
		"orders.get": {
			"1": "/orders?uuid=:orderId"
		},
		"orders.pools.get": {
			"0": "/orders/pools/"
		},
		"orders.reports.get": {
			"1": "/orders/reports/?code=:orderCode"
		},
		"providers.get": {
			"0": "/providers/"
		},
		"patients.get": {
			"1": "/patients/?account_uuid=:accountUuid"
		}
	},
	"post": {
		"orders.post": {
			"0": "/orders/"
		},
		"orders.pools.post": {
			"0": "/orders/pools/"
		},
		"providers.post": {
			"0": "/providers/"
		},
		"patients.post": {
			"0": "/patients/"
		},
		"reports.post": {
			"0": "/reports/"
		}
	},
	"delete": {
		"orders.delete": {
			"1": "/orders/:orderCode/"
		}
	},
	"put": {
		"patients.put": {
			"1": "/patients/:patientUuid/"
		}
	}
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

endpoint.orders = {};
endpoint.orders.get = {};
endpoint.orders.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['orders.get'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.orders.pools = {};
endpoint.orders.pools.get = {};
endpoint.orders.pools.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['orders.pools.get'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.orders.reports = {};
endpoint.orders.reports.get = {};
endpoint.orders.reports.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['orders.reports.get'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.providers = {};
endpoint.providers.get = {};
endpoint.providers.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['providers.get'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.patients = {};
endpoint.patients.get = {};
endpoint.patients.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['patients.get'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.orders.post = {};
endpoint.orders.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for orders.post');
	}
	var url = parse(urlsData['post']['orders.post'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.orders.pools.post = {};
endpoint.orders.pools.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for orders.pools.post');
	}
	var url = parse(urlsData['post']['orders.pools.post'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.providers.post = {};
endpoint.providers.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for providers.post');
	}
	var url = parse(urlsData['post']['providers.post'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.patients.post = {};
endpoint.patients.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for patients.post');
	}
	var url = parse(urlsData['post']['patients.post'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.reports = {};
endpoint.reports.post = {};
endpoint.reports.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for reports.post');
	}
	var url = parse(urlsData['post']['reports.post'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.orders.delete = {};
endpoint.orders.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['orders.delete'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.patients.put = {};
endpoint.patients.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for patients.put');
	}
	var url = parse(urlsData['put']['patients.put'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] PUT from: ' + url);
	return endpoint.put(url, arguments[arguments.length - 1]);
};

