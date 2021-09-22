////////////////////////////////////////////////////////////////////////////
//                                                                        //
//        This file is generated with dendi/gen/gen-dendi-helpers.js      //
//                                                                        //
//                   Public API - Account functions                       //
//                                                                        //
////////////////////////////////////////////////////////////////////////////


var urlsData = {
	"get": {
		"patients.getByUuid": {
			"1": "/patients/?uuid=:patientUuid"
		},
		"patients.getAll": {
			"0": "/patients/"
		},
		"patient_payers.get": {
			"0": "/patient_payers/"
		},
		"patient_payers.getByOrderCode": {
			"1": "/orders/order_patient_payers/?code=:code"
		},
		"patient_guarantors.getByOrderCode": {
			"1": "/orders/order_patient_guarantors/?code=:code"
		},
		"providers.get": {
			"1": "/providers/?npi=:providerNpi"
		},
		"samples.getAll": {
			"0": "/samples/"
		},
		"samples.types.getAll": {
			"0": "/sample_types/"
		},
		"samples.tests.getAll": {
			"0": "/sample_tests/"
		},
		"referenceLabs.getAll": {
			"0": "/reference_labs/"
		},
		"sendouts.getAll": {
			"0": "/sendouts/"
		},
		"diagnosisCodes.getAll": {
			"0": "/autocomplete/diagnosis_code/"
		},
		"diagnosisCodes.get": {
			"1": "/autocomplete/diagnosis_code/?q=:query"
		},
		"inHouseLabLocations.getAll": {
			"0": "/in_house_lab_locations/"
		},
		"accounts.getAll": {
			"0": "/accounts/"
		},
		"collectors.getAll": {
			"0": "/collectors/"
		},
		"orders.getByUuid": {
			"1": "/orders/?uuid=:orderId"
		},
		"orders.getAll": {
			"0": "/orders/"
		},
		"orders.pools.getAll": {
			"0": "/orders/pools/"
		},
		"orders.reports.getAll": {
			"0": "/orders/reports/"
		},
		"orders.reports.getByOrderCode": {
			"1": "/orders/reports/?code=:orderCode"
		},
		"orders.testsResults.getByOrderUuid": {
			"1": "/orders/test_results/?uuid=:uuid"
		},
		"orders.testsResults.getByOrderCode": {
			"1": "/orders/test_results/?code=:code"
		},
		"testTypes.getAll": {
			"0": "/test_types/"
		},
		"testTypes.getByName": {
			"1": "/test_types/?name=:name"
		},
		"testPanelTypes.getAll": {
			"0": "/test_panel_types/"
		},
		"testPanelTypes.getByUuid": {
			"1": "/test_panel_type_uuid/?test_panel_type_uuid=:testPanelTypeUuid"
		},
		"printers.getAll": {
			"0": "/printers/"
		},
		"ehrIntegration.getAll": {
			"0": "/ehr_integrations/"
		},
		"ehrIntegration.getByUuid": {
			"1": "/ehr_integrations/?uuid=:uuid"
		}
	},
	"put": {
		"patients.put": {
			"1": "/patients/:patientUuid/"
		},
		"patient_payers.put": {
			"1": "/patient_payers/:patientPayerUuid/"
		},
		"providers.put": {
			"1": "/providers/:provider_uuid/"
		},
		"orders.testsResults.put": {
			"1": "/orders/test_results/:testUuid/"
		}
	},
	"post": {
		"patients.post": {
			"0": "/patients/"
		},
		"patients.bop": {
			"0": "/patients/"
		},
		"patient_payers.post": {
			"0": "/patient_payers/"
		},
		"providers.post": {
			"0": "/providers/"
		},
		"sendouts.post": {
			"0": "/sendouts/"
		},
		"accounts.post": {
			"0": "/accounts/"
		},
		"orders.post": {
			"0": "/orders/"
		},
		"orders.pools.post": {
			"0": "/orders/pools/"
		},
		"orders.testsResults.post": {
			"0": "/orders/test_results/"
		},
		"reports.post": {
			"0": "/reports/"
		},
		"print_jobs.post": {
			"3": "/print_jobs/?printer_id=:printeId&sample_uuid=:sampleUuid&num_copies=:numCopies/"
		}
	},
	"delete": {
		"orders.delete": {
			"1": "/orders/:orderCode/"
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

endpoint.patients = {};
endpoint.patients.getByUuid = {};
endpoint.patients.getByUuid = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['patients.getByUuid'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.patients.getAll = {};
endpoint.patients.getAll = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['patients.getAll'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.patient_payers = {};
endpoint.patient_payers.get = {};
endpoint.patient_payers.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['patient_payers.get'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.patient_payers.getByOrderCode = {};
endpoint.patient_payers.getByOrderCode = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['patient_payers.getByOrderCode'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.patient_guarantors = {};
endpoint.patient_guarantors.getByOrderCode = {};
endpoint.patient_guarantors.getByOrderCode = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['patient_guarantors.getByOrderCode'][size], Array.prototype.slice.call(arguments, 0, size));
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

endpoint.samples = {};
endpoint.samples.getAll = {};
endpoint.samples.getAll = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['samples.getAll'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.samples.types = {};
endpoint.samples.types.getAll = {};
endpoint.samples.types.getAll = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['samples.types.getAll'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.samples.tests = {};
endpoint.samples.tests.getAll = {};
endpoint.samples.tests.getAll = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['samples.tests.getAll'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.referenceLabs = {};
endpoint.referenceLabs.getAll = {};
endpoint.referenceLabs.getAll = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['referenceLabs.getAll'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.sendouts = {};
endpoint.sendouts.getAll = {};
endpoint.sendouts.getAll = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['sendouts.getAll'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.diagnosisCodes = {};
endpoint.diagnosisCodes.getAll = {};
endpoint.diagnosisCodes.getAll = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['diagnosisCodes.getAll'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.diagnosisCodes.get = {};
endpoint.diagnosisCodes.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['diagnosisCodes.get'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.inHouseLabLocations = {};
endpoint.inHouseLabLocations.getAll = {};
endpoint.inHouseLabLocations.getAll = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['inHouseLabLocations.getAll'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.accounts = {};
endpoint.accounts.getAll = {};
endpoint.accounts.getAll = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['accounts.getAll'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.collectors = {};
endpoint.collectors.getAll = {};
endpoint.collectors.getAll = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['collectors.getAll'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.orders = {};
endpoint.orders.getByUuid = {};
endpoint.orders.getByUuid = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['orders.getByUuid'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.orders.getAll = {};
endpoint.orders.getAll = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['orders.getAll'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.orders.pools = {};
endpoint.orders.pools.getAll = {};
endpoint.orders.pools.getAll = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['orders.pools.getAll'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.orders.reports = {};
endpoint.orders.reports.getAll = {};
endpoint.orders.reports.getAll = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['orders.reports.getAll'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.orders.reports.getByOrderCode = {};
endpoint.orders.reports.getByOrderCode = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['orders.reports.getByOrderCode'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	var pdfInfo = endpoint.get(url);
	return endpoint._getReportFile(pdfInfo);
};

endpoint.orders.testsResults = {};
endpoint.orders.testsResults.getByOrderUuid = {};
endpoint.orders.testsResults.getByOrderUuid = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['orders.testsResults.getByOrderUuid'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.orders.testsResults.getByOrderCode = {};
endpoint.orders.testsResults.getByOrderCode = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['orders.testsResults.getByOrderCode'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.testTypes = {};
endpoint.testTypes.getAll = {};
endpoint.testTypes.getAll = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['testTypes.getAll'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.testTypes.getByName = {};
endpoint.testTypes.getByName = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['testTypes.getByName'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.testPanelTypes = {};
endpoint.testPanelTypes.getAll = {};
endpoint.testPanelTypes.getAll = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['testPanelTypes.getAll'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.testPanelTypes.getByUuid = {};
endpoint.testPanelTypes.getByUuid = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['testPanelTypes.getByUuid'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.printers = {};
endpoint.printers.getAll = {};
endpoint.printers.getAll = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['printers.getAll'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.ehrIntegration = {};
endpoint.ehrIntegration.getAll = {};
endpoint.ehrIntegration.getAll = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['ehrIntegration.getAll'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.ehrIntegration.getByUuid = {};
endpoint.ehrIntegration.getByUuid = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['ehrIntegration.getByUuid'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Dendi LIS] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.patients.put = {};
endpoint.patients.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for patients.put.put');
	}
	var url = parse(urlsData['put']['patients.put'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] PUT from: ' + url);
	return endpoint.put(url, arguments[arguments.length - 1]);
};

endpoint.patient_payers.put = {};
endpoint.patient_payers.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for patient_payers.put.put');
	}
	var url = parse(urlsData['put']['patient_payers.put'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] PUT from: ' + url);
	return endpoint.put(url, arguments[arguments.length - 1]);
};

endpoint.providers.put = {};
endpoint.providers.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for providers.put.put');
	}
	var url = parse(urlsData['put']['providers.put'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] PUT from: ' + url);
	return endpoint.put(url, arguments[arguments.length - 1]);
};

endpoint.orders.testsResults.put = {};
endpoint.orders.testsResults.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for orders.testsResults.put.put');
	}
	var url = parse(urlsData['put']['orders.testsResults.put'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] PUT from: ' + url);
	return endpoint.put(url, arguments[arguments.length - 1]);
};

endpoint.patients.post = {};
endpoint.patients.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for patients.post.post');
	}
	var url = parse(urlsData['post']['patients.post'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.patients.bop = {};
endpoint.patients.bop = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for patients.bop.post');
	}
	var url = parse(urlsData['post']['patients.bop'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.patient_payers.post = {};
endpoint.patient_payers.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for patient_payers.post.post');
	}
	var url = parse(urlsData['post']['patient_payers.post'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.providers.post = {};
endpoint.providers.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for providers.post.post');
	}
	var url = parse(urlsData['post']['providers.post'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.sendouts.post = {};
endpoint.sendouts.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for sendouts.post.post');
	}
	var url = parse(urlsData['post']['sendouts.post'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.accounts.post = {};
endpoint.accounts.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for accounts.post.post');
	}
	var url = parse(urlsData['post']['accounts.post'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.orders.post = {};
endpoint.orders.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for orders.post.post');
	}
	var url = parse(urlsData['post']['orders.post'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.orders.pools.post = {};
endpoint.orders.pools.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for orders.pools.post.post');
	}
	var url = parse(urlsData['post']['orders.pools.post'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Dendi LIS] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.orders.testsResults.post = {};
endpoint.orders.testsResults.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for orders.testsResults.post.post');
	}
	var url = parse(urlsData['post']['orders.testsResults.post'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
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
	var url = parse(urlsData['post']['reports.post'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
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
	var url = parse(urlsData['post']['print_jobs.post'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
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

