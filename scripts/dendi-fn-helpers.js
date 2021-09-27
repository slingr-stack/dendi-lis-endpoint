////////////////////////////////////////////////////////////////////////////
//                                                                        //
//        This file is generated with dendi/gen/gen-dendi-helpers.js      //
//                                                                        //
//                   Public API - Account functions                       //
//                                                                        //
////////////////////////////////////////////////////////////////////////////


var urlsData = {
	"get": {
		"patients.get": "/patients/",
		"patient_payers.get": "/patient_payers/",
		"patient_guarantors.get": "/orders/order_patient_guarantors/",
		"providers.get": "/providers/",
		"samples.get": "/samples/",
		"samples.types.get": "/sample_types/",
		"samples.tests.get": "/sample_tests/",
		"referenceLabs.get": "/reference_labs/",
		"sendouts.get": "/sendouts/",
		"diagnosisCodes.getAll": "/autocomplete/diagnosis_code/",
		"inHouseLabLocations.get": "/in_house_lab_locations/",
		"accounts.get": "/accounts/",
		"collectors.get": "/collectors/",
		"orders.get": "/orders/",
		"orders.pools.get": "/orders/pools/",
		"orders.reports.get": "/orders/reports/",
		"orders.testsResults.get": "/orders/test_results/",
		"testTypes.get": "/test_types/",
		"testPanelTypes.get": "/test_panel_types/",
		"printers.get": "/printers/",
		"ehrIntegration.get": "/ehr_integrations/"
	},
	"put": {
		"patients.put": "/patients/:patientUuid/",
		"patient_payers.put": "/patient_payers/:patientPayerUuid/",
		"providers.put": "/providers/:provider_uuid/",
		"orders.testsResults.put": "/orders/test_results/:testUuid/"
	},
	"post": {
		"patients.post": "/patients/",
		"patients.bop": "/patients/",
		"patient_payers.post": "/patient_payers/",
		"providers.post": "/providers/",
		"sendouts.post": "/sendouts/",
		"accounts.post": "/accounts/",
		"orders.post": "/orders/",
		"orders.pools.post": "/orders/pools/",
		"orders.testsResults.post": "/orders/test_results/",
		"reports.post": "/reports/",
		"print_jobs.post": "/print_jobs/?printer_id=:printeId&sample_uuid=:sampleUuid&num_copies=:numCopies/"
	},
	"delete": {
		"orders.delete": "/orders/:orderCode/"
	}
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

endpoint.patients = {};
endpoint.patients.get = {};
endpoint.patients.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['patients.get'], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	var params = typeof(arguments[arguments.length-1])=='object' ? {params: arguments[arguments.length-1]} : {};
	return endpoint.get(url,params);
};

endpoint.patient_payers = {};
endpoint.patient_payers.get = {};
endpoint.patient_payers.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['patient_payers.get'], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	var params = typeof(arguments[arguments.length-1])=='object' ? {params: arguments[arguments.length-1]} : {};
	return endpoint.get(url,params);
};

endpoint.patient_guarantors = {};
endpoint.patient_guarantors.get = {};
endpoint.patient_guarantors.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['patient_guarantors.get'], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	var params = typeof(arguments[arguments.length-1])=='object' ? {params: arguments[arguments.length-1]} : {};
	return endpoint.get(url,params);
};

endpoint.providers = {};
endpoint.providers.get = {};
endpoint.providers.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['providers.get'], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	var params = typeof(arguments[arguments.length-1])=='object' ? {params: arguments[arguments.length-1]} : {};
	return endpoint.get(url,params);
};

endpoint.samples = {};
endpoint.samples.get = {};
endpoint.samples.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['samples.get'], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	var params = typeof(arguments[arguments.length-1])=='object' ? {params: arguments[arguments.length-1]} : {};
	return endpoint.get(url,params);
};

endpoint.samples.types = {};
endpoint.samples.types.get = {};
endpoint.samples.types.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['samples.types.get'], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	var params = typeof(arguments[arguments.length-1])=='object' ? {params: arguments[arguments.length-1]} : {};
	return endpoint.get(url,params);
};

endpoint.samples.tests = {};
endpoint.samples.tests.get = {};
endpoint.samples.tests.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['samples.tests.get'], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	var params = typeof(arguments[arguments.length-1])=='object' ? {params: arguments[arguments.length-1]} : {};
	return endpoint.get(url,params);
};

endpoint.referenceLabs = {};
endpoint.referenceLabs.get = {};
endpoint.referenceLabs.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['referenceLabs.get'], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	var params = typeof(arguments[arguments.length-1])=='object' ? {params: arguments[arguments.length-1]} : {};
	return endpoint.get(url,params);
};

endpoint.sendouts = {};
endpoint.sendouts.get = {};
endpoint.sendouts.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['sendouts.get'], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	var params = typeof(arguments[arguments.length-1])=='object' ? {params: arguments[arguments.length-1]} : {};
	return endpoint.get(url,params);
};

endpoint.diagnosisCodes = {};
endpoint.diagnosisCodes.getAll = {};
endpoint.diagnosisCodes.getAll = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['diagnosisCodes.getAll'], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	var params = typeof(arguments[arguments.length-1])=='object' ? {params: arguments[arguments.length-1]} : {};
	return endpoint.get(url,params);
};

endpoint.inHouseLabLocations = {};
endpoint.inHouseLabLocations.get = {};
endpoint.inHouseLabLocations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['inHouseLabLocations.get'], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	var params = typeof(arguments[arguments.length-1])=='object' ? {params: arguments[arguments.length-1]} : {};
	return endpoint.get(url,params);
};

endpoint.accounts = {};
endpoint.accounts.get = {};
endpoint.accounts.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['accounts.get'], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	var params = typeof(arguments[arguments.length-1])=='object' ? {params: arguments[arguments.length-1]} : {};
	return endpoint.get(url,params);
};

endpoint.collectors = {};
endpoint.collectors.get = {};
endpoint.collectors.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['collectors.get'], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	var params = typeof(arguments[arguments.length-1])=='object' ? {params: arguments[arguments.length-1]} : {};
	return endpoint.get(url,params);
};

endpoint.orders = {};
endpoint.orders.get = {};
endpoint.orders.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['orders.get'], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	var params = typeof(arguments[arguments.length-1])=='object' ? {params: arguments[arguments.length-1]} : {};
	return endpoint.get(url,params);
};

endpoint.orders.pools = {};
endpoint.orders.pools.get = {};
endpoint.orders.pools.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['orders.pools.get'], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	var params = typeof(arguments[arguments.length-1])=='object' ? {params: arguments[arguments.length-1]} : {};
	return endpoint.get(url,params);
};

endpoint.orders.reports = {};
endpoint.orders.reports.get = {};
endpoint.orders.reports.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['orders.reports.get'], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	var params = typeof(arguments[arguments.length-1])=='object' ? {params: arguments[arguments.length-1]} : {};
	var pdfInfo = endpoint.get(url,params);
	return endpoint._getReportFile(pdfInfo);
};

endpoint.orders.testsResults = {};
endpoint.orders.testsResults.get = {};
endpoint.orders.testsResults.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['orders.testsResults.get'], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	var params = typeof(arguments[arguments.length-1])=='object' ? {params: arguments[arguments.length-1]} : {};
	return endpoint.get(url,params);
};

endpoint.testTypes = {};
endpoint.testTypes.get = {};
endpoint.testTypes.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['testTypes.get'], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	var params = typeof(arguments[arguments.length-1])=='object' ? {params: arguments[arguments.length-1]} : {};
	return endpoint.get(url,params);
};

endpoint.testPanelTypes = {};
endpoint.testPanelTypes.get = {};
endpoint.testPanelTypes.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['testPanelTypes.get'], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	var params = typeof(arguments[arguments.length-1])=='object' ? {params: arguments[arguments.length-1]} : {};
	return endpoint.get(url,params);
};

endpoint.printers = {};
endpoint.printers.get = {};
endpoint.printers.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['printers.get'], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	var params = typeof(arguments[arguments.length-1])=='object' ? {params: arguments[arguments.length-1]} : {};
	return endpoint.get(url,params);
};

endpoint.ehrIntegration = {};
endpoint.ehrIntegration.get = {};
endpoint.ehrIntegration.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['ehrIntegration.get'], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	var params = typeof(arguments[arguments.length-1])=='object' ? {params: arguments[arguments.length-1]} : {};
	return endpoint.get(url,params);
};

endpoint.patients.put = {};
endpoint.patients.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for patients.put.put');
	}
	var url = parse(urlsData['put']['patients.put'], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] PUT from: ' + url);
	return endpoint.put(url, arguments[arguments.length - 1]);
};

endpoint.patient_payers.put = {};
endpoint.patient_payers.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for patient_payers.put.put');
	}
	var url = parse(urlsData['put']['patient_payers.put'], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] PUT from: ' + url);
	return endpoint.put(url, arguments[arguments.length - 1]);
};

endpoint.providers.put = {};
endpoint.providers.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for providers.put.put');
	}
	var url = parse(urlsData['put']['providers.put'], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] PUT from: ' + url);
	return endpoint.put(url, arguments[arguments.length - 1]);
};

endpoint.orders.testsResults.put = {};
endpoint.orders.testsResults.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for orders.testsResults.put.put');
	}
	var url = parse(urlsData['put']['orders.testsResults.put'], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] PUT from: ' + url);
	return endpoint.put(url, arguments[arguments.length - 1]);
};

endpoint.patients.post = {};
endpoint.patients.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for patients.post.post');
	}
	var url = parse(urlsData['post']['patients.post'], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.patients.bop = {};
endpoint.patients.bop = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for patients.bop.post');
	}
	var url = parse(urlsData['post']['patients.bop'], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.patient_payers.post = {};
endpoint.patient_payers.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for patient_payers.post.post');
	}
	var url = parse(urlsData['post']['patient_payers.post'], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.providers.post = {};
endpoint.providers.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for providers.post.post');
	}
	var url = parse(urlsData['post']['providers.post'], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.sendouts.post = {};
endpoint.sendouts.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for sendouts.post.post');
	}
	var url = parse(urlsData['post']['sendouts.post'], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.accounts.post = {};
endpoint.accounts.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for accounts.post.post');
	}
	var url = parse(urlsData['post']['accounts.post'], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.orders.post = {};
endpoint.orders.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for orders.post.post');
	}
	var url = parse(urlsData['post']['orders.post'], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.orders.pools.post = {};
endpoint.orders.pools.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for orders.pools.post.post');
	}
	var url = parse(urlsData['post']['orders.pools.post'], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.orders.testsResults.post = {};
endpoint.orders.testsResults.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for orders.testsResults.post.post');
	}
	var url = parse(urlsData['post']['orders.testsResults.post'], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.reports = {};
endpoint.reports.post = {};
endpoint.reports.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for reports.post.post');
	}
	var url = parse(urlsData['post']['reports.post'], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.print_jobs = {};
endpoint.print_jobs.post = {};
endpoint.print_jobs.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for print_jobs.post.post');
	}
	var url = parse(urlsData['post']['print_jobs.post'], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.orders.delete = {};
endpoint.orders.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['orders.delete'], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] DELETE from: ' + url);
	var params = typeof(arguments[arguments.length-1])=='object' ? {params: arguments[arguments.length-1]} : {};
	return endpoint.delete(url,params);
};

