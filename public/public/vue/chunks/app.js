"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./components/Svg/index.js":
/*!*********************************!*\
  !*** ./components/Svg/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataListIcon": function() { return /* reexport safe */ _DataListIcon__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "ImageListIcon": function() { return /* reexport safe */ _ImageListIcon__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "MenuIcon": function() { return /* reexport safe */ _MenuIcon__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "MobileMenuIcon": function() { return /* reexport safe */ _MobileMenuIcon__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "ThumbListIcon": function() { return /* reexport safe */ _ThumbListIcon__WEBPACK_IMPORTED_MODULE_1__["default"]; }
/* harmony export */ });
/* harmony import */ var _DataListIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataListIcon */ "./components/Svg/DataListIcon.vue");
/* harmony import */ var _ThumbListIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThumbListIcon */ "./components/Svg/ThumbListIcon.vue");
/* harmony import */ var _ImageListIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageListIcon */ "./components/Svg/ImageListIcon.vue");
/* harmony import */ var _MenuIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuIcon */ "./components/Svg/MenuIcon.vue");
/* harmony import */ var _MobileMenuIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MobileMenuIcon */ "./components/Svg/MobileMenuIcon.vue");







/***/ }),

/***/ "./constants/menu.js":
/*!***************************!*\
  !*** ./constants/menu.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./constants/config.js");

var data = [{
  id: "dashboards",
  icon: "iconsminds-dashboard",
  label: "menu.dashboards",
  to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/dashboards/default"),
  meta: {
    con: 'DashboardController',
    action: 'index'
  }
}, {
  id: "book",
  icon: "iconsminds-book",
  label: "menu.book",
  to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/book"),
  meta: {
    con: 'BookController',
    action: 'index'
  },
  subs: [{
    icon: "simple-icon-list",
    label: "menu.list",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/book/default"),
    meta: {
      con: 'BookController',
      action: 'index'
    }
  }, {
    icon: "simple-icon-magnifier-add",
    label: "menu.list",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/book-add/step/1"),
    meta: {
      con: 'BookController',
      action: 'store'
    }
  },
  // {
  //   icon: "simple-icon-magnifier-add",
  //   label: "menu.add-new",
  //   to: `${adminRoot}/book/add`,
  // },
  // {
  //   icon: "simple-icon-magnifier-add",
  //   label: "menu.add-new",
  //   to: `${adminRoot}/book/add/step/1`,
  // },
  {
    id: "book-group",
    icon: "iconsminds-men",
    label: "menu.book-group",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/book-group"),
    meta: {
      con: 'GroupController',
      action: 'index'
    },
    subs: [{
      icon: "simple-icon-list",
      label: "menu.list",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/book-group/default"),
      meta: {
        con: 'GroupController',
        action: 'index'
      }
    }, {
      icon: "simple-icon-magnifier-add",
      label: "menu.add-new",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/book-group/add"),
      meta: {
        con: 'GroupController',
        action: 'store'
      }
    }]
  }, {
    id: "series",
    icon: "iconsminds-men",
    label: "menu.series",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/book-series"),
    meta: {
      con: 'BookSeriesController',
      action: 'index'
    },
    subs: [{
      icon: "simple-icon-list",
      label: "menu.list",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/book-series/default"),
      meta: {
        con: 'BookSeriesController',
        action: 'index'
      }
    }, {
      icon: "simple-icon-magnifier-add",
      label: "menu.add-new",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/book-series/add"),
      meta: {
        con: 'BookSeriesController',
        action: 'store'
      }
    }]
  }, {
    id: "category",
    icon: "iconsminds-men",
    label: "category.category",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/book-category"),
    meta: {
      con: 'CategoryController',
      action: 'index'
    },
    subs: [{
      icon: "simple-icon-list",
      label: "menu.list",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/book-category/default"),
      meta: {
        con: 'CategoryController',
        action: 'index'
      }
    }, {
      icon: "simple-icon-magnifier-add",
      label: "menu.add-new",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/book-category/add"),
      meta: {
        con: 'CategoryController',
        action: 'store'
      }
    }]
  }, {
    id: "coupon",
    icon: "iconsminds-men",
    label: "menu.coupon",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/coupon"),
    meta: {
      con: 'CouponController',
      action: 'index'
    },
    subs: [{
      icon: "simple-icon-list",
      label: "menu.list",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/coupon/default"),
      meta: {
        con: 'CouponController',
        action: 'index'
      }
    }, {
      icon: "simple-icon-magnifier-add",
      label: "menu.add-new",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/coupon/add"),
      meta: {
        con: 'CouponController',
        action: 'store'
      }
    }]
  }, {
    id: "notification",
    icon: "iconsminds-men",
    label: "menu.notification",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/notification"),
    meta: {
      con: 'NotificationController',
      action: 'index'
    },
    subs: [{
      icon: "simple-icon-list",
      label: "menu.list",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/notification/default"),
      meta: {
        con: 'NotificationController',
        action: 'index'
      }
    }, {
      icon: "simple-icon-magnifier-add",
      label: "menu.add-new",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/notification/add"),
      meta: {
        con: 'NotificationController',
        action: 'store'
      }
    }]
  },
  // {
  //   id: "epub",
  //   icon: "iconsminds-men",
  //   label: "menu.epub",
  //   to: `${adminRoot}/epub`,
  //   meta: {con: 'BookController', action: 'epub'},
  //   subs: [
  //     {
  //       icon: "simple-icon-list",
  //       label: "menu.list",
  //       to: `${adminRoot}/epub/default`,
  //       meta: {con: 'BookController', action: 'epub'},
  //     },
  //     {
  //       icon: "simple-icon-magnifier-add",
  //       label: "menu.add-new",
  //       to: `${adminRoot}/epub/add`,
  //       meta: {con: 'BookController', action: 'htmlToString'},
  //     },
  //
  //   ]
  // },
  {
    id: "author",
    icon: "iconsminds-men",
    label: "menu.author",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/author"),
    meta: {
      con: 'AuthorController',
      action: 'index'
    },
    subs: [{
      icon: "simple-icon-list",
      label: "menu.list",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/author/default"),
      meta: {
        con: 'AuthorController',
        action: 'index'
      }
    }, {
      icon: "simple-icon-magnifier-add",
      label: "menu.add-new",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/author/add"),
      meta: {
        con: 'AuthorController',
        action: 'store'
      }
    }]
  }]
}, {
  id: "book-store",
  icon: "iconsminds-bank",
  label: "menu.book-store",
  to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/book-store"),
  meta: {
    con: 'BookTypeController',
    action: 'index'
  },
  subs: [{
    icon: "simple-icon-list",
    label: "menu.list",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/book-store/default"),
    meta: {
      con: 'BookTypeController',
      action: 'index'
    }
  }, {
    icon: "simple-icon-magnifier-add",
    label: "menu.add-new",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/book-store/add"),
    meta: {
      con: 'BookTypeController',
      action: 'store'
    }
  }, {
    icon: "iconsminds-add-cart",
    label: "Add by CODE",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/book-store/add-by-code"),
    meta: {
      con: 'BookTypeController',
      action: 'store'
    }
  }, {
    icon: "iconsminds-add-cart",
    label: "Income orders",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/book-store/warehouse"),
    meta: {
      con: 'BookTypeController',
      action: 'store'
    }
  }]
}, {
  id: "order",
  icon: "iconsminds-basket-coins",
  label: "menu.order",
  to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/order"),
  meta: {
    con: 'PaymentController',
    action: 'index'
  },
  subs: [{
    icon: "simple-icon-list",
    label: "menu.list",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/order/default"),
    meta: {
      con: 'PaymentController',
      action: 'index'
    }
  }, {
    icon: "simple-icon-list",
    label: "menu.uzcard",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/order/uzcard"),
    meta: {
      con: 'PaymentController',
      action: 'uzcard'
    }
  }, {
    icon: "simple-icon-magnifier-add",
    label: "menu.add-new",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/order/add-card"),
    meta: {
      con: 'PaymentController',
      action: 'token'
    }
  }, {
    icon: "simple-icon-magnifier-add",
    label: "menu.pay",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/order/pay"),
    meta: {
      con: 'PaymentController',
      action: 'uzcardList'
    }
  }, {
    icon: "simple-icon-list",
    label: "menu.pay",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/order/my-invoice"),
    meta: {
      con: 'PaymentController',
      action: 'uzcardList'
    }
  }]
}, {
  id: "balance",
  icon: "iconsminds-dollar",
  label: "menu.balance",
  to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/balance"),
  meta: {
    con: 'BalanceController',
    action: 'index'
  }
}, {
  id: "user",
  icon: "simple-icon-people",
  label: "menu.user",
  to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/user"),
  meta: {
    con: 'UserController',
    action: 'index'
  },
  subs: [{
    icon: "simple-icon-list",
    label: "menu.list",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/user/default"),
    meta: {
      con: 'UserController',
      action: 'index'
    }
  }, {
    icon: "simple-icon-magnifier-add",
    label: "menu.add-new",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/user/add"),
    meta: {
      con: 'UserController',
      action: 'createUser'
    }
  }]
}, {
  id: "license",
  icon: "simple-icon-people",
  label: "menu.license",
  to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/license"),
  meta: {
    con: 'UserController',
    action: 'index'
  },
  subs: [{
    icon: "simple-icon-list",
    label: "menu.list",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/license/default"),
    meta: {
      con: 'UserController',
      action: 'index'
    }
  }]
}, {
  id: "settings",
  icon: "simple-icon-settings",
  label: "menu.settings",
  to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/settings"),
  meta: {
    con: 'RoleController',
    action: 'index'
  },
  subs: [{
    id: "role",
    icon: "iconsminds-anchor",
    label: "menu.role",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/role"),
    meta: {
      con: 'RoleController',
      action: 'index'
    },
    subs: [{
      icon: "simple-icon-list",
      label: "menu.list",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/role/default"),
      meta: {
        con: 'RoleController',
        action: 'index'
      }
    }]
  }, {
    id: "controller",
    icon: "iconsminds-anchor",
    label: "menu.controller",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/controller"),
    meta: {
      con: 'ContsController',
      action: 'index'
    },
    subs: [{
      icon: "simple-icon-list",
      label: "menu.list",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/controller/default"),
      meta: {
        con: 'ContsController',
        action: 'index'
      }
    }, {
      icon: "simple-icon-magnifier-add",
      label: "menu.add-new",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/controller/add"),
      meta: {
        con: 'ContsController',
        action: 'store'
      }
    }]
  }, {
    id: "action",
    icon: "iconsminds-anchor",
    label: "menu.action",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/action"),
    meta: {
      con: 'ActionController',
      action: 'index'
    },
    subs: [{
      icon: "simple-icon-list",
      label: "menu.list",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/action/default"),
      meta: {
        con: 'ActionController',
        action: 'index'
      }
    }, {
      icon: "simple-icon-magnifier-add",
      label: "menu.add-new",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/action/add"),
      meta: {
        con: 'ActionController',
        action: 'store'
      }
    }]
  }, {
    id: "faq",
    icon: "iconsminds-anchor",
    label: "menu.faq",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/faq"),
    meta: {
      con: 'FaqController',
      action: 'index'
    },
    subs: [{
      icon: "simple-icon-list",
      label: "menu.list",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/faq/default"),
      meta: {
        con: 'FaqController',
        action: 'index'
      }
    }, {
      icon: "simple-icon-magnifier-add",
      label: "menu.add-new",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/faq/add"),
      meta: {
        con: 'FaqController',
        action: 'store'
      }
    }]
  }, {
    id: "knowledge",
    icon: "iconsminds-anchor",
    label: "menu.knowledge",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/knowledge"),
    meta: {
      con: 'KnowledgeController',
      action: 'index'
    },
    subs: [{
      icon: "simple-icon-list",
      label: "menu.list",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/knowledge/default"),
      meta: {
        con: 'KnowledgeController',
        action: 'index'
      }
    }, {
      icon: "simple-icon-magnifier-add",
      label: "menu.add-new",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/knowledge/add"),
      meta: {
        con: 'KnowledgeController',
        action: 'store'
      }
    }]
  }]
}, {
  id: "tickets",
  icon: "iconsminds-check",
  label: "menu.ticket",
  to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ticket"),
  meta: {
    con: 'TicketController',
    action: 'index'
  },
  subs: [{
    id: "ticket",
    icon: "iconsminds-dollar",
    label: "menu.list",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ticket/default"),
    meta: {
      con: 'TicketController',
      action: 'index'
    }
  }, {
    id: "tcategory",
    icon: "iconsminds-dollar",
    label: "menu.tcategory",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/tcategory"),
    meta: {
      con: 'TicketCategoryController',
      action: 'index'
    },
    subs: [{
      icon: "simple-icon-list",
      label: "menu.list",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/tcategory/default"),
      meta: {
        con: 'TicketCategoryController',
        action: 'index'
      }
    }, {
      icon: "simple-icon-magnifier-add",
      label: "menu.add-new",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/tcategory/add"),
      meta: {
        con: 'TicketCategoryController',
        action: 'store'
      }
    }]
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./data/notifications.js":
/*!*******************************!*\
  !*** ./data/notifications.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var data = [{
  img: '/assets/img/profiles/l-2.jpg',
  title: 'Joisse Kaycee just sent a new comment!',
  date: '09.04.2018 - 12:45',
  id: 1
}, {
  img: '/assets/img/notifications/thumb-1.jpg',
  title: '1 item is out of stock!',
  date: '09.04.2018 - 12:45',
  id: 2
}, {
  img: '/assets/img/notifications/thumb-2.jpg',
  title: 'New order received! It is total $147,20.',
  date: '09.04.2018 - 12:45',
  id: 3
}, {
  img: '/assets/img/notifications/thumb-3.jpg',
  title: '3 items just added to wish list by a user!',
  date: '09.04.2018 - 12:45',
  id: 4
}];
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/navs/Footer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/navs/Footer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/navs/Sidebar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/navs/Sidebar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/config */ "./constants/config.js");
/* harmony import */ var _constants_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/menu */ "./constants/menu.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      selectedParentMenu: "",
      menuItems: _constants_menu__WEBPACK_IMPORTED_MODULE_1__["default"],
      viewingParentMenu: ""
    };
  },
  mounted: function mounted() {
    this.selectMenu();
    window.addEventListener("resize", this.handleWindowResize);
    document.addEventListener("click", this.handleDocumentClick);
    this.handleWindowResize();
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener("click", this.handleDocumentClick);
    window.removeEventListener("resize", this.handleWindowResize);
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapMutations)(["changeSideMenuStatus", "addMenuClassname", "changeSelectedMenuHasSubItems"])), {}, {
    selectMenu: function selectMenu() {
      var currentParentUrl = this.$route.path.split("/").filter(function (x) {
        return x !== "";
      })[1];
      if (currentParentUrl !== undefined || currentParentUrl !== null) {
        this.selectedParentMenu = currentParentUrl.toLowerCase();
      } else {
        this.selectedParentMenu = "dashboards";
      }
      this.isCurrentMenuHasSubItem();
    },
    isCurrentMenuHasSubItem: function isCurrentMenuHasSubItem() {
      var _this = this;
      var menuItem = this.menuItems.find(function (x) {
        return x.id === _this.selectedParentMenu;
      });
      var isCurrentMenuHasSubItem = menuItem && menuItem.subs && menuItem.subs.length > 0 ? true : false;
      if (isCurrentMenuHasSubItem != this.selectedMenuHasSubItems) {
        if (!isCurrentMenuHasSubItem) {
          this.changeSideMenuStatus({
            step: 0,
            classNames: this.menuType,
            selectedMenuHasSubItems: false
          });
        } else {
          this.changeSideMenuStatus({
            step: 0,
            classNames: this.menuType,
            selectedMenuHasSubItems: true
          });
        }
      }
      return isCurrentMenuHasSubItem;
    },
    changeSelectedParentHasNoSubmenu: function changeSelectedParentHasNoSubmenu(parentMenu) {
      this.selectedParentMenu = parentMenu;
      this.viewingParentMenu = parentMenu;
      this.changeSelectedMenuHasSubItems(false);
      this.changeSideMenuStatus({
        step: 0,
        classNames: this.menuType,
        selectedMenuHasSubItems: false
      });
    },
    openSubMenu: function openSubMenu(e, menuItem) {
      var selectedParent = menuItem.id;
      var hasSubMenu = menuItem.subs && menuItem.subs.length > 0;
      this.changeSelectedMenuHasSubItems(hasSubMenu);
      if (!hasSubMenu) {
        this.viewingParentMenu = selectedParent;
        this.selectedParentMenu = selectedParent;
        this.toggle();
      } else {
        var currentClasses = this.menuType ? this.menuType.split(" ").filter(function (x) {
          return x !== "";
        }) : "";
        if (!currentClasses.includes("menu-mobile")) {
          if (currentClasses.includes("menu-sub-hidden") && (this.menuClickCount === 2 || this.menuClickCount === 0)) {
            this.changeSideMenuStatus({
              step: 3,
              classNames: this.menuType,
              selectedMenuHasSubItems: hasSubMenu
            });
          } else if (currentClasses.includes("menu-hidden") && (this.menuClickCount === 1 || this.menuClickCount === 3)) {
            this.changeSideMenuStatus({
              step: 2,
              classNames: this.menuType,
              selectedMenuHasSubItems: hasSubMenu
            });
          } else if (currentClasses.includes("menu-default") && !currentClasses.includes("menu-sub-hidden") && (this.menuClickCount === 1 || this.menuClickCount === 3)) {
            this.changeSideMenuStatus({
              step: 0,
              classNames: this.menuType,
              selectedMenuHasSubItems: hasSubMenu
            });
          }
        } else {
          this.addMenuClassname({
            classname: "sub-show-temporary",
            currentClasses: this.menuType
          });
        }
        this.viewingParentMenu = selectedParent;
      }
    },
    handleDocumentClick: function handleDocumentClick(e) {
      this.viewingParentMenu = "";
      this.selectMenu();
      this.toggle();
    },
    toggle: function toggle() {
      var currentClasses = this.menuType.split(" ").filter(function (x) {
        return x !== "";
      });
      if (currentClasses.includes("menu-sub-hidden") && this.menuClickCount === 3) {
        this.changeSideMenuStatus({
          step: 2,
          classNames: this.menuType,
          selectedMenuHasSubItems: this.selectedMenuHasSubItems
        });
      } else if (currentClasses.includes("menu-hidden") || currentClasses.includes("menu-mobile")) {
        if (!(this.menuClickCount === 1 && !this.selectedMenuHasSubItems)) {
          this.changeSideMenuStatus({
            step: 0,
            classNames: this.menuType,
            selectedMenuHasSubItems: this.selectedMenuHasSubItems
          });
        }
      }
    },
    // Resize
    handleWindowResize: function handleWindowResize(event) {
      if (event && !event.isTrusted) {
        return;
      }
      var nextClasses = this.getMenuClassesForResize(this.menuType);
      this.changeSideMenuStatus({
        step: 0,
        classNames: nextClasses.join(" "),
        selectedMenuHasSubItems: this.selectedMenuHasSubItems
      });
    },
    getMenuClassesForResize: function getMenuClassesForResize(classes) {
      var nextClasses = classes.split(" ").filter(function (x) {
        return x !== "";
      });
      var windowWidth = window.innerWidth;
      if (windowWidth < _constants_config__WEBPACK_IMPORTED_MODULE_0__.menuHiddenBreakpoint) {
        nextClasses.push("menu-mobile");
      } else if (windowWidth < _constants_config__WEBPACK_IMPORTED_MODULE_0__.subHiddenBreakpoint) {
        nextClasses = nextClasses.filter(function (x) {
          return x !== "menu-mobile";
        });
        if (nextClasses.includes("menu-default") && !nextClasses.includes("menu-sub-hidden")) {
          nextClasses.push("menu-sub-hidden");
        }
      } else {
        nextClasses = nextClasses.filter(function (x) {
          return x !== "menu-mobile";
        });
        if (nextClasses.includes("menu-default") && nextClasses.includes("menu-sub-hidden")) {
          nextClasses = nextClasses.filter(function (x) {
            return x !== "menu-sub-hidden";
          });
        }
      }
      return nextClasses;
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({
    menuType: "getMenuType",
    menuClickCount: "getMenuClickCount",
    selectedMenuHasSubItems: "getSelectedMenuHasSubItems"
  })),
  watch: {
    $route: function $route(to, from) {
      if (to.path !== from.path) {
        var toParentUrl = to.path.split("/").filter(function (x) {
          return x !== "";
        })[1];
        if (toParentUrl !== undefined || toParentUrl !== null) {
          this.selectedParentMenu = toParentUrl.toLowerCase();
        } else {
          this.selectedParentMenu = "dashboards";
        }
        this.selectMenu();
        this.toggle();
        this.changeSideMenuStatus({
          step: 0,
          classNames: this.menuType,
          selectedMenuHasSubItems: this.selectedMenuHasSubItems
        });
        window.scrollTo(0, top);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/navs/Topnav.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/navs/Topnav.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_switches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-switches */ "./node_modules/vue-switches/src/switches.vue");
/* harmony import */ var _data_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/notifications */ "./data/notifications.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Svg */ "./components/Svg/index.js");
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/config */ "./constants/config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "menu-icon": _components_Svg__WEBPACK_IMPORTED_MODULE_2__.MenuIcon,
    "mobile-menu-icon": _components_Svg__WEBPACK_IMPORTED_MODULE_2__.MobileMenuIcon,
    switches: vue_switches__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      searchKeyword: "",
      isMobileSearch: false,
      isSearchOver: false,
      fullScreen: false,
      searcheres: [],
      menuHiddenBreakpoint: _constants_config__WEBPACK_IMPORTED_MODULE_3__.menuHiddenBreakpoint,
      searchPath: _constants_config__WEBPACK_IMPORTED_MODULE_3__.searchPath,
      adminRoot: _constants_config__WEBPACK_IMPORTED_MODULE_3__.adminRoot,
      localeOptions: _constants_config__WEBPACK_IMPORTED_MODULE_3__.localeOptions,
      buyUrl: _constants_config__WEBPACK_IMPORTED_MODULE_3__.buyUrl,
      notifications: _data_notifications__WEBPACK_IMPORTED_MODULE_1__["default"],
      isDarkActive: false
    };
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapMutations)(["changeSideMenuStatus", "changeSideMenuForMobile"])), (0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapActions)(["setLang", "signOut", "searchBook", "logoutAsUser"])), {}, {
    search: function search() {
      // this.$router.push(
      //     `${this.searchPath}?search=${this.searchKeyword}`
      // );
      // this.searchKeyword = "";
    },
    searchClick: function searchClick() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(_this.searchKeyword.length > 3)) {
                _context.next = 4;
                break;
              }
              _context.next = 3;
              return _this.searchBook({
                name: _this.searchKeyword
              });
            case 3:
              _this.searcheres = _this.getSearchResult;
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    handleDocumentforMobileSearch: function handleDocumentforMobileSearch() {
      if (!this.isSearchOver) {
        this.isMobileSearch = false;
        this.searchKeyword = "";
      }
    },
    changeLocale: function changeLocale(locale, direction) {
      var currentDirection = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getDirection)().direction;
      if (direction !== currentDirection) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.setDirection)(direction);
      }
      // localStorage.setItem('currentLanguage', locale)
      this.setLang(locale);
    },
    logout: function logout() {
      var _this2 = this;
      //if admin is logged in as some user
      if (localStorage.getItem('monitoring') == 1) {
        this.logoutAsUser().then(function (response) {
          (axios__WEBPACK_IMPORTED_MODULE_5___default().defaults.headers.common) = {
            Authorization: "Bearer ".concat(localStorage.getItem('access_token'))
          };
          _this2.$forceUpdate();
          location.reload();
          _this2.$router.push('/app/user/default');
        });
      } else {
        this.signOut().then(function () {
          _this2.$router.push("/login");
        });
      }
    },
    toggleFullScreen: function toggleFullScreen() {
      var isInFullScreen = this.isInFullScreen();
      var docElm = document.documentElement;
      if (!isInFullScreen) {
        if (docElm.requestFullscreen) {
          docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
          docElm.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
      this.fullScreen = !isInFullScreen;
    },
    isInFullScreen: function isInFullScreen() {
      return document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null;
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapGetters)({
    currentUser: "currentUser",
    getSearchResult: "getSearchResult",
    menuType: "getMenuType",
    menuClickCount: "getMenuClickCount",
    selectedMenuHasSubItems: "getSelectedMenuHasSubItems"
  })),
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener("click", this.handleDocumentforMobileSearch);
  },
  created: function created() {
    var color = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getThemeColor)();
    this.isDarkActive = color.indexOf("dark") > -1;
  },
  mounted: function mounted() {},
  watch: {
    "$i18n.locale": function $i18nLocale(to, from) {
      if (from !== to) {
        this.$router.go(this.$route.path);
      }
    },
    isDarkActive: function isDarkActive(val) {
      var color = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getThemeColor)();
      var isChange = false;
      if (val && color.indexOf("light") > -1) {
        isChange = true;
        color = color.replace("light", "dark");
      } else if (!val && color.indexOf("dark") > -1) {
        isChange = true;
        color = color.replace("dark", "light");
      }
      if (isChange) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.setThemeColor)(color);
        setTimeout(function () {
          window.location.reload();
        }, 500);
      }
    },
    isMobileSearch: function isMobileSearch(val) {
      // if (val) {
      //     document.addEventListener(
      //         "click",
      //         this.handleDocumentforMobileSearch
      //     );
      // } else {
      //     document.removeEventListener(
      //         "click",
      //         this.handleDocumentforMobileSearch
      //     );
      // }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./layouts/AppLayout.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./layouts/AppLayout.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containers_navs_Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/navs/Sidebar */ "./containers/navs/Sidebar.vue");
/* harmony import */ var _containers_navs_Topnav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/navs/Topnav */ "./containers/navs/Topnav.vue");
/* harmony import */ var _containers_navs_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/navs/Footer */ "./containers/navs/Footer.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    topnav: _containers_navs_Topnav__WEBPACK_IMPORTED_MODULE_1__["default"],
    sidebar: _containers_navs_Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"],
    "footer-component": _containers_navs_Footer__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      show: false
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(["getMenuType"])),
  mounted: function mounted() {
    if (!localStorage.getItem('state')) {
      this.profileUser();
    }
    setTimeout(function () {
      document.body.classList.add("default-transition");
    }, 100);
  },
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapActions)(['profileUser']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/AppLayout */ "./layouts/AppLayout.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "app-layout": _layouts_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/Svg/DataListIcon.vue?vue&type=template&id=81b39572&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/Svg/DataListIcon.vue?vue&type=template&id=81b39572& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("svg", {
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 19 19"
    }
  }, [_c("path", {
    staticClass: "view-icon-svg",
    attrs: {
      d: "M17.5,3H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "view-icon-svg",
    attrs: {
      d: "M17.5,10H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "view-icon-svg",
    attrs: {
      d: "M17.5,17H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"
    }
  })]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/Svg/ImageListIcon.vue?vue&type=template&id=7714d4dc&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/Svg/ImageListIcon.vue?vue&type=template&id=7714d4dc& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("svg", {
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 19 19"
    }
  }, [_c("path", {
    staticClass: "view-icon-svg",
    attrs: {
      d: "M7,2V8H1V2H7m.12-1H.88A.87.87,0,0,0,0,1.88V8.12A.87.87,0,0,0,.88,9H7.12A.87.87,0,0,0,8,8.12V1.88A.87.87,0,0,0,7.12,1Z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "view-icon-svg",
    attrs: {
      d: "M17,2V8H11V2h6m.12-1H10.88a.87.87,0,0,0-.88.88V8.12a.87.87,0,0,0,.88.88h6.24A.87.87,0,0,0,18,8.12V1.88A.87.87,0,0,0,17.12,1Z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "view-icon-svg",
    attrs: {
      d: "M7,12v6H1V12H7m.12-1H.88a.87.87,0,0,0-.88.88v6.24A.87.87,0,0,0,.88,19H7.12A.87.87,0,0,0,8,18.12V11.88A.87.87,0,0,0,7.12,11Z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "view-icon-svg",
    attrs: {
      d: "M17,12v6H11V12h6m.12-1H10.88a.87.87,0,0,0-.88.88v6.24a.87.87,0,0,0,.88.88h6.24a.87.87,0,0,0,.88-.88V11.88a.87.87,0,0,0-.88-.88Z"
    }
  })]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/Svg/MenuIcon.vue?vue&type=template&id=3516fb3e&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/Svg/MenuIcon.vue?vue&type=template&id=3516fb3e& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "text-center"
  }, [_c("svg", {
    staticClass: "main",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 9 17"
    }
  }, [_c("rect", {
    attrs: {
      x: "0.48",
      y: "0.5",
      width: "7",
      height: "1"
    }
  }), _vm._v(" "), _c("rect", {
    attrs: {
      x: "0.48",
      y: "7.5",
      width: "7",
      height: "1"
    }
  }), _vm._v(" "), _c("rect", {
    attrs: {
      x: "0.48",
      y: "15.5",
      width: "7",
      height: "1"
    }
  })]), _vm._v(" "), _c("svg", {
    staticClass: "sub",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 18 17"
    }
  }, [_c("rect", {
    attrs: {
      x: "1.56",
      y: "0.5",
      width: "16",
      height: "1"
    }
  }), _vm._v(" "), _c("rect", {
    attrs: {
      x: "1.56",
      y: "7.5",
      width: "16",
      height: "1"
    }
  }), _vm._v(" "), _c("rect", {
    attrs: {
      x: "1.56",
      y: "15.5",
      width: "16",
      height: "1"
    }
  })])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/Svg/MobileMenuIcon.vue?vue&type=template&id=205dbb00&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/Svg/MobileMenuIcon.vue?vue&type=template&id=205dbb00& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("svg", {
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 26 17"
    }
  }, [_c("rect", {
    attrs: {
      x: "0.5",
      y: "0.5",
      width: "25",
      height: "1"
    }
  }), _vm._v(" "), _c("rect", {
    attrs: {
      x: "0.5",
      y: "7.5",
      width: "25",
      height: "1"
    }
  }), _vm._v(" "), _c("rect", {
    attrs: {
      x: "0.5",
      y: "15.5",
      width: "25",
      height: "1"
    }
  })]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/Svg/ThumbListIcon.vue?vue&type=template&id=0b55fcd7&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/Svg/ThumbListIcon.vue?vue&type=template&id=0b55fcd7& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("svg", {
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 19 19"
    }
  }, [_c("path", {
    staticClass: "view-icon-svg",
    attrs: {
      d: "M17.5,3H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "view-icon-svg",
    attrs: {
      d: "M3,2V3H1V2H3m.12-1H.88A.87.87,0,0,0,0,1.88V3.12A.87.87,0,0,0,.88,4H3.12A.87.87,0,0,0,4,3.12V1.88A.87.87,0,0,0,3.12,1Z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "view-icon-svg",
    attrs: {
      d: "M3,9v1H1V9H3m.12-1H.88A.87.87,0,0,0,0,8.88v1.24A.87.87,0,0,0,.88,11H3.12A.87.87,0,0,0,4,10.12V8.88A.87.87,0,0,0,3.12,8Z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "view-icon-svg",
    attrs: {
      d: "M3,16v1H1V16H3m.12-1H.88a.87.87,0,0,0-.88.88v1.24A.87.87,0,0,0,.88,18H3.12A.87.87,0,0,0,4,17.12V15.88A.87.87,0,0,0,3.12,15Z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "view-icon-svg",
    attrs: {
      d: "M17.5,10H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "view-icon-svg",
    attrs: {
      d: "M17.5,17H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"
    }
  })]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/navs/Footer.vue?vue&type=template&id=d528b1ea&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/navs/Footer.vue?vue&type=template&id=d528b1ea& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("footer", {
    staticClass: "page-footer"
  }, [_c("div", {
    staticClass: "footer-content"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm-6"
  }, [_c("p", {
    staticClass: "mb-0 text-muted"
  }, [_vm._v("© AL-ILM 2020 - " + _vm._s(new Date().getFullYear()))])])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/navs/Sidebar.vue?vue&type=template&id=7e9892c8&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/navs/Sidebar.vue?vue&type=template&id=7e9892c8& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "sidebar",
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return function () {}.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "main-menu"
  }, [_c("vue-perfect-scrollbar", {
    staticClass: "scroll",
    attrs: {
      settings: {
        suppressScrollX: true,
        wheelPropagation: false
      }
    }
  }, [_c("ul", {
    staticClass: "list-unstyled"
  }, _vm._l(_vm.menuItems, function (item, index) {
    return _vm.$can(item.meta.action, item.meta.con) ? _c("li", {
      key: "parent_".concat(item.id),
      "class": {
        active: _vm.selectedParentMenu === item.id && _vm.viewingParentMenu === "" || _vm.viewingParentMenu === item.id
      },
      attrs: {
        "data-flag": item.id
      }
    }, [item.newWindow ? _c("a", {
      attrs: {
        href: item.to,
        rel: "noopener noreferrer",
        target: "_blank"
      }
    }, [_c("i", {
      "class": item.icon
    }), _vm._v("\n                        " + _vm._s(_vm.$t(item.label)) + "\n                    ")]) : item.subs && item.subs.length > 0 ? _c("a", {
      attrs: {
        href: "#".concat(item.to)
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.openSubMenu($event, item);
        }
      }
    }, [_c("i", {
      "class": item.icon
    }), _vm._v("\n                        " + _vm._s(_vm.$t(item.label)) + "\n                    ")]) : _c("router-link", {
      attrs: {
        to: item.to
      },
      nativeOn: {
        click: function click($event) {
          return _vm.changeSelectedParentHasNoSubmenu(item.id);
        }
      }
    }, [_c("i", {
      "class": item.icon
    }), _vm._v("\n                        " + _vm._s(_vm.$t(item.label)) + "\n                    ")])], 1) : _vm._e();
  }), 0)])], 1), _vm._v(" "), _c("div", {
    staticClass: "sub-menu"
  }, [_c("vue-perfect-scrollbar", {
    staticClass: "scroll",
    attrs: {
      settings: {
        suppressScrollX: true,
        wheelPropagation: false
      }
    }
  }, _vm._l(_vm.menuItems, function (item, itemIndex) {
    return _vm.$can(item.meta.action, item.meta.con) ? _c("ul", {
      key: "sub_".concat(item.id),
      "class": {
        "list-unstyled": true,
        "d-block": _vm.selectedParentMenu === item.id && _vm.viewingParentMenu === "" || _vm.viewingParentMenu === item.id
      },
      attrs: {
        "data-parent": item.id
      }
    }, _vm._l(item.subs, function (sub, subIndex) {
      return _vm.$can(sub.meta.action, sub.meta.con) ? _c("li", {
        "class": {
          "has-sub-item": sub.subs && sub.subs.length > 0,
          active: _vm.$route.path.indexOf(sub.to) > -1
        }
      }, [sub.newWindow ? _c("a", {
        attrs: {
          href: sub.to,
          rel: "noopener noreferrer",
          target: "_blank"
        }
      }, [_c("i", {
        "class": sub.icon
      }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t(sub.label)))])]) : sub.subs && sub.subs.length > 0 ? [_c("b-link", {
        directives: [{
          name: "b-toggle",
          rawName: "v-b-toggle",
          value: "menu_".concat(itemIndex, "_").concat(subIndex),
          expression: "`menu_${itemIndex}_${subIndex}`"
        }],
        staticClass: "rotate-arrow-icon opacity-50",
        attrs: {
          variant: "link"
        }
      }, [_c("i", {
        staticClass: "simple-icon-arrow-down"
      }), _vm._v(" "), _c("span", {
        staticClass: "d-inline-block"
      }, [_vm._v(_vm._s(_vm.$t(sub.label)))])]), _vm._v(" "), _c("b-collapse", {
        attrs: {
          id: "menu_".concat(itemIndex, "_").concat(subIndex)
        }
      }, [_c("ul", {
        staticClass: "list-unstyled third-level-menu"
      }, _vm._l(sub.subs, function (thirdLevelSub, thirdIndex) {
        return _vm.$can(thirdLevelSub.meta.action, thirdLevelSub.meta.con) ? _c("li", {
          key: "third_".concat(itemIndex, "_").concat(subIndex, "_").concat(thirdIndex),
          "class": {
            "third-level-menu": true,
            active: _vm.$route.path === thirdLevelSub.to
          }
        }, [thirdLevelSub.newWindow ? _c("a", {
          attrs: {
            href: thirdLevelSub.to,
            rel: "noopener noreferrer",
            target: "_blank"
          }
        }, [_c("i", {
          "class": thirdLevelSub.icon
        }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t(thirdLevelSub.label)))])]) : _c("router-link", {
          attrs: {
            to: thirdLevelSub.to
          }
        }, [_c("i", {
          "class": thirdLevelSub.icon
        }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t(thirdLevelSub.label)))])])], 1) : _vm._e();
      }), 0)])] : _c("router-link", {
        attrs: {
          to: sub.to
        }
      }, [_c("i", {
        "class": sub.icon
      }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t(sub.label)))])])], 2) : _vm._e();
    }), 0) : _vm._e();
  }), 0)], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/navs/Topnav.vue?vue&type=template&id=15509b9e&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/navs/Topnav.vue?vue&type=template&id=15509b9e&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("nav", {
    staticClass: "navbar fixed-top"
  }, [_c("div", {
    staticClass: "d-flex align-items-center navbar-left"
  }, [_c("a", {
    staticClass: "menu-button d-none d-md-block",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        $event.stopPropagation();
        return _vm.changeSideMenuStatus({
          step: _vm.menuClickCount + 1,
          classNames: _vm.menuType,
          selectedMenuHasSubItems: _vm.selectedMenuHasSubItems
        });
      }
    }
  }, [_c("menu-icon")], 1), _vm._v(" "), _c("a", {
    staticClass: "menu-button-mobile d-xs-block d-sm-block d-md-none",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        $event.stopPropagation();
        return _vm.changeSideMenuForMobile(_vm.menuType);
      }
    }
  }, [_c("mobile-menu-icon")], 1), _vm._v(" "), _c("div", {
    "class": {
      search: true,
      "mobile-view": _vm.isMobileSearch
    }
  }, [_c("b-input", {
    attrs: {
      placeholder: _vm.$t("menu.search")
    },
    on: {
      input: _vm.searchClick
    },
    nativeOn: {
      keypress: function keypress($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.search.apply(null, arguments);
      }
    },
    model: {
      value: _vm.searchKeyword,
      callback: function callback($$v) {
        _vm.searchKeyword = $$v;
      },
      expression: "searchKeyword"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "search-icon",
    on: {
      click: _vm.searchClick
    }
  }, [_c("i", {
    staticClass: "simple-icon-magnifier"
  })]), _vm._v(" "), _c("div", {
    staticClass: "search-results"
  }, [_vm._l(_vm.searcheres, function (search, key) {
    return [_c("router-link", {
      staticClass: "s_item",
      attrs: {
        to: "/app/book/edit/".concat(search.id)
      }
    }, [_vm._v(_vm._s(search.name) + "\n                    ")])];
  })], 2)], 1)]), _vm._v(" "), _c("router-link", {
    staticClass: "navbar-logo",
    attrs: {
      tag: "a",
      to: _vm.adminRoot
    }
  }, [_c("span", {
    staticClass: "logo d-none d-xs-block"
  }), _vm._v(" "), _c("span", {
    staticClass: "logo-mobile d-block d-xs-none"
  })]), _vm._v(" "), _c("div", {
    staticClass: "navbar-right"
  }, [_c("div", {
    staticClass: "d-inline-block"
  }, [_c("b-dropdown", {
    staticClass: "ml-2",
    attrs: {
      id: "langddm",
      variant: "light",
      size: "sm",
      "toggle-class": "language-button"
    }
  }, [_c("template", {
    slot: "button-content"
  }, [_c("span", {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.$i18n.locale.toUpperCase()))])]), _vm._v(" "), _vm._l(_vm.localeOptions, function (l, index) {
    return _c("b-dropdown-item", {
      key: index,
      on: {
        click: function click($event) {
          return _vm.changeLocale(l.id, l.direction);
        }
      }
    }, [_vm._v(_vm._s(l.name ? l.name : ""))]);
  })], 2)], 1), _vm._v(" "), _c("div", {
    staticClass: "header-icons d-inline-block align-middle"
  }, [_c("div", {
    staticClass: "position-relative d-inline-block"
  }, [_c("b-dropdown", {
    attrs: {
      variant: "empty",
      size: "sm",
      right: "",
      "toggle-class": "header-icon notificationButton",
      "menu-class": "position-absolute mt-3 notificationDropdown",
      "no-caret": ""
    }
  }, [_c("template", {
    slot: "button-content"
  }, [_c("i", {
    staticClass: "simple-icon-bell"
  }), _vm._v(" "), _c("span", {
    staticClass: "count"
  }, [_vm._v("3")])]), _vm._v(" "), _c("vue-perfect-scrollbar", {
    attrs: {
      settings: {
        suppressScrollX: true,
        wheelPropagation: false
      }
    }
  }, _vm._l(_vm.notifications, function (n, index) {
    return _c("div", {
      key: index,
      staticClass: "d-flex flex-row mb-3 pb-3 border-bottom"
    }, [_c("router-link", {
      attrs: {
        tag: "a",
        to: "".concat(_vm.adminRoot, "/pages/product/details")
      }
    }, [_c("img", {
      staticClass: "img-thumbnail list-thumbnail xsmall border-0 rounded-circle",
      attrs: {
        src: n.img,
        alt: n.title
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "pl-3 pr-2"
    }, [_c("router-link", {
      attrs: {
        tag: "a",
        to: "".concat(_vm.adminRoot, "/pages/product/details")
      }
    }, [_c("p", {
      staticClass: "font-weight-medium mb-1"
    }, [_vm._v("\n                                        " + _vm._s(n.title) + "\n                                    ")]), _vm._v(" "), _c("p", {
      staticClass: "text-muted mb-0 text-small"
    }, [_vm._v("\n                                        " + _vm._s(n.date) + "\n                                    ")])])], 1)], 1);
  }), 0)], 2)], 1), _vm._v(" "), _c("div", {
    staticClass: "position-relative d-none d-sm-inline-block"
  }, [_c("div", {
    staticClass: "btn-group"
  }, [_c("b-button", {
    staticClass: "header-icon btn-sm",
    attrs: {
      variant: "empty"
    },
    on: {
      click: _vm.toggleFullScreen
    }
  }, [_c("i", {
    "class": {
      "d-inline-block": true,
      "simple-icon-size-actual": _vm.fullScreen,
      "simple-icon-size-fullscreen": !_vm.fullScreen
    }
  })])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "user d-inline-block"
  }, [_c("b-dropdown", {
    staticClass: "dropdown-menu-right",
    attrs: {
      right: "",
      variant: "empty",
      "toggle-class": "p-0",
      "menu-class": "mt-3",
      "no-caret": ""
    }
  }, [_c("template", {
    slot: "button-content"
  }, [_c("span", {
    staticClass: "name mr-1"
  }, [_vm._v(_vm._s(_vm.currentUser ? _vm.currentUser.name : ""))]), _vm._v(" "), _c("span", [_c("img", {
    attrs: {
      alt: _vm.currentUser ? _vm.currentUser.name : "",
      src: _vm.currentUser ? _vm.currentUser.photo : ""
    }
  })])]), _vm._v(" "), _c("b-dropdown-item", [_vm._v("Account")]), _vm._v(" "), _c("b-dropdown-divider"), _vm._v(" "), _c("b-dropdown-item", {
    on: {
      click: _vm.logout
    }
  }, [_vm._v("Sign out")])], 2)], 1)])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./layouts/AppLayout.vue?vue&type=template&id=13bf8e67&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./layouts/AppLayout.vue?vue&type=template&id=13bf8e67& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
    "class": _vm.getMenuType,
    attrs: {
      id: "app-container"
    }
  }, [_c("topnav"), _vm._v(" "), _c("sidebar"), _vm._v(" "), _c("main", [_c("div", {
    staticClass: "container-fluid"
  }, [_vm._t("default")], 2)]), _vm._v(" "), _c("footer-component")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/index.vue?vue&type=template&id=55b2c665&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/index.vue?vue&type=template&id=55b2c665& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("app-layout", [_c("router-view")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/navs/Topnav.vue?vue&type=style&index=0&id=15509b9e&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/navs/Topnav.vue?vue&type=style&index=0&id=15509b9e&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.navbar .navbar-logo[data-v-15509b9e] {\n    width: 130px;\n    height: 50px;\n}\n.navbar .navbar-logo .logo[data-v-15509b9e] {\n    background: url(/assets/logos/logo-lg.png) no-repeat;\n    background-size: cover;\n    background-position: center;\n}\n.search-results[data-v-15509b9e]{\n    position: absolute;\n    left: 0;\n    right: 0;\n    background: white;\n    -webkit-box-shadow: 0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%);\n            box-shadow: 0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%);\n    border-radius: 10px;\n    overflow: auto;\n    max-height: 200px;\n}\n.s_item[data-v-15509b9e]{\n    padding: 5px 10px;\n    margin: 0px;\n    display: block;\n}\n.s_item[data-v-15509b9e]:hover{\n    background-color: #f5f5f5;\n    color: black;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Default\n */\n/**\n * Bulma\n */\n/**\n * Bootstrap\n */\n.vue-switcher {\n  position: relative;\n  display: inline-block;\n}\n.vue-switcher__label {\n    display: block;\n    font-size: 10px;\n    margin-bottom: 5px;\n}\n.vue-switcher input {\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: 1;\n    cursor: pointer;\n}\n.vue-switcher div {\n    height: 15px;\n    width: 36px;\n    position: relative;\n    border-radius: 30px;\n    display: -ms-flex;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    cursor: pointer;\n    -webkit-transition: linear .2s, background-color linear .2s;\n    transition: linear .2s, background-color linear .2s;\n}\n.vue-switcher div:after {\n      content: '';\n      height: 20px;\n      width: 20px;\n      border-radius: 100px;\n      display: block;\n      -webkit-transition: linear .15s, background-color linear .15s;\n      transition: linear .15s, background-color linear .15s;\n      position: absolute;\n      left: 100%;\n      margin-left: -18px;\n      cursor: pointer;\n      top: -3px;\n      -webkit-box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);\n              box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);\n}\n.vue-switcher--unchecked div {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n.vue-switcher--unchecked div:after {\n      left: 15px;\n}\n.vue-switcher--disabled div {\n    opacity: .3;\n}\n.vue-switcher--disabled input {\n    cursor: not-allowed;\n}\n.vue-switcher--bold div {\n    top: -8px;\n    height: 26px;\n    width: 51px;\n}\n.vue-switcher--bold div:after {\n      margin-left: -24px;\n      top: 3px;\n}\n.vue-switcher--bold--unchecked div:after {\n    left: 28px;\n}\n.vue-switcher--bold .vue-switcher__label span {\n    padding-bottom: 7px;\n    display: inline-block;\n}\n.vue-switcher-theme--default.vue-switcher-color--default div {\n    background-color: #b7b7b7;\n}\n.vue-switcher-theme--default.vue-switcher-color--default div:after {\n      background-color: #9d9d9d;\n}\n.vue-switcher-theme--default.vue-switcher-color--default.vue-switcher--unchecked div {\n    background-color: #aaa;\n}\n.vue-switcher-theme--default.vue-switcher-color--default.vue-switcher--unchecked div:after {\n      background-color: #c4c4c4;\n}\n.vue-switcher-theme--default.vue-switcher-color--blue div {\n    background-color: #77b0c8;\n}\n.vue-switcher-theme--default.vue-switcher-color--blue div:after {\n      background-color: #539bb9;\n}\n.vue-switcher-theme--default.vue-switcher-color--blue.vue-switcher--unchecked div {\n    background-color: #c0dae5;\n}\n.vue-switcher-theme--default.vue-switcher-color--blue.vue-switcher--unchecked div:after {\n      background-color: #77b0c8;\n}\n.vue-switcher-theme--default.vue-switcher-color--red div {\n    background-color: #c87777;\n}\n.vue-switcher-theme--default.vue-switcher-color--red div:after {\n      background-color: #b95353;\n}\n.vue-switcher-theme--default.vue-switcher-color--red.vue-switcher--unchecked div {\n    background-color: #e5c0c0;\n}\n.vue-switcher-theme--default.vue-switcher-color--red.vue-switcher--unchecked div:after {\n      background-color: #c87777;\n}\n.vue-switcher-theme--default.vue-switcher-color--yellow div {\n    background-color: #c9c377;\n}\n.vue-switcher-theme--default.vue-switcher-color--yellow div:after {\n      background-color: #bab353;\n}\n.vue-switcher-theme--default.vue-switcher-color--yellow.vue-switcher--unchecked div {\n    background-color: #e6e3c0;\n}\n.vue-switcher-theme--default.vue-switcher-color--yellow.vue-switcher--unchecked div:after {\n      background-color: #c9c377;\n}\n.vue-switcher-theme--default.vue-switcher-color--orange div {\n    background-color: #c89577;\n}\n.vue-switcher-theme--default.vue-switcher-color--orange div:after {\n      background-color: #b97953;\n}\n.vue-switcher-theme--default.vue-switcher-color--orange.vue-switcher--unchecked div {\n    background-color: #e5cec0;\n}\n.vue-switcher-theme--default.vue-switcher-color--orange.vue-switcher--unchecked div:after {\n      background-color: #c89577;\n}\n.vue-switcher-theme--default.vue-switcher-color--green div {\n    background-color: #77c88d;\n}\n.vue-switcher-theme--default.vue-switcher-color--green div:after {\n      background-color: #53b96e;\n}\n.vue-switcher-theme--default.vue-switcher-color--green.vue-switcher--unchecked div {\n    background-color: #c0e5ca;\n}\n.vue-switcher-theme--default.vue-switcher-color--green.vue-switcher--unchecked div:after {\n      background-color: #77c88d;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--default div {\n    background-color: gainsboro;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--default div:after {\n      background-color: #f5f5f5;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--default.vue-switcher--unchecked div {\n    background-color: #e8e8e8;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--default.vue-switcher--unchecked div:after {\n      background-color: #f5f5f5;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--primary div {\n    background-color: #05ffda;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--primary div:after {\n      background-color: #00d1b2;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--primary.vue-switcher--unchecked div {\n    background-color: #6bffe9;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--primary.vue-switcher--unchecked div:after {\n      background-color: #05ffda;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--blue div {\n    background-color: #5e91e3;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--blue div:after {\n      background-color: #3273dc;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--blue.vue-switcher--unchecked div {\n    background-color: #b5ccf2;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--blue.vue-switcher--unchecked div:after {\n      background-color: #5e91e3;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--red div {\n    background-color: #ff6b89;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--red div:after {\n      background-color: #ff3860;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--red.vue-switcher--unchecked div {\n    background-color: #ffd1da;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--red.vue-switcher--unchecked div:after {\n      background-color: #ff6b89;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--yellow div {\n    background-color: #ffe78a;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--yellow div:after {\n      background-color: #ffdd57;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--yellow.vue-switcher--unchecked div {\n    background-color: #fffcf0;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--yellow.vue-switcher--unchecked div:after {\n      background-color: #ffe78a;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--green div {\n    background-color: #3dde75;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--green div:after {\n      background-color: #22c65b;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--green.vue-switcher--unchecked div {\n    background-color: #94edb3;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--green.vue-switcher--unchecked div:after {\n      background-color: #3dde75;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--default div {\n    background-color: #e6e6e6;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--default div:after {\n      background-color: #f0f0f0;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--default.vue-switcher--unchecked div {\n    background-color: whitesmoke;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--default.vue-switcher--unchecked div:after {\n      background-color: #f0f0f0;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--primary div {\n    background-color: #4f93ce;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--primary div:after {\n      background-color: #337ab7;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--primary.vue-switcher--unchecked div {\n    background-color: #9fc4e4;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--primary.vue-switcher--unchecked div:after {\n      background-color: #4f93ce;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--success div {\n    background-color: #80c780;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--success div:after {\n      background-color: #5cb85c;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--success.vue-switcher--unchecked div {\n    background-color: #c7e6c7;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--success.vue-switcher--unchecked div:after {\n      background-color: #80c780;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--info div {\n    background-color: #85d0e7;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--info div:after {\n      background-color: #5bc0de;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--info.vue-switcher--unchecked div {\n    background-color: #daf1f8;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--info.vue-switcher--unchecked div:after {\n      background-color: #85d0e7;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--warning div {\n    background-color: #f4c37d;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--warning div:after {\n      background-color: #f0ad4e;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--warning.vue-switcher--unchecked div {\n    background-color: #fceedb;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--warning.vue-switcher--unchecked div:after {\n      background-color: #f4c37d;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--danger div {\n    background-color: #d9534f;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--danger div:after {\n      background-color: #c9302c;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--danger.vue-switcher--unchecked div {\n    background-color: #eba5a3;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--danger.vue-switcher--unchecked div:after {\n      background-color: #d9534f;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/navs/Topnav.vue?vue&type=style&index=0&id=15509b9e&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/navs/Topnav.vue?vue&type=style&index=0&id=15509b9e&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topnav_vue_vue_type_style_index_0_id_15509b9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Topnav.vue?vue&type=style&index=0&id=15509b9e&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/navs/Topnav.vue?vue&type=style&index=0&id=15509b9e&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topnav_vue_vue_type_style_index_0_id_15509b9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topnav_vue_vue_type_style_index_0_id_15509b9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_vue_loader_lib_loaders_stylePostLoader_js_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_switches_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../vue-loader/lib/loaders/stylePostLoader.js!../../laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./switches.css?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_vue_loader_lib_loaders_stylePostLoader_js_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_switches_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_vue_loader_lib_loaders_stylePostLoader_js_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_switches_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./components/Svg/DataListIcon.vue":
/*!*****************************************!*\
  !*** ./components/Svg/DataListIcon.vue ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataListIcon_vue_vue_type_template_id_81b39572___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataListIcon.vue?vue&type=template&id=81b39572& */ "./components/Svg/DataListIcon.vue?vue&type=template&id=81b39572&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _DataListIcon_vue_vue_type_template_id_81b39572___WEBPACK_IMPORTED_MODULE_0__.render,
  _DataListIcon_vue_vue_type_template_id_81b39572___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/Svg/DataListIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Svg/ImageListIcon.vue":
/*!******************************************!*\
  !*** ./components/Svg/ImageListIcon.vue ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageListIcon_vue_vue_type_template_id_7714d4dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageListIcon.vue?vue&type=template&id=7714d4dc& */ "./components/Svg/ImageListIcon.vue?vue&type=template&id=7714d4dc&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _ImageListIcon_vue_vue_type_template_id_7714d4dc___WEBPACK_IMPORTED_MODULE_0__.render,
  _ImageListIcon_vue_vue_type_template_id_7714d4dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/Svg/ImageListIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Svg/MenuIcon.vue":
/*!*************************************!*\
  !*** ./components/Svg/MenuIcon.vue ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuIcon_vue_vue_type_template_id_3516fb3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuIcon.vue?vue&type=template&id=3516fb3e& */ "./components/Svg/MenuIcon.vue?vue&type=template&id=3516fb3e&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _MenuIcon_vue_vue_type_template_id_3516fb3e___WEBPACK_IMPORTED_MODULE_0__.render,
  _MenuIcon_vue_vue_type_template_id_3516fb3e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/Svg/MenuIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Svg/MobileMenuIcon.vue":
/*!*******************************************!*\
  !*** ./components/Svg/MobileMenuIcon.vue ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobileMenuIcon_vue_vue_type_template_id_205dbb00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileMenuIcon.vue?vue&type=template&id=205dbb00& */ "./components/Svg/MobileMenuIcon.vue?vue&type=template&id=205dbb00&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _MobileMenuIcon_vue_vue_type_template_id_205dbb00___WEBPACK_IMPORTED_MODULE_0__.render,
  _MobileMenuIcon_vue_vue_type_template_id_205dbb00___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/Svg/MobileMenuIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Svg/ThumbListIcon.vue":
/*!******************************************!*\
  !*** ./components/Svg/ThumbListIcon.vue ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ThumbListIcon_vue_vue_type_template_id_0b55fcd7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThumbListIcon.vue?vue&type=template&id=0b55fcd7& */ "./components/Svg/ThumbListIcon.vue?vue&type=template&id=0b55fcd7&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _ThumbListIcon_vue_vue_type_template_id_0b55fcd7___WEBPACK_IMPORTED_MODULE_0__.render,
  _ThumbListIcon_vue_vue_type_template_id_0b55fcd7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/Svg/ThumbListIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./containers/navs/Footer.vue":
/*!************************************!*\
  !*** ./containers/navs/Footer.vue ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_d528b1ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=d528b1ea& */ "./containers/navs/Footer.vue?vue&type=template&id=d528b1ea&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./containers/navs/Footer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_d528b1ea___WEBPACK_IMPORTED_MODULE_0__.render,
  _Footer_vue_vue_type_template_id_d528b1ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "containers/navs/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./containers/navs/Sidebar.vue":
/*!*************************************!*\
  !*** ./containers/navs/Sidebar.vue ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_7e9892c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=7e9892c8& */ "./containers/navs/Sidebar.vue?vue&type=template&id=7e9892c8&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./containers/navs/Sidebar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_7e9892c8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Sidebar_vue_vue_type_template_id_7e9892c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "containers/navs/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./containers/navs/Topnav.vue":
/*!************************************!*\
  !*** ./containers/navs/Topnav.vue ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Topnav_vue_vue_type_template_id_15509b9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Topnav.vue?vue&type=template&id=15509b9e&scoped=true& */ "./containers/navs/Topnav.vue?vue&type=template&id=15509b9e&scoped=true&");
/* harmony import */ var _Topnav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Topnav.vue?vue&type=script&lang=js& */ "./containers/navs/Topnav.vue?vue&type=script&lang=js&");
/* harmony import */ var _Topnav_vue_vue_type_style_index_0_id_15509b9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Topnav.vue?vue&type=style&index=0&id=15509b9e&scoped=true&lang=css& */ "./containers/navs/Topnav.vue?vue&type=style&index=0&id=15509b9e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Topnav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Topnav_vue_vue_type_template_id_15509b9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Topnav_vue_vue_type_template_id_15509b9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "15509b9e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "containers/navs/Topnav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./layouts/AppLayout.vue":
/*!*******************************!*\
  !*** ./layouts/AppLayout.vue ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppLayout_vue_vue_type_template_id_13bf8e67___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLayout.vue?vue&type=template&id=13bf8e67& */ "./layouts/AppLayout.vue?vue&type=template&id=13bf8e67&");
/* harmony import */ var _AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppLayout.vue?vue&type=script&lang=js& */ "./layouts/AppLayout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppLayout_vue_vue_type_template_id_13bf8e67___WEBPACK_IMPORTED_MODULE_0__.render,
  _AppLayout_vue_vue_type_template_id_13bf8e67___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "layouts/AppLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-switches/src/switches.vue":
/*!****************************************************!*\
  !*** ./node_modules/vue-switches/src/switches.vue ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _switches_vue_vue_type_template_id_f8bdc788___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switches.vue?vue&type=template&id=f8bdc788& */ "./node_modules/vue-switches/src/switches.vue?vue&type=template&id=f8bdc788&");
/* harmony import */ var _switches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switches.vue?vue&type=script&lang=js& */ "./node_modules/vue-switches/src/switches.vue?vue&type=script&lang=js&");
/* harmony import */ var _dist_switches_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../dist/switches.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _switches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _switches_vue_vue_type_template_id_f8bdc788___WEBPACK_IMPORTED_MODULE_0__.render,
  _switches_vue_vue_type_template_id_f8bdc788___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-switches/src/switches.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-switches/src/switches.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-switches/src/switches.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'switches',

    props: {
        typeBold: {
            default: false
        },

        value: {
            default: false
        },

        disabled: {
            default: false
        },

        label: {
            default: ''
        },

        textEnabled: {
            default: ''
        },

        textDisabled: {
            default: ''
        },

        color: {
            default: 'default'
        },

        theme: {
            default: 'default'
        },

        emitOnMount: {
            default: true
        }
    },

    mounted () {
        if(this.emitOnMount) {
            this.$emit('input', this.value)
        }
    },

    methods: {
        trigger (e) {
            this.$emit('input', e.target.checked)
        }
    },

    computed: {
        classObject () {

            const { color, value, theme, typeBold, disabled } = this;

            return {
                'vue-switcher' : true,
                ['vue-switcher--unchecked'] : !value,
                ['vue-switcher--disabled'] : disabled,
                ['vue-switcher--bold']: typeBold,
                ['vue-switcher--bold--unchecked']: typeBold && !value,
                [`vue-switcher-theme--${theme}`] : color,
                [`vue-switcher-color--${color}`] : color,
            };

        },

        shouldShowLabel () {
            return this.label !== '' || this.textEnabled !== '' || this.textDisabled !== '';
        }
    }
});



/***/ }),

/***/ "./views/app/index.vue":
/*!*****************************!*\
  !*** ./views/app/index.vue ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_55b2c665___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=55b2c665& */ "./views/app/index.vue?vue&type=template&id=55b2c665&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./views/app/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_55b2c665___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_55b2c665___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "views/app/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./containers/navs/Footer.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./containers/navs/Footer.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/navs/Footer.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./containers/navs/Sidebar.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./containers/navs/Sidebar.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/navs/Sidebar.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./containers/navs/Topnav.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./containers/navs/Topnav.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Topnav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Topnav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/navs/Topnav.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Topnav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./layouts/AppLayout.vue?vue&type=script&lang=js&":
/*!********************************************************!*\
  !*** ./layouts/AppLayout.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./layouts/AppLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./views/app/index.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./views/app/index.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Svg/DataListIcon.vue?vue&type=template&id=81b39572&":
/*!************************************************************************!*\
  !*** ./components/Svg/DataListIcon.vue?vue&type=template&id=81b39572& ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DataListIcon_vue_vue_type_template_id_81b39572___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DataListIcon_vue_vue_type_template_id_81b39572___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DataListIcon_vue_vue_type_template_id_81b39572___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DataListIcon.vue?vue&type=template&id=81b39572& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/Svg/DataListIcon.vue?vue&type=template&id=81b39572&");


/***/ }),

/***/ "./components/Svg/ImageListIcon.vue?vue&type=template&id=7714d4dc&":
/*!*************************************************************************!*\
  !*** ./components/Svg/ImageListIcon.vue?vue&type=template&id=7714d4dc& ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageListIcon_vue_vue_type_template_id_7714d4dc___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageListIcon_vue_vue_type_template_id_7714d4dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageListIcon_vue_vue_type_template_id_7714d4dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ImageListIcon.vue?vue&type=template&id=7714d4dc& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/Svg/ImageListIcon.vue?vue&type=template&id=7714d4dc&");


/***/ }),

/***/ "./components/Svg/MenuIcon.vue?vue&type=template&id=3516fb3e&":
/*!********************************************************************!*\
  !*** ./components/Svg/MenuIcon.vue?vue&type=template&id=3516fb3e& ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuIcon_vue_vue_type_template_id_3516fb3e___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuIcon_vue_vue_type_template_id_3516fb3e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuIcon_vue_vue_type_template_id_3516fb3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MenuIcon.vue?vue&type=template&id=3516fb3e& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/Svg/MenuIcon.vue?vue&type=template&id=3516fb3e&");


/***/ }),

/***/ "./components/Svg/MobileMenuIcon.vue?vue&type=template&id=205dbb00&":
/*!**************************************************************************!*\
  !*** ./components/Svg/MobileMenuIcon.vue?vue&type=template&id=205dbb00& ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMenuIcon_vue_vue_type_template_id_205dbb00___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMenuIcon_vue_vue_type_template_id_205dbb00___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMenuIcon_vue_vue_type_template_id_205dbb00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MobileMenuIcon.vue?vue&type=template&id=205dbb00& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/Svg/MobileMenuIcon.vue?vue&type=template&id=205dbb00&");


/***/ }),

/***/ "./components/Svg/ThumbListIcon.vue?vue&type=template&id=0b55fcd7&":
/*!*************************************************************************!*\
  !*** ./components/Svg/ThumbListIcon.vue?vue&type=template&id=0b55fcd7& ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ThumbListIcon_vue_vue_type_template_id_0b55fcd7___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ThumbListIcon_vue_vue_type_template_id_0b55fcd7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ThumbListIcon_vue_vue_type_template_id_0b55fcd7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ThumbListIcon.vue?vue&type=template&id=0b55fcd7& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/Svg/ThumbListIcon.vue?vue&type=template&id=0b55fcd7&");


/***/ }),

/***/ "./containers/navs/Footer.vue?vue&type=template&id=d528b1ea&":
/*!*******************************************************************!*\
  !*** ./containers/navs/Footer.vue?vue&type=template&id=d528b1ea& ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_d528b1ea___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_d528b1ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_d528b1ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=template&id=d528b1ea& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/navs/Footer.vue?vue&type=template&id=d528b1ea&");


/***/ }),

/***/ "./containers/navs/Sidebar.vue?vue&type=template&id=7e9892c8&":
/*!********************************************************************!*\
  !*** ./containers/navs/Sidebar.vue?vue&type=template&id=7e9892c8& ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_7e9892c8___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_7e9892c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_7e9892c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=template&id=7e9892c8& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/navs/Sidebar.vue?vue&type=template&id=7e9892c8&");


/***/ }),

/***/ "./containers/navs/Topnav.vue?vue&type=template&id=15509b9e&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./containers/navs/Topnav.vue?vue&type=template&id=15509b9e&scoped=true& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topnav_vue_vue_type_template_id_15509b9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topnav_vue_vue_type_template_id_15509b9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topnav_vue_vue_type_template_id_15509b9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Topnav.vue?vue&type=template&id=15509b9e&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/navs/Topnav.vue?vue&type=template&id=15509b9e&scoped=true&");


/***/ }),

/***/ "./layouts/AppLayout.vue?vue&type=template&id=13bf8e67&":
/*!**************************************************************!*\
  !*** ./layouts/AppLayout.vue?vue&type=template&id=13bf8e67& ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_13bf8e67___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_13bf8e67___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_13bf8e67___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppLayout.vue?vue&type=template&id=13bf8e67& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./layouts/AppLayout.vue?vue&type=template&id=13bf8e67&");


/***/ }),

/***/ "./views/app/index.vue?vue&type=template&id=55b2c665&":
/*!************************************************************!*\
  !*** ./views/app/index.vue?vue&type=template&id=55b2c665& ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_55b2c665___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_55b2c665___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_55b2c665___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=55b2c665& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/index.vue?vue&type=template&id=55b2c665&");


/***/ }),

/***/ "./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_vue_loader_lib_loaders_stylePostLoader_js_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_switches_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader/dist/cjs.js!../../laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../vue-loader/lib/loaders/stylePostLoader.js!../../laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./switches.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./containers/navs/Topnav.vue?vue&type=style&index=0&id=15509b9e&scoped=true&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./containers/navs/Topnav.vue?vue&type=style&index=0&id=15509b9e&scoped=true&lang=css& ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topnav_vue_vue_type_style_index_0_id_15509b9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Topnav.vue?vue&type=style&index=0&id=15509b9e&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/navs/Topnav.vue?vue&type=style&index=0&id=15509b9e&scoped=true&lang=css&");


/***/ }),

/***/ "./node_modules/vue-switches/src/switches.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./node_modules/vue-switches/src/switches.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_switches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib/index.js??vue-loader-options!./switches.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-switches/src/switches.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_switches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-switches/src/switches.vue?vue&type=template&id=f8bdc788&":
/*!***********************************************************************************!*\
  !*** ./node_modules/vue-switches/src/switches.vue?vue&type=template&id=f8bdc788& ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_vue_loader_lib_index_js_vue_loader_options_switches_vue_vue_type_template_id_f8bdc788___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_vue_loader_lib_index_js_vue_loader_options_switches_vue_vue_type_template_id_f8bdc788___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_vue_loader_lib_index_js_vue_loader_options_switches_vue_vue_type_template_id_f8bdc788___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../vue-loader/lib/index.js??vue-loader-options!./switches.vue?vue&type=template&id=f8bdc788& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-switches/src/switches.vue?vue&type=template&id=f8bdc788&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-switches/src/switches.vue?vue&type=template&id=f8bdc788&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-switches/src/switches.vue?vue&type=template&id=f8bdc788& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c("label", { class: _vm.classObject }, [
    _vm.shouldShowLabel
      ? _c("span", { staticClass: "vue-switcher__label" }, [
          _vm.label
            ? _c("span", { domProps: { textContent: _vm._s(_vm.label) } })
            : _vm._e(),
          _vm._v(" "),
          !_vm.label && _vm.value
            ? _c("span", { domProps: { textContent: _vm._s(_vm.textEnabled) } })
            : _vm._e(),
          _vm._v(" "),
          !_vm.label && !_vm.value
            ? _c("span", {
                domProps: { textContent: _vm._s(_vm.textDisabled) },
              })
            : _vm._e(),
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("input", {
      attrs: { type: "checkbox", disabled: _vm.disabled },
      domProps: { checked: _vm.value },
      on: { change: _vm.trigger },
    }),
    _vm._v(" "),
    _c("div"),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);