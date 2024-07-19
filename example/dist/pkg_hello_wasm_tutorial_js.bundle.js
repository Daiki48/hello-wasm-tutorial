"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkexample"] = self["webpackChunkexample"] || []).push([["pkg_hello_wasm_tutorial_js"],{

/***/ "../pkg/hello_wasm_tutorial.js":
/*!*************************************!*\
  !*** ../pkg/hello_wasm_tutorial.js ***!
  \*************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __wbg_alert_151ac05a92caf90d: () => (/* reexport safe */ _hello_wasm_tutorial_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_alert_151ac05a92caf90d),\n/* harmony export */   __wbg_set_wasm: () => (/* reexport safe */ _hello_wasm_tutorial_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm),\n/* harmony export */   greet: () => (/* reexport safe */ _hello_wasm_tutorial_bg_js__WEBPACK_IMPORTED_MODULE_0__.greet)\n/* harmony export */ });\n/* harmony import */ var _hello_wasm_tutorial_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hello_wasm_tutorial_bg.wasm */ \"../pkg/hello_wasm_tutorial_bg.wasm\");\n/* harmony import */ var _hello_wasm_tutorial_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello_wasm_tutorial_bg.js */ \"../pkg/hello_wasm_tutorial_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hello_wasm_tutorial_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\n_hello_wasm_tutorial_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n(0,_hello_wasm_tutorial_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm)(_hello_wasm_tutorial_bg_wasm__WEBPACK_IMPORTED_MODULE_1__);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://example/../pkg/hello_wasm_tutorial.js?");

/***/ }),

/***/ "../pkg/hello_wasm_tutorial_bg.js":
/*!****************************************!*\
  !*** ../pkg/hello_wasm_tutorial_bg.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __wbg_alert_151ac05a92caf90d: () => (/* binding */ __wbg_alert_151ac05a92caf90d),\n/* harmony export */   __wbg_set_wasm: () => (/* binding */ __wbg_set_wasm),\n/* harmony export */   greet: () => (/* binding */ greet)\n/* harmony export */ });\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length, 1) >>> 0;\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len, 1) >>> 0;\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n        ptr = realloc(ptr, len, offset, 1) >>> 0;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n/**\n* @param {string} name\n*/\nfunction greet(name) {\n    const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n    const len0 = WASM_VECTOR_LEN;\n    wasm.greet(ptr0, len0);\n}\n\nfunction __wbg_alert_151ac05a92caf90d(arg0, arg1) {\n    alert(getStringFromWasm0(arg0, arg1));\n};\n\n\n\n//# sourceURL=webpack://example/../pkg/hello_wasm_tutorial_bg.js?");

/***/ }),

/***/ "../pkg/hello_wasm_tutorial_bg.wasm":
/*!******************************************!*\
  !*** ../pkg/hello_wasm_tutorial_bg.wasm ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./hello_wasm_tutorial_bg.js */ \"../pkg/hello_wasm_tutorial_bg.js\");\nmodule.exports = __webpack_require__.v(exports, module.id, \"dd3b5a8f8c39048ce537\", {\n\t\"./hello_wasm_tutorial_bg.js\": {\n\t\t\"__wbg_alert_151ac05a92caf90d\": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_151ac05a92caf90d\n\t}\n});\n\n//# sourceURL=webpack://example/../pkg/hello_wasm_tutorial_bg.wasm?");

/***/ })

}]);