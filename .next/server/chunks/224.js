"use strict";
exports.id = 224;
exports.ids = [224];
exports.modules = {

/***/ 3224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Password() {
    const { 0: passwordType , 1: setPasswordType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("password");
    const { 0: passwordInput , 1: setPasswordInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handlePasswordChange = (event)=>{
        setPasswordInput(event.target.value);
    };
    const togglePassword = ()=>{
        if (passwordType === "password") {
            setPasswordType("text");
            return;
        }
        setPasswordType("password");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "col-md-12",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "form-inner",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                    children: "Password *"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                    type: passwordType,
                    onChange: handlePasswordChange,
                    value: passwordInput,
                    name: "password",
                    id: "password",
                    placeholder: "Create A Password"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                    onClick: togglePassword,
                    className: passwordType === "password" ? "bi bi-eye-slash" : "bi bi-eye",
                    id: "togglePassword"
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Password);


/***/ })

};
;