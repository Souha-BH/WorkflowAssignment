(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("dyna-interfaces", [], factory);
	else if(typeof exports === 'object')
		exports["dyna-interfaces"] = factory();
	else
		root["dyna-interfaces"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IResult_1 = __webpack_require__(2);
exports.EErrorType = IResult_1.EErrorType;
var network_1 = __webpack_require__(4);
exports.ERequestMethod = network_1.ERequestMethod;
var forms_1 = __webpack_require__(3);
exports.EFormMode = forms_1.EFormMode;
exports.EFormControlMode = forms_1.EFormControlMode;
var AppName_1 = __webpack_require__(1);
exports.AppName = AppName_1.AppName;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var AppName = /** @class */ (function () {
    function AppName(config) {
        var _a = config.projectName, projectName = _a === void 0 ? 'UnknownProject' : _a, _b = config.end, end = _b === void 0 ? 'BE' : _b, _c = config.machineName, machineName = _c === void 0 ? 'UnknownMachine' : _c, _d = config.mode, mode = _d === void 0 ? 'DEV' : _d, _e = config.version, version = _e === void 0 ? { major: 0, minor: 0, patch: 0 } : _e, _f = config.nameDelimiter, nameDelimiter = _f === void 0 ? '--' : _f;
        var newConfig = {
            projectName: projectName,
            machineName: machineName,
            end: end,
            mode: mode,
            version: version,
            nameDelimiter: nameDelimiter,
        };
        var validationError = this.validate(newConfig);
        if (validationError)
            throw {
                section: 'AppName/constructor',
                code: 202002229030,
                message: 'AppName: ' + validationError,
                data: {
                    givenConfig: config,
                    finalConfig: newConfig,
                },
            };
        this._config = newConfig;
    }
    AppName.prototype.setConfig = function (config) {
        var validationError = this.validate(config);
        if (validationError)
            throw {
                section: 'AppName/setConfig',
                code: 202002229031,
                message: 'AppName: ' + validationError,
                data: { config: config },
            };
        this._config = config;
    };
    AppName.prototype.updateConfig = function (partialConfig) {
        this.setConfig(__assign({}, this._config, partialConfig));
    };
    AppName.prototype.getConfig = function () {
        return this._config;
    };
    AppName.prototype.parse = function (appName) {
        var parts = appName.split(this._config.nameDelimiter);
        if (parts.length !== 4)
            throw {
                section: 'AppName/parse',
                code: 202002229034,
                message: 'AppName: ' + "Wrong number of parts, it should be 4.",
                data: {
                    appName: appName,
                },
            };
        var projectName = parts[0], mode = parts[1], end = parts[2], machineName = parts[3];
        var parsedConfig = {
            projectName: projectName,
            mode: mode,
            end: end,
            machineName: machineName,
            version: { major: 0, minor: 0, patch: 0 },
        };
        var validationError = this.validate(parsedConfig);
        if (validationError)
            throw {
                section: 'AppName/parse',
                code: 202002229034,
                message: 'AppName: ' + validationError,
                data: {
                    appName: appName,
                    parsedConfig: parsedConfig,
                },
            };
        this._config = parsedConfig;
    };
    Object.defineProperty(AppName.prototype, "name", {
        get: function () {
            var _a = this._config, projectName = _a.projectName, mode = _a.mode, end = _a.end, _b = _a.machineName, machineName = _b === void 0 ? '' : _b;
            return [
                projectName,
                mode,
                end,
                machineName,
            ].join(this._config.nameDelimiter);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppName.prototype, "tags", {
        get: function () {
            var _a = this._config, projectName = _a.projectName, mode = _a.mode, end = _a.end, _b = _a.machineName, machineName = _b === void 0 ? '' : _b;
            return [
                projectName,
                mode,
                end,
                machineName,
                "v" + this.version
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppName.prototype, "version", {
        get: function () {
            var _a = this._config.version, major = _a.major, minor = _a.minor, patch = _a.patch, _b = _a.flag, flag = _b === void 0 ? '' : _b;
            return [
                major,
                minor,
                patch,
            ]
                .join('.')
                + (flag ? '-' + flag : '');
        },
        enumerable: true,
        configurable: true
    });
    AppName.prototype.validate = function (config) {
        var delimiter = config.nameDelimiter;
        if (!config.projectName)
            return "projectName is required";
        if (!config.machineName)
            return "machineName is required";
        if (config.projectName.indexOf(delimiter) > -1)
            return "projectName should contain the '" + delimiter + "' char";
        if (config.machineName.indexOf(delimiter) > -1)
            return "machineName should contain the '" + delimiter + "' char";
        if (config.projectName.indexOf(' ') > -1)
            return "projectName should contain the space char";
        if (config.machineName.indexOf(' ') > -1)
            return "machineName should contain the space char";
        return "";
    };
    return AppName;
}());
exports.AppName = AppName;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EErrorType;
(function (EErrorType) {
    EErrorType["USER"] = "USER_ERROR";
    EErrorType["APP"] = "APP_ERROR";
    EErrorType["HW"] = "HW_ERROR";
})(EErrorType = exports.EErrorType || (exports.EErrorType = {}));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EFormMode;
(function (EFormMode) {
    EFormMode["CREATE"] = "CREATE";
    EFormMode["VIEW"] = "VIEW";
    EFormMode["EDIT"] = "EDIT";
    EFormMode["DELETE"] = "DELETE";
})(EFormMode = exports.EFormMode || (exports.EFormMode = {}));
var EFormControlMode;
(function (EFormControlMode) {
    EFormControlMode["VIEW"] = "VIEW";
    EFormControlMode["EDIT"] = "EDIT";
})(EFormControlMode = exports.EFormControlMode || (exports.EFormControlMode = {}));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ERequestMethod;
(function (ERequestMethod) {
    // help: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
    // http://www.restapitutorial.com/lessons/httpmethods.html
    ERequestMethod["GET"] = "GET";
    ERequestMethod["POST"] = "POST";
    ERequestMethod["PUT"] = "PUT";
    ERequestMethod["PATCH"] = "PATCH";
    ERequestMethod["DELETE"] = "DELETE";
})(ERequestMethod = exports.ERequestMethod || (exports.ERequestMethod = {}));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
});