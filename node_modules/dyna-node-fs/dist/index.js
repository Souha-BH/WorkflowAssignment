(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fs"), require("path"));
	else if(typeof define === 'function' && define.amd)
		define("dyna-node-fs", ["fs", "path"], factory);
	else if(typeof exports === 'object')
		exports["dyna-node-fs"] = factory(require("fs"), require("path"));
	else
		root["dyna-node-fs"] = factory(root["fs"], root["path"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __webpack_require__(1);
var path = __webpack_require__(2);
exports.test = function () {
    return 'test';
};
exports.loadJSON = function (filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, function (error, data) {
            if (error) {
                reject({
                    code: 1909272047,
                    section: 'dyna-node-fs/loadJSON',
                    message: "Cannot load the json file: [" + filename + "]",
                    data: { error: error },
                });
            }
            else {
                resolve(JSON.parse(data.toString()));
            }
        });
    });
};
exports.saveJSON = function (filename, data, humanReadable) {
    if (humanReadable === void 0) { humanReadable = false; }
    return new Promise(function (resolve, reject) {
        exports.mkdir(exports.getPath(filename))
            .then(function () {
            fs.writeFile(filename, JSON.stringify(data, null, humanReadable ? 2 : 0), function (error) {
                if (error) {
                    reject({
                        code: 1909272048,
                        section: 'dyna-node-fs/saveJSON',
                        message: "Cannot save the json file: [" + filename + "]",
                        data: { error: error },
                    });
                }
                else {
                    resolve();
                }
            });
        })
            .catch(function (error) {
            reject({
                code: 1909272049,
                section: 'dyna-node-fs/saveJSON',
                message: "Cannot create path for file: [" + filename + "]",
                data: { error: error },
            });
        });
    });
};
exports.exists = function (filename) {
    return new Promise(function (resolve) {
        fs.exists(filename, function (exists) {
            resolve(exists);
        });
    });
};
var _deleteFile = function (filename) {
    return new Promise(function (resolve, reject) {
        fs.unlink(filename, function (error) {
            if (error) {
                reject({
                    code: 1909272050,
                    section: 'dyna-node-fs/_deleteFile(internal)',
                    message: "Cannot delete file: [" + filename + "]",
                    data: { error: error },
                });
            }
            else {
                resolve();
            }
        });
    });
};
exports.deleteFile = function (filename) { return __awaiter(_this, void 0, void 0, function () {
    var fileExists;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.exists(filename)];
            case 1:
                fileExists = _a.sent();
                if (!fileExists)
                    return [2 /*return*/, Promise.resolve(false)];
                return [4 /*yield*/, _deleteFile(filename)];
            case 2:
                _a.sent();
                return [2 /*return*/, Promise.resolve(true)];
        }
    });
}); };
exports.mkdir = function (directory) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            try {
                var sep = '/'; //path.sep;
                var initDir = path.isAbsolute(directory) ? sep : '';
                directory.split(sep).reduce(function (parentDir, childDir) {
                    var curDir = path.resolve(parentDir, childDir);
                    if (!fs.existsSync(curDir))
                        fs.mkdirSync(curDir);
                    return curDir;
                }, initDir);
                resolve();
            }
            catch (error) {
                reject({
                    code: 1909282052,
                    section: 'dyna-node-fs/mkdir',
                    message: "Cannot create directory: [" + directory + "]",
                    data: { error: error },
                });
            }
        }, 0);
    });
};
exports.rmdir = function (directory) {
    return exports.exists(directory)
        .then(function (exists) {
        if (!exists)
            return Promise.resolve();
        return _rmdir(directory);
    });
};
var _rmdir = function (directory) {
    // based in: https://stackoverflow.com/questions/31917891/node-how-to-remove-a-directory-if-exists
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            try {
                var removeADir_1 = function (directory) {
                    var list = fs.readdirSync(directory);
                    for (var i = 0; i < list.length; i++) {
                        var filename = path.join(directory, list[i]);
                        var stat = fs.statSync(filename);
                        if (filename == "." || filename == "..") {
                            // pass these files
                        }
                        else if (stat.isDirectory()) {
                            // rmdir recursively
                            removeADir_1(filename);
                        }
                        else {
                            // rm filename
                            fs.unlinkSync(filename);
                        }
                    }
                    fs.rmdirSync(directory);
                };
                removeADir_1(directory);
                resolve();
            }
            catch (error) {
                reject({
                    code: 1909272051,
                    section: 'dyna-node-fs/rmdir',
                    message: "Cannot delete the directory: [" + directory + "]",
                    data: { error: error },
                });
            }
        }, 0);
    });
};
exports.isFolderEmpty = function (directory) {
    return new Promise(function (resolve, reject) {
        fs.readdir(directory, function (err, files) {
            if (err) {
                reject(err);
            }
            else {
                resolve(!files.length);
            }
        });
    });
};
exports.getPath = function (fullpath) {
    var parts = fullpath.replace(/\\/g, '/').split('/');
    parts.pop();
    return parts.join('/');
};
exports.getFilename = function (fullpath) {
    var parts = fullpath.replace(/\\/g, '/').split('/');
    return parts.reverse()[0];
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
});