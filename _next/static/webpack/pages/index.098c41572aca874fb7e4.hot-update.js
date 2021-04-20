webpackHotUpdate_N_E("pages/index",{

/***/ "./components/social-links.tsx":
/*!*************************************!*\
  !*** ./components/social-links.tsx ***!
  \*************************************/
/*! exports provided: SocialLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLinks", function() { return SocialLinks; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./components/index.ts");
/* harmony import */ var _styles_social_links_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/social-links.module.scss */ "./components/styles/social-links.module.scss");
/* harmony import */ var _styles_social_links_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_social_links_module_scss__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\rai\\Repos\\raicuparta.github.io\\components\\social-links.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var links = [{
  name: 'Twitter',
  title: 'Twitter @Raicuparta',
  url: 'https://twitter.com/raicuparta'
}, {
  name: 'LinkedIn',
  title: 'LinkedIn Ricardo Lopes',
  url: 'https://www.linkedin.com/in/ricardo-lopes-3a071643/'
}, {
  name: 'StackOverflow',
  title: 'Stack Overflow @Raicuparta',
  url: 'https://stackoverflow.com/users/3962104/ricardo-lopes?tab=profile'
}, {
  name: 'Dev',
  title: 'DEV @Raicuparta',
  url: 'https://dev.to/raicuparta'
}, {
  name: 'Medium',
  title: 'Medium @Raicuparta',
  url: 'https://medium.com/@Raicuparta'
}, {
  name: 'Github',
  title: 'Github @Raicuparta',
  url: 'https://github.com/Raicuparta'
}];
var SocialLinks = function SocialLinks() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: _styles_social_links_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.background,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, "hello"), __jsx("div", {
    className: _styles_social_links_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx("nav", {
    className: _styles_social_links_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.socialLinks,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, links.map(function (link) {
    return __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["IconLink"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: link.name
    }, link, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }
    }));
  }))));
};
_c = SocialLinks;

var _c;

$RefreshReg$(_c, "SocialLinks");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zb2NpYWwtbGlua3MudHN4Il0sIm5hbWVzIjpbImxpbmtzIiwibmFtZSIsInRpdGxlIiwidXJsIiwiU29jaWFsTGlua3MiLCJzdHlsZXMiLCJiYWNrZ3JvdW5kIiwid3JhcHBlciIsInNvY2lhbExpbmtzIiwibWFwIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxNQUFJLEVBQUUsU0FEUjtBQUVFQyxPQUFLLEVBQUUscUJBRlQ7QUFHRUMsS0FBRyxFQUFFO0FBSFAsQ0FEWSxFQU1aO0FBQ0VGLE1BQUksRUFBRSxVQURSO0FBRUVDLE9BQUssRUFBRSx3QkFGVDtBQUdFQyxLQUFHLEVBQUU7QUFIUCxDQU5ZLEVBV1o7QUFDRUYsTUFBSSxFQUFFLGVBRFI7QUFFRUMsT0FBSyxFQUFFLDRCQUZUO0FBR0VDLEtBQUcsRUFBRTtBQUhQLENBWFksRUFnQlo7QUFDRUYsTUFBSSxFQUFFLEtBRFI7QUFFRUMsT0FBSyxFQUFFLGlCQUZUO0FBR0VDLEtBQUcsRUFBRTtBQUhQLENBaEJZLEVBcUJaO0FBQ0VGLE1BQUksRUFBRSxRQURSO0FBRUVDLE9BQUssRUFBRSxvQkFGVDtBQUdFQyxLQUFHLEVBQUU7QUFIUCxDQXJCWSxFQTBCWjtBQUNFRixNQUFJLEVBQUUsUUFEUjtBQUVFQyxPQUFLLEVBQUUsb0JBRlQ7QUFHRUMsS0FBRyxFQUFFO0FBSFAsQ0ExQlksQ0FBZDtBQWlDTyxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFNBQ3pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUMsdUVBQU0sQ0FBQ0MsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUU7QUFBSyxhQUFTLEVBQUVELHVFQUFNLENBQUNFLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUYsdUVBQU0sQ0FBQ0csV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUixLQUFLLENBQUNTLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsV0FDVCxNQUFDLG9EQUFEO0FBQVUsU0FBRyxFQUFFQSxJQUFJLENBQUNUO0FBQXBCLE9BQThCUyxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRFM7QUFBQSxHQUFWLENBREgsQ0FERixDQUZGLENBRHlCO0FBQUEsQ0FBcEI7S0FBTU4sVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wOThjNDE1NzJhY2E4NzRmYjdlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWNvbkxpbmsgfSBmcm9tICcuLi9jb21wb25lbnRzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvc29jaWFsLWxpbmtzLm1vZHVsZS5zY3NzJztcblxuY29uc3QgbGlua3MgPSBbXG4gIHtcbiAgICBuYW1lOiAnVHdpdHRlcicsXG4gICAgdGl0bGU6ICdUd2l0dGVyIEBSYWljdXBhcnRhJyxcbiAgICB1cmw6ICdodHRwczovL3R3aXR0ZXIuY29tL3JhaWN1cGFydGEnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0xpbmtlZEluJyxcbiAgICB0aXRsZTogJ0xpbmtlZEluIFJpY2FyZG8gTG9wZXMnLFxuICAgIHVybDogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9yaWNhcmRvLWxvcGVzLTNhMDcxNjQzLycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnU3RhY2tPdmVyZmxvdycsXG4gICAgdGl0bGU6ICdTdGFjayBPdmVyZmxvdyBAUmFpY3VwYXJ0YScsXG4gICAgdXJsOiAnaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS91c2Vycy8zOTYyMTA0L3JpY2FyZG8tbG9wZXM/dGFiPXByb2ZpbGUnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0RldicsXG4gICAgdGl0bGU6ICdERVYgQFJhaWN1cGFydGEnLFxuICAgIHVybDogJ2h0dHBzOi8vZGV2LnRvL3JhaWN1cGFydGEnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ01lZGl1bScsXG4gICAgdGl0bGU6ICdNZWRpdW0gQFJhaWN1cGFydGEnLFxuICAgIHVybDogJ2h0dHBzOi8vbWVkaXVtLmNvbS9AUmFpY3VwYXJ0YScsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnR2l0aHViJyxcbiAgICB0aXRsZTogJ0dpdGh1YiBAUmFpY3VwYXJ0YScsXG4gICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL1JhaWN1cGFydGEnLFxuICB9LFxuXSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IFNvY2lhbExpbmtzID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZH0+aGVsbG88L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWxMaW5rc30+XG4gICAgICAgIHtsaW5rcy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICA8SWNvbkxpbmsga2V5PXtsaW5rLm5hbWV9IHsuLi5saW5rfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG4iXSwic291cmNlUm9vdCI6IiJ9