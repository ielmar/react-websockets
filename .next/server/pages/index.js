"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst apiCall = {\n    op: \"subscribe\",\n    args: [\n        \"orderBookL2_25:XBTUSD\"\n    ]\n};\nfunction Home() {\n    const { 0: bid , 1: setBid  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const { 0: pair , 1: setPair  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const ws = new WebSocket(\"wss://ws.bitmex.com/realtime\");\n        ws.onopen = (event)=>{\n            ws.send(JSON.stringify(apiCall));\n        };\n        ws.onmessage = function(event) {\n            const json = JSON.parse(event.data);\n            try {\n                if (json.action === \"insert\") {\n                    setBid(json.data[0].price);\n                    setPair(json.data[0].symbol);\n                }\n            } catch (err) {\n                console.log(err);\n            }\n        };\n        return ()=>ws.close();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Realtime cryptocurrency prices\"\n                }, void 0, false, {\n                    fileName: \"/Users/ielmar/Development/sites/react-websockets/pages/index.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ielmar/Development/sites/react-websockets/pages/index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            pair !== \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \"Welcome to \",\n                            pair,\n                            \" realtime price page\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ielmar/Development/sites/react-websockets/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            pair,\n                            \" price is \",\n                            bid\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ielmar/Development/sites/react-websockets/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ielmar/Development/sites/react-websockets/pages/index.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBNEI7QUFDZ0I7QUFFNUMsTUFBTUcsT0FBTyxHQUFHO0lBQ2RDLEVBQUUsRUFBRSxXQUFXO0lBQ2ZDLElBQUksRUFBRTtRQUFDLHVCQUF1QjtLQUFDO0NBQ2hDO0FBRWMsU0FBU0MsSUFBSSxHQUFHO0lBQzNCLE1BQU0sS0FBQ0MsR0FBRyxNQUFFQyxNQUFNLE1BQUlOLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLE1BQU0sS0FBQ08sSUFBSSxNQUFFQyxPQUFPLE1BQUlSLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBRXBDRCxnREFBUyxDQUFDLElBQU07UUFDZCxNQUFNVSxFQUFFLEdBQUcsSUFBSUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDO1FBRXhERCxFQUFFLENBQUNFLE1BQU0sR0FBRyxDQUFDQyxLQUFLLEdBQUs7WUFDckJILEVBQUUsQ0FBQ0ksSUFBSSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ2QsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUM7UUFDRlEsRUFBRSxDQUFDTyxTQUFTLEdBQUcsU0FBVUosS0FBSyxFQUFFO1lBQzlCLE1BQU1LLElBQUksR0FBR0gsSUFBSSxDQUFDSSxLQUFLLENBQUNOLEtBQUssQ0FBQ08sSUFBSSxDQUFDO1lBRW5DLElBQUk7Z0JBQ0YsSUFBSUYsSUFBSSxDQUFDRyxNQUFNLEtBQUssUUFBUSxFQUFFO29CQUM1QmQsTUFBTSxDQUFDVyxJQUFJLENBQUNFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsS0FBSyxDQUFDLENBQUM7b0JBQzNCYixPQUFPLENBQUNTLElBQUksQ0FBQ0UsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDRyxNQUFNLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztZQUNILEVBQUUsT0FBT0MsR0FBRyxFQUFFO2dCQUNaQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDLENBQUM7WUFDbkIsQ0FBQztRQUNILENBQUMsQ0FBQztRQUVGLE9BQU8sSUFBTWQsRUFBRSxDQUFDaUIsS0FBSyxFQUFFLENBQUM7SUFDMUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVQscUJBQ0UsOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDN0Isa0RBQUk7MEJBQ0gsNEVBQUM4QixPQUFLOzhCQUFDLGdDQUE4Qjs7Ozs7d0JBQVE7Ozs7O29CQUN4QztZQUNOckIsSUFBSSxLQUFLLEVBQUUsa0JBQ1Y7O2tDQUNFLDhEQUFDc0IsSUFBRTs7NEJBQUMsYUFBVzs0QkFBQ3RCLElBQUk7NEJBQUMsc0JBQW9COzs7Ozs7NEJBQUs7a0NBQzlDLDhEQUFDdUIsSUFBRTs7NEJBQ0F2QixJQUFJOzRCQUFDLFlBQVU7NEJBQUNGLEdBQUc7Ozs7Ozs0QkFDakI7OzRCQUNKOzs7Ozs7WUFFRCxDQUNQO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGFwaUNhbGwgPSB7XG4gIG9wOiBcInN1YnNjcmliZVwiLFxuICBhcmdzOiBbXCJvcmRlckJvb2tMMl8yNTpYQlRVU0RcIl1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW2JpZCwgc2V0QmlkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtwYWlyLCBzZXRQYWlyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3Qgd3MgPSBuZXcgV2ViU29ja2V0KFwid3NzOi8vd3MuYml0bWV4LmNvbS9yZWFsdGltZVwiKTtcbiAgXG4gICAgICB3cy5vbm9wZW4gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeShhcGlDYWxsKSk7XG4gICAgICB9O1xuICAgICAgd3Mub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoanNvbi5hY3Rpb24gPT09IFwiaW5zZXJ0XCIpIHtcbiAgICAgICAgICAgIHNldEJpZChqc29uLmRhdGFbMF0ucHJpY2UpO1xuICAgICAgICAgICAgc2V0UGFpcihqc29uLmRhdGFbMF0uc3ltYm9sKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gIFxuICAgICAgcmV0dXJuICgpID0+IHdzLmNsb3NlKCk7XG4gICAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UmVhbHRpbWUgY3J5cHRvY3VycmVuY3kgcHJpY2VzPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHtwYWlyICE9PSBcIlwiICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8aDE+V2VsY29tZSB0byB7cGFpcn0gcmVhbHRpbWUgcHJpY2UgcGFnZTwvaDE+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAge3BhaXJ9IHByaWNlIGlzIHtiaWR9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImFwaUNhbGwiLCJvcCIsImFyZ3MiLCJIb21lIiwiYmlkIiwic2V0QmlkIiwicGFpciIsInNldFBhaXIiLCJ3cyIsIldlYlNvY2tldCIsIm9ub3BlbiIsImV2ZW50Iiwic2VuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJvbm1lc3NhZ2UiLCJqc29uIiwicGFyc2UiLCJkYXRhIiwiYWN0aW9uIiwicHJpY2UiLCJzeW1ib2wiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiY2xvc2UiLCJkaXYiLCJ0aXRsZSIsImgxIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();