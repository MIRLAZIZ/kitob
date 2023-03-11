"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["error"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/Error.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/Error.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    goBack: function goBack() {
      this.$router.push("/");
    }
  },
  mounted: function mounted() {
    document.body.classList.add("background");
  },
  beforeDestroy: function beforeDestroy() {
    document.body.classList.remove("background");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/Error.vue?vue&type=template&id=864a512e&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/Error.vue?vue&type=template&id=864a512e& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    attrs: {
      id: "root"
    }
  }, [_c("div", {
    staticClass: "fixed-background"
  }, [_c("main", [_c("div", {
    staticClass: "container"
  }, [_c("b-row", {
    staticClass: "h-100"
  }, [_c("b-colxx", {
    staticClass: "mx-auto my-auto",
    attrs: {
      xxs: "12",
      md: "10"
    }
  }, [_c("b-card", {
    staticClass: "auth-card",
    attrs: {
      "no-body": ""
    }
  }, [_c("div", {
    staticClass: "position-relative image-side"
  }, [_c("p", {
    staticClass: "text-white h2"
  }, [_vm._v("MAGIC IS IN THE DETAILS")]), _vm._v(" "), _c("p", {
    staticClass: "white mb-0"
  }, [_vm._v("Yes, it is indeed!")])]), _vm._v(" "), _c("div", {
    staticClass: "form-side"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/"
    }
  }, [_c("span", {
    staticClass: "logo-single"
  })]), _vm._v(" "), _c("h6", {
    staticClass: "mb-4"
  }, [_vm._v(_vm._s(_vm.$t("pages.error-title")))]), _vm._v(" "), _c("p", {
    staticClass: "mb-0 text-muted text-small mb-0"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("pages.error-code")) + "\n                ")]), _vm._v(" "), _c("p", {
    staticClass: "display-1 font-weight-bold mb-5"
  }, [_vm._v("404")]), _vm._v(" "), _c("b-button", {
    staticClass: "btn-shadow",
    attrs: {
      type: "submit",
      variant: "primary",
      size: "lg"
    },
    on: {
      click: _vm.goBack
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("pages.go-back-home")) + "\n                ")])], 1)])], 1)], 1)], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./views/Error.vue":
/*!*************************!*\
  !*** ./views/Error.vue ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Error_vue_vue_type_template_id_864a512e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error.vue?vue&type=template&id=864a512e& */ "./views/Error.vue?vue&type=template&id=864a512e&");
/* harmony import */ var _Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error.vue?vue&type=script&lang=js& */ "./views/Error.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Error_vue_vue_type_template_id_864a512e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Error_vue_vue_type_template_id_864a512e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "views/Error.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./views/Error.vue?vue&type=script&lang=js&":
/*!**************************************************!*\
  !*** ./views/Error.vue?vue&type=script&lang=js& ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./Error.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/Error.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./views/Error.vue?vue&type=template&id=864a512e&":
/*!********************************************************!*\
  !*** ./views/Error.vue?vue&type=template&id=864a512e& ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_template_id_864a512e___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_template_id_864a512e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_template_id_864a512e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./Error.vue?vue&type=template&id=864a512e& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/Error.vue?vue&type=template&id=864a512e&");


/***/ })

}]);