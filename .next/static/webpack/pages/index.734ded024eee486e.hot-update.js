"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/UI/Header.js":
/*!*************************************!*\
  !*** ./src/components/UI/Header.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive */ \"./node_modules/react-responsive/dist/react-responsive.js\");\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_media_ezdev_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../public/media/ezdev-logo.png */ \"./public/media/ezdev-logo.png\");\n/* harmony import */ var _css_Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../css/Header.module.css */ \"./src/css/Header.module.css\");\n/* harmony import */ var _css_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);\n// import { NavLink, useLocation } from \"react-router-dom\";\n\nvar _s = $RefreshSig$();\n\n\n\nconst Header = ()=>{\n    _s();\n    const isMobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)({\n        query: `(max-width: 760px)`\n    });\n    // const location = useLocation();\n    const linkClasses = `${(_css_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().link)} f6 f5-l link bg-animate black-80 dib pa3 ph4-l`;\n    let navContent;\n    const defaultNavContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bt bb tc  center mt4 bg-white \" + (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                className: linkClasses,\n                to: \"/\",\n                children: \"About\"\n            }, void 0, false, {\n                fileName: \"/Users/anthonykruger/Documents/Work/Projects/local_sites/Webserver/Portfolio/src/components/UI/Header.js\",\n                lineNumber: 16,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                className: linkClasses,\n                to: \"/portfolio\",\n                children: \"Portfolio\"\n            }, void 0, false, {\n                fileName: \"/Users/anthonykruger/Documents/Work/Projects/local_sites/Webserver/Portfolio/src/components/UI/Header.js\",\n                lineNumber: 19,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                className: linkClasses,\n                to: \"/contact-me\",\n                children: \"Contact\"\n            }, void 0, false, {\n                fileName: \"/Users/anthonykruger/Documents/Work/Projects/local_sites/Webserver/Portfolio/src/components/UI/Header.js\",\n                lineNumber: 22,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anthonykruger/Documents/Work/Projects/local_sites/Webserver/Portfolio/src/components/UI/Header.js\",\n        lineNumber: 15,\n        columnNumber: 3\n    }, undefined);\n    const aboutNavContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bt bb tc center mt4 bg-white \" + (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                className: linkClasses,\n                to: \"/\",\n                children: \"About\"\n            }, void 0, false, {\n                fileName: \"/Users/anthonykruger/Documents/Work/Projects/local_sites/Webserver/Portfolio/src/components/UI/Header.js\",\n                lineNumber: 30,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                className: linkClasses,\n                to: \"/skills\",\n                children: \"Skills\"\n            }, void 0, false, {\n                fileName: \"/Users/anthonykruger/Documents/Work/Projects/local_sites/Webserver/Portfolio/src/components/UI/Header.js\",\n                lineNumber: 33,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                className: linkClasses,\n                to: \"/languages\",\n                children: \"Languages\"\n            }, void 0, false, {\n                fileName: \"/Users/anthonykruger/Documents/Work/Projects/local_sites/Webserver/Portfolio/src/components/UI/Header.js\",\n                lineNumber: 36,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                className: linkClasses,\n                to: \"/qualifications\",\n                children: \"Qualifications\"\n            }, void 0, false, {\n                fileName: \"/Users/anthonykruger/Documents/Work/Projects/local_sites/Webserver/Portfolio/src/components/UI/Header.js\",\n                lineNumber: 39,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                className: linkClasses,\n                to: \"/work-experience\",\n                children: \"Work Experience\"\n            }, void 0, false, {\n                fileName: \"/Users/anthonykruger/Documents/Work/Projects/local_sites/Webserver/Portfolio/src/components/UI/Header.js\",\n                lineNumber: 42,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                className: linkClasses,\n                to: \"/portfolio\",\n                children: \"Portfolio\"\n            }, void 0, false, {\n                fileName: \"/Users/anthonykruger/Documents/Work/Projects/local_sites/Webserver/Portfolio/src/components/UI/Header.js\",\n                lineNumber: 45,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                className: linkClasses,\n                to: \"/contact-me\",\n                children: \"Contact\"\n            }, void 0, false, {\n                fileName: \"/Users/anthonykruger/Documents/Work/Projects/local_sites/Webserver/Portfolio/src/components/UI/Header.js\",\n                lineNumber: 48,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anthonykruger/Documents/Work/Projects/local_sites/Webserver/Portfolio/src/components/UI/Header.js\",\n        lineNumber: 29,\n        columnNumber: 3\n    }, undefined);\n    switch(location.pathname){\n        case \"/\":\n        case \"/skills\":\n        case \"/languages\":\n        case \"/qualifications\":\n        case \"/work-experience\":\n            navContent = aboutNavContent;\n            break;\n        default:\n            navContent = defaultNavContent;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                to: \"/\",\n                className: (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: _public_media_ezdev_logo_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                    alt: \"ez-dev logo\",\n                    height: 100,\n                    layout: \"filled\"\n                }, void 0, false, {\n                    fileName: \"/Users/anthonykruger/Documents/Work/Projects/local_sites/Webserver/Portfolio/src/components/UI/Header.js\",\n                    lineNumber: 70,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/anthonykruger/Documents/Work/Projects/local_sites/Webserver/Portfolio/src/components/UI/Header.js\",\n                lineNumber: 69,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"bg-white black-80 tc pv1 avenir \" + (_css_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: `${(_css_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().name)} +  mt2 mb0 fw1 f1`,\n                        children: \"Anthony Gordon Kruger\"\n                    }, void 0, false, {\n                        fileName: \"/Users/anthonykruger/Documents/Work/Projects/local_sites/Webserver/Portfolio/src/components/UI/Header.js\",\n                        lineNumber: 73,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: `${(_css_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().title)} + mt2 mb0 f6 fw4 ttu tracked`,\n                        children: \"Software developer and tech enthusiast\"\n                    }, void 0, false, {\n                        fileName: \"/Users/anthonykruger/Documents/Work/Projects/local_sites/Webserver/Portfolio/src/components/UI/Header.js\",\n                        lineNumber: 76,\n                        columnNumber: 5\n                    }, undefined),\n                    isMobile ? defaultNavContent : navContent\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anthonykruger/Documents/Work/Projects/local_sites/Webserver/Portfolio/src/components/UI/Header.js\",\n                lineNumber: 72,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Header, \"7khsyUHgctuHIPa2/KlDS6LcnT0=\", false, function() {\n    return [\n        react_responsive__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VSS9IZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwyREFBMkQ7OztBQUVWO0FBQ1M7QUFDTjtBQUVwRCxNQUFNRyxTQUFTLElBQU07O0lBRXBCLE1BQU1DLFdBQVdKLCtEQUFhQSxDQUFDO1FBQUVLLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztJQUFDO0lBQzdELGtDQUFrQztJQUNsQyxNQUFNQyxjQUFjLENBQUMsRUFBRUosb0VBQVksQ0FBQywrQ0FBK0MsQ0FBQztJQUNwRixJQUFJTTtJQUVKLE1BQU1DLGtDQUNMLDhEQUFDQztRQUFJQyxXQUFXLG1DQUFtQ1QsbUVBQVc7OzBCQUM3RCw4REFBQ1U7Z0JBQVFELFdBQVdMO2dCQUFhTyxJQUFHOzBCQUFJOzs7Ozs7MEJBR3hDLDhEQUFDRDtnQkFBUUQsV0FBV0w7Z0JBQWFPLElBQUc7MEJBQWE7Ozs7OzswQkFHakQsOERBQUNEO2dCQUFRRCxXQUFXTDtnQkFBYU8sSUFBRzswQkFBYzs7Ozs7Ozs7Ozs7O0lBTXBELE1BQU1DLGdDQUNMLDhEQUFDSjtRQUFJQyxXQUFXLGtDQUFrQ1QsbUVBQVc7OzBCQUM1RCw4REFBQ1U7Z0JBQVFELFdBQVdMO2dCQUFhTyxJQUFHOzBCQUFJOzs7Ozs7MEJBR3hDLDhEQUFDRDtnQkFBUUQsV0FBV0w7Z0JBQWFPLElBQUc7MEJBQVU7Ozs7OzswQkFHOUMsOERBQUNEO2dCQUFRRCxXQUFXTDtnQkFBYU8sSUFBRzswQkFBYTs7Ozs7OzBCQUdqRCw4REFBQ0Q7Z0JBQVFELFdBQVdMO2dCQUFhTyxJQUFHOzBCQUFrQjs7Ozs7OzBCQUd0RCw4REFBQ0Q7Z0JBQVFELFdBQVdMO2dCQUFhTyxJQUFHOzBCQUFtQjs7Ozs7OzBCQUd2RCw4REFBQ0Q7Z0JBQVFELFdBQVdMO2dCQUFhTyxJQUFHOzBCQUFhOzs7Ozs7MEJBR2pELDhEQUFDRDtnQkFBUUQsV0FBV0w7Z0JBQWFPLElBQUc7MEJBQWM7Ozs7Ozs7Ozs7OztJQU1wRCxPQUFRRSxTQUFTQyxRQUFRO1FBQ3hCLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1lBQ0pSLGFBQWFNO1lBQ2IsS0FBTTtRQUVQO1lBQ0NOLGFBQWFDO0lBQ2Y7SUFFQSxxQkFDQzs7MEJBQ0MsOERBQUNHO2dCQUFRQyxJQUFHO2dCQUFJRixXQUFXVCxxRUFBYTswQkFDdkMsNEVBQUNnQjtvQkFBSUMsS0FBS2xCLG9FQUFJQTtvQkFBRW1CLEtBQUk7b0JBQWNDLFFBQVE7b0JBQUtDLFFBQU87Ozs7Ozs7Ozs7OzBCQUV2RCw4REFBQ0M7Z0JBQU9aLFdBQVcscUNBQXFDVCxzRUFBYzs7a0NBQ3JFLDhEQUFDc0I7d0JBQUdiLFdBQVcsQ0FBQyxFQUFFVCxvRUFBWSxDQUFDLGtCQUFrQixDQUFDO2tDQUFFOzs7Ozs7a0NBR3BELDhEQUFDd0I7d0JBQUdmLFdBQVcsQ0FBQyxFQUFFVCxxRUFBYSxDQUFDLDZCQUE2QixDQUFDO2tDQUFFOzs7Ozs7b0JBRy9ERSxXQUFVSyxvQkFBbUJELFVBQVU7Ozs7Ozs7OztBQUk1QztHQTVFTUw7O1FBRVlILDJEQUFhQTs7O0tBRnpCRztBQThFTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9VSS9IZWFkZXIuanM/M2E3YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBOYXZMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZVwiO1xuaW1wb3J0IGxvZ28gZnJvbSBcIi4vLi4vLi4vLi4vcHVibGljL21lZGlhL2V6ZGV2LWxvZ28ucG5nXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi8uLi8uLi9jc3MvSGVhZGVyLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuXHRcblx0Y29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHsgcXVlcnk6IGAobWF4LXdpZHRoOiA3NjBweClgIH0pO1xuXHQvLyBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG5cdGNvbnN0IGxpbmtDbGFzc2VzID0gYCR7Y2xhc3Nlcy5saW5rfSBmNiBmNS1sIGxpbmsgYmctYW5pbWF0ZSBibGFjay04MCBkaWIgcGEzIHBoNC1sYDtcblx0bGV0IG5hdkNvbnRlbnQ7XG5cblx0Y29uc3QgZGVmYXVsdE5hdkNvbnRlbnQgPSAoXG5cdFx0PG5hdiBjbGFzc05hbWU9e1wiYnQgYmIgdGMgIGNlbnRlciBtdDQgYmctd2hpdGUgXCIgKyBjbGFzc2VzLm5hdn0+XG5cdFx0XHQ8TmF2TGluayBjbGFzc05hbWU9e2xpbmtDbGFzc2VzfSB0bz1cIi9cIj5cblx0XHRcdFx0QWJvdXRcblx0XHRcdDwvTmF2TGluaz5cblx0XHRcdDxOYXZMaW5rIGNsYXNzTmFtZT17bGlua0NsYXNzZXN9IHRvPVwiL3BvcnRmb2xpb1wiPlxuXHRcdFx0XHRQb3J0Zm9saW9cblx0XHRcdDwvTmF2TGluaz5cblx0XHRcdDxOYXZMaW5rIGNsYXNzTmFtZT17bGlua0NsYXNzZXN9IHRvPVwiL2NvbnRhY3QtbWVcIj5cblx0XHRcdFx0Q29udGFjdFxuXHRcdFx0PC9OYXZMaW5rPlxuXHRcdDwvbmF2PlxuXHQpO1xuXG5cdGNvbnN0IGFib3V0TmF2Q29udGVudCA9IChcblx0XHQ8bmF2IGNsYXNzTmFtZT17XCJidCBiYiB0YyBjZW50ZXIgbXQ0IGJnLXdoaXRlIFwiICsgY2xhc3Nlcy5uYXZ9PlxuXHRcdFx0PE5hdkxpbmsgY2xhc3NOYW1lPXtsaW5rQ2xhc3Nlc30gdG89XCIvXCI+XG5cdFx0XHRcdEFib3V0XG5cdFx0XHQ8L05hdkxpbms+XG5cdFx0XHQ8TmF2TGluayBjbGFzc05hbWU9e2xpbmtDbGFzc2VzfSB0bz1cIi9za2lsbHNcIj5cblx0XHRcdFx0U2tpbGxzXG5cdFx0XHQ8L05hdkxpbms+XG5cdFx0XHQ8TmF2TGluayBjbGFzc05hbWU9e2xpbmtDbGFzc2VzfSB0bz1cIi9sYW5ndWFnZXNcIj5cblx0XHRcdFx0TGFuZ3VhZ2VzXG5cdFx0XHQ8L05hdkxpbms+XG5cdFx0XHQ8TmF2TGluayBjbGFzc05hbWU9e2xpbmtDbGFzc2VzfSB0bz1cIi9xdWFsaWZpY2F0aW9uc1wiPlxuXHRcdFx0XHRRdWFsaWZpY2F0aW9uc1xuXHRcdFx0PC9OYXZMaW5rPlxuXHRcdFx0PE5hdkxpbmsgY2xhc3NOYW1lPXtsaW5rQ2xhc3Nlc30gdG89XCIvd29yay1leHBlcmllbmNlXCI+XG5cdFx0XHRcdFdvcmsgRXhwZXJpZW5jZVxuXHRcdFx0PC9OYXZMaW5rPlxuXHRcdFx0PE5hdkxpbmsgY2xhc3NOYW1lPXtsaW5rQ2xhc3Nlc30gdG89XCIvcG9ydGZvbGlvXCI+XG5cdFx0XHRcdFBvcnRmb2xpb1xuXHRcdFx0PC9OYXZMaW5rPlxuXHRcdFx0PE5hdkxpbmsgY2xhc3NOYW1lPXtsaW5rQ2xhc3Nlc30gdG89XCIvY29udGFjdC1tZVwiPlxuXHRcdFx0XHRDb250YWN0XG5cdFx0XHQ8L05hdkxpbms+XG5cdFx0PC9uYXY+XG5cdCk7XG5cblx0c3dpdGNoIChsb2NhdGlvbi5wYXRobmFtZSkge1xuXHRcdGNhc2UgXCIvXCI6XG5cdFx0Y2FzZSBcIi9za2lsbHNcIjpcblx0XHRjYXNlIFwiL2xhbmd1YWdlc1wiOlxuXHRcdGNhc2UgXCIvcXVhbGlmaWNhdGlvbnNcIjpcblx0XHRjYXNlIFwiL3dvcmstZXhwZXJpZW5jZVwiOlxuXHRcdFx0bmF2Q29udGVudCA9IGFib3V0TmF2Q29udGVudDtcblx0XHRcdGJyZWFrO1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdG5hdkNvbnRlbnQgPSBkZWZhdWx0TmF2Q29udGVudDtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxOYXZMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XG5cdFx0XHRcdDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJlei1kZXYgbG9nb1wiIGhlaWdodD17MTAwfSBsYXlvdXQ9XCJmaWxsZWRcIiAvPlxuXHRcdFx0PC9OYXZMaW5rPlxuXHRcdFx0PGhlYWRlciBjbGFzc05hbWU9e1wiYmctd2hpdGUgYmxhY2stODAgdGMgcHYxIGF2ZW5pciBcIiArIGNsYXNzZXMuaGVhZGVyfT5cblx0XHRcdFx0PGgxIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5uYW1lfSArICBtdDIgbWIwIGZ3MSBmMWB9PlxuXHRcdFx0XHRcdEFudGhvbnkgR29yZG9uIEtydWdlclxuXHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLnRpdGxlfSArIG10MiBtYjAgZjYgZnc0IHR0dSB0cmFja2VkYH0+XG5cdFx0XHRcdFx0U29mdHdhcmUgZGV2ZWxvcGVyIGFuZCB0ZWNoIGVudGh1c2lhc3Rcblx0XHRcdFx0PC9oMj5cblx0XHRcdFx0e2lzTW9iaWxlPyBkZWZhdWx0TmF2Q29udGVudDogbmF2Q29udGVudH1cblx0XHRcdDwvaGVhZGVyPlxuXHRcdDwvPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbInVzZU1lZGlhUXVlcnkiLCJsb2dvIiwiY2xhc3NlcyIsIkhlYWRlciIsImlzTW9iaWxlIiwicXVlcnkiLCJsaW5rQ2xhc3NlcyIsImxpbmsiLCJuYXZDb250ZW50IiwiZGVmYXVsdE5hdkNvbnRlbnQiLCJuYXYiLCJjbGFzc05hbWUiLCJOYXZMaW5rIiwidG8iLCJhYm91dE5hdkNvbnRlbnQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiaW1hZ2UiLCJpbWciLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJsYXlvdXQiLCJoZWFkZXIiLCJoMSIsIm5hbWUiLCJoMiIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/UI/Header.js\n"));

/***/ })

});