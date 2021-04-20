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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zb2NpYWwtbGlua3MudHN4Il0sIm5hbWVzIjpbImxpbmtzIiwibmFtZSIsInRpdGxlIiwidXJsIiwiU29jaWFsTGlua3MiLCJzdHlsZXMiLCJiYWNrZ3JvdW5kIiwid3JhcHBlciIsInNvY2lhbExpbmtzIiwibWFwIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxNQUFJLEVBQUUsU0FEUjtBQUVFQyxPQUFLLEVBQUUscUJBRlQ7QUFHRUMsS0FBRyxFQUFFO0FBSFAsQ0FEWSxFQU1aO0FBQ0VGLE1BQUksRUFBRSxVQURSO0FBRUVDLE9BQUssRUFBRSx3QkFGVDtBQUdFQyxLQUFHLEVBQUU7QUFIUCxDQU5ZLEVBV1o7QUFDRUYsTUFBSSxFQUFFLGVBRFI7QUFFRUMsT0FBSyxFQUFFLDRCQUZUO0FBR0VDLEtBQUcsRUFBRTtBQUhQLENBWFksRUFnQlo7QUFDRUYsTUFBSSxFQUFFLEtBRFI7QUFFRUMsT0FBSyxFQUFFLGlCQUZUO0FBR0VDLEtBQUcsRUFBRTtBQUhQLENBaEJZLEVBcUJaO0FBQ0VGLE1BQUksRUFBRSxRQURSO0FBRUVDLE9BQUssRUFBRSxvQkFGVDtBQUdFQyxLQUFHLEVBQUU7QUFIUCxDQXJCWSxFQTBCWjtBQUNFRixNQUFJLEVBQUUsUUFEUjtBQUVFQyxPQUFLLEVBQUUsb0JBRlQ7QUFHRUMsS0FBRyxFQUFFO0FBSFAsQ0ExQlksQ0FBZDtBQWlDTyxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFNBQ3pCLG1FQUNFO0FBQUssYUFBUyxFQUFFQyx1RUFBTSxDQUFDQyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRTtBQUFLLGFBQVMsRUFBRUQsdUVBQU0sQ0FBQ0UsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRix1RUFBTSxDQUFDRyxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dSLEtBQUssQ0FBQ1MsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSxXQUNULE1BQUMsb0RBQUQ7QUFBVSxTQUFHLEVBQUVBLElBQUksQ0FBQ1Q7QUFBcEIsT0FBOEJTLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEUztBQUFBLEdBQVYsQ0FESCxDQURGLENBRkYsQ0FEeUI7QUFBQSxDQUFwQjtLQUFNTixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIyOTE3MWMwMjk5MjQwYmMyNmE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJY29uTGluayB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9zb2NpYWwtbGlua3MubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBsaW5rcyA9IFtcbiAge1xuICAgIG5hbWU6ICdUd2l0dGVyJyxcbiAgICB0aXRsZTogJ1R3aXR0ZXIgQFJhaWN1cGFydGEnLFxuICAgIHVybDogJ2h0dHBzOi8vdHdpdHRlci5jb20vcmFpY3VwYXJ0YScsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTGlua2VkSW4nLFxuICAgIHRpdGxlOiAnTGlua2VkSW4gUmljYXJkbyBMb3BlcycsXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3JpY2FyZG8tbG9wZXMtM2EwNzE2NDMvJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdTdGFja092ZXJmbG93JyxcbiAgICB0aXRsZTogJ1N0YWNrIE92ZXJmbG93IEBSYWljdXBhcnRhJyxcbiAgICB1cmw6ICdodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3VzZXJzLzM5NjIxMDQvcmljYXJkby1sb3Blcz90YWI9cHJvZmlsZScsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnRGV2JyxcbiAgICB0aXRsZTogJ0RFViBAUmFpY3VwYXJ0YScsXG4gICAgdXJsOiAnaHR0cHM6Ly9kZXYudG8vcmFpY3VwYXJ0YScsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTWVkaXVtJyxcbiAgICB0aXRsZTogJ01lZGl1bSBAUmFpY3VwYXJ0YScsXG4gICAgdXJsOiAnaHR0cHM6Ly9tZWRpdW0uY29tL0BSYWljdXBhcnRhJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdHaXRodWInLFxuICAgIHRpdGxlOiAnR2l0aHViIEBSYWljdXBhcnRhJyxcbiAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vUmFpY3VwYXJ0YScsXG4gIH0sXG5dIGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgU29jaWFsTGlua3MgPSAoKSA9PiAoXG4gIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrZ3JvdW5kfT5oZWxsbzwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLnNvY2lhbExpbmtzfT5cbiAgICAgICAge2xpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgIDxJY29uTGluayBrZXk9e2xpbmsubmFtZX0gey4uLmxpbmt9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gIDwvPlxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=