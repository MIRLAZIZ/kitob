"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["knowledge"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/knowledge/Knowledge.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/knowledge/Knowledge.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants/config */ "./constants/config.js");
/* harmony import */ var _KnowledgeListPageHeading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KnowledgeListPageHeading */ "./views/app/pages/knowledge/KnowledgeListPageHeading.vue");
/* harmony import */ var _KnowledgeListPageListing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KnowledgeListPageListing */ "./views/app/pages/knowledge/KnowledgeListPageListing.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "list-page-heading": _KnowledgeListPageHeading__WEBPACK_IMPORTED_MODULE_1__["default"],
    "list-page-listing": _KnowledgeListPageListing__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      isLoad: false,
      apiBase: _constants_config__WEBPACK_IMPORTED_MODULE_0__.apiUrl + "/user",
      displayMode: "list",
      sort: {
        column: "title",
        label: "Product Name"
      },
      page: 1,
      perPage: 4,
      search: "",
      from: 0,
      to: 0,
      total: 0,
      lastPage: 0,
      items: [],
      selectedItems: []
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapActions)(['getKnowledgesList', 'destroyKnowledge'])), {}, {
    changeDisplayMode: function changeDisplayMode(displayType) {
      this.displayMode = displayType;
    },
    changePageSize: function changePageSize(perPage) {
      this.page = 1;
      this.perPage = perPage;
    },
    changeOrderBy: function changeOrderBy(sort) {
      this.sort = sort;
    },
    searchChange: function searchChange(val) {
      this.search = val;
      this.page = 1;
    },
    selectAll: function selectAll(isToggle) {
      if (this.selectedItems.length >= this.items.length) {
        if (isToggle) this.selectedItems = [];
      } else {
        this.selectedItems = this.items.map(function (x) {
          return x.id;
        });
      }
    },
    keymap: function keymap(event) {
      switch (event.srcKey) {
        case "select":
          this.selectAll(false);
          break;
        case "undo":
          this.selectedItems = [];
          break;
      }
    },
    getIndex: function getIndex(value, arr, prop) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i][prop] === value) {
          return i;
        }
      }
      return -1;
    },
    toggleItem: function toggleItem(event, itemId) {
      if (event.shiftKey && this.selectedItems.length > 0) {
        var _this$selectedItems;
        var itemsForToggle = this.items;
        var start = this.getIndex(itemId, itemsForToggle, "id");
        var end = this.getIndex(this.selectedItems[this.selectedItems.length - 1], itemsForToggle, "id");
        itemsForToggle = itemsForToggle.slice(Math.min(start, end), Math.max(start, end) + 1);
        (_this$selectedItems = this.selectedItems).push.apply(_this$selectedItems, _toConsumableArray(itemsForToggle.map(function (item) {
          return item.id;
        })));
      } else {
        if (this.selectedItems.includes(itemId)) {
          this.selectedItems = this.selectedItems.filter(function (x) {
            return x !== itemId;
          });
        } else this.selectedItems.push(itemId);
      }
    },
    handleContextMenu: function handleContextMenu(vnode) {
      if (!this.selectedItems.includes(vnode.key)) {
        this.selectedItems = [vnode.key];
      }
    },
    onContextMenuAction: function onContextMenuAction(action) {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var theID;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(action == 'delete')) {
                _context.next = 16;
                break;
              }
              if (!confirm('Are you sure?')) {
                _context.next = 16;
                break;
              }
              theID = _this.selectedItems[0];
              _context.next = 5;
              return _this.destroyKnowledge(theID);
            case 5:
              if (!_this.getKnowledgeAlertMsg.success) {
                _context.next = 16;
                break;
              }
              _context.next = 8;
              return _this.getKnowledgesList();
            case 8:
              _this.total = _this.knowledgesList.result.total;
              _this.from = _this.knowledgesList.result.from;
              _this.to = _this.knowledgesList.result.to;
              _this.items = _this.knowledgesList.result.data.map(function (x) {
                return _objectSpread(_objectSpread({}, x), {}, {
                  img: x.photo
                });
              });
              _this.perPage = _this.knowledgesList.result.per_page;
              _this.selectedItems = [];
              _this.lastPage = _this.knowledgesList.result.last_page;
              _this.isLoad = true;
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    changePage: function changePage(pageNum) {
      this.page = pageNum;
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(['knowledgesList', 'getKnowledgeAlertMsg'])), {}, {
    isSelectedAll: function isSelectedAll() {
      return this.selectedItems.length >= this.items.length;
    },
    isAnyItemSelected: function isAnyItemSelected() {
      return this.selectedItems.length > 0 && this.selectedItems.length < this.items.length;
    },
    apiUrl: function apiUrl() {
      return "".concat(this.apiBase, "?sort=").concat(this.sort.column, "&page=").concat(this.page, "&per_page=").concat(this.perPage, "&search=").concat(this.search);
    }
  }),
  watch: {
    search: function search() {
      this.page = 1;
    },
    apiUrl: function apiUrl() {
      this.getKnowledgesList();
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _this2.getKnowledgesList();
          case 2:
            _this2.total = _this2.knowledgesList.result.total;
            _this2.from = _this2.knowledgesList.result.from;
            _this2.to = _this2.knowledgesList.result.to;
            _this2.items = _this2.knowledgesList.result.data.map(function (x) {
              return _objectSpread(_objectSpread({}, x), {}, {
                img: x.photo
              });
            });
            _this2.perPage = _this2.knowledgesList.result.per_page;
            _this2.selectedItems = [];
            _this2.lastPage = _this2.knowledgesList.result.last_page;
            _this2.isLoad = true;
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/knowledge/KnowledgeDataListItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/knowledge/KnowledgeDataListItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants/config */ "./constants/config.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['data', 'selectedItems'],
  methods: {
    editKnowledge: function editKnowledge(event, id) {
      this.$router.push("".concat(_constants_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/knowledge/edit/").concat(id));
    },
    upppercase: function upppercase(str) {
      return str.toUpperCase();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/knowledge/KnowledgeListPageHeading.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/knowledge/KnowledgeListPageHeading.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/Svg */ "./components/Svg/index.js");
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../constants/config */ "./constants/config.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "data-list-icon": _components_Svg__WEBPACK_IMPORTED_MODULE_0__.DataListIcon,
    "thumb-list-icon": _components_Svg__WEBPACK_IMPORTED_MODULE_0__.ThumbListIcon,
    "image-list-icon": _components_Svg__WEBPACK_IMPORTED_MODULE_0__.ImageListIcon
  },
  props: ["title", "selectAll", "isSelectedAll", "isAnyItemSelected", "keymap", "displayMode", "changeDisplayMode", "changeOrderBy", "changePageSize", "sort", "searchChange", "from", "to", "total", "perPage"],
  data: function data() {
    return {
      categories: [{
        label: "Cakes",
        value: "Cakes"
      }, {
        label: "Cupcakes",
        value: "Cupcakes"
      }, {
        label: "Desserts",
        value: "Desserts"
      }],
      statuses: [{
        text: "ON HOLD",
        value: "ON HOLD"
      }, {
        text: "PROCESSED",
        value: "PROCESSED"
      }],
      sortOptions: [{
        column: "title",
        label: "Product Name"
      }, {
        column: "category",
        label: "Category"
      }, {
        column: "status",
        label: "Status"
      }],
      pageSizes: [4, 8, 12]
    };
  },
  methods: {
    gotoAddKnowledge: function gotoAddKnowledge() {
      this.$router.push("".concat(_constants_config__WEBPACK_IMPORTED_MODULE_1__.adminRoot, "/knowledge/add"));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/knowledge/KnowledgeListPageListing.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/knowledge/KnowledgeListPageListing.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KnowledgeDataListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KnowledgeDataListItem */ "./views/app/pages/knowledge/KnowledgeDataListItem.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "data-list-item": _KnowledgeDataListItem__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ["displayMode", "items", "selectedItems", "toggleItem", "lastPage", "perPage", "page", "changePage", "handleContextMenu", "onContextMenuAction"],
  methods: {
    linkGen: function linkGen(pageNum) {
      return "#page-" + pageNum;
    }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/knowledge/Knowledge.vue?vue&type=template&id=6c7ae956&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/knowledge/Knowledge.vue?vue&type=template&id=6c7ae956& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-row", [_c("b-colxx", {
    staticClass: "disable-text-selection"
  }, [_c("list-page-heading", {
    attrs: {
      title: _vm.$t("menu.knowledge"),
      selectAll: _vm.selectAll,
      isSelectedAll: _vm.isSelectedAll,
      isAnyItemSelected: _vm.isAnyItemSelected,
      keymap: _vm.keymap,
      displayMode: _vm.displayMode,
      changeDisplayMode: _vm.changeDisplayMode,
      changeOrderBy: _vm.changeOrderBy,
      changePageSize: _vm.changePageSize,
      sort: _vm.sort,
      searchChange: _vm.searchChange,
      from: _vm.from,
      to: _vm.to,
      total: _vm.total,
      perPage: _vm.perPage
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "separator mb-5"
  }), _vm._v(" "), _vm.isLoad ? [_c("list-page-listing", {
    attrs: {
      displayMode: _vm.displayMode,
      items: _vm.items,
      selectedItems: _vm.selectedItems,
      toggleItem: _vm.toggleItem,
      lastPage: _vm.lastPage,
      perPage: _vm.perPage,
      page: _vm.page,
      changePage: _vm.changePage,
      handleContextMenu: _vm.handleContextMenu,
      onContextMenuAction: _vm.onContextMenuAction
    }
  })] : [_c("div", {
    staticClass: "loading"
  })]], 2)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/knowledge/KnowledgeDataListItem.vue?vue&type=template&id=f623fde0&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/knowledge/KnowledgeDataListItem.vue?vue&type=template&id=f623fde0& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-card", {
    "class": {
      "d-flex flex-row": true,
      active: _vm.selectedItems.includes(_vm.data.id)
    },
    attrs: {
      "no-body": ""
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.editKnowledge($event, _vm.data.id);
      }
    }
  }, [_c("div", {
    staticClass: "pl-2 d-flex flex-grow-1 min-width-zero"
  }, [_c("div", {
    staticClass: "card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"
  }, [_c("router-link", {
    staticClass: "w-40 w-sm-100",
    attrs: {
      to: "?p=".concat(_vm.data.id)
    }
  }, [_c("p", {
    staticClass: "list-item-heading mb-0 truncate"
  }, [_vm._v(_vm._s(_vm.data.title))])]), _vm._v(" "), _c("div", {
    staticClass: "w-15 w-sm-100"
  }, [_c("b-badge", {
    attrs: {
      pill: "",
      variant: _vm.data.statusColor
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.upppercase(_vm.data.status)) + "\n                ")])], 1)], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/knowledge/KnowledgeListPageHeading.vue?vue&type=template&id=28297a90&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/knowledge/KnowledgeListPageHeading.vue?vue&type=template&id=28297a90& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-row", [_c("b-colxx", {
    attrs: {
      xxs: "12"
    }
  }, [_c("h1", [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c("div", {
    staticClass: "top-right-button-container"
  }, [_c("b-button", {
    staticClass: "top-right-button",
    attrs: {
      variant: "primary",
      size: "lg"
    },
    on: {
      click: _vm.gotoAddKnowledge
    }
  }, [_vm._v(_vm._s(_vm.$t("pages.add-new")))])], 1), _vm._v(" "), _c("piaf-breadcrumb"), _vm._v(" "), _c("div", {
    staticClass: "mb-2 mt-2"
  }, [_c("b-button", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.displayOptions",
      modifiers: {
        displayOptions: true
      }
    }],
    staticClass: "pt-0 pl-0 d-inline-block d-md-none",
    attrs: {
      variant: "empty"
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("pages.display-options")) + "\n        "), _c("i", {
    staticClass: "simple-icon-arrow-down align-middle"
  })]), _vm._v(" "), _c("b-collapse", {
    staticClass: "d-md-block",
    attrs: {
      id: "displayOptions"
    }
  }, [_c("div", {
    staticClass: "d-block d-md-inline-block pt-1"
  }, [_c("b-dropdown", {
    staticClass: "mr-1 float-md-left btn-group",
    attrs: {
      id: "ddown1",
      text: "".concat(_vm.$t("pages.orderby"), " ").concat(_vm.sort.label),
      variant: "outline-dark",
      size: "xs"
    }
  }, _vm._l(_vm.sortOptions, function (order, index) {
    return _c("b-dropdown-item", {
      key: index,
      on: {
        click: function click($event) {
          return _vm.changeOrderBy(order);
        }
      }
    }, [_vm._v(_vm._s(order.label))]);
  }), 1), _vm._v(" "), _c("div", {
    staticClass: "search-sm d-inline-block float-md-left mr-1 align-top"
  }, [_c("b-input", {
    attrs: {
      placeholder: _vm.$t("menu.search")
    },
    on: {
      input: function input(val) {
        return _vm.searchChange(val);
      }
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "float-md-right pt-1"
  }, [_c("span", {
    staticClass: "text-muted text-small mr-1 mb-2"
  }, [_vm._v(_vm._s(_vm.from) + "-" + _vm._s(_vm.to) + " of " + _vm._s(_vm.total))]), _vm._v(" "), _c("b-dropdown", {
    staticClass: "d-inline-block",
    attrs: {
      id: "ddown2",
      right: "",
      text: "".concat(_vm.perPage),
      variant: "outline-dark",
      size: "xs"
    }
  }, _vm._l(_vm.pageSizes, function (size, index) {
    return _c("b-dropdown-item", {
      key: index,
      on: {
        click: function click($event) {
          return _vm.changePageSize(size);
        }
      }
    }, [_vm._v(_vm._s(size))]);
  }), 1)], 1)])], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/knowledge/KnowledgeListPageListing.vue?vue&type=template&id=37c4a612&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/knowledge/KnowledgeListPageListing.vue?vue&type=template&id=37c4a612& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.displayMode === "list" ? _c("b-row", {
    key: "list"
  }, _vm._l(_vm.items, function (item, index) {
    return _c("b-colxx", {
      key: index,
      staticClass: "mb-3",
      attrs: {
        xxs: "12",
        id: item.id
      }
    }, [_c("data-list-item", {
      directives: [{
        name: "contextmenu",
        rawName: "v-contextmenu:contextmenu",
        arg: "contextmenu"
      }],
      key: item.id,
      attrs: {
        data: item,
        "selected-items": _vm.selectedItems
      },
      on: {
        "toggle-item": _vm.toggleItem
      }
    })], 1);
  }), 1) : _vm._e(), _vm._v(" "), _vm.lastPage > 1 ? _c("b-row", [_c("b-colxx", {
    attrs: {
      xxs: "12"
    }
  }, [_c("b-pagination-nav", {
    attrs: {
      "number-of-pages": _vm.lastPage,
      "link-gen": _vm.linkGen,
      value: _vm.page,
      "per-page": _vm.perPage,
      align: "center"
    },
    on: {
      change: function change(a) {
        return _vm.changePage(a);
      }
    },
    scopedSlots: _vm._u([{
      key: "next-text",
      fn: function fn() {
        return [_c("i", {
          staticClass: "simple-icon-arrow-right"
        })];
      },
      proxy: true
    }, {
      key: "prev-text",
      fn: function fn() {
        return [_c("i", {
          staticClass: "simple-icon-arrow-left"
        })];
      },
      proxy: true
    }, {
      key: "first-text",
      fn: function fn() {
        return [_c("i", {
          staticClass: "simple-icon-control-start"
        })];
      },
      proxy: true
    }, {
      key: "last-text",
      fn: function fn() {
        return [_c("i", {
          staticClass: "simple-icon-control-end"
        })];
      },
      proxy: true
    }], null, false, 2104427419)
  })], 1)], 1) : _vm._e(), _vm._v(" "), _c("v-contextmenu", {
    ref: "contextmenu",
    on: {
      contextmenu: _vm.handleContextMenu
    }
  }, [_c("v-contextmenu-item", {
    on: {
      click: function click($event) {
        return _vm.onContextMenuAction("delete");
      }
    }
  }, [_c("i", {
    staticClass: "simple-icon-trash"
  }), _vm._v(" "), _c("span", [_vm._v("Delete")])])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


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

/***/ "./views/app/pages/knowledge/Knowledge.vue":
/*!*************************************************!*\
  !*** ./views/app/pages/knowledge/Knowledge.vue ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Knowledge_vue_vue_type_template_id_6c7ae956___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Knowledge.vue?vue&type=template&id=6c7ae956& */ "./views/app/pages/knowledge/Knowledge.vue?vue&type=template&id=6c7ae956&");
/* harmony import */ var _Knowledge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Knowledge.vue?vue&type=script&lang=js& */ "./views/app/pages/knowledge/Knowledge.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Knowledge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Knowledge_vue_vue_type_template_id_6c7ae956___WEBPACK_IMPORTED_MODULE_0__.render,
  _Knowledge_vue_vue_type_template_id_6c7ae956___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "views/app/pages/knowledge/Knowledge.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./views/app/pages/knowledge/KnowledgeDataListItem.vue":
/*!*************************************************************!*\
  !*** ./views/app/pages/knowledge/KnowledgeDataListItem.vue ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KnowledgeDataListItem_vue_vue_type_template_id_f623fde0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KnowledgeDataListItem.vue?vue&type=template&id=f623fde0& */ "./views/app/pages/knowledge/KnowledgeDataListItem.vue?vue&type=template&id=f623fde0&");
/* harmony import */ var _KnowledgeDataListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KnowledgeDataListItem.vue?vue&type=script&lang=js& */ "./views/app/pages/knowledge/KnowledgeDataListItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _KnowledgeDataListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _KnowledgeDataListItem_vue_vue_type_template_id_f623fde0___WEBPACK_IMPORTED_MODULE_0__.render,
  _KnowledgeDataListItem_vue_vue_type_template_id_f623fde0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "views/app/pages/knowledge/KnowledgeDataListItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./views/app/pages/knowledge/KnowledgeListPageHeading.vue":
/*!****************************************************************!*\
  !*** ./views/app/pages/knowledge/KnowledgeListPageHeading.vue ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KnowledgeListPageHeading_vue_vue_type_template_id_28297a90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KnowledgeListPageHeading.vue?vue&type=template&id=28297a90& */ "./views/app/pages/knowledge/KnowledgeListPageHeading.vue?vue&type=template&id=28297a90&");
/* harmony import */ var _KnowledgeListPageHeading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KnowledgeListPageHeading.vue?vue&type=script&lang=js& */ "./views/app/pages/knowledge/KnowledgeListPageHeading.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _KnowledgeListPageHeading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _KnowledgeListPageHeading_vue_vue_type_template_id_28297a90___WEBPACK_IMPORTED_MODULE_0__.render,
  _KnowledgeListPageHeading_vue_vue_type_template_id_28297a90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "views/app/pages/knowledge/KnowledgeListPageHeading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./views/app/pages/knowledge/KnowledgeListPageListing.vue":
/*!****************************************************************!*\
  !*** ./views/app/pages/knowledge/KnowledgeListPageListing.vue ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KnowledgeListPageListing_vue_vue_type_template_id_37c4a612___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KnowledgeListPageListing.vue?vue&type=template&id=37c4a612& */ "./views/app/pages/knowledge/KnowledgeListPageListing.vue?vue&type=template&id=37c4a612&");
/* harmony import */ var _KnowledgeListPageListing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KnowledgeListPageListing.vue?vue&type=script&lang=js& */ "./views/app/pages/knowledge/KnowledgeListPageListing.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _KnowledgeListPageListing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _KnowledgeListPageListing_vue_vue_type_template_id_37c4a612___WEBPACK_IMPORTED_MODULE_0__.render,
  _KnowledgeListPageListing_vue_vue_type_template_id_37c4a612___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "views/app/pages/knowledge/KnowledgeListPageListing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./views/app/pages/knowledge/Knowledge.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./views/app/pages/knowledge/Knowledge.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Knowledge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Knowledge.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/knowledge/Knowledge.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Knowledge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./views/app/pages/knowledge/KnowledgeDataListItem.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./views/app/pages/knowledge/KnowledgeDataListItem.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeDataListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KnowledgeDataListItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/knowledge/KnowledgeDataListItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeDataListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./views/app/pages/knowledge/KnowledgeListPageHeading.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./views/app/pages/knowledge/KnowledgeListPageHeading.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeListPageHeading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KnowledgeListPageHeading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/knowledge/KnowledgeListPageHeading.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeListPageHeading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./views/app/pages/knowledge/KnowledgeListPageListing.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./views/app/pages/knowledge/KnowledgeListPageListing.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeListPageListing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KnowledgeListPageListing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/knowledge/KnowledgeListPageListing.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeListPageListing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./views/app/pages/knowledge/Knowledge.vue?vue&type=template&id=6c7ae956&":
/*!********************************************************************************!*\
  !*** ./views/app/pages/knowledge/Knowledge.vue?vue&type=template&id=6c7ae956& ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Knowledge_vue_vue_type_template_id_6c7ae956___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Knowledge_vue_vue_type_template_id_6c7ae956___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Knowledge_vue_vue_type_template_id_6c7ae956___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Knowledge.vue?vue&type=template&id=6c7ae956& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/knowledge/Knowledge.vue?vue&type=template&id=6c7ae956&");


/***/ }),

/***/ "./views/app/pages/knowledge/KnowledgeDataListItem.vue?vue&type=template&id=f623fde0&":
/*!********************************************************************************************!*\
  !*** ./views/app/pages/knowledge/KnowledgeDataListItem.vue?vue&type=template&id=f623fde0& ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeDataListItem_vue_vue_type_template_id_f623fde0___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeDataListItem_vue_vue_type_template_id_f623fde0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeDataListItem_vue_vue_type_template_id_f623fde0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KnowledgeDataListItem.vue?vue&type=template&id=f623fde0& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/knowledge/KnowledgeDataListItem.vue?vue&type=template&id=f623fde0&");


/***/ }),

/***/ "./views/app/pages/knowledge/KnowledgeListPageHeading.vue?vue&type=template&id=28297a90&":
/*!***********************************************************************************************!*\
  !*** ./views/app/pages/knowledge/KnowledgeListPageHeading.vue?vue&type=template&id=28297a90& ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeListPageHeading_vue_vue_type_template_id_28297a90___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeListPageHeading_vue_vue_type_template_id_28297a90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeListPageHeading_vue_vue_type_template_id_28297a90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KnowledgeListPageHeading.vue?vue&type=template&id=28297a90& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/knowledge/KnowledgeListPageHeading.vue?vue&type=template&id=28297a90&");


/***/ }),

/***/ "./views/app/pages/knowledge/KnowledgeListPageListing.vue?vue&type=template&id=37c4a612&":
/*!***********************************************************************************************!*\
  !*** ./views/app/pages/knowledge/KnowledgeListPageListing.vue?vue&type=template&id=37c4a612& ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeListPageListing_vue_vue_type_template_id_37c4a612___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeListPageListing_vue_vue_type_template_id_37c4a612___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeListPageListing_vue_vue_type_template_id_37c4a612___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KnowledgeListPageListing.vue?vue&type=template&id=37c4a612& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/knowledge/KnowledgeListPageListing.vue?vue&type=template&id=37c4a612&");


/***/ })

}]);