"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/widgets/SkillsCard.tsx":
/*!***********************************************!*\
  !*** ./src/components/widgets/SkillsCard.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Card */ \"(app-pages-browser)/./src/components/ui/Card.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst skills = [\n    {\n        name: \"React\",\n        level: 90\n    },\n    {\n        name: \"TypeScript\",\n        level: 85\n    },\n    {\n        name: \"React\",\n        level: 90\n    },\n    {\n        name: \"TypeScript\",\n        level: 85\n    },\n    {\n        name: \"React\",\n        level: 90\n    },\n    {\n        name: \"TypeScript\",\n        level: 85\n    },\n    {\n        name: \"React\",\n        level: 90\n    },\n    {\n        name: \"TypeScript\",\n        level: 85\n    },\n    {\n        name: \"React\",\n        level: 90\n    },\n    {\n        name: \"TypeScript\",\n        level: 85\n    },\n    {\n        name: \"React\",\n        level: 90\n    },\n    {\n        name: \"TypeScript\",\n        level: 85\n    }\n];\nconst SkillsCard = (param)=>{\n    let { className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Навыки\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\79999\\\\Desktop\\\\Портфолио_REACT\\\\Портфолио_REACT_NEXT_TREE_GSAP_01_03\\\\react-portfolio\\\\src\\\\components\\\\widgets\\\\SkillsCard.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-3\",\n                children: skills.map((skill)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: skill.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\79999\\\\Desktop\\\\Портфолио_REACT\\\\Портфолио_REACT_NEXT_TREE_GSAP_01_03\\\\react-portfolio\\\\src\\\\components\\\\widgets\\\\SkillsCard.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            skill.level,\n                                            \"%\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\79999\\\\Desktop\\\\Портфолио_REACT\\\\Портфолио_REACT_NEXT_TREE_GSAP_01_03\\\\react-portfolio\\\\src\\\\components\\\\widgets\\\\SkillsCard.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\79999\\\\Desktop\\\\Портфолио_REACT\\\\Портфолио_REACT_NEXT_TREE_GSAP_01_03\\\\react-portfolio\\\\src\\\\components\\\\widgets\\\\SkillsCard.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                                className: \"h-2 bg-secondary/30 rounded-full overflow-hidden\",\n                                initial: {\n                                    width: 0\n                                },\n                                animate: {\n                                    width: \"\".concat(skill.level, \"%\")\n                                },\n                                transition: {\n                                    duration: 1,\n                                    ease: \"easeOut\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\79999\\\\Desktop\\\\Портфолио_REACT\\\\Портфолио_REACT_NEXT_TREE_GSAP_01_03\\\\react-portfolio\\\\src\\\\components\\\\widgets\\\\SkillsCard.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, skill.name, true, {\n                        fileName: \"C:\\\\Users\\\\79999\\\\Desktop\\\\Портфолио_REACT\\\\Портфолио_REACT_NEXT_TREE_GSAP_01_03\\\\react-portfolio\\\\src\\\\components\\\\widgets\\\\SkillsCard.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\79999\\\\Desktop\\\\Портфолио_REACT\\\\Портфолио_REACT_NEXT_TREE_GSAP_01_03\\\\react-portfolio\\\\src\\\\components\\\\widgets\\\\SkillsCard.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\79999\\\\Desktop\\\\Портфолио_REACT\\\\Портфолио_REACT_NEXT_TREE_GSAP_01_03\\\\react-portfolio\\\\src\\\\components\\\\widgets\\\\SkillsCard.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_c = SkillsCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SkillsCard);\nvar _c;\n$RefreshReg$(_c, \"SkillsCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvU2tpbGxzQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFdUM7QUFDVDtBQU85QixNQUFNRSxTQUFrQjtJQUN0QjtRQUFFQyxNQUFNO1FBQVNDLE9BQU87SUFBRztJQUMzQjtRQUFFRCxNQUFNO1FBQWNDLE9BQU87SUFBRztJQUNoQztRQUFFRCxNQUFNO1FBQVNDLE9BQU87SUFBRztJQUMzQjtRQUFFRCxNQUFNO1FBQWNDLE9BQU87SUFBRztJQUNoQztRQUFFRCxNQUFNO1FBQVNDLE9BQU87SUFBRztJQUMzQjtRQUFFRCxNQUFNO1FBQWNDLE9BQU87SUFBRztJQUNoQztRQUFFRCxNQUFNO1FBQVNDLE9BQU87SUFBRztJQUMzQjtRQUFFRCxNQUFNO1FBQWNDLE9BQU87SUFBRztJQUNoQztRQUFFRCxNQUFNO1FBQVNDLE9BQU87SUFBRztJQUMzQjtRQUFFRCxNQUFNO1FBQWNDLE9BQU87SUFBRztJQUNoQztRQUFFRCxNQUFNO1FBQVNDLE9BQU87SUFBRztJQUMzQjtRQUFFRCxNQUFNO1FBQWNDLE9BQU87SUFBRztDQUdqQztBQUVELE1BQU1DLGFBQWE7UUFBQyxFQUFFQyxTQUFTLEVBQTBCO0lBQ3ZELHFCQUNFLDhEQUFDTCxnREFBSUE7UUFBQ0ssV0FBV0E7OzBCQUNmLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBMEI7Ozs7OzswQkFDeEMsOERBQUNFO2dCQUFJRixXQUFVOzBCQUNaSixPQUFPTyxHQUFHLENBQUMsQ0FBQ0Msc0JBQ1gsOERBQUNGO3dCQUFxQkYsV0FBVTs7MENBQzlCLDhEQUFDRTtnQ0FBSUYsV0FBVTs7a0RBQ2IsOERBQUNLO2tEQUFNRCxNQUFNUCxJQUFJOzs7Ozs7a0RBQ2pCLDhEQUFDUTs7NENBQU1ELE1BQU1OLEtBQUs7NENBQUM7Ozs7Ozs7Ozs7Ozs7MENBRXJCLDhEQUFDSixpREFBTUEsQ0FBQ1EsR0FBRztnQ0FDVEYsV0FBVTtnQ0FDVk0sU0FBUztvQ0FBRUMsT0FBTztnQ0FBRTtnQ0FDcEJDLFNBQVM7b0NBQUVELE9BQU8sR0FBZSxPQUFaSCxNQUFNTixLQUFLLEVBQUM7Z0NBQUc7Z0NBQ3BDVyxZQUFZO29DQUFFQyxVQUFVO29DQUFHQyxNQUFNO2dDQUFVOzs7Ozs7O3VCQVRyQ1AsTUFBTVAsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCOUI7S0F0Qk1FO0FBd0JOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvU2tpbGxzQ2FyZC50c3g/ZjFiYiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vdWkvQ2FyZCc7XHJcblxyXG5pbnRlcmZhY2UgU2tpbGwge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsZXZlbDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBza2lsbHM6IFNraWxsW10gPSBbXHJcbiAgeyBuYW1lOiAnUmVhY3QnLCBsZXZlbDogOTAgfSxcclxuICB7IG5hbWU6ICdUeXBlU2NyaXB0JywgbGV2ZWw6IDg1IH0sXHJcbiAgeyBuYW1lOiAnUmVhY3QnLCBsZXZlbDogOTAgfSxcclxuICB7IG5hbWU6ICdUeXBlU2NyaXB0JywgbGV2ZWw6IDg1IH0sXHJcbiAgeyBuYW1lOiAnUmVhY3QnLCBsZXZlbDogOTAgfSxcclxuICB7IG5hbWU6ICdUeXBlU2NyaXB0JywgbGV2ZWw6IDg1IH0sXHJcbiAgeyBuYW1lOiAnUmVhY3QnLCBsZXZlbDogOTAgfSxcclxuICB7IG5hbWU6ICdUeXBlU2NyaXB0JywgbGV2ZWw6IDg1IH0sXHJcbiAgeyBuYW1lOiAnUmVhY3QnLCBsZXZlbDogOTAgfSxcclxuICB7IG5hbWU6ICdUeXBlU2NyaXB0JywgbGV2ZWw6IDg1IH0sXHJcbiAgeyBuYW1lOiAnUmVhY3QnLCBsZXZlbDogOTAgfSxcclxuICB7IG5hbWU6ICdUeXBlU2NyaXB0JywgbGV2ZWw6IDg1IH0sXHJcbiAgLy8gLi4uINC00YDRg9Cz0LjQtSDQvdCw0LLRi9C60LhcclxuICAvLyAuLi4g0LTRgNGD0LPQuNC1INC90LDQstGL0LrQuFxyXG5dO1xyXG5cclxuY29uc3QgU2tpbGxzQ2FyZCA9ICh7IGNsYXNzTmFtZSB9OiB7IGNsYXNzTmFtZT86IHN0cmluZyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+0J3QsNCy0YvQutC4PC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cclxuICAgICAgICB7c2tpbGxzLm1hcCgoc2tpbGwpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtza2lsbC5uYW1lfSBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPntza2lsbC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj57c2tpbGwubGV2ZWx9JTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMiBiZy1zZWNvbmRhcnkvMzAgcm91bmRlZC1mdWxsIG92ZXJmbG93LWhpZGRlblwiXHJcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyB3aWR0aDogMCB9fVxyXG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgd2lkdGg6IGAke3NraWxsLmxldmVsfSVgIH19XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSwgZWFzZTogXCJlYXNlT3V0XCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzQ2FyZDtcclxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkNhcmQiLCJza2lsbHMiLCJuYW1lIiwibGV2ZWwiLCJTa2lsbHNDYXJkIiwiY2xhc3NOYW1lIiwiaDIiLCJkaXYiLCJtYXAiLCJza2lsbCIsInNwYW4iLCJpbml0aWFsIiwid2lkdGgiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/widgets/SkillsCard.tsx\n"));

/***/ })

});