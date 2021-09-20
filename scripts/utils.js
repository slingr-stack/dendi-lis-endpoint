/**
 * These scripts are executed inside the app runtime, which means you have access to the
 * Javascript API and all the app data.
 *
 * Everything exposed under 'endpoint' will be available to the user through
 * 'app.endpoints.endpointName'.
 */


/////////////////////////////////////
// Public API - Generic Functions
///////////////////////////////////

endpoint.get = function (url, options) {
    var options = checkHttpOptions(url, options);
    return endpoint._get(options);
};

endpoint.put = function (url, options) {
    options = checkHttpOptions(url, options);
    return endpoint._put(options);
};

endpoint.post = function (url, options) {
    options = checkHttpOptions(url, options);
    sys.logs.debug("EN endpoint.post url es: "+url);
    sys.logs.debug("EN endpoint.post options es: "+JSON.stringify(options));
    return endpoint._post(options);
};

endpoint.delete = function (url, options) {
    options = checkHttpOptions(url, options);
    return endpoint._delete(options);
};
/////////////////////////////
//  Private helpers
/////////////////////////////

var checkHttpOptions = function (url, options) {
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (options && (!!options.path || !!options.params || !!options.body)) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options || {};
};

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
};

var stringType = Function.prototype.call.bind(Object.prototype.toString);