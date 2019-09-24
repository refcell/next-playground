webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/next/node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_parseCookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/parseCookies */ "./lib/parseCookies.tsx");
var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/HackSC/next-playground/pages/index.tsx";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var config = {
  amp: 'hybrid'
};

function getPosts() {
  return [{
    id: 'hello-nextjs',
    title: 'Hello Next.js'
  }, {
    id: 'learn-nextjs',
    title: 'Learn Next.js is awesome'
  }, {
    id: 'deploy-nextjs',
    title: 'Deploy apps with ZEIT'
  }];
}

var PostLink = function PostLink(props) {
  var post = props.post;
  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("li", {
    className: "jsx-1341333550",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/p/[id]",
    as: "/p/".concat(post.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("a", {
    className: "jsx-1341333550",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, post.title)), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1341333550",
    css: "li.jsx-1341333550{list-style:none;margin:5px 0;}a.jsx-1341333550{-webkit-text-decoration:none;text-decoration:none;color:blue;font-family:'Arial';}a.jsx-1341333550:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzYmlnZ2VyL09uZURyaXZlIC0gVW5pdmVyc2l0eSBvZiBTb3V0aGVybiBDYWxpZm9ybmlhL1Byb2plY3RzL0hhY2tTQy9uZXh0LXBsYXlncm91bmQvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCa0IsQUFHeUIsQUFLSyxBQU1ULFlBQ2QsSUFYZSxhQUNmLHFCQUlhLFdBQ1Msb0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZWFzYmlnZ2VyL09uZURyaXZlIC0gVW5pdmVyc2l0eSBvZiBTb3V0aGVybiBDYWxpZm9ybmlhL1Byb2plY3RzL0hhY2tTQy9uZXh0LXBsYXlncm91bmQvcGFnZXMvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwiLi4vbGliL3BhcnNlQ29va2llc1wiO1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0geyBhbXA6ICdoeWJyaWQnIH07XG5cbmZ1bmN0aW9uIGdldFBvc3RzKCkge1xuICByZXR1cm4gW1xuICAgIHsgaWQ6ICdoZWxsby1uZXh0anMnLCB0aXRsZTogJ0hlbGxvIE5leHQuanMnIH0sXG4gICAgeyBpZDogJ2xlYXJuLW5leHRqcycsIHRpdGxlOiAnTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lJyB9LFxuICAgIHsgaWQ6ICdkZXBsb3ktbmV4dGpzJywgdGl0bGU6ICdEZXBsb3kgYXBwcyB3aXRoIFpFSVQnIH1cbiAgXVxufVxuXG5pbnRlcmZhY2UgSVBvc3RMaW5rUHJvcHMge1xuICBwb3N0OiBhbnk7XG59XG5cbmNvbnN0IFBvc3RMaW5rOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJUG9zdExpbmtQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwb3N0IH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8bGk+XG4gICAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtwb3N0LmlkfWB9PlxuICAgICAgICA8YT57cG9zdC50aXRsZX08L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9saT5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coeyBpbml0aWFsUmVtZW1iZXJWYWx1ZSB9OiB7IGFueSB9KSB7XG4gIGNvbnN0IFtyZW1lbWJlck1lLCBzZXRSZW1lbWJlck1lXSA9IHVzZVN0YXRlKCgpID0+XG4gICAgSlNPTi5wYXJzZShpbml0aWFsUmVtZW1iZXJWYWx1ZSlcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIENvb2tpZS5zZXQoXCJyZW1lbWJlck1lXCIsIEpTT04uc3RyaW5naWZ5KHJlbWVtYmVyTWUpKTtcbiAgfSwgW3JlbWVtYmVyTWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8aDE+TXkgQmxvZzwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIHtnZXRQb3N0cygpLm1hcChwb3N0ID0+IChcbiAgICAgICAgICA8UG9zdExpbmsga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2PlxuICAgICAgICByZW1lbWJlciBtZVxuICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICB2YWx1ZT17cmVtZW1iZXJNZX1cbiAgICAgICAgICBjaGVja2VkPXtyZW1lbWJlck1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFJlbWVtYmVyTWUoZS50YXJnZXQuY2hlY2tlZCl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEsXG4gICAgICAgIGEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICAgICB9XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuQmxvZy5nZXRJbml0aWFsUHJvcHMgPSAoeyByZXEgfSkgPT4ge1xuICBjb25zdCBjb29raWVzID0gcGFyc2VDb29raWVzKHJlcSk7XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0aWFsUmVtZW1iZXJWYWx1ZTogY29va2llcy5yZW1lbWJlck1lXG4gIH07XG59O1xuIl19 */\n/*@ sourceURL=/Users/andreasbigger/OneDrive - University of Southern California/Projects/HackSC/next-playground/pages/index.tsx */",
    __self: this
  }));
};

function Blog(_ref) {
  var initialRememberValue = _ref.initialRememberValue;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(function () {
    return JSON.parse(initialRememberValue);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      rememberMe = _useState2[0],
      setRememberMe = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set("rememberMe", JSON.stringify(rememberMe));
  }, [rememberMe]);
  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("h1", {
    className: "jsx-344512576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "My Blog"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("ul", {
    className: "jsx-344512576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, getPosts().map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](PostLink, {
      key: post.id,
      post: post,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: "jsx-344512576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "remember me", react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("input", {
    type: "checkbox",
    value: rememberMe,
    checked: rememberMe,
    onChange: function onChange(e) {
      return setRememberMe(e.target.checked);
    },
    className: "jsx-344512576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "344512576",
    css: "h1.jsx-344512576,a.jsx-344512576{font-family:'Arial';}ul.jsx-344512576{padding:0;}li.jsx-344512576{list-style:none;margin:5px 0;}a.jsx-344512576{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-344512576:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzYmlnZ2VyL09uZURyaXZlIC0gVW5pdmVyc2l0eSBvZiBTb3V0aGVybiBDYWxpZm9ybmlhL1Byb2plY3RzL0hhY2tTQy9uZXh0LXBsYXlncm91bmQvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFa0IsQUFJK0IsQUFJVixBQUlNLEFBS0ssQUFLVCxVQWJkLEVBY0EsSUFWZSxJQVJmLFNBU0EscUJBSWEsV0FDYiIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc2JpZ2dlci9PbmVEcml2ZSAtIFVuaXZlcnNpdHkgb2YgU291dGhlcm4gQ2FsaWZvcm5pYS9Qcm9qZWN0cy9IYWNrU0MvbmV4dC1wbGF5Z3JvdW5kL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIi4uL2xpYi9wYXJzZUNvb2tpZXNcIjtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHsgYW1wOiAnaHlicmlkJyB9O1xuXG5mdW5jdGlvbiBnZXRQb3N0cygpIHtcbiAgcmV0dXJuIFtcbiAgICB7IGlkOiAnaGVsbG8tbmV4dGpzJywgdGl0bGU6ICdIZWxsbyBOZXh0LmpzJyB9LFxuICAgIHsgaWQ6ICdsZWFybi1uZXh0anMnLCB0aXRsZTogJ0xlYXJuIE5leHQuanMgaXMgYXdlc29tZScgfSxcbiAgICB7IGlkOiAnZGVwbG95LW5leHRqcycsIHRpdGxlOiAnRGVwbG95IGFwcHMgd2l0aCBaRUlUJyB9XG4gIF1cbn1cblxuaW50ZXJmYWNlIElQb3N0TGlua1Byb3BzIHtcbiAgcG9zdDogYW55O1xufVxuXG5jb25zdCBQb3N0TGluazogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8SVBvc3RMaW5rUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcG9zdCB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGxpPlxuICAgICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7cG9zdC5pZH1gfT5cbiAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvbGk+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKHsgaW5pdGlhbFJlbWVtYmVyVmFsdWUgfTogeyBhbnkgfSkge1xuICBjb25zdCBbcmVtZW1iZXJNZSwgc2V0UmVtZW1iZXJNZV0gPSB1c2VTdGF0ZSgoKSA9PlxuICAgIEpTT04ucGFyc2UoaW5pdGlhbFJlbWVtYmVyVmFsdWUpXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBDb29raWUuc2V0KFwicmVtZW1iZXJNZVwiLCBKU09OLnN0cmluZ2lmeShyZW1lbWJlck1lKSk7XG4gIH0sIFtyZW1lbWJlck1lXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGgxPk15IEJsb2c8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICB7Z2V0UG9zdHMoKS5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgPFBvc3RMaW5rIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPGRpdj5cbiAgICAgICAgcmVtZW1iZXIgbWVcbiAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgdmFsdWU9e3JlbWVtYmVyTWV9XG4gICAgICAgICAgY2hlY2tlZD17cmVtZW1iZXJNZX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRSZW1lbWJlck1lKGUudGFyZ2V0LmNoZWNrZWQpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxLFxuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbkJsb2cuZ2V0SW5pdGlhbFByb3BzID0gKHsgcmVxIH0pID0+IHtcbiAgY29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcyhyZXEpO1xuXG4gIHJldHVybiB7XG4gICAgaW5pdGlhbFJlbWVtYmVyVmFsdWU6IGNvb2tpZXMucmVtZW1iZXJNZVxuICB9O1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/andreasbigger/OneDrive - University of Southern California/Projects/HackSC/next-playground/pages/index.tsx */",
    __self: this
  }));
}

Blog.getInitialProps = function (_ref2) {
  var req = _ref2.req;
  var cookies = Object(_lib_parseCookies__WEBPACK_IMPORTED_MODULE_5__["parseCookies"])(req);
  return {
    initialRememberValue: cookies.rememberMe
  };
};
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.5958f1470d6a29318faa.hot-update.js.map