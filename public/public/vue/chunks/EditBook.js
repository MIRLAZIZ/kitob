(self["webpackChunk"] = self["webpackChunk"] || []).push([["EditBook"],{

/***/ "./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.cjs.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.cjs.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 * vue-treeselect v0.4.0 | (c) 2017-2019 Riophae Lee
 * Released under the MIT License.
 * https://vue-treeselect.js.org/
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_317__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_317__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_317__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_317__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_317__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_317__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_317__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_317__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_317__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_317__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_317__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_317__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_317__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_317__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_317__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_317__(__nested_webpack_require_317__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! fuzzysearch */ "./node_modules/fuzzysearch/index.js");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! watch-size */ "./node_modules/watch-size/index.es.mjs");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! is-promise */ "./node_modules/is-promise/index.js");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! lodash/once */ "./node_modules/lodash/once.js");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! lodash/identity */ "./node_modules/lodash/identity.js");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! lodash/constant */ "./node_modules/lodash/constant.js");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! lodash/last */ "./node_modules/lodash/last.js");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! babel-helper-vue-jsx-merge-props */ "./node_modules/babel-helper-vue-jsx-merge-props/index.js");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_5479__) {

"use strict";
__nested_webpack_require_5479__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __nested_webpack_require_5479__(0);
var slicedToArray_default = /*#__PURE__*/__nested_webpack_require_5479__.n(slicedToArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/toConsumableArray"
var toConsumableArray_ = __nested_webpack_require_5479__(1);
var toConsumableArray_default = /*#__PURE__*/__nested_webpack_require_5479__.n(toConsumableArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __nested_webpack_require_5479__(2);
var defineProperty_default = /*#__PURE__*/__nested_webpack_require_5479__.n(defineProperty_);

// EXTERNAL MODULE: external "fuzzysearch"
var external_fuzzysearch_ = __nested_webpack_require_5479__(3);
var external_fuzzysearch_default = /*#__PURE__*/__nested_webpack_require_5479__.n(external_fuzzysearch_);

// EXTERNAL MODULE: external "lodash/noop"
var noop_ = __nested_webpack_require_5479__(4);
var noop_default = /*#__PURE__*/__nested_webpack_require_5479__.n(noop_);

// CONCATENATED MODULE: ./src/utils/noop.js

// CONCATENATED MODULE: ./src/utils/warning.js


var warning_warning =  false ? 0 : function warning(checker, complainer) {
  if (!checker()) {
    var _console;

    var message = ['[Vue-Treeselect Warning]'].concat(complainer());

    (_console = console).error.apply(_console, toConsumableArray_default()(message));
  }
};
// CONCATENATED MODULE: ./src/utils/onLeftClick.js
function onLeftClick(mouseDownHandler) {
  return function onMouseDown(evt) {
    if (evt.type === 'mousedown' && evt.button === 0) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      mouseDownHandler.call.apply(mouseDownHandler, [this, evt].concat(args));
    }
  };
}
// CONCATENATED MODULE: ./src/utils/scrollIntoView.js
function scrollIntoView($scrollingEl, $focusedEl) {
  var scrollingReact = $scrollingEl.getBoundingClientRect();
  var focusedRect = $focusedEl.getBoundingClientRect();
  var overScroll = $focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > scrollingReact.bottom) {
    $scrollingEl.scrollTop = Math.min($focusedEl.offsetTop + $focusedEl.clientHeight - $scrollingEl.offsetHeight + overScroll, $scrollingEl.scrollHeight);
  } else if (focusedRect.top - overScroll < scrollingReact.top) {
    $scrollingEl.scrollTop = Math.max($focusedEl.offsetTop - overScroll, 0);
  }
}
// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __nested_webpack_require_5479__(5);
var debounce_default = /*#__PURE__*/__nested_webpack_require_5479__.n(debounce_);

// CONCATENATED MODULE: ./src/utils/debounce.js

// EXTERNAL MODULE: external "watch-size"
var external_watch_size_ = __nested_webpack_require_5479__(6);
var external_watch_size_default = /*#__PURE__*/__nested_webpack_require_5479__.n(external_watch_size_);

// CONCATENATED MODULE: ./src/utils/removeFromArray.js
function removeFromArray(arr, elem) {
  var idx = arr.indexOf(elem);
  if (idx !== -1) arr.splice(idx, 1);
}
// CONCATENATED MODULE: ./src/utils/watchSize.js


var intervalId;
var registered = [];
var INTERVAL_DURATION = 100;

function run() {
  intervalId = setInterval(function () {
    registered.forEach(test);
  }, INTERVAL_DURATION);
}

function stop() {
  clearInterval(intervalId);
  intervalId = null;
}

function test(item) {
  var $el = item.$el,
      listener = item.listener,
      lastWidth = item.lastWidth,
      lastHeight = item.lastHeight;
  var width = $el.offsetWidth;
  var height = $el.offsetHeight;

  if (lastWidth !== width || lastHeight !== height) {
    item.lastWidth = width;
    item.lastHeight = height;
    listener({
      width: width,
      height: height
    });
  }
}

function watchSizeForIE9($el, listener) {
  var item = {
    $el: $el,
    listener: listener,
    lastWidth: null,
    lastHeight: null
  };

  var unwatch = function unwatch() {
    removeFromArray(registered, item);
    if (!registered.length) stop();
  };

  registered.push(item);
  test(item);
  run();
  return unwatch;
}

function watchSize($el, listener) {
  var isIE9 = document.documentMode === 9;
  var locked = true;

  var wrappedListener = function wrappedListener() {
    return locked || listener.apply(void 0, arguments);
  };

  var implementation = isIE9 ? watchSizeForIE9 : external_watch_size_default.a;
  var removeSizeWatcher = implementation($el, wrappedListener);
  locked = false;
  return removeSizeWatcher;
}
// CONCATENATED MODULE: ./src/utils/setupResizeAndScrollEventListeners.js
function findScrollParents($el) {
  var $scrollParents = [];
  var $parent = $el.parentNode;

  while ($parent && $parent.nodeName !== 'BODY' && $parent.nodeType === document.ELEMENT_NODE) {
    if (isScrollElment($parent)) $scrollParents.push($parent);
    $parent = $parent.parentNode;
  }

  $scrollParents.push(window);
  return $scrollParents;
}

function isScrollElment($el) {
  var _getComputedStyle = getComputedStyle($el),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /(auto|scroll|overlay)/.test(overflow + overflowY + overflowX);
}

function setupResizeAndScrollEventListeners($el, listener) {
  var $scrollParents = findScrollParents($el);
  window.addEventListener('resize', listener, {
    passive: true
  });
  $scrollParents.forEach(function (scrollParent) {
    scrollParent.addEventListener('scroll', listener, {
      passive: true
    });
  });
  return function removeEventListeners() {
    window.removeEventListener('resize', listener, {
      passive: true
    });
    $scrollParents.forEach(function ($scrollParent) {
      $scrollParent.removeEventListener('scroll', listener, {
        passive: true
      });
    });
  };
}
// CONCATENATED MODULE: ./src/utils/isNaN.js
function isNaN_isNaN(x) {
  return x !== x;
}
// EXTERNAL MODULE: external "is-promise"
var external_is_promise_ = __nested_webpack_require_5479__(7);
var external_is_promise_default = /*#__PURE__*/__nested_webpack_require_5479__.n(external_is_promise_);

// CONCATENATED MODULE: ./src/utils/isPromise.js

// EXTERNAL MODULE: external "lodash/once"
var once_ = __nested_webpack_require_5479__(8);
var once_default = /*#__PURE__*/__nested_webpack_require_5479__.n(once_);

// CONCATENATED MODULE: ./src/utils/once.js

// EXTERNAL MODULE: external "lodash/identity"
var identity_ = __nested_webpack_require_5479__(9);
var identity_default = /*#__PURE__*/__nested_webpack_require_5479__.n(identity_);

// CONCATENATED MODULE: ./src/utils/identity.js

// EXTERNAL MODULE: external "lodash/constant"
var constant_ = __nested_webpack_require_5479__(10);
var constant_default = /*#__PURE__*/__nested_webpack_require_5479__.n(constant_);

// CONCATENATED MODULE: ./src/utils/constant.js

// CONCATENATED MODULE: ./src/utils/createMap.js
var createMap = function createMap() {
  return Object.create(null);
};
// EXTERNAL MODULE: external "@babel/runtime/helpers/typeof"
var typeof_ = __nested_webpack_require_5479__(11);
var typeof_default = /*#__PURE__*/__nested_webpack_require_5479__.n(typeof_);

// CONCATENATED MODULE: ./src/utils/deepExtend.js


function isPlainObject(value) {
  if (value == null || typeof_default()(value) !== 'object') return false;
  return Object.getPrototypeOf(value) === Object.prototype;
}

function copy(obj, key, value) {
  if (isPlainObject(value)) {
    obj[key] || (obj[key] = {});
    deepExtend(obj[key], value);
  } else {
    obj[key] = value;
  }
}

function deepExtend(target, source) {
  if (isPlainObject(source)) {
    var keys = Object.keys(source);

    for (var i = 0, len = keys.length; i < len; i++) {
      copy(target, keys[i], source[keys[i]]);
    }
  }

  return target;
}
// EXTERNAL MODULE: external "lodash/last"
var last_ = __nested_webpack_require_5479__(12);
var last_default = /*#__PURE__*/__nested_webpack_require_5479__.n(last_);

// CONCATENATED MODULE: ./src/utils/last.js

// CONCATENATED MODULE: ./src/utils/includes.js
function includes(arrOrStr, elem) {
  return arrOrStr.indexOf(elem) !== -1;
}
// CONCATENATED MODULE: ./src/utils/find.js
function find(arr, predicate, ctx) {
  for (var i = 0, len = arr.length; i < len; i++) {
    if (predicate.call(ctx, arr[i], i, arr)) return arr[i];
  }

  return undefined;
}
// CONCATENATED MODULE: ./src/utils/quickDiff.js
function quickDiff(arrA, arrB) {
  if (arrA.length !== arrB.length) return true;

  for (var i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) return true;
  }

  return false;
}
// CONCATENATED MODULE: ./src/utils/index.js



















// CONCATENATED MODULE: ./src/constants.js
var NO_PARENT_NODE = null;
var UNCHECKED = 0;
var INDETERMINATE = 1;
var CHECKED = 2;
var ALL_CHILDREN = 'ALL_CHILDREN';
var ALL_DESCENDANTS = 'ALL_DESCENDANTS';
var LEAF_CHILDREN = 'LEAF_CHILDREN';
var LEAF_DESCENDANTS = 'LEAF_DESCENDANTS';
var LOAD_ROOT_OPTIONS = 'LOAD_ROOT_OPTIONS';
var LOAD_CHILDREN_OPTIONS = 'LOAD_CHILDREN_OPTIONS';
var ASYNC_SEARCH = 'ASYNC_SEARCH';
var ALL = 'ALL';
var BRANCH_PRIORITY = 'BRANCH_PRIORITY';
var LEAF_PRIORITY = 'LEAF_PRIORITY';
var ALL_WITH_INDETERMINATE = 'ALL_WITH_INDETERMINATE';
var ORDER_SELECTED = 'ORDER_SELECTED';
var LEVEL = 'LEVEL';
var INDEX = 'INDEX';
var KEY_CODES = {
  BACKSPACE: 8,
  ENTER: 13,
  ESCAPE: 27,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46
};
var INPUT_DEBOUNCE_DELAY =  false ? 0 : 200;
var MIN_INPUT_WIDTH = 5;
var MENU_BUFFER = 40;
// CONCATENATED MODULE: ./src/mixins/treeselectMixin.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function sortValueByIndex(a, b) {
  var i = 0;

  do {
    if (a.level < i) return -1;
    if (b.level < i) return 1;
    if (a.index[i] !== b.index[i]) return a.index[i] - b.index[i];
    i++;
  } while (true);
}

function sortValueByLevel(a, b) {
  return a.level === b.level ? sortValueByIndex(a, b) : a.level - b.level;
}

function createAsyncOptionsStates() {
  return {
    isLoaded: false,
    isLoading: false,
    loadingError: ''
  };
}

function stringifyOptionPropValue(value) {
  if (typeof value === 'string') return value;
  if (typeof value === 'number' && !isNaN_isNaN(value)) return value + '';
  return '';
}

function match(enableFuzzyMatch, needle, haystack) {
  return enableFuzzyMatch ? external_fuzzysearch_default()(needle, haystack) : includes(haystack, needle);
}

function getErrorMessage(err) {
  return err.message || String(err);
}

var instanceId = 0;
/* harmony default export */ var treeselectMixin = ({
  provide: function provide() {
    return {
      instance: this
    };
  },
  props: {
    allowClearingDisabled: {
      type: Boolean,
      default: false
    },
    allowSelectingDisabledDescendants: {
      type: Boolean,
      default: false
    },
    alwaysOpen: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    async: {
      type: Boolean,
      default: false
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    autoLoadRootOptions: {
      type: Boolean,
      default: true
    },
    autoDeselectAncestors: {
      type: Boolean,
      default: false
    },
    autoDeselectDescendants: {
      type: Boolean,
      default: false
    },
    autoSelectAncestors: {
      type: Boolean,
      default: false
    },
    autoSelectDescendants: {
      type: Boolean,
      default: false
    },
    backspaceRemoves: {
      type: Boolean,
      default: true
    },
    beforeClearAll: {
      type: Function,
      default: constant_default()(true)
    },
    branchNodesFirst: {
      type: Boolean,
      default: false
    },
    cacheOptions: {
      type: Boolean,
      default: true
    },
    clearable: {
      type: Boolean,
      default: true
    },
    clearAllText: {
      type: String,
      default: 'Clear all'
    },
    clearOnSelect: {
      type: Boolean,
      default: false
    },
    clearValueText: {
      type: String,
      default: 'Clear value'
    },
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    defaultExpandLevel: {
      type: Number,
      default: 0
    },
    defaultOptions: {
      default: false
    },
    deleteRemoves: {
      type: Boolean,
      default: true
    },
    delimiter: {
      type: String,
      default: ','
    },
    flattenSearchResults: {
      type: Boolean,
      default: false
    },
    disableBranchNodes: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    disableFuzzyMatching: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    instanceId: {
      default: function _default() {
        return "".concat(instanceId++, "$$");
      },
      type: [String, Number]
    },
    joinValues: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: Infinity
    },
    limitText: {
      type: Function,
      default: function limitTextDefault(count) {
        return "and ".concat(count, " more");
      }
    },
    loadingText: {
      type: String,
      default: 'Loading...'
    },
    loadOptions: {
      type: Function
    },
    matchKeys: {
      type: Array,
      default: constant_default()(['label'])
    },
    maxHeight: {
      type: Number,
      default: 300
    },
    multiple: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    noChildrenText: {
      type: String,
      default: 'No sub-options.'
    },
    noOptionsText: {
      type: String,
      default: 'No options available.'
    },
    noResultsText: {
      type: String,
      default: 'No results found...'
    },
    normalizer: {
      type: Function,
      default: identity_default.a
    },
    openDirection: {
      type: String,
      default: 'auto',
      validator: function validator(value) {
        var acceptableValues = ['auto', 'top', 'bottom', 'above', 'below'];
        return includes(acceptableValues, value);
      }
    },
    openOnClick: {
      type: Boolean,
      default: true
    },
    openOnFocus: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array
    },
    placeholder: {
      type: String,
      default: 'Select...'
    },
    required: {
      type: Boolean,
      default: false
    },
    retryText: {
      type: String,
      default: 'Retry?'
    },
    retryTitle: {
      type: String,
      default: 'Click to retry'
    },
    searchable: {
      type: Boolean,
      default: true
    },
    searchNested: {
      type: Boolean,
      default: false
    },
    searchPromptText: {
      type: String,
      default: 'Type to search...'
    },
    showCount: {
      type: Boolean,
      default: false
    },
    showCountOf: {
      type: String,
      default: ALL_CHILDREN,
      validator: function validator(value) {
        var acceptableValues = [ALL_CHILDREN, ALL_DESCENDANTS, LEAF_CHILDREN, LEAF_DESCENDANTS];
        return includes(acceptableValues, value);
      }
    },
    showCountOnSearch: null,
    sortValueBy: {
      type: String,
      default: ORDER_SELECTED,
      validator: function validator(value) {
        var acceptableValues = [ORDER_SELECTED, LEVEL, INDEX];
        return includes(acceptableValues, value);
      }
    },
    tabIndex: {
      type: Number,
      default: 0
    },
    value: null,
    valueConsistsOf: {
      type: String,
      default: BRANCH_PRIORITY,
      validator: function validator(value) {
        var acceptableValues = [ALL, BRANCH_PRIORITY, LEAF_PRIORITY, ALL_WITH_INDETERMINATE];
        return includes(acceptableValues, value);
      }
    },
    valueFormat: {
      type: String,
      default: 'id'
    },
    zIndex: {
      type: [Number, String],
      default: 999
    }
  },
  data: function data() {
    return {
      trigger: {
        isFocused: false,
        searchQuery: ''
      },
      menu: {
        isOpen: false,
        current: null,
        lastScrollPosition: 0,
        placement: 'bottom'
      },
      forest: {
        normalizedOptions: [],
        nodeMap: createMap(),
        checkedStateMap: createMap(),
        selectedNodeIds: this.extractCheckedNodeIdsFromValue(),
        selectedNodeMap: createMap()
      },
      rootOptionsStates: createAsyncOptionsStates(),
      localSearch: {
        active: false,
        noResults: true,
        countMap: createMap()
      },
      remoteSearch: createMap()
    };
  },
  computed: {
    selectedNodes: function selectedNodes() {
      return this.forest.selectedNodeIds.map(this.getNode);
    },
    internalValue: function internalValue() {
      var _this = this;

      var internalValue;

      if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === ALL) {
        internalValue = this.forest.selectedNodeIds.slice();
      } else if (this.valueConsistsOf === BRANCH_PRIORITY) {
        internalValue = this.forest.selectedNodeIds.filter(function (id) {
          var node = _this.getNode(id);

          if (node.isRootNode) return true;
          return !_this.isSelected(node.parentNode);
        });
      } else if (this.valueConsistsOf === LEAF_PRIORITY) {
        internalValue = this.forest.selectedNodeIds.filter(function (id) {
          var node = _this.getNode(id);

          if (node.isLeaf) return true;
          return node.children.length === 0;
        });
      } else if (this.valueConsistsOf === ALL_WITH_INDETERMINATE) {
        var _internalValue;

        var indeterminateNodeIds = [];
        internalValue = this.forest.selectedNodeIds.slice();
        this.selectedNodes.forEach(function (selectedNode) {
          selectedNode.ancestors.forEach(function (ancestor) {
            if (includes(indeterminateNodeIds, ancestor.id)) return;
            if (includes(internalValue, ancestor.id)) return;
            indeterminateNodeIds.push(ancestor.id);
          });
        });

        (_internalValue = internalValue).push.apply(_internalValue, indeterminateNodeIds);
      }

      if (this.sortValueBy === LEVEL) {
        internalValue.sort(function (a, b) {
          return sortValueByLevel(_this.getNode(a), _this.getNode(b));
        });
      } else if (this.sortValueBy === INDEX) {
        internalValue.sort(function (a, b) {
          return sortValueByIndex(_this.getNode(a), _this.getNode(b));
        });
      }

      return internalValue;
    },
    hasValue: function hasValue() {
      return this.internalValue.length > 0;
    },
    single: function single() {
      return !this.multiple;
    },
    visibleOptionIds: function visibleOptionIds() {
      var _this2 = this;

      var visibleOptionIds = [];
      this.traverseAllNodesByIndex(function (node) {
        if (!_this2.localSearch.active || _this2.shouldOptionBeIncludedInSearchResult(node)) {
          visibleOptionIds.push(node.id);
        }

        if (node.isBranch && !_this2.shouldExpand(node)) {
          return false;
        }
      });
      return visibleOptionIds;
    },
    hasVisibleOptions: function hasVisibleOptions() {
      return this.visibleOptionIds.length !== 0;
    },
    showCountOnSearchComputed: function showCountOnSearchComputed() {
      return typeof this.showCountOnSearch === 'boolean' ? this.showCountOnSearch : this.showCount;
    },
    hasBranchNodes: function hasBranchNodes() {
      return this.forest.normalizedOptions.some(function (rootNode) {
        return rootNode.isBranch;
      });
    },
    shouldFlattenOptions: function shouldFlattenOptions() {
      return this.localSearch.active && this.flattenSearchResults;
    }
  },
  watch: {
    alwaysOpen: function alwaysOpen(newValue) {
      if (newValue) this.openMenu();else this.closeMenu();
    },
    branchNodesFirst: function branchNodesFirst() {
      this.initialize();
    },
    disabled: function disabled(newValue) {
      if (newValue && this.menu.isOpen) this.closeMenu();else if (!newValue && !this.menu.isOpen && this.alwaysOpen) this.openMenu();
    },
    flat: function flat() {
      this.initialize();
    },
    internalValue: function internalValue(newValue, oldValue) {
      var hasChanged = quickDiff(newValue, oldValue);
      if (hasChanged) this.$emit('input', this.getValue(), this.getInstanceId());
    },
    matchKeys: function matchKeys() {
      this.initialize();
    },
    multiple: function multiple(newValue) {
      if (newValue) this.buildForestState();
    },
    options: {
      handler: function handler() {
        if (this.async) return;
        this.initialize();
        this.rootOptionsStates.isLoaded = Array.isArray(this.options);
      },
      deep: true,
      immediate: true
    },
    'trigger.searchQuery': function triggerSearchQuery() {
      if (this.async) {
        this.handleRemoteSearch();
      } else {
        this.handleLocalSearch();
      }

      this.$emit('search-change', this.trigger.searchQuery, this.getInstanceId());
    },
    value: function value() {
      var nodeIdsFromValue = this.extractCheckedNodeIdsFromValue();
      var hasChanged = quickDiff(nodeIdsFromValue, this.internalValue);
      if (hasChanged) this.fixSelectedNodeIds(nodeIdsFromValue);
    }
  },
  methods: {
    verifyProps: function verifyProps() {
      var _this3 = this;

      warning_warning(function () {
        return _this3.async ? _this3.searchable : true;
      }, function () {
        return 'For async search mode, the value of "searchable" prop must be true.';
      });

      if (this.options == null && !this.loadOptions) {
        warning_warning(function () {
          return false;
        }, function () {
          return 'Are you meant to dynamically load options? You need to use "loadOptions" prop.';
        });
      }

      if (this.flat) {
        warning_warning(function () {
          return _this3.multiple;
        }, function () {
          return 'You are using flat mode. But you forgot to add "multiple=true"?';
        });
      }

      if (!this.flat) {
        var propNames = ['autoSelectAncestors', 'autoSelectDescendants', 'autoDeselectAncestors', 'autoDeselectDescendants'];
        propNames.forEach(function (propName) {
          warning_warning(function () {
            return !_this3[propName];
          }, function () {
            return "\"".concat(propName, "\" only applies to flat mode.");
          });
        });
      }
    },
    resetFlags: function resetFlags() {
      this._blurOnSelect = false;
    },
    initialize: function initialize() {
      var options = this.async ? this.getRemoteSearchEntry().options : this.options;

      if (Array.isArray(options)) {
        var prevNodeMap = this.forest.nodeMap;
        this.forest.nodeMap = createMap();
        this.keepDataOfSelectedNodes(prevNodeMap);
        this.forest.normalizedOptions = this.normalize(NO_PARENT_NODE, options, prevNodeMap);
        this.fixSelectedNodeIds(this.internalValue);
      } else {
        this.forest.normalizedOptions = [];
      }
    },
    getInstanceId: function getInstanceId() {
      return this.instanceId == null ? this.id : this.instanceId;
    },
    getValue: function getValue() {
      var _this4 = this;

      if (this.valueFormat === 'id') {
        return this.multiple ? this.internalValue.slice() : this.internalValue[0];
      }

      var rawNodes = this.internalValue.map(function (id) {
        return _this4.getNode(id).raw;
      });
      return this.multiple ? rawNodes : rawNodes[0];
    },
    getNode: function getNode(nodeId) {
      warning_warning(function () {
        return nodeId != null;
      }, function () {
        return "Invalid node id: ".concat(nodeId);
      });
      if (nodeId == null) return null;
      return nodeId in this.forest.nodeMap ? this.forest.nodeMap[nodeId] : this.createFallbackNode(nodeId);
    },
    createFallbackNode: function createFallbackNode(id) {
      var raw = this.extractNodeFromValue(id);
      var label = this.enhancedNormalizer(raw).label || "".concat(id, " (unknown)");
      var fallbackNode = {
        id: id,
        label: label,
        ancestors: [],
        parentNode: NO_PARENT_NODE,
        isFallbackNode: true,
        isRootNode: true,
        isLeaf: true,
        isBranch: false,
        isDisabled: false,
        isNew: false,
        index: [-1],
        level: 0,
        raw: raw
      };
      return this.$set(this.forest.nodeMap, id, fallbackNode);
    },
    extractCheckedNodeIdsFromValue: function extractCheckedNodeIdsFromValue() {
      var _this5 = this;

      if (this.value == null) return [];

      if (this.valueFormat === 'id') {
        return this.multiple ? this.value.slice() : [this.value];
      }

      return (this.multiple ? this.value : [this.value]).map(function (node) {
        return _this5.enhancedNormalizer(node);
      }).map(function (node) {
        return node.id;
      });
    },
    extractNodeFromValue: function extractNodeFromValue(id) {
      var _this6 = this;

      var defaultNode = {
        id: id
      };

      if (this.valueFormat === 'id') {
        return defaultNode;
      }

      var valueArray = this.multiple ? Array.isArray(this.value) ? this.value : [] : this.value ? [this.value] : [];
      var matched = find(valueArray, function (node) {
        return node && _this6.enhancedNormalizer(node).id === id;
      });
      return matched || defaultNode;
    },
    fixSelectedNodeIds: function fixSelectedNodeIds(nodeIdListOfPrevValue) {
      var _this7 = this;

      var nextSelectedNodeIds = [];

      if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === ALL) {
        nextSelectedNodeIds = nodeIdListOfPrevValue;
      } else if (this.valueConsistsOf === BRANCH_PRIORITY) {
        nodeIdListOfPrevValue.forEach(function (nodeId) {
          nextSelectedNodeIds.push(nodeId);

          var node = _this7.getNode(nodeId);

          if (node.isBranch) _this7.traverseDescendantsBFS(node, function (descendant) {
            nextSelectedNodeIds.push(descendant.id);
          });
        });
      } else if (this.valueConsistsOf === LEAF_PRIORITY) {
        var map = createMap();
        var queue = nodeIdListOfPrevValue.slice();

        while (queue.length) {
          var nodeId = queue.shift();
          var node = this.getNode(nodeId);
          nextSelectedNodeIds.push(nodeId);
          if (node.isRootNode) continue;
          if (!(node.parentNode.id in map)) map[node.parentNode.id] = node.parentNode.children.length;
          if (--map[node.parentNode.id] === 0) queue.push(node.parentNode.id);
        }
      } else if (this.valueConsistsOf === ALL_WITH_INDETERMINATE) {
        var _map = createMap();

        var _queue = nodeIdListOfPrevValue.filter(function (nodeId) {
          var node = _this7.getNode(nodeId);

          return node.isLeaf || node.children.length === 0;
        });

        while (_queue.length) {
          var _nodeId = _queue.shift();

          var _node = this.getNode(_nodeId);

          nextSelectedNodeIds.push(_nodeId);
          if (_node.isRootNode) continue;
          if (!(_node.parentNode.id in _map)) _map[_node.parentNode.id] = _node.parentNode.children.length;
          if (--_map[_node.parentNode.id] === 0) _queue.push(_node.parentNode.id);
        }
      }

      var hasChanged = quickDiff(this.forest.selectedNodeIds, nextSelectedNodeIds);
      if (hasChanged) this.forest.selectedNodeIds = nextSelectedNodeIds;
      this.buildForestState();
    },
    keepDataOfSelectedNodes: function keepDataOfSelectedNodes(prevNodeMap) {
      var _this8 = this;

      this.forest.selectedNodeIds.forEach(function (id) {
        if (!prevNodeMap[id]) return;

        var node = _objectSpread({}, prevNodeMap[id], {
          isFallbackNode: true
        });

        _this8.$set(_this8.forest.nodeMap, id, node);
      });
    },
    isSelected: function isSelected(node) {
      return this.forest.selectedNodeMap[node.id] === true;
    },
    traverseDescendantsBFS: function traverseDescendantsBFS(parentNode, callback) {
      if (!parentNode.isBranch) return;
      var queue = parentNode.children.slice();

      while (queue.length) {
        var currNode = queue[0];
        if (currNode.isBranch) queue.push.apply(queue, toConsumableArray_default()(currNode.children));
        callback(currNode);
        queue.shift();
      }
    },
    traverseDescendantsDFS: function traverseDescendantsDFS(parentNode, callback) {
      var _this9 = this;

      if (!parentNode.isBranch) return;
      parentNode.children.forEach(function (child) {
        _this9.traverseDescendantsDFS(child, callback);

        callback(child);
      });
    },
    traverseAllNodesDFS: function traverseAllNodesDFS(callback) {
      var _this10 = this;

      this.forest.normalizedOptions.forEach(function (rootNode) {
        _this10.traverseDescendantsDFS(rootNode, callback);

        callback(rootNode);
      });
    },
    traverseAllNodesByIndex: function traverseAllNodesByIndex(callback) {
      var walk = function walk(parentNode) {
        parentNode.children.forEach(function (child) {
          if (callback(child) !== false && child.isBranch) {
            walk(child);
          }
        });
      };

      walk({
        children: this.forest.normalizedOptions
      });
    },
    toggleClickOutsideEvent: function toggleClickOutsideEvent(enabled) {
      if (enabled) {
        document.addEventListener('mousedown', this.handleClickOutside, false);
      } else {
        document.removeEventListener('mousedown', this.handleClickOutside, false);
      }
    },
    getValueContainer: function getValueContainer() {
      return this.$refs.control.$refs['value-container'];
    },
    getInput: function getInput() {
      return this.getValueContainer().$refs.input;
    },
    focusInput: function focusInput() {
      this.getInput().focus();
    },
    blurInput: function blurInput() {
      this.getInput().blur();
    },
    handleMouseDown: onLeftClick(function handleMouseDown(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      if (this.disabled) return;
      var isClickedOnValueContainer = this.getValueContainer().$el.contains(evt.target);

      if (isClickedOnValueContainer && !this.menu.isOpen && (this.openOnClick || this.trigger.isFocused)) {
        this.openMenu();
      }

      if (this._blurOnSelect) {
        this.blurInput();
      } else {
        this.focusInput();
      }

      this.resetFlags();
    }),
    handleClickOutside: function handleClickOutside(evt) {
      if (this.$refs.wrapper && !this.$refs.wrapper.contains(evt.target)) {
        this.blurInput();
        this.closeMenu();
      }
    },
    handleLocalSearch: function handleLocalSearch() {
      var _this11 = this;

      var searchQuery = this.trigger.searchQuery;

      var done = function done() {
        return _this11.resetHighlightedOptionWhenNecessary(true);
      };

      if (!searchQuery) {
        this.localSearch.active = false;
        return done();
      }

      this.localSearch.active = true;
      this.localSearch.noResults = true;
      this.traverseAllNodesDFS(function (node) {
        if (node.isBranch) {
          var _this11$$set;

          node.isExpandedOnSearch = false;
          node.showAllChildrenOnSearch = false;
          node.isMatched = false;
          node.hasMatchedDescendants = false;

          _this11.$set(_this11.localSearch.countMap, node.id, (_this11$$set = {}, defineProperty_default()(_this11$$set, ALL_CHILDREN, 0), defineProperty_default()(_this11$$set, ALL_DESCENDANTS, 0), defineProperty_default()(_this11$$set, LEAF_CHILDREN, 0), defineProperty_default()(_this11$$set, LEAF_DESCENDANTS, 0), _this11$$set));
        }
      });
      var lowerCasedSearchQuery = searchQuery.trim().toLocaleLowerCase();
      var splitSearchQuery = lowerCasedSearchQuery.replace(/\s+/g, ' ').split(' ');
      this.traverseAllNodesDFS(function (node) {
        if (_this11.searchNested && splitSearchQuery.length > 1) {
          node.isMatched = splitSearchQuery.every(function (filterValue) {
            return match(false, filterValue, node.nestedSearchLabel);
          });
        } else {
          node.isMatched = _this11.matchKeys.some(function (matchKey) {
            return match(!_this11.disableFuzzyMatching, lowerCasedSearchQuery, node.lowerCased[matchKey]);
          });
        }

        if (node.isMatched) {
          _this11.localSearch.noResults = false;
          node.ancestors.forEach(function (ancestor) {
            return _this11.localSearch.countMap[ancestor.id][ALL_DESCENDANTS]++;
          });
          if (node.isLeaf) node.ancestors.forEach(function (ancestor) {
            return _this11.localSearch.countMap[ancestor.id][LEAF_DESCENDANTS]++;
          });

          if (node.parentNode !== NO_PARENT_NODE) {
            _this11.localSearch.countMap[node.parentNode.id][ALL_CHILDREN] += 1;
            if (node.isLeaf) _this11.localSearch.countMap[node.parentNode.id][LEAF_CHILDREN] += 1;
          }
        }

        if ((node.isMatched || node.isBranch && node.isExpandedOnSearch) && node.parentNode !== NO_PARENT_NODE) {
          node.parentNode.isExpandedOnSearch = true;
          node.parentNode.hasMatchedDescendants = true;
        }
      });
      done();
    },
    handleRemoteSearch: function handleRemoteSearch() {
      var _this12 = this;

      var searchQuery = this.trigger.searchQuery;
      var entry = this.getRemoteSearchEntry();

      var done = function done() {
        _this12.initialize();

        _this12.resetHighlightedOptionWhenNecessary(true);
      };

      if ((searchQuery === '' || this.cacheOptions) && entry.isLoaded) {
        return done();
      }

      this.callLoadOptionsProp({
        action: ASYNC_SEARCH,
        args: {
          searchQuery: searchQuery
        },
        isPending: function isPending() {
          return entry.isLoading;
        },
        start: function start() {
          entry.isLoading = true;
          entry.isLoaded = false;
          entry.loadingError = '';
        },
        succeed: function succeed(options) {
          entry.isLoaded = true;
          entry.options = options;
          if (_this12.trigger.searchQuery === searchQuery) done();
        },
        fail: function fail(err) {
          entry.loadingError = getErrorMessage(err);
        },
        end: function end() {
          entry.isLoading = false;
        }
      });
    },
    getRemoteSearchEntry: function getRemoteSearchEntry() {
      var _this13 = this;

      var searchQuery = this.trigger.searchQuery;

      var entry = this.remoteSearch[searchQuery] || _objectSpread({}, createAsyncOptionsStates(), {
        options: []
      });

      this.$watch(function () {
        return entry.options;
      }, function () {
        if (_this13.trigger.searchQuery === searchQuery) _this13.initialize();
      }, {
        deep: true
      });

      if (searchQuery === '') {
        if (Array.isArray(this.defaultOptions)) {
          entry.options = this.defaultOptions;
          entry.isLoaded = true;
          return entry;
        } else if (this.defaultOptions !== true) {
          entry.isLoaded = true;
          return entry;
        }
      }

      if (!this.remoteSearch[searchQuery]) {
        this.$set(this.remoteSearch, searchQuery, entry);
      }

      return entry;
    },
    shouldExpand: function shouldExpand(node) {
      return this.localSearch.active ? node.isExpandedOnSearch : node.isExpanded;
    },
    shouldOptionBeIncludedInSearchResult: function shouldOptionBeIncludedInSearchResult(node) {
      if (node.isMatched) return true;
      if (node.isBranch && node.hasMatchedDescendants && !this.flattenSearchResults) return true;
      if (!node.isRootNode && node.parentNode.showAllChildrenOnSearch) return true;
      return false;
    },
    shouldShowOptionInMenu: function shouldShowOptionInMenu(node) {
      if (this.localSearch.active && !this.shouldOptionBeIncludedInSearchResult(node)) {
        return false;
      }

      return true;
    },
    getControl: function getControl() {
      return this.$refs.control.$el;
    },
    getMenu: function getMenu() {
      var ref = this.appendToBody ? this.$refs.portal.portalTarget : this;
      var $menu = ref.$refs.menu.$refs.menu;
      return $menu && $menu.nodeName !== '#comment' ? $menu : null;
    },
    setCurrentHighlightedOption: function setCurrentHighlightedOption(node) {
      var _this14 = this;

      var scroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var prev = this.menu.current;

      if (prev != null && prev in this.forest.nodeMap) {
        this.forest.nodeMap[prev].isHighlighted = false;
      }

      this.menu.current = node.id;
      node.isHighlighted = true;

      if (this.menu.isOpen && scroll) {
        var scrollToOption = function scrollToOption() {
          var $menu = _this14.getMenu();

          var $option = $menu.querySelector(".vue-treeselect__option[data-id=\"".concat(node.id, "\"]"));
          if ($option) scrollIntoView($menu, $option);
        };

        if (this.getMenu()) {
          scrollToOption();
        } else {
          this.$nextTick(scrollToOption);
        }
      }
    },
    resetHighlightedOptionWhenNecessary: function resetHighlightedOptionWhenNecessary() {
      var forceReset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var current = this.menu.current;

      if (forceReset || current == null || !(current in this.forest.nodeMap) || !this.shouldShowOptionInMenu(this.getNode(current))) {
        this.highlightFirstOption();
      }
    },
    highlightFirstOption: function highlightFirstOption() {
      if (!this.hasVisibleOptions) return;
      var first = this.visibleOptionIds[0];
      this.setCurrentHighlightedOption(this.getNode(first));
    },
    highlightPrevOption: function highlightPrevOption() {
      if (!this.hasVisibleOptions) return;
      var prev = this.visibleOptionIds.indexOf(this.menu.current) - 1;
      if (prev === -1) return this.highlightLastOption();
      this.setCurrentHighlightedOption(this.getNode(this.visibleOptionIds[prev]));
    },
    highlightNextOption: function highlightNextOption() {
      if (!this.hasVisibleOptions) return;
      var next = this.visibleOptionIds.indexOf(this.menu.current) + 1;
      if (next === this.visibleOptionIds.length) return this.highlightFirstOption();
      this.setCurrentHighlightedOption(this.getNode(this.visibleOptionIds[next]));
    },
    highlightLastOption: function highlightLastOption() {
      if (!this.hasVisibleOptions) return;
      var last = last_default()(this.visibleOptionIds);
      this.setCurrentHighlightedOption(this.getNode(last));
    },
    resetSearchQuery: function resetSearchQuery() {
      this.trigger.searchQuery = '';
    },
    closeMenu: function closeMenu() {
      if (!this.menu.isOpen || !this.disabled && this.alwaysOpen) return;
      this.saveMenuScrollPosition();
      this.menu.isOpen = false;
      this.toggleClickOutsideEvent(false);
      this.resetSearchQuery();
      this.$emit('close', this.getValue(), this.getInstanceId());
    },
    openMenu: function openMenu() {
      if (this.disabled || this.menu.isOpen) return;
      this.menu.isOpen = true;
      this.$nextTick(this.resetHighlightedOptionWhenNecessary);
      this.$nextTick(this.restoreMenuScrollPosition);
      if (!this.options && !this.async) this.loadRootOptions();
      this.toggleClickOutsideEvent(true);
      this.$emit('open', this.getInstanceId());
    },
    toggleMenu: function toggleMenu() {
      if (this.menu.isOpen) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    },
    toggleExpanded: function toggleExpanded(node) {
      var nextState;

      if (this.localSearch.active) {
        nextState = node.isExpandedOnSearch = !node.isExpandedOnSearch;
        if (nextState) node.showAllChildrenOnSearch = true;
      } else {
        nextState = node.isExpanded = !node.isExpanded;
      }

      if (nextState && !node.childrenStates.isLoaded) {
        this.loadChildrenOptions(node);
      }
    },
    buildForestState: function buildForestState() {
      var _this15 = this;

      var selectedNodeMap = createMap();
      this.forest.selectedNodeIds.forEach(function (selectedNodeId) {
        selectedNodeMap[selectedNodeId] = true;
      });
      this.forest.selectedNodeMap = selectedNodeMap;
      var checkedStateMap = createMap();

      if (this.multiple) {
        this.traverseAllNodesByIndex(function (node) {
          checkedStateMap[node.id] = UNCHECKED;
        });
        this.selectedNodes.forEach(function (selectedNode) {
          checkedStateMap[selectedNode.id] = CHECKED;

          if (!_this15.flat && !_this15.disableBranchNodes) {
            selectedNode.ancestors.forEach(function (ancestorNode) {
              if (!_this15.isSelected(ancestorNode)) {
                checkedStateMap[ancestorNode.id] = INDETERMINATE;
              }
            });
          }
        });
      }

      this.forest.checkedStateMap = checkedStateMap;
    },
    enhancedNormalizer: function enhancedNormalizer(raw) {
      return _objectSpread({}, raw, {}, this.normalizer(raw, this.getInstanceId()));
    },
    normalize: function normalize(parentNode, nodes, prevNodeMap) {
      var _this16 = this;

      var normalizedOptions = nodes.map(function (node) {
        return [_this16.enhancedNormalizer(node), node];
      }).map(function (_ref, index) {
        var _ref2 = slicedToArray_default()(_ref, 2),
            node = _ref2[0],
            raw = _ref2[1];

        _this16.checkDuplication(node);

        _this16.verifyNodeShape(node);

        var id = node.id,
            label = node.label,
            children = node.children,
            isDefaultExpanded = node.isDefaultExpanded;
        var isRootNode = parentNode === NO_PARENT_NODE;
        var level = isRootNode ? 0 : parentNode.level + 1;
        var isBranch = Array.isArray(children) || children === null;
        var isLeaf = !isBranch;
        var isDisabled = !!node.isDisabled || !_this16.flat && !isRootNode && parentNode.isDisabled;
        var isNew = !!node.isNew;

        var lowerCased = _this16.matchKeys.reduce(function (prev, key) {
          return _objectSpread({}, prev, defineProperty_default()({}, key, stringifyOptionPropValue(node[key]).toLocaleLowerCase()));
        }, {});

        var nestedSearchLabel = isRootNode ? lowerCased.label : parentNode.nestedSearchLabel + ' ' + lowerCased.label;

        var normalized = _this16.$set(_this16.forest.nodeMap, id, createMap());

        _this16.$set(normalized, 'id', id);

        _this16.$set(normalized, 'label', label);

        _this16.$set(normalized, 'level', level);

        _this16.$set(normalized, 'ancestors', isRootNode ? [] : [parentNode].concat(parentNode.ancestors));

        _this16.$set(normalized, 'index', (isRootNode ? [] : parentNode.index).concat(index));

        _this16.$set(normalized, 'parentNode', parentNode);

        _this16.$set(normalized, 'lowerCased', lowerCased);

        _this16.$set(normalized, 'nestedSearchLabel', nestedSearchLabel);

        _this16.$set(normalized, 'isDisabled', isDisabled);

        _this16.$set(normalized, 'isNew', isNew);

        _this16.$set(normalized, 'isMatched', false);

        _this16.$set(normalized, 'isHighlighted', false);

        _this16.$set(normalized, 'isBranch', isBranch);

        _this16.$set(normalized, 'isLeaf', isLeaf);

        _this16.$set(normalized, 'isRootNode', isRootNode);

        _this16.$set(normalized, 'raw', raw);

        if (isBranch) {
          var _this16$$set;

          var isLoaded = Array.isArray(children);

          _this16.$set(normalized, 'childrenStates', _objectSpread({}, createAsyncOptionsStates(), {
            isLoaded: isLoaded
          }));

          _this16.$set(normalized, 'isExpanded', typeof isDefaultExpanded === 'boolean' ? isDefaultExpanded : level < _this16.defaultExpandLevel);

          _this16.$set(normalized, 'hasMatchedDescendants', false);

          _this16.$set(normalized, 'hasDisabledDescendants', false);

          _this16.$set(normalized, 'isExpandedOnSearch', false);

          _this16.$set(normalized, 'showAllChildrenOnSearch', false);

          _this16.$set(normalized, 'count', (_this16$$set = {}, defineProperty_default()(_this16$$set, ALL_CHILDREN, 0), defineProperty_default()(_this16$$set, ALL_DESCENDANTS, 0), defineProperty_default()(_this16$$set, LEAF_CHILDREN, 0), defineProperty_default()(_this16$$set, LEAF_DESCENDANTS, 0), _this16$$set));

          _this16.$set(normalized, 'children', isLoaded ? _this16.normalize(normalized, children, prevNodeMap) : []);

          if (isDefaultExpanded === true) normalized.ancestors.forEach(function (ancestor) {
            ancestor.isExpanded = true;
          });

          if (!isLoaded && typeof _this16.loadOptions !== 'function') {
            warning_warning(function () {
              return false;
            }, function () {
              return 'Unloaded branch node detected. "loadOptions" prop is required to load its children.';
            });
          } else if (!isLoaded && normalized.isExpanded) {
            _this16.loadChildrenOptions(normalized);
          }
        }

        normalized.ancestors.forEach(function (ancestor) {
          return ancestor.count[ALL_DESCENDANTS]++;
        });
        if (isLeaf) normalized.ancestors.forEach(function (ancestor) {
          return ancestor.count[LEAF_DESCENDANTS]++;
        });

        if (!isRootNode) {
          parentNode.count[ALL_CHILDREN] += 1;
          if (isLeaf) parentNode.count[LEAF_CHILDREN] += 1;
          if (isDisabled) parentNode.hasDisabledDescendants = true;
        }

        if (prevNodeMap && prevNodeMap[id]) {
          var prev = prevNodeMap[id];
          normalized.isMatched = prev.isMatched;
          normalized.showAllChildrenOnSearch = prev.showAllChildrenOnSearch;
          normalized.isHighlighted = prev.isHighlighted;

          if (prev.isBranch && normalized.isBranch) {
            normalized.isExpanded = prev.isExpanded;
            normalized.isExpandedOnSearch = prev.isExpandedOnSearch;

            if (prev.childrenStates.isLoaded && !normalized.childrenStates.isLoaded) {
              normalized.isExpanded = false;
            } else {
              normalized.childrenStates = _objectSpread({}, prev.childrenStates);
            }
          }
        }

        return normalized;
      });

      if (this.branchNodesFirst) {
        var branchNodes = normalizedOptions.filter(function (option) {
          return option.isBranch;
        });
        var leafNodes = normalizedOptions.filter(function (option) {
          return option.isLeaf;
        });
        normalizedOptions = branchNodes.concat(leafNodes);
      }

      return normalizedOptions;
    },
    loadRootOptions: function loadRootOptions() {
      var _this17 = this;

      this.callLoadOptionsProp({
        action: LOAD_ROOT_OPTIONS,
        isPending: function isPending() {
          return _this17.rootOptionsStates.isLoading;
        },
        start: function start() {
          _this17.rootOptionsStates.isLoading = true;
          _this17.rootOptionsStates.loadingError = '';
        },
        succeed: function succeed() {
          _this17.rootOptionsStates.isLoaded = true;

          _this17.$nextTick(function () {
            _this17.resetHighlightedOptionWhenNecessary(true);
          });
        },
        fail: function fail(err) {
          _this17.rootOptionsStates.loadingError = getErrorMessage(err);
        },
        end: function end() {
          _this17.rootOptionsStates.isLoading = false;
        }
      });
    },
    loadChildrenOptions: function loadChildrenOptions(parentNode) {
      var _this18 = this;

      var id = parentNode.id,
          raw = parentNode.raw;
      this.callLoadOptionsProp({
        action: LOAD_CHILDREN_OPTIONS,
        args: {
          parentNode: raw
        },
        isPending: function isPending() {
          return _this18.getNode(id).childrenStates.isLoading;
        },
        start: function start() {
          _this18.getNode(id).childrenStates.isLoading = true;
          _this18.getNode(id).childrenStates.loadingError = '';
        },
        succeed: function succeed() {
          _this18.getNode(id).childrenStates.isLoaded = true;
        },
        fail: function fail(err) {
          _this18.getNode(id).childrenStates.loadingError = getErrorMessage(err);
        },
        end: function end() {
          _this18.getNode(id).childrenStates.isLoading = false;
        }
      });
    },
    callLoadOptionsProp: function callLoadOptionsProp(_ref3) {
      var action = _ref3.action,
          args = _ref3.args,
          isPending = _ref3.isPending,
          start = _ref3.start,
          succeed = _ref3.succeed,
          fail = _ref3.fail,
          end = _ref3.end;

      if (!this.loadOptions || isPending()) {
        return;
      }

      start();
      var callback = once_default()(function (err, result) {
        if (err) {
          fail(err);
        } else {
          succeed(result);
        }

        end();
      });
      var result = this.loadOptions(_objectSpread({
        id: this.getInstanceId(),
        instanceId: this.getInstanceId(),
        action: action
      }, args, {
        callback: callback
      }));

      if (external_is_promise_default()(result)) {
        result.then(function () {
          callback();
        }, function (err) {
          callback(err);
        }).catch(function (err) {
          console.error(err);
        });
      }
    },
    checkDuplication: function checkDuplication(node) {
      var _this19 = this;

      warning_warning(function () {
        return !(node.id in _this19.forest.nodeMap && !_this19.forest.nodeMap[node.id].isFallbackNode);
      }, function () {
        return "Detected duplicate presence of node id ".concat(JSON.stringify(node.id), ". ") + "Their labels are \"".concat(_this19.forest.nodeMap[node.id].label, "\" and \"").concat(node.label, "\" respectively.");
      });
    },
    verifyNodeShape: function verifyNodeShape(node) {
      warning_warning(function () {
        return !(node.children === undefined && node.isBranch === true);
      }, function () {
        return 'Are you meant to declare an unloaded branch node? ' + '`isBranch: true` is no longer supported, please use `children: null` instead.';
      });
    },
    select: function select(node) {
      if (this.disabled || node.isDisabled) {
        return;
      }

      if (this.single) {
        this.clear();
      }

      var nextState = this.multiple && !this.flat ? this.forest.checkedStateMap[node.id] === UNCHECKED : !this.isSelected(node);

      if (nextState) {
        this._selectNode(node);
      } else {
        this._deselectNode(node);
      }

      this.buildForestState();

      if (nextState) {
        this.$emit('select', node.raw, this.getInstanceId());
      } else {
        this.$emit('deselect', node.raw, this.getInstanceId());
      }

      if (this.localSearch.active && nextState && (this.single || this.clearOnSelect)) {
        this.resetSearchQuery();
      }

      if (this.single && this.closeOnSelect) {
        this.closeMenu();

        if (this.searchable) {
          this._blurOnSelect = true;
        }
      }
    },
    clear: function clear() {
      var _this20 = this;

      if (this.hasValue) {
        if (this.single || this.allowClearingDisabled) {
          this.forest.selectedNodeIds = [];
        } else {
            this.forest.selectedNodeIds = this.forest.selectedNodeIds.filter(function (nodeId) {
              return _this20.getNode(nodeId).isDisabled;
            });
          }

        this.buildForestState();
      }
    },
    _selectNode: function _selectNode(node) {
      var _this21 = this;

      if (this.single || this.disableBranchNodes) {
        return this.addValue(node);
      }

      if (this.flat) {
        this.addValue(node);

        if (this.autoSelectAncestors) {
          node.ancestors.forEach(function (ancestor) {
            if (!_this21.isSelected(ancestor) && !ancestor.isDisabled) _this21.addValue(ancestor);
          });
        } else if (this.autoSelectDescendants) {
          this.traverseDescendantsBFS(node, function (descendant) {
            if (!_this21.isSelected(descendant) && !descendant.isDisabled) _this21.addValue(descendant);
          });
        }

        return;
      }

      var isFullyChecked = node.isLeaf || !node.hasDisabledDescendants || this.allowSelectingDisabledDescendants;

      if (isFullyChecked) {
        this.addValue(node);
      }

      if (node.isBranch) {
        this.traverseDescendantsBFS(node, function (descendant) {
          if (!descendant.isDisabled || _this21.allowSelectingDisabledDescendants) {
            _this21.addValue(descendant);
          }
        });
      }

      if (isFullyChecked) {
        var curr = node;

        while ((curr = curr.parentNode) !== NO_PARENT_NODE) {
          if (curr.children.every(this.isSelected)) this.addValue(curr);else break;
        }
      }
    },
    _deselectNode: function _deselectNode(node) {
      var _this22 = this;

      if (this.disableBranchNodes) {
        return this.removeValue(node);
      }

      if (this.flat) {
        this.removeValue(node);

        if (this.autoDeselectAncestors) {
          node.ancestors.forEach(function (ancestor) {
            if (_this22.isSelected(ancestor) && !ancestor.isDisabled) _this22.removeValue(ancestor);
          });
        } else if (this.autoDeselectDescendants) {
          this.traverseDescendantsBFS(node, function (descendant) {
            if (_this22.isSelected(descendant) && !descendant.isDisabled) _this22.removeValue(descendant);
          });
        }

        return;
      }

      var hasUncheckedSomeDescendants = false;

      if (node.isBranch) {
        this.traverseDescendantsDFS(node, function (descendant) {
          if (!descendant.isDisabled || _this22.allowSelectingDisabledDescendants) {
            _this22.removeValue(descendant);

            hasUncheckedSomeDescendants = true;
          }
        });
      }

      if (node.isLeaf || hasUncheckedSomeDescendants || node.children.length === 0) {
        this.removeValue(node);
        var curr = node;

        while ((curr = curr.parentNode) !== NO_PARENT_NODE) {
          if (this.isSelected(curr)) this.removeValue(curr);else break;
        }
      }
    },
    addValue: function addValue(node) {
      this.forest.selectedNodeIds.push(node.id);
      this.forest.selectedNodeMap[node.id] = true;
    },
    removeValue: function removeValue(node) {
      removeFromArray(this.forest.selectedNodeIds, node.id);
      delete this.forest.selectedNodeMap[node.id];
    },
    removeLastValue: function removeLastValue() {
      if (!this.hasValue) return;
      if (this.single) return this.clear();
      var lastValue = last_default()(this.internalValue);
      var lastSelectedNode = this.getNode(lastValue);
      this.select(lastSelectedNode);
    },
    saveMenuScrollPosition: function saveMenuScrollPosition() {
      var $menu = this.getMenu();
      if ($menu) this.menu.lastScrollPosition = $menu.scrollTop;
    },
    restoreMenuScrollPosition: function restoreMenuScrollPosition() {
      var $menu = this.getMenu();
      if ($menu) $menu.scrollTop = this.menu.lastScrollPosition;
    }
  },
  created: function created() {
    this.verifyProps();
    this.resetFlags();
  },
  mounted: function mounted() {
    if (this.autoFocus) this.focusInput();
    if (!this.options && !this.async && this.autoLoadRootOptions) this.loadRootOptions();
    if (this.alwaysOpen) this.openMenu();
    if (this.async && this.defaultOptions) this.handleRemoteSearch();
  },
  destroyed: function destroyed() {
    this.toggleClickOutsideEvent(false);
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HiddenFields.vue?vue&type=script&lang=js&


function stringifyValue(value) {
  if (typeof value === 'string') return value;
  if (value != null && !isNaN_isNaN(value)) return JSON.stringify(value);
  return '';
}

/* harmony default export */ var HiddenFieldsvue_type_script_lang_js_ = ({
  name: 'vue-treeselect--hidden-fields',
  inject: ['instance'],
  functional: true,
  render: function render(_, context) {
    var h = arguments[0];
    var instance = context.injections.instance;
    if (!instance.name || instance.disabled || !instance.hasValue) return null;
    var stringifiedValues = instance.internalValue.map(stringifyValue);
    if (instance.multiple && instance.joinValues) stringifiedValues = [stringifiedValues.join(instance.delimiter)];
    return stringifiedValues.map(function (stringifiedValue, i) {
      return h("input", {
        attrs: {
          type: "hidden",
          name: instance.name
        },
        domProps: {
          "value": stringifiedValue
        },
        key: 'hidden-field-' + i
      });
    });
  }
});
// CONCATENATED MODULE: ./src/components/HiddenFields.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HiddenFieldsvue_type_script_lang_js_ = (HiddenFieldsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/HiddenFields.vue
var HiddenFields_render, staticRenderFns




/* normalize component */

var component = normalizeComponent(
  components_HiddenFieldsvue_type_script_lang_js_,
  HiddenFields_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/HiddenFields.vue"
/* harmony default export */ var HiddenFields = (component.exports);
// EXTERNAL MODULE: external "babel-helper-vue-jsx-merge-props"
var external_babel_helper_vue_jsx_merge_props_ = __nested_webpack_require_5479__(13);
var external_babel_helper_vue_jsx_merge_props_default = /*#__PURE__*/__nested_webpack_require_5479__.n(external_babel_helper_vue_jsx_merge_props_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Input.vue?vue&type=script&lang=js&



var keysThatRequireMenuBeingOpen = [KEY_CODES.ENTER, KEY_CODES.END, KEY_CODES.HOME, KEY_CODES.ARROW_LEFT, KEY_CODES.ARROW_UP, KEY_CODES.ARROW_RIGHT, KEY_CODES.ARROW_DOWN];
/* harmony default export */ var Inputvue_type_script_lang_js_ = ({
  name: 'vue-treeselect--input',
  inject: ['instance'],
  data: function data() {
    return {
      inputWidth: MIN_INPUT_WIDTH,
      value: ''
    };
  },
  computed: {
    needAutoSize: function needAutoSize() {
      var instance = this.instance;
      return instance.searchable && !instance.disabled && instance.multiple;
    },
    inputStyle: function inputStyle() {
      return {
        width: this.needAutoSize ? "".concat(this.inputWidth, "px") : null
      };
    }
  },
  watch: {
    'instance.trigger.searchQuery': function instanceTriggerSearchQuery(newValue) {
      this.value = newValue;
    },
    value: function value() {
      if (this.needAutoSize) this.$nextTick(this.updateInputWidth);
    }
  },
  created: function created() {
    this.debouncedCallback = debounce_default()(this.updateSearchQuery, INPUT_DEBOUNCE_DELAY, {
      leading: true,
      trailing: true
    });
  },
  methods: {
    clear: function clear() {
      this.onInput({
        target: {
          value: ''
        }
      });
    },
    focus: function focus() {
      var instance = this.instance;

      if (!instance.disabled) {
        this.$refs.input && this.$refs.input.focus();
      }
    },
    blur: function blur() {
      this.$refs.input && this.$refs.input.blur();
    },
    onFocus: function onFocus() {
      var instance = this.instance;
      instance.trigger.isFocused = true;
      if (instance.openOnFocus) instance.openMenu();
    },
    onBlur: function onBlur() {
      var instance = this.instance;
      var menu = instance.getMenu();

      if (menu && document.activeElement === menu) {
        return this.focus();
      }

      instance.trigger.isFocused = false;
      instance.closeMenu();
    },
    onInput: function onInput(evt) {
      var value = evt.target.value;
      this.value = value;

      if (value) {
        this.debouncedCallback();
      } else {
        this.debouncedCallback.cancel();
        this.updateSearchQuery();
      }
    },
    onKeyDown: function onKeyDown(evt) {
      var instance = this.instance;
      var key = 'which' in evt ? evt.which : evt.keyCode;
      if (evt.ctrlKey || evt.shiftKey || evt.altKey || evt.metaKey) return;

      if (!instance.menu.isOpen && includes(keysThatRequireMenuBeingOpen, key)) {
        evt.preventDefault();
        return instance.openMenu();
      }

      switch (key) {
        case KEY_CODES.BACKSPACE:
          {
            if (instance.backspaceRemoves && !this.value.length) {
              instance.removeLastValue();
            }

            break;
          }

        case KEY_CODES.ENTER:
          {
            evt.preventDefault();
            if (instance.menu.current === null) return;
            var current = instance.getNode(instance.menu.current);
            if (current.isBranch && instance.disableBranchNodes) return;
            instance.select(current);
            break;
          }

        case KEY_CODES.ESCAPE:
          {
            if (this.value.length) {
              this.clear();
            } else if (instance.menu.isOpen) {
              instance.closeMenu();
            }

            break;
          }

        case KEY_CODES.END:
          {
            evt.preventDefault();
            instance.highlightLastOption();
            break;
          }

        case KEY_CODES.HOME:
          {
            evt.preventDefault();
            instance.highlightFirstOption();
            break;
          }

        case KEY_CODES.ARROW_LEFT:
          {
            var _current = instance.getNode(instance.menu.current);

            if (_current.isBranch && instance.shouldExpand(_current)) {
              evt.preventDefault();
              instance.toggleExpanded(_current);
            } else if (!_current.isRootNode && (_current.isLeaf || _current.isBranch && !instance.shouldExpand(_current))) {
              evt.preventDefault();
              instance.setCurrentHighlightedOption(_current.parentNode);
            }

            break;
          }

        case KEY_CODES.ARROW_UP:
          {
            evt.preventDefault();
            instance.highlightPrevOption();
            break;
          }

        case KEY_CODES.ARROW_RIGHT:
          {
            var _current2 = instance.getNode(instance.menu.current);

            if (_current2.isBranch && !instance.shouldExpand(_current2)) {
              evt.preventDefault();
              instance.toggleExpanded(_current2);
            }

            break;
          }

        case KEY_CODES.ARROW_DOWN:
          {
            evt.preventDefault();
            instance.highlightNextOption();
            break;
          }

        case KEY_CODES.DELETE:
          {
            if (instance.deleteRemoves && !this.value.length) {
              instance.removeLastValue();
            }

            break;
          }

        default:
          {
            instance.openMenu();
          }
      }
    },
    onMouseDown: function onMouseDown(evt) {
      if (this.value.length) {
        evt.stopPropagation();
      }
    },
    renderInputContainer: function renderInputContainer() {
      var h = this.$createElement;
      var instance = this.instance;
      var props = {};
      var children = [];

      if (instance.searchable && !instance.disabled) {
        children.push(this.renderInput());
        if (this.needAutoSize) children.push(this.renderSizer());
      }

      if (!instance.searchable) {
        deepExtend(props, {
          on: {
            focus: this.onFocus,
            blur: this.onBlur,
            keydown: this.onKeyDown
          },
          ref: 'input'
        });
      }

      if (!instance.searchable && !instance.disabled) {
        deepExtend(props, {
          attrs: {
            tabIndex: instance.tabIndex
          }
        });
      }

      return h("div", external_babel_helper_vue_jsx_merge_props_default()([{
        "class": "vue-treeselect__input-container"
      }, props]), [children]);
    },
    renderInput: function renderInput() {
      var h = this.$createElement;
      var instance = this.instance;
      return h("input", {
        ref: "input",
        "class": "vue-treeselect__input",
        attrs: {
          type: "text",
          autocomplete: "off",
          tabIndex: instance.tabIndex,
          required: instance.required && !instance.hasValue
        },
        domProps: {
          "value": this.value
        },
        style: this.inputStyle,
        on: {
          "focus": this.onFocus,
          "input": this.onInput,
          "blur": this.onBlur,
          "keydown": this.onKeyDown,
          "mousedown": this.onMouseDown
        }
      });
    },
    renderSizer: function renderSizer() {
      var h = this.$createElement;
      return h("div", {
        ref: "sizer",
        "class": "vue-treeselect__sizer"
      }, [this.value]);
    },
    updateInputWidth: function updateInputWidth() {
      this.inputWidth = Math.max(MIN_INPUT_WIDTH, this.$refs.sizer.scrollWidth + 15);
    },
    updateSearchQuery: function updateSearchQuery() {
      var instance = this.instance;
      instance.trigger.searchQuery = this.value;
    }
  },
  render: function render() {
    return this.renderInputContainer();
  }
});
// CONCATENATED MODULE: ./src/components/Input.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Inputvue_type_script_lang_js_ = (Inputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Input.vue
var Input_render, Input_staticRenderFns




/* normalize component */

var Input_component = normalizeComponent(
  components_Inputvue_type_script_lang_js_,
  Input_render,
  Input_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Input_api; }
Input_component.options.__file = "src/components/Input.vue"
/* harmony default export */ var Input = (Input_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Placeholder.vue?vue&type=script&lang=js&
/* harmony default export */ var Placeholdervue_type_script_lang_js_ = ({
  name: 'vue-treeselect--placeholder',
  inject: ['instance'],
  render: function render() {
    var h = arguments[0];
    var instance = this.instance;
    var placeholderClass = {
      'vue-treeselect__placeholder': true,
      'vue-treeselect-helper-zoom-effect-off': true,
      'vue-treeselect-helper-hide': instance.hasValue || instance.trigger.searchQuery
    };
    return h("div", {
      "class": placeholderClass
    }, [instance.placeholder]);
  }
});
// CONCATENATED MODULE: ./src/components/Placeholder.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Placeholdervue_type_script_lang_js_ = (Placeholdervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Placeholder.vue
var Placeholder_render, Placeholder_staticRenderFns




/* normalize component */

var Placeholder_component = normalizeComponent(
  components_Placeholdervue_type_script_lang_js_,
  Placeholder_render,
  Placeholder_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Placeholder_api; }
Placeholder_component.options.__file = "src/components/Placeholder.vue"
/* harmony default export */ var Placeholder = (Placeholder_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SingleValue.vue?vue&type=script&lang=js&


/* harmony default export */ var SingleValuevue_type_script_lang_js_ = ({
  name: 'vue-treeselect--single-value',
  inject: ['instance'],
  methods: {
    renderSingleValueLabel: function renderSingleValueLabel() {
      var instance = this.instance;
      var node = instance.selectedNodes[0];
      var customValueLabelRenderer = instance.$scopedSlots['value-label'];
      return customValueLabelRenderer ? customValueLabelRenderer({
        node: node
      }) : node.label;
    }
  },
  render: function render() {
    var h = arguments[0];
    var instance = this.instance,
        renderValueContainer = this.$parent.renderValueContainer;
    var shouldShowValue = instance.hasValue && !instance.trigger.searchQuery;
    return renderValueContainer([shouldShowValue && h("div", {
      "class": "vue-treeselect__single-value"
    }, [this.renderSingleValueLabel()]), h(Placeholder), h(Input, {
      ref: "input"
    })]);
  }
});
// CONCATENATED MODULE: ./src/components/SingleValue.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SingleValuevue_type_script_lang_js_ = (SingleValuevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/SingleValue.vue
var SingleValue_render, SingleValue_staticRenderFns




/* normalize component */

var SingleValue_component = normalizeComponent(
  components_SingleValuevue_type_script_lang_js_,
  SingleValue_render,
  SingleValue_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var SingleValue_api; }
SingleValue_component.options.__file = "src/components/SingleValue.vue"
/* harmony default export */ var SingleValue = (SingleValue_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/icons/Delete.vue?vue&type=template&id=364b6320&
var Deletevue_type_template_id_364b6320_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 348.333 348.333"
      }
    },
    [
      _c("path", {
        attrs: {
          d:
            "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z"
        }
      })
    ]
  )
}
var Deletevue_type_template_id_364b6320_staticRenderFns = []
Deletevue_type_template_id_364b6320_render._withStripped = true


// CONCATENATED MODULE: ./src/components/icons/Delete.vue?vue&type=template&id=364b6320&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/icons/Delete.vue?vue&type=script&lang=js&
/* harmony default export */ var Deletevue_type_script_lang_js_ = ({
  name: 'vue-treeselect--x'
});
// CONCATENATED MODULE: ./src/components/icons/Delete.vue?vue&type=script&lang=js&
 /* harmony default export */ var icons_Deletevue_type_script_lang_js_ = (Deletevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/icons/Delete.vue





/* normalize component */

var Delete_component = normalizeComponent(
  icons_Deletevue_type_script_lang_js_,
  Deletevue_type_template_id_364b6320_render,
  Deletevue_type_template_id_364b6320_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Delete_api; }
Delete_component.options.__file = "src/components/icons/Delete.vue"
/* harmony default export */ var Delete = (Delete_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MultiValueItem.vue?vue&type=script&lang=js&


/* harmony default export */ var MultiValueItemvue_type_script_lang_js_ = ({
  name: 'vue-treeselect--multi-value-item',
  inject: ['instance'],
  props: {
    node: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleMouseDown: onLeftClick(function handleMouseDown() {
      var instance = this.instance,
          node = this.node;
      instance.select(node);
    })
  },
  render: function render() {
    var h = arguments[0];
    var instance = this.instance,
        node = this.node;
    var itemClass = {
      'vue-treeselect__multi-value-item': true,
      'vue-treeselect__multi-value-item-disabled': node.isDisabled,
      'vue-treeselect__multi-value-item-new': node.isNew
    };
    var customValueLabelRenderer = instance.$scopedSlots['value-label'];
    var labelRenderer = customValueLabelRenderer ? customValueLabelRenderer({
      node: node
    }) : node.label;
    return h("div", {
      "class": "vue-treeselect__multi-value-item-container"
    }, [h("div", {
      "class": itemClass,
      on: {
        "mousedown": this.handleMouseDown
      }
    }, [h("span", {
      "class": "vue-treeselect__multi-value-label"
    }, [labelRenderer]), h("span", {
      "class": "vue-treeselect__icon vue-treeselect__value-remove"
    }, [h(Delete)])])]);
  }
});
// CONCATENATED MODULE: ./src/components/MultiValueItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MultiValueItemvue_type_script_lang_js_ = (MultiValueItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MultiValueItem.vue
var MultiValueItem_render, MultiValueItem_staticRenderFns




/* normalize component */

var MultiValueItem_component = normalizeComponent(
  components_MultiValueItemvue_type_script_lang_js_,
  MultiValueItem_render,
  MultiValueItem_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var MultiValueItem_api; }
MultiValueItem_component.options.__file = "src/components/MultiValueItem.vue"
/* harmony default export */ var MultiValueItem = (MultiValueItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MultiValue.vue?vue&type=script&lang=js&




/* harmony default export */ var MultiValuevue_type_script_lang_js_ = ({
  name: 'vue-treeselect--multi-value',
  inject: ['instance'],
  methods: {
    renderMultiValueItems: function renderMultiValueItems() {
      var h = this.$createElement;
      var instance = this.instance;
      return instance.internalValue.slice(0, instance.limit).map(instance.getNode).map(function (node) {
        return h(MultiValueItem, {
          key: "multi-value-item-".concat(node.id),
          attrs: {
            node: node
          }
        });
      });
    },
    renderExceedLimitTip: function renderExceedLimitTip() {
      var h = this.$createElement;
      var instance = this.instance;
      var count = instance.internalValue.length - instance.limit;
      if (count <= 0) return null;
      return h("div", {
        "class": "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off",
        key: "exceed-limit-tip"
      }, [h("span", {
        "class": "vue-treeselect__limit-tip-text"
      }, [instance.limitText(count)])]);
    }
  },
  render: function render() {
    var h = arguments[0];
    var renderValueContainer = this.$parent.renderValueContainer;
    var transitionGroupProps = {
      props: {
        tag: 'div',
        name: 'vue-treeselect__multi-value-item--transition',
        appear: true
      }
    };
    return renderValueContainer(h("transition-group", external_babel_helper_vue_jsx_merge_props_default()([{
      "class": "vue-treeselect__multi-value"
    }, transitionGroupProps]), [this.renderMultiValueItems(), this.renderExceedLimitTip(), h(Placeholder, {
      key: "placeholder"
    }), h(Input, {
      ref: "input",
      key: "input"
    })]));
  }
});
// CONCATENATED MODULE: ./src/components/MultiValue.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MultiValuevue_type_script_lang_js_ = (MultiValuevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MultiValue.vue
var MultiValue_render, MultiValue_staticRenderFns




/* normalize component */

var MultiValue_component = normalizeComponent(
  components_MultiValuevue_type_script_lang_js_,
  MultiValue_render,
  MultiValue_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var MultiValue_api; }
MultiValue_component.options.__file = "src/components/MultiValue.vue"
/* harmony default export */ var MultiValue = (MultiValue_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/icons/Arrow.vue?vue&type=template&id=11186cd4&
var Arrowvue_type_template_id_11186cd4_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 292.362 292.362"
      }
    },
    [
      _c("path", {
        attrs: {
          d:
            "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"
        }
      })
    ]
  )
}
var Arrowvue_type_template_id_11186cd4_staticRenderFns = []
Arrowvue_type_template_id_11186cd4_render._withStripped = true


// CONCATENATED MODULE: ./src/components/icons/Arrow.vue?vue&type=template&id=11186cd4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/icons/Arrow.vue?vue&type=script&lang=js&
/* harmony default export */ var Arrowvue_type_script_lang_js_ = ({
  name: 'vue-treeselect--arrow'
});
// CONCATENATED MODULE: ./src/components/icons/Arrow.vue?vue&type=script&lang=js&
 /* harmony default export */ var icons_Arrowvue_type_script_lang_js_ = (Arrowvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/icons/Arrow.vue





/* normalize component */

var Arrow_component = normalizeComponent(
  icons_Arrowvue_type_script_lang_js_,
  Arrowvue_type_template_id_11186cd4_render,
  Arrowvue_type_template_id_11186cd4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Arrow_api; }
Arrow_component.options.__file = "src/components/icons/Arrow.vue"
/* harmony default export */ var Arrow = (Arrow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Control.vue?vue&type=script&lang=js&





/* harmony default export */ var Controlvue_type_script_lang_js_ = ({
  name: 'vue-treeselect--control',
  inject: ['instance'],
  computed: {
    shouldShowX: function shouldShowX() {
      var instance = this.instance;
      return instance.clearable && !instance.disabled && instance.hasValue && (this.hasUndisabledValue || instance.allowClearingDisabled);
    },
    shouldShowArrow: function shouldShowArrow() {
      var instance = this.instance;
      if (!instance.alwaysOpen) return true;
      return !instance.menu.isOpen;
    },
    hasUndisabledValue: function hasUndisabledValue() {
      var instance = this.instance;
      return instance.hasValue && instance.internalValue.some(function (id) {
        return !instance.getNode(id).isDisabled;
      });
    }
  },
  methods: {
    renderX: function renderX() {
      var h = this.$createElement;
      var instance = this.instance;
      var title = instance.multiple ? instance.clearAllText : instance.clearValueText;
      if (!this.shouldShowX) return null;
      return h("div", {
        "class": "vue-treeselect__x-container",
        attrs: {
          title: title
        },
        on: {
          "mousedown": this.handleMouseDownOnX
        }
      }, [h(Delete, {
        "class": "vue-treeselect__x"
      })]);
    },
    renderArrow: function renderArrow() {
      var h = this.$createElement;
      var instance = this.instance;
      var arrowClass = {
        'vue-treeselect__control-arrow': true,
        'vue-treeselect__control-arrow--rotated': instance.menu.isOpen
      };
      if (!this.shouldShowArrow) return null;
      return h("div", {
        "class": "vue-treeselect__control-arrow-container",
        on: {
          "mousedown": this.handleMouseDownOnArrow
        }
      }, [h(Arrow, {
        "class": arrowClass
      })]);
    },
    handleMouseDownOnX: onLeftClick(function handleMouseDownOnX(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      var instance = this.instance;
      var result = instance.beforeClearAll();

      var handler = function handler(shouldClear) {
        if (shouldClear) instance.clear();
      };

      if (external_is_promise_default()(result)) {
        result.then(handler);
      } else {
        setTimeout(function () {
          return handler(result);
        }, 0);
      }
    }),
    handleMouseDownOnArrow: onLeftClick(function handleMouseDownOnArrow(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      var instance = this.instance;
      instance.focusInput();
      instance.toggleMenu();
    }),
    renderValueContainer: function renderValueContainer(children) {
      var h = this.$createElement;
      return h("div", {
        "class": "vue-treeselect__value-container"
      }, [children]);
    }
  },
  render: function render() {
    var h = arguments[0];
    var instance = this.instance;
    var ValueContainer = instance.single ? SingleValue : MultiValue;
    return h("div", {
      "class": "vue-treeselect__control",
      on: {
        "mousedown": instance.handleMouseDown
      }
    }, [h(ValueContainer, {
      ref: "value-container"
    }), this.renderX(), this.renderArrow()]);
  }
});
// CONCATENATED MODULE: ./src/components/Control.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Controlvue_type_script_lang_js_ = (Controlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Control.vue
var Control_render, Control_staticRenderFns




/* normalize component */

var Control_component = normalizeComponent(
  components_Controlvue_type_script_lang_js_,
  Control_render,
  Control_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Control_api; }
Control_component.options.__file = "src/components/Control.vue"
/* harmony default export */ var Control = (Control_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tip.vue?vue&type=script&lang=js&
/* harmony default export */ var Tipvue_type_script_lang_js_ = ({
  name: 'vue-treeselect--tip',
  functional: true,
  props: {
    type: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  render: function render(_, context) {
    var h = arguments[0];
    var props = context.props,
        children = context.children;
    return h("div", {
      "class": "vue-treeselect__tip vue-treeselect__".concat(props.type, "-tip")
    }, [h("div", {
      "class": "vue-treeselect__icon-container"
    }, [h("span", {
      "class": "vue-treeselect__icon-".concat(props.icon)
    })]), h("span", {
      "class": "vue-treeselect__tip-text vue-treeselect__".concat(props.type, "-tip-text")
    }, [children])]);
  }
});
// CONCATENATED MODULE: ./src/components/Tip.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Tipvue_type_script_lang_js_ = (Tipvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Tip.vue
var Tip_render, Tip_staticRenderFns




/* normalize component */

var Tip_component = normalizeComponent(
  components_Tipvue_type_script_lang_js_,
  Tip_render,
  Tip_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Tip_api; }
Tip_component.options.__file = "src/components/Tip.vue"
/* harmony default export */ var Tip = (Tip_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Option.vue?vue&type=script&lang=js&





var arrowPlaceholder, checkMark, minusMark;
var Option = {
  name: 'vue-treeselect--option',
  inject: ['instance'],
  props: {
    node: {
      type: Object,
      required: true
    }
  },
  computed: {
    shouldExpand: function shouldExpand() {
      var instance = this.instance,
          node = this.node;
      return node.isBranch && instance.shouldExpand(node);
    },
    shouldShow: function shouldShow() {
      var instance = this.instance,
          node = this.node;
      return instance.shouldShowOptionInMenu(node);
    }
  },
  methods: {
    renderOption: function renderOption() {
      var h = this.$createElement;
      var instance = this.instance,
          node = this.node;
      var optionClass = {
        'vue-treeselect__option': true,
        'vue-treeselect__option--disabled': node.isDisabled,
        'vue-treeselect__option--selected': instance.isSelected(node),
        'vue-treeselect__option--highlight': node.isHighlighted,
        'vue-treeselect__option--matched': instance.localSearch.active && node.isMatched,
        'vue-treeselect__option--hide': !this.shouldShow
      };
      return h("div", {
        "class": optionClass,
        on: {
          "mouseenter": this.handleMouseEnterOption
        },
        attrs: {
          "data-id": node.id
        }
      }, [this.renderArrow(), this.renderLabelContainer([this.renderCheckboxContainer([this.renderCheckbox()]), this.renderLabel()])]);
    },
    renderSubOptionsList: function renderSubOptionsList() {
      var h = this.$createElement;
      if (!this.shouldExpand) return null;
      return h("div", {
        "class": "vue-treeselect__list"
      }, [this.renderSubOptions(), this.renderNoChildrenTip(), this.renderLoadingChildrenTip(), this.renderLoadingChildrenErrorTip()]);
    },
    renderArrow: function renderArrow() {
      var h = this.$createElement;
      var instance = this.instance,
          node = this.node;
      if (instance.shouldFlattenOptions && this.shouldShow) return null;

      if (node.isBranch) {
        var transitionProps = {
          props: {
            name: 'vue-treeselect__option-arrow--prepare',
            appear: true
          }
        };
        var arrowClass = {
          'vue-treeselect__option-arrow': true,
          'vue-treeselect__option-arrow--rotated': this.shouldExpand
        };
        return h("div", {
          "class": "vue-treeselect__option-arrow-container",
          on: {
            "mousedown": this.handleMouseDownOnArrow
          }
        }, [h("transition", transitionProps, [h(Arrow, {
          "class": arrowClass
        })])]);
      }

      if (instance.hasBranchNodes) {
        if (!arrowPlaceholder) arrowPlaceholder = h("div", {
          "class": "vue-treeselect__option-arrow-placeholder"
        }, ["\xA0"]);
        return arrowPlaceholder;
      }

      return null;
    },
    renderLabelContainer: function renderLabelContainer(children) {
      var h = this.$createElement;
      return h("div", {
        "class": "vue-treeselect__label-container",
        on: {
          "mousedown": this.handleMouseDownOnLabelContainer
        }
      }, [children]);
    },
    renderCheckboxContainer: function renderCheckboxContainer(children) {
      var h = this.$createElement;
      var instance = this.instance,
          node = this.node;
      if (instance.single) return null;
      if (instance.disableBranchNodes && node.isBranch) return null;
      return h("div", {
        "class": "vue-treeselect__checkbox-container"
      }, [children]);
    },
    renderCheckbox: function renderCheckbox() {
      var h = this.$createElement;
      var instance = this.instance,
          node = this.node;
      var checkedState = instance.forest.checkedStateMap[node.id];
      var checkboxClass = {
        'vue-treeselect__checkbox': true,
        'vue-treeselect__checkbox--checked': checkedState === CHECKED,
        'vue-treeselect__checkbox--indeterminate': checkedState === INDETERMINATE,
        'vue-treeselect__checkbox--unchecked': checkedState === UNCHECKED,
        'vue-treeselect__checkbox--disabled': node.isDisabled
      };
      if (!checkMark) checkMark = h("span", {
        "class": "vue-treeselect__check-mark"
      });
      if (!minusMark) minusMark = h("span", {
        "class": "vue-treeselect__minus-mark"
      });
      return h("span", {
        "class": checkboxClass
      }, [checkMark, minusMark]);
    },
    renderLabel: function renderLabel() {
      var h = this.$createElement;
      var instance = this.instance,
          node = this.node;
      var shouldShowCount = node.isBranch && (instance.localSearch.active ? instance.showCountOnSearchComputed : instance.showCount);
      var count = shouldShowCount ? instance.localSearch.active ? instance.localSearch.countMap[node.id][instance.showCountOf] : node.count[instance.showCountOf] : NaN;
      var labelClassName = 'vue-treeselect__label';
      var countClassName = 'vue-treeselect__count';
      var customLabelRenderer = instance.$scopedSlots['option-label'];
      if (customLabelRenderer) return customLabelRenderer({
        node: node,
        shouldShowCount: shouldShowCount,
        count: count,
        labelClassName: labelClassName,
        countClassName: countClassName
      });
      return h("label", {
        "class": labelClassName
      }, [node.label, shouldShowCount && h("span", {
        "class": countClassName
      }, ["(", count, ")"])]);
    },
    renderSubOptions: function renderSubOptions() {
      var h = this.$createElement;
      var node = this.node;
      if (!node.childrenStates.isLoaded) return null;
      return node.children.map(function (childNode) {
        return h(Option, {
          attrs: {
            node: childNode
          },
          key: childNode.id
        });
      });
    },
    renderNoChildrenTip: function renderNoChildrenTip() {
      var h = this.$createElement;
      var instance = this.instance,
          node = this.node;
      if (!node.childrenStates.isLoaded || node.children.length) return null;
      return h(Tip, {
        attrs: {
          type: "no-children",
          icon: "warning"
        }
      }, [instance.noChildrenText]);
    },
    renderLoadingChildrenTip: function renderLoadingChildrenTip() {
      var h = this.$createElement;
      var instance = this.instance,
          node = this.node;
      if (!node.childrenStates.isLoading) return null;
      return h(Tip, {
        attrs: {
          type: "loading",
          icon: "loader"
        }
      }, [instance.loadingText]);
    },
    renderLoadingChildrenErrorTip: function renderLoadingChildrenErrorTip() {
      var h = this.$createElement;
      var instance = this.instance,
          node = this.node;
      if (!node.childrenStates.loadingError) return null;
      return h(Tip, {
        attrs: {
          type: "error",
          icon: "error"
        }
      }, [node.childrenStates.loadingError, h("a", {
        "class": "vue-treeselect__retry",
        attrs: {
          title: instance.retryTitle
        },
        on: {
          "mousedown": this.handleMouseDownOnRetry
        }
      }, [instance.retryText])]);
    },
    handleMouseEnterOption: function handleMouseEnterOption(evt) {
      var instance = this.instance,
          node = this.node;
      if (evt.target !== evt.currentTarget) return;
      instance.setCurrentHighlightedOption(node, false);
    },
    handleMouseDownOnArrow: onLeftClick(function handleMouseDownOnOptionArrow() {
      var instance = this.instance,
          node = this.node;
      instance.toggleExpanded(node);
    }),
    handleMouseDownOnLabelContainer: onLeftClick(function handleMouseDownOnLabelContainer() {
      var instance = this.instance,
          node = this.node;

      if (node.isBranch && instance.disableBranchNodes) {
        instance.toggleExpanded(node);
      } else {
        instance.select(node);
      }
    }),
    handleMouseDownOnRetry: onLeftClick(function handleMouseDownOnRetry() {
      var instance = this.instance,
          node = this.node;
      instance.loadChildrenOptions(node);
    })
  },
  render: function render() {
    var h = arguments[0];
    var node = this.node;
    var indentLevel = this.instance.shouldFlattenOptions ? 0 : node.level;

    var listItemClass = defineProperty_default()({
      'vue-treeselect__list-item': true
    }, "vue-treeselect__indent-level-".concat(indentLevel), true);

    var transitionProps = {
      props: {
        name: 'vue-treeselect__list--transition'
      }
    };
    return h("div", {
      "class": listItemClass
    }, [this.renderOption(), node.isBranch && h("transition", transitionProps, [this.renderSubOptionsList()])]);
  }
};
/* harmony default export */ var Optionvue_type_script_lang_js_ = (Option);
// CONCATENATED MODULE: ./src/components/Option.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Optionvue_type_script_lang_js_ = (Optionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Option.vue
var Option_render, Option_staticRenderFns




/* normalize component */

var Option_component = normalizeComponent(
  components_Optionvue_type_script_lang_js_,
  Option_render,
  Option_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Option_api; }
Option_component.options.__file = "src/components/Option.vue"
/* harmony default export */ var components_Option = (Option_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu.vue?vue&type=script&lang=js&




var directionMap = {
  top: 'top',
  bottom: 'bottom',
  above: 'top',
  below: 'bottom'
};
/* harmony default export */ var Menuvue_type_script_lang_js_ = ({
  name: 'vue-treeselect--menu',
  inject: ['instance'],
  computed: {
    menuStyle: function menuStyle() {
      var instance = this.instance;
      return {
        maxHeight: instance.maxHeight + 'px'
      };
    },
    menuContainerStyle: function menuContainerStyle() {
      var instance = this.instance;
      return {
        zIndex: instance.appendToBody ? null : instance.zIndex
      };
    }
  },
  watch: {
    'instance.menu.isOpen': function instanceMenuIsOpen(newValue) {
      if (newValue) {
        this.$nextTick(this.onMenuOpen);
      } else {
        this.onMenuClose();
      }
    }
  },
  created: function created() {
    this.menuSizeWatcher = null;
    this.menuResizeAndScrollEventListeners = null;
  },
  mounted: function mounted() {
    var instance = this.instance;
    if (instance.menu.isOpen) this.$nextTick(this.onMenuOpen);
  },
  destroyed: function destroyed() {
    this.onMenuClose();
  },
  methods: {
    renderMenu: function renderMenu() {
      var h = this.$createElement;
      var instance = this.instance;
      if (!instance.menu.isOpen) return null;
      return h("div", {
        ref: "menu",
        "class": "vue-treeselect__menu",
        on: {
          "mousedown": instance.handleMouseDown
        },
        style: this.menuStyle
      }, [this.renderBeforeList(), instance.async ? this.renderAsyncSearchMenuInner() : instance.localSearch.active ? this.renderLocalSearchMenuInner() : this.renderNormalMenuInner(), this.renderAfterList()]);
    },
    renderBeforeList: function renderBeforeList() {
      var instance = this.instance;
      var beforeListRenderer = instance.$scopedSlots['before-list'];
      return beforeListRenderer ? beforeListRenderer() : null;
    },
    renderAfterList: function renderAfterList() {
      var instance = this.instance;
      var afterListRenderer = instance.$scopedSlots['after-list'];
      return afterListRenderer ? afterListRenderer() : null;
    },
    renderNormalMenuInner: function renderNormalMenuInner() {
      var instance = this.instance;

      if (instance.rootOptionsStates.isLoading) {
        return this.renderLoadingOptionsTip();
      } else if (instance.rootOptionsStates.loadingError) {
        return this.renderLoadingRootOptionsErrorTip();
      } else if (instance.rootOptionsStates.isLoaded && instance.forest.normalizedOptions.length === 0) {
        return this.renderNoAvailableOptionsTip();
      } else {
        return this.renderOptionList();
      }
    },
    renderLocalSearchMenuInner: function renderLocalSearchMenuInner() {
      var instance = this.instance;

      if (instance.rootOptionsStates.isLoading) {
        return this.renderLoadingOptionsTip();
      } else if (instance.rootOptionsStates.loadingError) {
        return this.renderLoadingRootOptionsErrorTip();
      } else if (instance.rootOptionsStates.isLoaded && instance.forest.normalizedOptions.length === 0) {
        return this.renderNoAvailableOptionsTip();
      } else if (instance.localSearch.noResults) {
        return this.renderNoResultsTip();
      } else {
        return this.renderOptionList();
      }
    },
    renderAsyncSearchMenuInner: function renderAsyncSearchMenuInner() {
      var instance = this.instance;
      var entry = instance.getRemoteSearchEntry();
      var shouldShowSearchPromptTip = instance.trigger.searchQuery === '' && !instance.defaultOptions;
      var shouldShowNoResultsTip = shouldShowSearchPromptTip ? false : entry.isLoaded && entry.options.length === 0;

      if (shouldShowSearchPromptTip) {
        return this.renderSearchPromptTip();
      } else if (entry.isLoading) {
        return this.renderLoadingOptionsTip();
      } else if (entry.loadingError) {
        return this.renderAsyncSearchLoadingErrorTip();
      } else if (shouldShowNoResultsTip) {
        return this.renderNoResultsTip();
      } else {
        return this.renderOptionList();
      }
    },
    renderOptionList: function renderOptionList() {
      var h = this.$createElement;
      var instance = this.instance;
      return h("div", {
        "class": "vue-treeselect__list"
      }, [instance.forest.normalizedOptions.map(function (rootNode) {
        return h(components_Option, {
          attrs: {
            node: rootNode
          },
          key: rootNode.id
        });
      })]);
    },
    renderSearchPromptTip: function renderSearchPromptTip() {
      var h = this.$createElement;
      var instance = this.instance;
      return h(Tip, {
        attrs: {
          type: "search-prompt",
          icon: "warning"
        }
      }, [instance.searchPromptText]);
    },
    renderLoadingOptionsTip: function renderLoadingOptionsTip() {
      var h = this.$createElement;
      var instance = this.instance;
      return h(Tip, {
        attrs: {
          type: "loading",
          icon: "loader"
        }
      }, [instance.loadingText]);
    },
    renderLoadingRootOptionsErrorTip: function renderLoadingRootOptionsErrorTip() {
      var h = this.$createElement;
      var instance = this.instance;
      return h(Tip, {
        attrs: {
          type: "error",
          icon: "error"
        }
      }, [instance.rootOptionsStates.loadingError, h("a", {
        "class": "vue-treeselect__retry",
        on: {
          "click": instance.loadRootOptions
        },
        attrs: {
          title: instance.retryTitle
        }
      }, [instance.retryText])]);
    },
    renderAsyncSearchLoadingErrorTip: function renderAsyncSearchLoadingErrorTip() {
      var h = this.$createElement;
      var instance = this.instance;
      var entry = instance.getRemoteSearchEntry();
      return h(Tip, {
        attrs: {
          type: "error",
          icon: "error"
        }
      }, [entry.loadingError, h("a", {
        "class": "vue-treeselect__retry",
        on: {
          "click": instance.handleRemoteSearch
        },
        attrs: {
          title: instance.retryTitle
        }
      }, [instance.retryText])]);
    },
    renderNoAvailableOptionsTip: function renderNoAvailableOptionsTip() {
      var h = this.$createElement;
      var instance = this.instance;
      return h(Tip, {
        attrs: {
          type: "no-options",
          icon: "warning"
        }
      }, [instance.noOptionsText]);
    },
    renderNoResultsTip: function renderNoResultsTip() {
      var h = this.$createElement;
      var instance = this.instance;
      return h(Tip, {
        attrs: {
          type: "no-results",
          icon: "warning"
        }
      }, [instance.noResultsText]);
    },
    onMenuOpen: function onMenuOpen() {
      this.adjustMenuOpenDirection();
      this.setupMenuSizeWatcher();
      this.setupMenuResizeAndScrollEventListeners();
    },
    onMenuClose: function onMenuClose() {
      this.removeMenuSizeWatcher();
      this.removeMenuResizeAndScrollEventListeners();
    },
    adjustMenuOpenDirection: function adjustMenuOpenDirection() {
      var instance = this.instance;
      if (!instance.menu.isOpen) return;
      var $menu = instance.getMenu();
      var $control = instance.getControl();
      var menuRect = $menu.getBoundingClientRect();
      var controlRect = $control.getBoundingClientRect();
      var menuHeight = menuRect.height;
      var viewportHeight = window.innerHeight;
      var spaceAbove = controlRect.top;
      var spaceBelow = window.innerHeight - controlRect.bottom;
      var isControlInViewport = controlRect.top >= 0 && controlRect.top <= viewportHeight || controlRect.top < 0 && controlRect.bottom > 0;
      var hasEnoughSpaceBelow = spaceBelow > menuHeight + MENU_BUFFER;
      var hasEnoughSpaceAbove = spaceAbove > menuHeight + MENU_BUFFER;

      if (!isControlInViewport) {
        instance.closeMenu();
      } else if (instance.openDirection !== 'auto') {
        instance.menu.placement = directionMap[instance.openDirection];
      } else if (hasEnoughSpaceBelow || !hasEnoughSpaceAbove) {
        instance.menu.placement = 'bottom';
      } else {
        instance.menu.placement = 'top';
      }
    },
    setupMenuSizeWatcher: function setupMenuSizeWatcher() {
      var instance = this.instance;
      var $menu = instance.getMenu();
      if (this.menuSizeWatcher) return;
      this.menuSizeWatcher = {
        remove: watchSize($menu, this.adjustMenuOpenDirection)
      };
    },
    setupMenuResizeAndScrollEventListeners: function setupMenuResizeAndScrollEventListeners() {
      var instance = this.instance;
      var $control = instance.getControl();
      if (this.menuResizeAndScrollEventListeners) return;
      this.menuResizeAndScrollEventListeners = {
        remove: setupResizeAndScrollEventListeners($control, this.adjustMenuOpenDirection)
      };
    },
    removeMenuSizeWatcher: function removeMenuSizeWatcher() {
      if (!this.menuSizeWatcher) return;
      this.menuSizeWatcher.remove();
      this.menuSizeWatcher = null;
    },
    removeMenuResizeAndScrollEventListeners: function removeMenuResizeAndScrollEventListeners() {
      if (!this.menuResizeAndScrollEventListeners) return;
      this.menuResizeAndScrollEventListeners.remove();
      this.menuResizeAndScrollEventListeners = null;
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      ref: "menu-container",
      "class": "vue-treeselect__menu-container",
      style: this.menuContainerStyle
    }, [h("transition", {
      attrs: {
        name: "vue-treeselect__menu--transition"
      }
    }, [this.renderMenu()])]);
  }
});
// CONCATENATED MODULE: ./src/components/Menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Menuvue_type_script_lang_js_ = (Menuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Menu.vue
var Menu_render, Menu_staticRenderFns




/* normalize component */

var Menu_component = normalizeComponent(
  components_Menuvue_type_script_lang_js_,
  Menu_render,
  Menu_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Menu_api; }
Menu_component.options.__file = "src/components/Menu.vue"
/* harmony default export */ var Menu = (Menu_component.exports);
// EXTERNAL MODULE: external "vue"
var external_vue_ = __nested_webpack_require_5479__(14);
var external_vue_default = /*#__PURE__*/__nested_webpack_require_5479__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MenuPortal.vue?vue&type=script&lang=js&


function MenuPortalvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MenuPortalvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MenuPortalvue_type_script_lang_js_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MenuPortalvue_type_script_lang_js_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var PortalTarget = {
  name: 'vue-treeselect--portal-target',
  inject: ['instance'],
  watch: {
    'instance.menu.isOpen': function instanceMenuIsOpen(newValue) {
      if (newValue) {
        this.setupHandlers();
      } else {
        this.removeHandlers();
      }
    },
    'instance.menu.placement': function instanceMenuPlacement() {
      this.updateMenuContainerOffset();
    }
  },
  created: function created() {
    this.controlResizeAndScrollEventListeners = null;
    this.controlSizeWatcher = null;
  },
  mounted: function mounted() {
    var instance = this.instance;
    if (instance.menu.isOpen) this.setupHandlers();
  },
  methods: {
    setupHandlers: function setupHandlers() {
      this.updateWidth();
      this.updateMenuContainerOffset();
      this.setupControlResizeAndScrollEventListeners();
      this.setupControlSizeWatcher();
    },
    removeHandlers: function removeHandlers() {
      this.removeControlResizeAndScrollEventListeners();
      this.removeControlSizeWatcher();
    },
    setupControlResizeAndScrollEventListeners: function setupControlResizeAndScrollEventListeners() {
      var instance = this.instance;
      var $control = instance.getControl();
      if (this.controlResizeAndScrollEventListeners) return;
      this.controlResizeAndScrollEventListeners = {
        remove: setupResizeAndScrollEventListeners($control, this.updateMenuContainerOffset)
      };
    },
    setupControlSizeWatcher: function setupControlSizeWatcher() {
      var _this = this;

      var instance = this.instance;
      var $control = instance.getControl();
      if (this.controlSizeWatcher) return;
      this.controlSizeWatcher = {
        remove: watchSize($control, function () {
          _this.updateWidth();

          _this.updateMenuContainerOffset();
        })
      };
    },
    removeControlResizeAndScrollEventListeners: function removeControlResizeAndScrollEventListeners() {
      if (!this.controlResizeAndScrollEventListeners) return;
      this.controlResizeAndScrollEventListeners.remove();
      this.controlResizeAndScrollEventListeners = null;
    },
    removeControlSizeWatcher: function removeControlSizeWatcher() {
      if (!this.controlSizeWatcher) return;
      this.controlSizeWatcher.remove();
      this.controlSizeWatcher = null;
    },
    updateWidth: function updateWidth() {
      var instance = this.instance;
      var $portalTarget = this.$el;
      var $control = instance.getControl();
      var controlRect = $control.getBoundingClientRect();
      $portalTarget.style.width = controlRect.width + 'px';
    },
    updateMenuContainerOffset: function updateMenuContainerOffset() {
      var instance = this.instance;
      var $control = instance.getControl();
      var $portalTarget = this.$el;
      var controlRect = $control.getBoundingClientRect();
      var portalTargetRect = $portalTarget.getBoundingClientRect();
      var offsetY = instance.menu.placement === 'bottom' ? controlRect.height : 0;
      var left = Math.round(controlRect.left - portalTargetRect.left) + 'px';
      var top = Math.round(controlRect.top - portalTargetRect.top + offsetY) + 'px';
      var menuContainerStyle = this.$refs.menu.$refs['menu-container'].style;
      var transformVariations = ['transform', 'webkitTransform', 'MozTransform', 'msTransform'];
      var transform = find(transformVariations, function (t) {
        return t in document.body.style;
      });
      menuContainerStyle[transform] = "translate(".concat(left, ", ").concat(top, ")");
    }
  },
  render: function render() {
    var h = arguments[0];
    var instance = this.instance;
    var portalTargetClass = ['vue-treeselect__portal-target', instance.wrapperClass];
    var portalTargetStyle = {
      zIndex: instance.zIndex
    };
    return h("div", {
      "class": portalTargetClass,
      style: portalTargetStyle,
      attrs: {
        "data-instance-id": instance.getInstanceId()
      }
    }, [h(Menu, {
      ref: "menu"
    })]);
  },
  destroyed: function destroyed() {
    this.removeHandlers();
  }
};
var placeholder;
/* harmony default export */ var MenuPortalvue_type_script_lang_js_ = ({
  name: 'vue-treeselect--menu-portal',
  created: function created() {
    this.portalTarget = null;
  },
  mounted: function mounted() {
    this.setup();
  },
  destroyed: function destroyed() {
    this.teardown();
  },
  methods: {
    setup: function setup() {
      var el = document.createElement('div');
      document.body.appendChild(el);
      this.portalTarget = new external_vue_default.a(MenuPortalvue_type_script_lang_js_objectSpread({
        el: el,
        parent: this
      }, PortalTarget));
    },
    teardown: function teardown() {
      document.body.removeChild(this.portalTarget.$el);
      this.portalTarget.$el.innerHTML = '';
      this.portalTarget.$destroy();
      this.portalTarget = null;
    }
  },
  render: function render() {
    var h = arguments[0];
    if (!placeholder) placeholder = h("div", {
      "class": "vue-treeselect__menu-placeholder"
    });
    return placeholder;
  }
});
// CONCATENATED MODULE: ./src/components/MenuPortal.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MenuPortalvue_type_script_lang_js_ = (MenuPortalvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MenuPortal.vue
var MenuPortal_render, MenuPortal_staticRenderFns




/* normalize component */

var MenuPortal_component = normalizeComponent(
  components_MenuPortalvue_type_script_lang_js_,
  MenuPortal_render,
  MenuPortal_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var MenuPortal_api; }
MenuPortal_component.options.__file = "src/components/MenuPortal.vue"
/* harmony default export */ var MenuPortal = (MenuPortal_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Treeselect.vue?vue&type=script&lang=js&





/* harmony default export */ var Treeselectvue_type_script_lang_js_ = ({
  name: 'vue-treeselect',
  mixins: [treeselectMixin],
  computed: {
    wrapperClass: function wrapperClass() {
      return {
        'vue-treeselect': true,
        'vue-treeselect--single': this.single,
        'vue-treeselect--multi': this.multiple,
        'vue-treeselect--searchable': this.searchable,
        'vue-treeselect--disabled': this.disabled,
        'vue-treeselect--focused': this.trigger.isFocused,
        'vue-treeselect--has-value': this.hasValue,
        'vue-treeselect--open': this.menu.isOpen,
        'vue-treeselect--open-above': this.menu.placement === 'top',
        'vue-treeselect--open-below': this.menu.placement === 'bottom',
        'vue-treeselect--branch-nodes-disabled': this.disableBranchNodes,
        'vue-treeselect--append-to-body': this.appendToBody
      };
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      ref: "wrapper",
      "class": this.wrapperClass
    }, [h(HiddenFields), h(Control, {
      ref: "control"
    }), this.appendToBody ? h(MenuPortal, {
      ref: "portal"
    }) : h(Menu, {
      ref: "menu"
    })]);
  }
});
// CONCATENATED MODULE: ./src/components/Treeselect.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Treeselectvue_type_script_lang_js_ = (Treeselectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Treeselect.vue
var Treeselect_render, Treeselect_staticRenderFns




/* normalize component */

var Treeselect_component = normalizeComponent(
  components_Treeselectvue_type_script_lang_js_,
  Treeselect_render,
  Treeselect_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Treeselect_api; }
Treeselect_component.options.__file = "src/components/Treeselect.vue"
/* harmony default export */ var Treeselect = (Treeselect_component.exports);
// EXTERNAL MODULE: ./src/style.less
var style = __nested_webpack_require_5479__(15);

// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __nested_webpack_require_5479__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* concated harmony reexport Treeselect */__nested_webpack_require_5479__.d(__webpack_exports__, "Treeselect", function() { return Treeselect; });
/* concated harmony reexport treeselectMixin */__nested_webpack_require_5479__.d(__webpack_exports__, "treeselectMixin", function() { return treeselectMixin; });
/* concated harmony reexport LOAD_ROOT_OPTIONS */__nested_webpack_require_5479__.d(__webpack_exports__, "LOAD_ROOT_OPTIONS", function() { return LOAD_ROOT_OPTIONS; });
/* concated harmony reexport LOAD_CHILDREN_OPTIONS */__nested_webpack_require_5479__.d(__webpack_exports__, "LOAD_CHILDREN_OPTIONS", function() { return LOAD_CHILDREN_OPTIONS; });
/* concated harmony reexport ASYNC_SEARCH */__nested_webpack_require_5479__.d(__webpack_exports__, "ASYNC_SEARCH", function() { return ASYNC_SEARCH; });



/* harmony default export */ var src = __webpack_exports__["default"] = (Treeselect);


var VERSION = "0.4.0";

/***/ })
/******/ ]);
//# sourceMappingURL=vue-treeselect.cjs.js.map

/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScriptLoader": function() { return /* binding */ ScriptLoader; }
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var createState = function () {
    return {
        listeners: [],
        scriptId: (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.uuid)('tiny-script'),
        scriptLoaded: false
    };
};
var CreateScriptLoader = function () {
    var state = createState();
    var injectScriptTag = function (scriptId, doc, url, callback) {
        var scriptTag = doc.createElement('script');
        scriptTag.referrerPolicy = 'origin';
        scriptTag.type = 'application/javascript';
        scriptTag.id = scriptId;
        scriptTag.src = url;
        var handler = function () {
            scriptTag.removeEventListener('load', handler);
            callback();
        };
        scriptTag.addEventListener('load', handler);
        if (doc.head) {
            doc.head.appendChild(scriptTag);
        }
    };
    var load = function (doc, url, callback) {
        if (state.scriptLoaded) {
            callback();
        }
        else {
            state.listeners.push(callback);
            if (!doc.getElementById(state.scriptId)) {
                injectScriptTag(state.scriptId, doc, url, function () {
                    state.listeners.forEach(function (fn) { return fn(); });
                    state.scriptLoaded = true;
                });
            }
        }
    };
    // Only to be used by tests.
    var reinitialize = function () {
        state = createState();
    };
    return {
        load: load,
        reinitialize: reinitialize
    };
};
var ScriptLoader = CreateScriptLoader();



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTinymce": function() { return /* binding */ getTinymce; }
/* harmony export */ });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var getGlobal = function () { return (typeof window !== 'undefined' ? window : __webpack_require__.g); };
var getTinymce = function () {
    var global = getGlobal();
    return global && global.tinymce ? global.tinymce : null;
};



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindHandlers": function() { return /* binding */ bindHandlers; },
/* harmony export */   "bindModelHandlers": function() { return /* binding */ bindModelHandlers; },
/* harmony export */   "initEditor": function() { return /* binding */ initEditor; },
/* harmony export */   "isNullOrUndefined": function() { return /* binding */ isNullOrUndefined; },
/* harmony export */   "isTextarea": function() { return /* binding */ isTextarea; },
/* harmony export */   "isValidKey": function() { return /* binding */ isValidKey; },
/* harmony export */   "mergePlugins": function() { return /* binding */ mergePlugins; },
/* harmony export */   "uuid": function() { return /* binding */ uuid; }
/* harmony export */ });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var validEvents = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];
var isValidKey = function (key) { return validEvents.map(function (event) { return event.toLowerCase(); }).indexOf(key.toLowerCase()) !== -1; };
var bindHandlers = function (initEvent, listeners, editor) {
    Object.keys(listeners)
        .filter(isValidKey)
        .forEach(function (key) {
        var handler = listeners[key];
        if (typeof handler === 'function') {
            if (key === 'onInit') {
                handler(initEvent, editor);
            }
            else {
                editor.on(key.substring(2), function (e) { return handler(e, editor); });
            }
        }
    });
};
var bindModelHandlers = function (ctx, editor) {
    var modelEvents = ctx.$props.modelEvents ? ctx.$props.modelEvents : null;
    var normalizedEvents = Array.isArray(modelEvents) ? modelEvents.join(' ') : modelEvents;
    editor.on(normalizedEvents ? normalizedEvents : 'change input undo redo', function () {
        ctx.$emit('input', editor.getContent({ format: ctx.$props.outputFormat }));
    });
};
var initEditor = function (initEvent, ctx, editor) {
    var value = ctx.$props.value ? ctx.$props.value : '';
    var initialValue = ctx.$props.initialValue ? ctx.$props.initialValue : '';
    editor.setContent(value || (ctx.initialized ? ctx.cache : initialValue));
    // Always bind the value listener in case users use :value instead of v-model
    ctx.$watch('value', function (val, prevVal) {
        if (editor && typeof val === 'string' && val !== prevVal && val !== editor.getContent({ format: ctx.$props.outputFormat })) {
            editor.setContent(val);
        }
    });
    // checks if the v-model shorthand is used (which sets an v-on:input listener) and then binds either
    // specified the events or defaults to "change keyup" event and emits the editor content on that event
    if (ctx.$listeners.input) {
        bindModelHandlers(ctx, editor);
    }
    bindHandlers(initEvent, ctx.$listeners, editor);
    ctx.initialized = true;
};
var unique = 0;
var uuid = function (prefix) {
    var time = Date.now();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
var isTextarea = function (element) {
    return element !== null && element.tagName.toLowerCase() === 'textarea';
};
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
var mergePlugins = function (initPlugins, inputPlugins) {
    return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
};
var isNullOrUndefined = function (value) { return value === null || value === undefined; };



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Editor": function() { return /* binding */ Editor; }
/* harmony export */ });
/* harmony import */ var _ScriptLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ScriptLoader */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js");
/* harmony import */ var _TinyMCE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TinyMCE */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js");
/* harmony import */ var _EditorPropTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditorPropTypes */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var renderInline = function (h, id, tagName) {
    return h(tagName ? tagName : 'div', {
        attrs: { id: id }
    });
};
var renderIframe = function (h, id) {
    return h('textarea', {
        attrs: { id: id },
        style: { visibility: 'hidden' }
    });
};
var initialise = function (ctx) { return function () {
    var finalInit = __assign(__assign({}, ctx.$props.init), { readonly: ctx.$props.disabled, selector: "#" + ctx.elementId, plugins: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.mergePlugins)(ctx.$props.init && ctx.$props.init.plugins, ctx.$props.plugins), toolbar: ctx.$props.toolbar || (ctx.$props.init && ctx.$props.init.toolbar), inline: ctx.inlineEditor, setup: function (editor) {
            ctx.editor = editor;
            editor.on('init', function (e) { return (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.initEditor)(e, ctx, editor); });
            if (ctx.$props.init && typeof ctx.$props.init.setup === 'function') {
                ctx.$props.init.setup(editor);
            }
        } });
    if ((0,_Utils__WEBPACK_IMPORTED_MODULE_2__.isTextarea)(ctx.element)) {
        ctx.element.style.visibility = '';
        ctx.element.style.display = '';
    }
    (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)().init(finalInit);
}; };
var Editor = {
    props: _EditorPropTypes__WEBPACK_IMPORTED_MODULE_3__.editorProps,
    created: function () {
        this.elementId = this.$props.id || (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.uuid)('tiny-vue');
        this.inlineEditor = (this.$props.init && this.$props.init.inline) || this.$props.inline;
        this.initialized = false;
    },
    watch: {
        disabled: function () {
            this.editor.setMode(this.disabled ? 'readonly' : 'design');
        }
    },
    mounted: function () {
        this.element = this.$el;
        if ((0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)() !== null) {
            initialise(this)();
        }
        else if (this.element && this.element.ownerDocument) {
            var channel = this.$props.cloudChannel ? this.$props.cloudChannel : '5';
            var apiKey = this.$props.apiKey ? this.$props.apiKey : 'no-api-key';
            var scriptSrc = (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(this.$props.tinymceScriptSrc) ?
                "https://cdn.tiny.cloud/1/" + apiKey + "/tinymce/" + channel + "/tinymce.min.js" :
                this.$props.tinymceScriptSrc;
            _ScriptLoader__WEBPACK_IMPORTED_MODULE_0__.ScriptLoader.load(this.element.ownerDocument, scriptSrc, initialise(this));
        }
    },
    beforeDestroy: function () {
        if ((0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)() !== null) {
            (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)().remove(this.editor);
        }
    },
    deactivated: function () {
        var _a;
        if (!this.inlineEditor) {
            this.cache = this.editor.getContent();
            (_a = (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)()) === null || _a === void 0 ? void 0 : _a.remove(this.editor);
        }
    },
    activated: function () {
        if (!this.inlineEditor && this.initialized) {
            initialise(this)();
        }
    },
    render: function (h) {
        return this.inlineEditor ? renderInline(h, this.elementId, this.$props.tagName) : renderIframe(h, this.elementId);
    }
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editorProps": function() { return /* binding */ editorProps; }
/* harmony export */ });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var editorProps = {
    apiKey: String,
    cloudChannel: String,
    id: String,
    init: Object,
    initialValue: String,
    inline: Boolean,
    modelEvents: [String, Array],
    plugins: [String, Array],
    tagName: String,
    toolbar: [String, Array],
    value: String,
    disabled: Boolean,
    tinymceScriptSrc: String,
    outputFormat: {
        type: String,
        validator: function (prop) { return prop === 'html' || prop === 'text'; }
    },
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Editor */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* harmony default export */ __webpack_exports__["default"] = (_components_Editor__WEBPACK_IMPORTED_MODULE_0__.Editor);


/***/ }),

/***/ "./node_modules/babel-helper-vue-jsx-merge-props/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/babel-helper-vue-jsx-merge-props/index.js ***!
  \****************************************************************/
/***/ (function(module) {

var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/

module.exports = function mergeJSXProps (objs) {
  return objs.reduce(function (a, b) {
    var aa, bb, key, nestedKey, temp
    for (key in b) {
      aa = a[key]
      bb = b[key]
      if (aa && nestRE.test(key)) {
        // normalize class
        if (key === 'class') {
          if (typeof aa === 'string') {
            temp = aa
            a[key] = aa = {}
            aa[temp] = true
          }
          if (typeof bb === 'string') {
            temp = bb
            b[key] = bb = {}
            bb[temp] = true
          }
        }
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey])
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb)
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb)
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey]
          }
        }
      } else {
        a[key] = b[key]
      }
    }
    return a
  }, {})
}

function mergeFn (a, b) {
  return function () {
    a && a.apply(this, arguments)
    b && b.apply(this, arguments)
  }
}


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/forms/CustomInputExample.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/forms/CustomInputExample.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/author/AddAuthor.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/author/AddAuthor.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils */ "./utils/index.js");
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../constants/config */ "./constants/config.js");
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
  data: function data() {
    return {
      addAuthorForm: {
        fio: '',
        birthday: '',
        death_day: '',
        // status:'active',
        description: '',
        photo: null
      },
      selectData: [{
        label: "Active",
        value: "active"
      }, {
        label: "Inactive",
        value: "inactive"
      }],
      direction: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getDirection)().direction,
      defaultStatus: {
        label: "Active",
        value: "active"
      },
      errorMsgs: null
    };
  },
  props: ['frommodal'],
  components: {
    "v-select": (vue_select__WEBPACK_IMPORTED_MODULE_0___default())
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)(["getAlertAuthorMsg"])),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)(['addAuthor', 'getAuthorsListArray'])), {}, {
    onaddAuthorFormSubmit: function onaddAuthorFormSubmit() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var author;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              author = new FormData();
              if (_this.addAuthorForm.photo) {
                author.append('photo', _this.addAuthorForm.photo);
              }
              author.append('fio', _this.addAuthorForm.fio);
              author.append('birthday', _this.addAuthorForm.birthday);
              author.append('death_day', _this.addAuthorForm.death_day);
              author.append('description', _this.addAuthorForm.description);
              author.append('status', _this.addAuthorForm.status);
              _context.next = 9;
              return _this.addAuthor(author);
            case 9:
              if (!_this.getAlertAuthorMsg.error) {
                _context.next = 13;
                break;
              }
              _this.errorMsgs = _this.getAlertAuthorMsg.message;
              _context.next = 16;
              break;
            case 13:
              _context.next = 15;
              return _this.getAuthorsListArray();
            case 15:
              if (!_this.$props.frommodal) {
                _this.$router.push("".concat(_constants_config__WEBPACK_IMPORTED_MODULE_3__.adminRoot, "/author/default"));
              } else {
                _this.$bvModal.hide('authormodal');
              }
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    setFile: function setFile(event) {
      console.log(event);
      this.addAuthorForm.photo = event.target.files[0];
    },
    setStatus: function setStatus(event) {
      this.addAuthorForm.status = event.value;
      this.defaultStatus.status = event.value;
      this.defaultStatus.label = event.label;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/book/EditBook.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/book/EditBook.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
/* harmony import */ var vue_advanced_cropper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-advanced-cropper */ "./node_modules/vue-advanced-cropper/dist/index.es.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils */ "./utils/index.js");
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../constants/config */ "./constants/config.js");
/* harmony import */ var _containers_forms_CustomInputExample__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../containers/forms/CustomInputExample */ "./containers/forms/CustomInputExample.vue");
/* harmony import */ var _author_AddAuthor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../author/AddAuthor */ "./views/app/pages/author/AddAuthor.vue");
/* harmony import */ var vue_tree_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-tree-list */ "./node_modules/vue-tree-list/dist/vue-tree-list.umd.min.js");
/* harmony import */ var vue_tree_list__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_tree_list__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @riophae/vue-treeselect */ "./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.cjs.js");
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @riophae/vue-treeselect/dist/vue-treeselect.css */ "./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var _require = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js"),
  required = _require.required,
  maxLength = _require.maxLength,
  minLength = _require.minLength,
  email = _require.email;











/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "v-select": (vue_select__WEBPACK_IMPORTED_MODULE_2___default()),
    "custom-input-example": _containers_forms_CustomInputExample__WEBPACK_IMPORTED_MODULE_6__["default"],
    editor: _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Cropper: vue_advanced_cropper__WEBPACK_IMPORTED_MODULE_1__.Cropper,
    AddAuthor: _author_AddAuthor__WEBPACK_IMPORTED_MODULE_7__["default"],
    VueTreeList: vue_tree_list__WEBPACK_IMPORTED_MODULE_8__.VueTreeList,
    Treeselect: (_riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_9___default())
  },
  data: function data() {
    var _ref;
    return _ref = {
      direction: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getDirection)().direction,
      addBookForm: {
        name: "",
        author: "",
        paper_price: null,
        audio_price: null,
        ebook_price: null,
        image: null,
        fragment: "",
        audio: "",
        ebook: "",
        description: "",
        year: 2020,
        publishing_house: "",
        edition: "",
        age_access: 18,
        isbn: "",
        uuid: "",
        number_of_pages: 0,
        category: "",
        category_id: null,
        content: "",
        status: "",
        is_new: 0,
        is_bestseller: 0,
        selectedCover: ""
      },
      tocData: {
        title: "",
        sort: "",
        book_id: this.$route.params.id,
        page: ""
      },
      tocDataList: [],
      selectData: [{
        label: "Active",
        value: "active"
      }, {
        label: "Inavtive",
        value: "draft"
      }, {
        label: "Moderation",
        value: "moderation"
      }, {
        label: "Editor",
        value: "editor"
      }, {
        label: "Canceled",
        value: "canceled"
      }],
      epubfile: null,
      errorMsg: null,
      successMsg: null,
      errForm: false,
      selectedAuthor: null,
      selectedCategory: null,
      selectedStatus: null,
      selectedLang: null,
      formdata: {},
      languages: [{
        label: "O'zbek",
        value: "oz"
      }, {
        label: "Russian",
        value: "ru"
      }, {
        label: "English",
        value: "en"
      }],
      cover: [{
        label: "Qattiq",
        value: "qattiq"
      }, {
        label: "Yumshoq",
        value: "yumshoq"
      }],
      defaultLang: [{
        label: "O'zbek",
        value: "oz"
      }],
      bookImg: ""
    }, _defineProperty(_ref, "errorMsg", null), _defineProperty(_ref, "errForm", false), _defineProperty(_ref, "img", "https://images.pexels.com/photos/226746/pexels-photo-226746.jpeg"), _defineProperty(_ref, "croppedImage", null), _defineProperty(_ref, "optionsImg", null), _defineProperty(_ref, "coordinates", {
      width: 0,
      height: 0,
      left: 0,
      top: 0,
      image: null
    }), _defineProperty(_ref, "hasAudio", false), _defineProperty(_ref, "audio", {
      start: 0,
      end: 30
    }), _defineProperty(_ref, "last_audio", {
      file_path: "",
      file_type: ""
    }), _defineProperty(_ref, "newTree", {}), _defineProperty(_ref, "data", new vue_tree_list__WEBPACK_IMPORTED_MODULE_8__.Tree([])), _defineProperty(_ref, "progBarCount", 0), _defineProperty(_ref, "isLoad", false), _defineProperty(_ref, "galleries", []), _ref;
  },
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_11__.validationMixin],
  validations: {
    addBookForm: {
      name: {
        required: required,
        minLength: minLength(6)
      },
      edition: {
        required: required,
        minLength: minLength(4)
      }
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_12__.mapGetters)(["getBookAlertMsg", "authorsListArray", "currentBook", "currentUser", "categoryListArray", "getEpubContent", "getBookAudio", "filesList", "getMsgTableOfContent", "getUploadProgressNum", "cropfileList", "getGallery"])),
  watch: {
    getUploadProgressNum: function getUploadProgressNum(newCount, oldCount) {
      var _this = this;
      this.progBarCount = newCount;
      if (newCount == 100) {
        setTimeout(function () {
          _this.progBarCount = 0;
        }, 1500);
      }
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_12__.mapActions)(["addBook", "updateBook", "getAuthorsListArray", "getTheBook", "getCategoryListArray", "storeEpub", "storeAudio", "storeCropImage", "trimAudioFile", "storeImage", "addTableOfContent", "deleteTocItem", "removeAudioById", "destroyEpub", "storeGallery", "getGalleryList"])), {}, {
    sendToc: function sendToc() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this2.addTableOfContent(_this2.tocData);
            case 2:
              if (_this2.getMsgTableOfContent.success) {
                _this2.tocData = {
                  title: "",
                  sort: "",
                  book_id: _this2.$route.params.id,
                  page: ""
                };
                _this2.$notify("success", "Success", _this2.getMsgTableOfContent.message);
                _this2.tocDataList = _this2.getMsgTableOfContent.result;
              }
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    rmTocItem: function rmTocItem(id) {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this3.deleteTocItem(id);
            case 2:
              if (_this3.getMsgTableOfContent.success) {
                _this3.$notify("success", "Success", _this3.getMsgTableOfContent.message);
                _this3.tocDataList = _this3.getMsgTableOfContent.result;
              }
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    onAddBookFormSubmit: function onAddBookFormSubmit() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var book;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this4.$v.$touch();
              book = _this4.formdata;
              _this4.isLoad = true;
              _context3.next = 5;
              return _this4.updateBook(book);
            case 5:
              if (_this4.getBookAlertMsg.error) {
                _this4.errorMsg = _this4.getBookAlertMsg.message;
                _this4.successMsg = null;
              }
              if (_this4.getBookAlertMsg.success) {
                _this4.errorMsg = null;
                _this4.successMsg = _this4.getBookAlertMsg.message;
              }
              _this4.isLoad = false;
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    setFile: function setFile(event, key) {
      this.addBookForm[key] = event.target.files[0];
    },
    trimAudio: function trimAudio(event) {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var audio, audioPlayer;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              audio = {
                audio: _this5.formdata.audio,
                start: _this5.audio.start,
                end: _this5.audio.end
              };
              _context4.next = 3;
              return _this5.trimAudioFile(audio);
            case 3:
              if (_this5.getBookAudio) {
                _this5.formdata.audio = _this5.getBookAudio;
                _this5.hasAudio = true;
                audioPlayer = document.getElementById("audio");
                audioPlayer.load();
              }
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    setEbookImage: function setEbookImage(event, key) {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var file;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              file = event.target.files[0]; // let image = new FormData();
              // image.append("files[]", event.target.files[0]);
              // await this.storeImage(image);
              // if (key == "ebook") {
              //     this.bookImg = this.filesList[0];
              // } else if (key == "options") {
              //     this.optionsImg = this.filesList[0];
              //     this.formdata.image = this.optionsImg.path;
              // }
              _this6.coordinates.image = file;
              _this6.optionsImg = URL.createObjectURL(file);
              console.log(event.target.files[0]);
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    setAudioFile: function setAudioFile(event) {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var audio;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              console.log(event.target.files[0]);
              audio = new FormData();
              audio.append("audio", event.target.files[0]);
              audio.append("book_id", _this7.$route.params.id);
              _context6.next = 6;
              return _this7.storeAudio(audio);
            case 6:
              if (_this7.getBookAudio) {
                _this7.formdata.audio = _this7.getBookAudio;
                _this7.hasAudio = true;
                // var audioPlayer = document.getElementById('audio');
                // audioPlayer.load();
              }
            case 7:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    removeAudio: function removeAudio(mp3) {
      var _this8 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (!confirm("Are you sure")) {
                _context7.next = 4;
                break;
              }
              _context7.next = 3;
              return _this8.removeAudioById(mp3.id);
            case 3:
              if (_this8.getBookAudio) {
                _this8.formdata.audio = _this8.getBookAudio;
                _this8.hasAudio = true;
              }
            case 4:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    storeToGallery: function storeToGallery(event) {
      var _this9 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var gallery;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              gallery = new FormData();
              gallery.append('image', event.target.files[0]);
              gallery.append('book_id', _this9.$route.params.id);
              _context8.next = 5;
              return _this9.storeGallery(gallery);
            case 5:
              if (_this9.getBookAlertMsg.error) {
                _this9.errorMsg = _this9.getBookAlertMsg.message;
                _this9.successMsg = null;
              }
              if (!_this9.getBookAlertMsg.success) {
                _context8.next = 11;
                break;
              }
              _this9.errorMsg = null;
              _context8.next = 10;
              return _this9.getGalleryList(_this9.$route.params.id);
            case 10:
              _this9.galleries = _this9.getGallery;
            case 11:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    setEpubFile: function setEpubFile(event, key) {
      var _this10 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var epub;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              epub = new FormData();
              epub.append("ebook", event.target.files[0]);
              _context9.next = 4;
              return _this10.storeEpub(epub);
            case 4:
              _this10.epubfile = event.target.files[0];
              _this10.formdata.author = _this10.getEpubContent.creator;
              _this10.formdata.ebook = _this10.getEpubContent.file_path;
              _this10.formdata.name = _this10.getEpubContent.title;
              _this10.formdata.publishing_house = _this10.getEpubContent.publisher;
              _this10.formdata.uuid = _this10.getEpubContent.identifier.replace("urn:uuid:", "");
              _this10.formdata.content = "";
              _this10.getEpubContent.chapters.map(function (e) {
                _this10.formdata.content += e.title + "\r\n";
              });
              // this.formdata.content = this.getEpubContent.chapters;
              _this10.formdata.description = _this10.getEpubContent.description;
              _this10.formdata.image = _this10.getEpubContent.content["cover"];
              _this10.formdata.lang = _this10.getEpubContent.language;
              _context9.next = 17;
              return _this10.makeSelectedLang();
            case 17:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    },
    deleteEpub: function deleteEpub() {
      var _this11 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _this11.isLoad = true;
              _context10.next = 3;
              return _this11.destroyEpub(_this11.getEpubContent.file_path);
            case 3:
              if (_this11.getBookAlertMsg.error) {
                _this11.errorMsg = _this11.getBookAlertMsg.message;
                _this11.successMsg = null;
              }
              if (_this11.getBookAlertMsg.success) {
                _this11.errorMsg = null;
                _this11.epubfile = null;
                _this11.successMsg = _this11.getBookAlertMsg.message;
              }
              _this11.isLoad = false;
            case 6:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }))();
    },
    setCheckBox: function setCheckBox(event, key) {
      if (event.target.checked) {
        this.addBookForm[key] = 1;
      } else {
        this.addBookForm[key] = 0;
      }
    },
    setSelectedLang: function setSelectedLang(event) {
      this.formdata.lang = event.value;
    },
    setSelectedCover: function setSelectedCover(event) {
      this.formdata.selectedCover = event.value;
    },
    setSelectedStatus: function setSelectedStatus(event) {
      this.formdata.status = event.value;
    },
    findBooksEvent: function findBooksEvent(search, loading) {
      var _this12 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var thisval;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              thisval = search;
              if (!(thisval != "")) {
                _context11.next = 4;
                break;
              }
              _context11.next = 4;
              return _this12.actionFindBook({
                name: thisval
              });
            case 4:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }))();
    },
    makeSelectedAuthor: function makeSelectedAuthor() {
      var _this13 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var selectedAuthorObj;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              if (_this13.formdata.author) {
                selectedAuthorObj = {
                  label: _this13.formdata.author.fio,
                  value: _this13.formdata.author_id
                };
                _this13.selectedAuthor = selectedAuthorObj;
              }
            case 1:
            case "end":
              return _context12.stop();
          }
        }, _callee12);
      }))();
    },
    makeSelectedLang: function makeSelectedLang() {
      var _this14 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              if (_this14.formdata.lang == "oz") {
                _this14.selectedLang = {
                  label: "O'zbek",
                  value: "oz"
                };
              }
              if (_this14.formdata.lang == "en") {
                _this14.selectedLang = {
                  label: "English",
                  value: "en"
                };
              }
              if (_this14.formdata.lang == "ru") {
                _this14.selectedLang = {
                  label: "Russian",
                  value: "ru"
                };
              }
            case 3:
            case "end":
              return _context13.stop();
          }
        }, _callee13);
      }))();
    },
    makeSelectedStatus: function makeSelectedStatus() {
      var _this15 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
        var selectedStatusObj;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              selectedStatusObj = {
                label: _this15.formdata.status,
                value: _this15.formdata.status
              };
              if (_this15.formdata.status == "active") {
                selectedStatusObj.label = "Active";
              } else if (_this15.formdata.status == "draft") {
                selectedStatusObj.label = "Draft";
              } else if (_this15.formdata.status == "moderation") {
                selectedStatusObj.label = "Moderation";
              } else if (_this15.formdata.status == "editor") {
                selectedStatusObj.label = "Editor";
              } else if (_this15.formdata.status == "canceled") {
                selectedStatusObj.label = "Canceled";
              } else {
                selectedStatusObj.label = "Inactive";
              }
              _this15.selectedStatus = selectedStatusObj;
            case 3:
            case "end":
              return _context14.stop();
          }
        }, _callee14);
      }))();
    },
    setStatus: function setStatus(event) {
      this.formdata.status = event.value;
      // console.log(event.value);
    },
    cropImg: function cropImg(itemKey, refOption) {
      var _this16 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
        var _this16$$refs$refOpti, coordinates, canvas, image;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              _this16$$refs$refOpti = _this16.$refs[refOption].getResult(), coordinates = _this16$$refs$refOpti.coordinates, canvas = _this16$$refs$refOpti.canvas;
              _this16.croppedImage = canvas.toDataURL();
              image = new FormData();
              image.append("image", _this16.coordinates.image);
              image.append("width", coordinates.width);
              image.append("height", coordinates.height);
              image.append("x", coordinates.left);
              image.append("y", coordinates.top);
              image.append("book_id", _this16.$route.params.id);
              _context15.next = 11;
              return _this16.storeCropImage(image);
            case 11:
              console.log(_this16.cropfileList);
              if (_this16.cropfileList.length) {
                if (itemKey == "book") {
                  _this16.bookImg = _this16.cropfileList[0];
                } else if (itemKey == "options") {
                  _this16.optionsImg = _this16.cropfileList[0].path;
                }
              }
            case 13:
            case "end":
              return _context15.stop();
          }
        }, _callee15);
      }))();
    },
    onDel: function onDel(node) {
      console.log(node);
      node.remove();
    },
    onChangeName: function onChangeName(params) {
      console.log(params);
    },
    onAddNode: function onAddNode(params) {
      console.log(params);
    },
    onClick: function onClick(params) {
      console.log(params);
    },
    addNode: function addNode() {
      var node = new vue_tree_list__WEBPACK_IMPORTED_MODULE_8__.TreeNode({
        name: "new node",
        isLeaf: false
      });
      if (!this.data.children) this.data.children = [];
      this.data.addChildren(node);
    },
    getNewTree: function getNewTree() {
      var vm = this;
      function _dfs(oldNode) {
        var newNode = {};
        for (var k in oldNode) {
          if (k !== "children" && k !== "parent") {
            newNode[k] = oldNode[k];
          }
        }
        if (oldNode.children && oldNode.children.length > 0) {
          newNode.children = [];
          for (var i = 0, len = oldNode.children.length; i < len; i++) {
            newNode.children.push(_dfs(oldNode.children[i]));
          }
        }
        return newNode;
      }
      vm.newTree = _dfs(vm.data);
    }
  }),
  mounted: function mounted() {
    var _this17 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
      var categories, authors;
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            _this17.getAuthorsListArray();
            _this17.getCategoryListArray();
            _context16.next = 4;
            return _this17.getTheBook(_this17.$route.params.id);
          case 4:
            _this17.formdata = _this17.currentBook;
            _this17.tocDataList = _this17.currentBook.table_of_content;
            if (_this17.formdata.audio) {
              _this17.hasAudio = true;
            }
            if (_this17.formdata.category) {
              categories = [];
              _this17.formdata.category.map(function (value, key) {
                categories.push(value.id);
              });
              _this17.formdata.category = categories;
            }
            if (_this17.formdata.author) {
              authors = [];
              _this17.formdata.author.map(function (val, key) {
                authors.push(val.id);
              });
              _this17.formdata.author = authors;
            }
            //await this.makeSelectedAuthor();
            _context16.next = 11;
            return _this17.makeSelectedStatus();
          case 11:
            _context16.next = 13;
            return _this17.makeSelectedLang();
          case 13:
            _context16.next = 15;
            return _this17.getGalleryList(_this17.$route.params.id);
          case 15:
            _this17.galleries = _this17.getGallery;
          case 16:
          case "end":
            return _context16.stop();
        }
      }, _callee16);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/forms/CustomInputExample.vue?vue&type=template&id=4c99f6e0&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/forms/CustomInputExample.vue?vue&type=template&id=4c99f6e0& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  }, [_c("b-card", {
    staticClass: "mb-4",
    attrs: {
      title: _vm.$t("form-components.custom-inputs")
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("form-components.checkboxes")
    }
  }, [_c("b-form-checkbox-group", {
    attrs: {
      stacked: ""
    }
  }, [_c("b-form-checkbox", {
    attrs: {
      value: "first"
    }
  }, [_vm._v("Check this custom checkbox")]), _vm._v(" "), _c("b-form-checkbox", {
    attrs: {
      value: "second"
    }
  }, [_vm._v("Or this one")]), _vm._v(" "), _c("b-form-checkbox", {
    attrs: {
      value: "third",
      disabled: ""
    }
  }, [_vm._v("But not this disabled one")])], 1)], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("form-components.radios")
    }
  }, [_c("b-form-radio-group", {
    attrs: {
      stacked: ""
    }
  }, [_c("b-form-radio", {
    attrs: {
      value: "first"
    }
  }, [_vm._v("Select this custom radio")]), _vm._v(" "), _c("b-form-radio", {
    attrs: {
      value: "second"
    }
  }, [_vm._v("Or this one")]), _vm._v(" "), _c("b-form-radio", {
    attrs: {
      value: "third",
      disabled: ""
    }
  }, [_vm._v("But not this disabled one")])], 1)], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("form-components.inline")
    }
  }, [_c("b-form-checkbox-group", [_c("b-form-checkbox", {
    attrs: {
      value: "first"
    }
  }, [_vm._v("An inline custom input")]), _vm._v(" "), _c("b-form-checkbox", {
    attrs: {
      value: "second"
    }
  }, [_vm._v("and another one")])], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/author/AddAuthor.vue?vue&type=template&id=07b5f350&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/author/AddAuthor.vue?vue&type=template&id=07b5f350& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("h2", [_vm._v("Add Author")]), _vm._v(" "), _c("b-row", [_c("b-colxx", {
    attrs: {
      xxs: "12"
    }
  }, [_c("b-card", {
    staticClass: "mb-4"
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.onaddAuthorFormSubmit.apply(null, arguments);
      }
    }
  }, [_vm.errorMsgs ? _c("div", {
    staticClass: "alerts"
  }, [_c("div", {
    staticClass: "alert alert-danger"
  }, [_vm._l(_vm.errorMsgs, function (err) {
    return [_vm._v(" " + _vm._s(err[0]) + " "), _c("br")];
  })], 2)]) : _vm._e(), _vm._v(" "), _c("label", {
    staticClass: "form-group has-float-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.addAuthorForm.fio,
      expression: "addAuthorForm.fio"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      required: ""
    },
    domProps: {
      value: _vm.addAuthorForm.fio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.addAuthorForm, "fio", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("user.name")))])]), _vm._v(" "), _c("label", {
    staticClass: "form-group has-float-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.addAuthorForm.birthday,
      expression: "addAuthorForm.birthday"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.addAuthorForm.birthday
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.addAuthorForm, "birthday", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("user.birthday")))])]), _vm._v(" "), _c("label", {
    staticClass: "form-group has-float-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.addAuthorForm.death_day,
      expression: "addAuthorForm.death_day"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.addAuthorForm.death_day
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.addAuthorForm, "death_day", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("user.deathday")))])]), _vm._v(" "), _c("label", {
    staticClass: "form-group has-float-label"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.addAuthorForm.description,
      expression: "addAuthorForm.description"
    }],
    staticClass: "form-control",
    attrs: {
      cols: "10",
      rows: "4"
    },
    domProps: {
      value: _vm.addAuthorForm.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.addAuthorForm, "description", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("user.biography")))])]), _vm._v(" "), _c("label", {
    staticClass: "form-group has-float-label"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "file"
    },
    on: {
      change: function change($event) {
        return _vm.setFile($event);
      }
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("user.photo")))])]), _vm._v(" "), _c("b-button", {
    staticClass: "mt-4",
    attrs: {
      type: "submit",
      variant: "primary"
    }
  }, [_vm._v(_vm._s(_vm.$t("forms.submit")))])], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/book/EditBook.vue?vue&type=template&id=2666bc3e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/book/EditBook.vue?vue&type=template&id=2666bc3e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b-row", [_c("b-colxx", {
    attrs: {
      xxs: "12"
    }
  }, [_c("b-card", {
    staticClass: "mb-4",
    attrs: {
      title: "Add Book (Moderator)"
    }
  }, [!_vm.isLoad ? _c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.onAddBookFormSubmit.apply(null, arguments);
      }
    }
  }, [_vm.errForm ? _c("div", {
    staticClass: "alert alert-danger"
  }, [_vm._v("\n                            You have to fill out all fields...\n                        ")]) : _vm._e(), _vm._v(" "), _vm.errorMsg ? _c("div", {
    staticClass: "errors"
  }, _vm._l(_vm.errorMsg, function (err, key) {
    return _c("div", {
      key: key,
      staticClass: "alert alert-danger"
    }, [_vm._v("\n                                " + _vm._s(err[0]) + "\n                            ")]);
  }), 0) : _vm._e(), _vm._v(" "), _vm.successMsg ? _c("div", {
    staticClass: "errors"
  }, [_c("div", {
    staticClass: "alert alert-success"
  }, [_vm._v("\n                                " + _vm._s(_vm.successMsg) + "\n                            ")])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-4 mb-4"
  }, [_vm.optionsImg ? _c("div", {
    staticClass: "card mb-4 text-white crop_block"
  }, [_c("cropper", {
    ref: "cropperImgoptions",
    staticClass: "cropper",
    attrs: {
      src: _vm.optionsImg
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "btn_crop",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cropImg("options", "cropperImgoptions");
      }
    }
  }, [_c("i", {
    staticClass: "simple-icon-crop"
  })])], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "p-4 border mt-4"
  }, [_c("div", {
    staticClass: "cover_image"
  }, [_c("img", {
    staticClass: "img-fluid",
    attrs: {
      src: _vm.formdata.image,
      alt: ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "btn-group m-3 text-center d-flex"
  }, [_c("label", {
    staticClass: "btn btn-primary btn-xs"
  }, [_c("input", {
    staticClass: "d-none",
    attrs: {
      type: "file"
    },
    on: {
      change: function change($event) {
        return _vm.setEbookImage($event, "options");
      }
    }
  }), _vm._v("\n                                            " + _vm._s(_vm.$t("book.change")) + "\n                                        ")]), _vm._v(" "), _c("label", {
    staticClass: "btn btn-danger btn-xs"
  }, [_vm._v(_vm._s(_vm.$t("book.delete")))])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4 mb-4"
  }, [!_vm.epubfile ? _c("div", {
    staticClass: "p-4 border mt-4",
    staticStyle: {
      position: "relative"
    }
  }, [_c("label", {
    staticClass: "form-group has-float-label jv_input_file_label"
  }, [_c("input", {
    staticClass: "form-control jv_input_file",
    attrs: {
      type: "file"
    },
    on: {
      change: function change($event) {
        return _vm.setEpubFile($event, "ebook");
      }
    }
  }), _vm._v(" "), _c("i", {
    staticClass: "simple-icon-notebook"
  })]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("book.ebook")))]), _vm._v(" "), _vm.progBarCount > 0 ? _c("b-progress", {
    attrs: {
      value: _vm.progBarCount,
      max: "100",
      animated: ""
    }
  }) : _vm._e()], 1) : _c("div", {
    staticClass: "p-4 border mt-4",
    staticStyle: {
      position: "relative"
    }
  }, [_c("label", {
    staticClass: "form-group has-float-label jv_input_file_label jv_error_btn",
    on: {
      click: _vm.deleteEpub
    }
  }, [_c("i", {
    staticClass: "simple-icon-close"
  })]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.epubfile.name))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4 mb-4"
  }, [_c("div", {
    staticClass: "p-4 border mt-4"
  }, [_vm.hasAudio ? _c("div", {
    staticClass: "audio_wrap"
  }, [_vm._l(_vm.formdata.audio, function (mp3, index) {
    return [_c("div", {
      key: index,
      staticClass: "card p-3 shadow mb-2"
    }, [_c("h5", {
      staticClass: "text-primary"
    }, [_vm._v(_vm._s(mp3.song) + " / "), _c("small", {
      staticClass: "text-secondary"
    }, [_vm._v("\n                                                        " + _vm._s(mp3.artist) + " ")])]), _vm._v(" "), _c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("audio", {
      staticClass: "w-100",
      attrs: {
        id: "audio",
        controls: ""
      }
    }, [_c("source", {
      attrs: {
        src: mp3.audio,
        type: "audio/mpeg"
      }
    }), _vm._v("\n                                                        Your browser does not support\n                                                        the audio element.\n                                                    ")]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-transparent",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.removeAudio(mp3);
        }
      }
    }, [_c("i", {
      staticClass: "iconsminds-close text-danger h5 ml-2"
    })])])])];
  })], 2) : _vm._e(), _vm._v(" "), _c("label", {
    staticClass: "form-group has-float-label jv_input_file_label"
  }, [_c("input", {
    staticClass: "form-control jv_input_file",
    attrs: {
      type: "file"
    },
    on: {
      change: function change($event) {
        return _vm.setAudioFile($event);
      }
    }
  }), _vm._v(" "), _c("i", {
    staticClass: "iconsminds-loudspeaker"
  })]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("book.audio")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mb-5"
  }, [_c("button", {
    directives: [{
      name: "b-modal",
      rawName: "v-b-modal.modallong",
      modifiers: {
        modallong: true
      }
    }],
    staticClass: "btn btn-info",
    attrs: {
      type: "button"
    }
  }, [_vm._v("\n                                    " + _vm._s(_vm.$t("book.add_toc")) + "\n                                ")]), _vm._v(" "), _c("b-modal", {
    ref: "modallong",
    attrs: {
      id: "modallong",
      title: _vm.$t("book.add_toc")
    }
  }, [_c("div", [_c("label", {
    staticClass: "form-group has-float-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tocData.title,
      expression: "tocData.title"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.tocData.title
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.tocData, "title", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("book.title")))])]), _vm._v(" "), _c("label", {
    staticClass: "form-group has-float-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tocData.sort,
      expression: "tocData.sort"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.tocData.sort
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.tocData, "sort", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("book.sort")))])]), _vm._v(" "), _c("label", {
    staticClass: "form-group has-float-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tocData.page,
      expression: "tocData.page"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.tocData.page
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.tocData, "page", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("book.page")))])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-borderd"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.$t("book.title")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("book.sort")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("book.page")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("book.action")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.tocDataList, function (item, ind) {
    return _c("tr", {
      key: ind
    }, [_c("td", [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.sort))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.page))]), _vm._v(" "), _c("td", [_c("button", {
      staticClass: "btn btn-danger",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.rmTocItem(item.id);
        }
      }
    }, [_vm._v("\n                                                        Remove\n                                                    ")])])]);
  }), 0)]), _vm._v(" "), _c("template", {
    slot: "modal-footer"
  }, [_c("b-button", {
    staticClass: "mr-1",
    attrs: {
      variant: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.sendToc();
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("menu.add")))])], 1)], 2)], 1), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12 mb-4"
  }, [_c("label", {
    staticClass: "form-group has-float-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formdata.name,
      expression: "formdata.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formdata.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formdata, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("book.name")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6 mb-4"
  }, [_c("label", {
    staticClass: "form-group has-float-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formdata.publishing_house,
      expression: "formdata.publishing_house"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formdata.publishing_house
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formdata, "publishing_house", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("book.publishing_house")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-4"
  }, [_c("label", {
    staticClass: "form-group has-float-label"
  }, [_c("v-select", {
    attrs: {
      multiple: "",
      options: _vm.authorsListArray,
      reduce: function reduce(option) {
        return option.id;
      },
      label: "fio"
    },
    model: {
      value: _vm.formdata.author,
      callback: function callback($$v) {
        _vm.$set(_vm.formdata, "author", $$v);
      },
      expression: "formdata.author"
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("book.author_id")))]), _vm._v(" "), _c("button", {
    directives: [{
      name: "b-modal",
      rawName: "v-b-modal.authormodal",
      modifiers: {
        authormodal: true
      }
    }],
    staticClass: "btn_add_select",
    attrs: {
      variant: "outline-primary",
      type: "button"
    }
  }, [_c("i", {
    staticClass: "simple-icon-plus"
  })])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-4"
  }, [_c("label", {
    staticClass: "form-group has-float-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formdata.isbn,
      expression: "formdata.isbn"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formdata.isbn
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formdata, "isbn", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("book.isbn")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-4"
  }, [_c("label", {
    staticClass: "form-group has-float-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formdata.uuid,
      expression: "formdata.uuid"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formdata.uuid
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formdata, "uuid", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("book.uuid")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-4"
  }, [_c("treeselect", {
    attrs: {
      multiple: true,
      options: _vm.categoryListArray
    },
    model: {
      value: _vm.formdata.category,
      callback: function callback($$v) {
        _vm.$set(_vm.formdata, "category", $$v);
      },
      expression: "formdata.category"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-4"
  }, [_c("label", {
    staticClass: "form-group has-float-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formdata.number_of_pages,
      expression: "formdata.number_of_pages"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formdata.number_of_pages
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formdata, "number_of_pages", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("book.number_of_pages")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-4"
  }, [_c("label", {
    staticClass: "form-group has-float-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formdata.age_access,
      expression: "formdata.age_access"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formdata.age_access
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formdata, "age_access", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("book.age_access")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-4"
  }, [_c("label", {
    staticClass: "form-group has-float-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formdata.year,
      expression: "formdata.year"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      min: "1900",
      max: "2099",
      step: "1"
    },
    domProps: {
      value: _vm.formdata.year
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formdata, "year", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("book.year")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-4"
  }, [_c("label", {
    staticClass: "form-group has-float-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formdata.edition,
      expression: "formdata.edition"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formdata.edition
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formdata, "edition", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("book.edition")))])])]), _vm._v(" "), _c("div", {
    staticClass: "border card col-sm-12 mb-4 pb-4",
    attrs: {
      id: "options"
    }
  }, [_c("b-button", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.collapseAccordion4",
      modifiers: {
        collapseAccordion4: true
      }
    }],
    attrs: {
      variant: "link"
    }
  }, [_vm._v("Options")]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "collapseAccordion4",
      accordion: "my-accordion"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("label", {
    staticClass: "form-group has-float-label"
  }, [_c("editor", {
    attrs: {
      initialValue: "",
      init: {
        height: 500,
        menubar: false,
        plugins: ["advlist autolink lists link image charmap", "searchreplace visualblocks code fullscreen", "print preview anchor insertdatetime media", "paste code help wordcount table image"],
        toolbar: "undo redo | formatselect | bold italic | \
                                                alignleft aligncenter alignright | \
                                                bullist numlist outdent indent | help"
      }
    },
    model: {
      value: _vm.formdata.description,
      callback: function callback($$v) {
        _vm.$set(_vm.formdata, "description", $$v);
      },
      expression: "\n                                                    formdata.description\n                                                "
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("book.description")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-7"
  }, [_c("label", {
    staticClass: "form-group has-float-label"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formdata.content,
      expression: "formdata.content"
    }],
    staticClass: "form-control",
    attrs: {
      cols: "12",
      rows: "20"
    },
    domProps: {
      value: _vm.formdata.content
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formdata, "content", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("book.content")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-5"
  }, [_c("div", {
    staticClass: "d-flex mb-3"
  }, [_c("div", {
    staticClass: "col-md-6 custom-control custom-checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formdata.is_new,
      expression: "\n    formdata.is_new\n"
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      id: "is_new"
    },
    domProps: {
      checked: Array.isArray(_vm.formdata.is_new) ? _vm._i(_vm.formdata.is_new, null) > -1 : _vm.formdata.is_new
    },
    on: {
      change: [function ($event) {
        var $$a = _vm.formdata.is_new,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.formdata, "is_new", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.formdata, "is_new", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.formdata, "is_new", $$c);
        }
      }, function ($event) {
        return _vm.setCheckBox($event, "is_new");
      }]
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "custom-control-label",
    attrs: {
      "for": "is_new"
    }
  }, [_vm._v(_vm._s(_vm.$t("book.is_new")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 custom-control custom-checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formdata.is_bestseller,
      expression: "\n                                                            formdata.is_bestseller\n                                                        "
    }],
    staticClass: "custom-control-input",
    attrs: {
      type: "checkbox",
      id: "is_bestseller",
      "true-value": "1",
      "false-value": "0"
    },
    domProps: {
      checked: Array.isArray(_vm.formdata.is_bestseller) ? _vm._i(_vm.formdata.is_bestseller, null) > -1 : _vm._q(_vm.formdata.is_bestseller, "1")
    },
    on: {
      change: [function ($event) {
        var $$a = _vm.formdata.is_bestseller,
          $$el = $event.target,
          $$c = $$el.checked ? "1" : "0";
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.formdata, "is_bestseller", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.formdata, "is_bestseller", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.formdata, "is_bestseller", $$c);
        }
      }, function ($event) {
        return _vm.setCheckBox($event, "is_bestseller");
      }]
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "custom-control-label",
    attrs: {
      "for": "is_bestseller"
    }
  }, [_vm._v(_vm._s(_vm.$t("book.is_bestseller")))])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex"
  }, [_vm.currentUser.role_id == 1 ? _c("div", {
    staticClass: "col-md-4 form-group pl-0"
  }, [_c("label", {
    staticClass: "form-group has-float-label"
  }, [_c("v-select", {
    attrs: {
      options: _vm.selectData,
      dir: _vm.direction
    },
    on: {
      input: _vm.setSelectedStatus
    },
    model: {
      value: _vm.selectedStatus,
      callback: function callback($$v) {
        _vm.selectedStatus = $$v;
      },
      expression: "\n                                                            selectedStatus\n                                                        "
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("book.status")))])], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 form-group pl-0"
  }, [_c("label", {
    staticClass: "form-group has-float-label"
  }, [_c("v-select", {
    attrs: {
      options: _vm.languages,
      dir: _vm.direction
    },
    on: {
      input: _vm.setSelectedLang
    },
    model: {
      value: _vm.selectedLang,
      callback: function callback($$v) {
        _vm.selectedLang = $$v;
      },
      expression: "\n    selectedLang\n"
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("book.language")))])], 1)])])])])])], 1), _vm._v(" "), _c("div", {
    staticClass: "border card col-sm-12 mb-4 pb-4",
    attrs: {
      id: "gallery"
    }
  }, [_c("b-button", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.collapseAccordionGallery",
      modifiers: {
        collapseAccordionGallery: true
      }
    }],
    attrs: {
      variant: "link"
    }
  }, [_vm._v("Gallery")]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "collapseAccordionGallery",
      accordion: "gallery-accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "form-group has-float-label m-auto jv_input_file_label",
    attrs: {
      "for": "gallery_image"
    }
  }, [_c("input", {
    staticClass: "form-control jv_input_file",
    attrs: {
      type: "file",
      id: "gallery_image"
    },
    on: {
      change: function change($event) {
        return _vm.storeToGallery($event, "ebook");
      }
    }
  }), _vm._v(" "), _c("i", {
    staticClass: "simple-icon-plus"
  })])]), _vm._v(" "), _c("hr"), _vm._v(" "), _vm.galleries.length ? _c("div", {
    staticClass: "d-flex align-items-center justify-content-start"
  }, _vm._l(_vm.galleries, function (gallery, ind) {
    return _c("b-card", {
      staticClass: "d-flex flex-row active ml-1",
      attrs: {
        "no-body": ""
      }
    }, [_c("img", {
      staticClass: "list-thumbnail responsive border-0",
      attrs: {
        src: gallery.path,
        alt: gallery.id
      }
    })]);
  }), 1) : _vm._e()])])], 1), _vm._v(" "), _c("b-modal", {
    ref: "modalbasic",
    attrs: {
      id: "authormodal",
      title: _vm.$t("modal.modal-title"),
      "hide-footer": true
    }
  }, [_c("AddAuthor", {
    attrs: {
      frommodal: true
    }
  })], 1)], 1), _vm._v(" "), _c("b-button", {
    staticClass: "mt-4",
    attrs: {
      type: "submit",
      variant: "primary"
    }
  }, [_vm._v(_vm._s(_vm.$t("forms.submit")))])], 1) : [_c("div", {
    staticClass: "loading"
  })]], 2)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/fuzzysearch/index.js":
/*!*******************************************!*\
  !*** ./node_modules/fuzzysearch/index.js ***!
  \*******************************************/
/***/ (function(module) {

"use strict";


function fuzzysearch (needle, haystack) {
  var tlen = haystack.length;
  var qlen = needle.length;
  if (qlen > tlen) {
    return false;
  }
  if (qlen === tlen) {
    return needle === haystack;
  }
  outer: for (var i = 0, j = 0; i < qlen; i++) {
    var nch = needle.charCodeAt(i);
    while (j < tlen) {
      if (haystack.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;
}

module.exports = fuzzysearch;


/***/ }),

/***/ "./node_modules/is-promise/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-promise/index.js ***!
  \******************************************/
/***/ (function(module) {

module.exports = isPromise;
module.exports["default"] = isPromise;

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * vue-treeselect v0.4.0 | (c) 2017-2019 Riophae Lee\n * Released under the MIT License.\n * https://vue-treeselect.js.org/\n */\n/**\n * Dependencies\n */\n/**\n * Variables\n */\n/**\n * Mixins\n */\n/**\n * Helpers\n */\n.vue-treeselect-helper-hide {\n  display: none;\n}\n.vue-treeselect-helper-zoom-effect-off {\n  -webkit-transform: none !important;\n          transform: none !important;\n}\n/**\n * Animations\n */\n@-webkit-keyframes vue-treeselect-animation-fade-in {\n  0% {\n    opacity: 0;\n  }\n}\n@keyframes vue-treeselect-animation-fade-in {\n  0% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes vue-treeselect-animation-bounce {\n  0%,\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes vue-treeselect-animation-bounce {\n  0%,\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@-webkit-keyframes vue-treeselect-animation-rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes vue-treeselect-animation-rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n/**\n * Transitions\n */\n.vue-treeselect__multi-value-item--transition-enter-active,\n.vue-treeselect__multi-value-item--transition-leave-active {\n  -webkit-transition-duration: 200ms;\n          transition-duration: 200ms;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n}\n.vue-treeselect__multi-value-item--transition-enter-active {\n  -webkit-transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n          transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.vue-treeselect__multi-value-item--transition-leave-active {\n  -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  position: absolute;\n}\n.vue-treeselect__multi-value-item--transition-enter,\n.vue-treeselect__multi-value-item--transition-leave-to {\n  -webkit-transform: scale(0.7);\n          transform: scale(0.7);\n  opacity: 0;\n}\n.vue-treeselect__multi-value-item--transition-move {\n  -webkit-transition: 200ms -webkit-transform cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: 200ms -webkit-transform cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: 200ms transform cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: 200ms transform cubic-bezier(0.165, 0.84, 0.44, 1), 200ms -webkit-transform cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n/**\n * Namespace\n */\n.vue-treeselect {\n  position: relative;\n  text-align: left;\n}\n[dir=\"rtl\"] .vue-treeselect {\n  text-align: right;\n}\n.vue-treeselect div,\n.vue-treeselect span {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.vue-treeselect svg {\n  fill: currentColor;\n}\n/**\n * Control\n */\n.vue-treeselect__control {\n  padding-left: 5px;\n  padding-right: 5px;\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n  height: 36px;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  background: #fff;\n  -webkit-transition-duration: 200ms;\n          transition-duration: 200ms;\n  -webkit-transition-property: border-color, width, height, background-color, opacity, -webkit-box-shadow;\n  transition-property: border-color, width, height, background-color, opacity, -webkit-box-shadow;\n  transition-property: border-color, box-shadow, width, height, background-color, opacity;\n  transition-property: border-color, box-shadow, width, height, background-color, opacity, -webkit-box-shadow;\n  -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.vue-treeselect:not(.vue-treeselect--disabled):not(.vue-treeselect--focused) .vue-treeselect__control:hover {\n  border-color: #cfcfcf;\n}\n.vue-treeselect--focused:not(.vue-treeselect--open) .vue-treeselect__control {\n  border-color: #039be5;\n  -webkit-box-shadow: 0 0 0 3px rgba(3, 155, 229, 0.1);\n          box-shadow: 0 0 0 3px rgba(3, 155, 229, 0.1);\n}\n.vue-treeselect--disabled .vue-treeselect__control {\n  background-color: #f9f9f9;\n}\n.vue-treeselect--open .vue-treeselect__control {\n  border-color: #cfcfcf;\n}\n.vue-treeselect--open.vue-treeselect--open-below .vue-treeselect__control {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.vue-treeselect--open.vue-treeselect--open-above .vue-treeselect__control {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.vue-treeselect__value-container,\n.vue-treeselect__multi-value {\n  width: 100%;\n  vertical-align: middle;\n}\n.vue-treeselect__value-container {\n  display: table-cell;\n  position: relative;\n}\n.vue-treeselect--searchable:not(.vue-treeselect--disabled) .vue-treeselect__value-container {\n  cursor: text;\n}\n.vue-treeselect__multi-value {\n  display: inline-block;\n}\n.vue-treeselect--has-value .vue-treeselect__multi-value {\n  margin-bottom: 5px;\n}\n.vue-treeselect__placeholder,\n.vue-treeselect__single-value {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-left: 5px;\n  padding-right: 5px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  line-height: 34px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n}\n.vue-treeselect__placeholder {\n  color: #bdbdbd;\n}\n.vue-treeselect__single-value {\n  color: #333;\n}\n.vue-treeselect--focused.vue-treeselect--searchable .vue-treeselect__single-value {\n  color: #bdbdbd;\n}\n.vue-treeselect--disabled .vue-treeselect__single-value {\n  position: static;\n}\n.vue-treeselect__multi-value-item-container {\n  display: inline-block;\n  padding-top: 5px;\n  padding-right: 5px;\n  vertical-align: top;\n}\n[dir=\"rtl\"] .vue-treeselect__multi-value-item-container {\n  padding-right: 0;\n  padding-left: 5px;\n}\n.vue-treeselect__multi-value-item {\n  cursor: pointer;\n  display: inline-table;\n  background: #e3f2fd;\n  padding: 2px 0;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  color: #039be5;\n  font-size: 12px;\n  vertical-align: top;\n}\n.vue-treeselect:not(.vue-treeselect--disabled) .vue-treeselect__multi-value-item:not(.vue-treeselect__multi-value-item-disabled):hover .vue-treeselect__multi-value-item:not(.vue-treeselect__multi-value-item-new) .vue-treeselect__multi-value-item:not(.vue-treeselect__multi-value-item-new):hover {\n  cursor: pointer;\n  background: #e3f2fd;\n  color: #039be5;\n}\n.vue-treeselect__multi-value-item.vue-treeselect__multi-value-item-disabled {\n  cursor: default;\n  background: #f5f5f5;\n  color: #757575;\n}\n.vue-treeselect--disabled .vue-treeselect__multi-value-item {\n  cursor: default;\n  background: #fff;\n  border-color: #e5e5e5;\n  color: #555;\n}\n.vue-treeselect__multi-value-item.vue-treeselect__multi-value-item-new {\n  background: #e8f5e9;\n}\n.vue-treeselect__multi-value-item.vue-treeselect__multi-value-item-new:hover {\n  background: #e8f5e9;\n}\n.vue-treeselect__value-remove,\n.vue-treeselect__multi-value-label {\n  display: table-cell;\n  padding: 0 5px;\n  vertical-align: middle;\n}\n.vue-treeselect__value-remove {\n  color: #039be5;\n  padding-left: 5px;\n  border-left: 1px solid #fff;\n  line-height: 0;\n}\n[dir=\"rtl\"] .vue-treeselect__value-remove {\n  border-left: 0 none;\n  border-right: 1px solid #fff;\n}\n.vue-treeselect__multi-value-item:hover .vue-treeselect__value-remove {\n  color: #e53935;\n}\n.vue-treeselect--disabled .vue-treeselect__value-remove,\n.vue-treeselect__multi-value-item-disabled .vue-treeselect__value-remove {\n  display: none;\n}\n.vue-treeselect__value-remove > svg {\n  width: 6px;\n  height: 6px;\n}\n.vue-treeselect__multi-value-label {\n  padding-right: 5px;\n  white-space: pre-line;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vue-treeselect__limit-tip {\n  display: inline-block;\n  padding-top: 5px;\n  padding-right: 5px;\n  vertical-align: top;\n}\n[dir=\"rtl\"] .vue-treeselect__limit-tip {\n  padding-right: 0;\n  padding-left: 5px;\n}\n.vue-treeselect__limit-tip-text {\n  cursor: default;\n  display: block;\n  margin: 2px 0;\n  padding: 1px 0;\n  color: #bdbdbd;\n  font-size: 12px;\n  font-weight: 600;\n}\n.vue-treeselect__input-container {\n  display: block;\n  max-width: 100%;\n  outline: none;\n}\n.vue-treeselect--single .vue-treeselect__input-container {\n  font-size: inherit;\n  height: 100%;\n}\n.vue-treeselect--multi .vue-treeselect__input-container {\n  display: inline-block;\n  font-size: 12px;\n  vertical-align: top;\n}\n.vue-treeselect--searchable .vue-treeselect__input-container {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.vue-treeselect--searchable.vue-treeselect--multi.vue-treeselect--has-value .vue-treeselect__input-container {\n  padding-top: 5px;\n  padding-left: 0;\n}\n[dir=\"rtl\"] .vue-treeselect--searchable.vue-treeselect--multi.vue-treeselect--has-value .vue-treeselect__input-container {\n  padding-left: 5px;\n  padding-right: 0;\n}\n.vue-treeselect--disabled .vue-treeselect__input-container {\n  display: none;\n}\n.vue-treeselect__input,\n.vue-treeselect__sizer {\n  margin: 0;\n  line-height: inherit;\n  font-family: inherit;\n  font-size: inherit;\n}\n.vue-treeselect__input {\n  max-width: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: none;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  background: none transparent;\n  line-height: 1;\n  vertical-align: middle;\n}\n.vue-treeselect__input::-ms-clear {\n  display: none;\n}\n.vue-treeselect--single .vue-treeselect__input {\n  width: 100%;\n  height: 100%;\n}\n.vue-treeselect--multi .vue-treeselect__input {\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n.vue-treeselect--has-value .vue-treeselect__input {\n  line-height: inherit;\n  vertical-align: top;\n}\n.vue-treeselect__sizer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  visibility: hidden;\n  height: 0;\n  overflow: scroll;\n  white-space: pre;\n}\n.vue-treeselect__x-container {\n  display: table-cell;\n  vertical-align: middle;\n  width: 20px;\n  text-align: center;\n  line-height: 0;\n  cursor: pointer;\n  color: #ccc;\n  -webkit-animation: 200ms vue-treeselect-animation-fade-in cubic-bezier(0.075, 0.82, 0.165, 1);\n          animation: 200ms vue-treeselect-animation-fade-in cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.vue-treeselect__x-container:hover {\n  color: #e53935;\n}\n.vue-treeselect__x {\n  width: 8px;\n  height: 8px;\n}\n.vue-treeselect__control-arrow-container {\n  display: table-cell;\n  vertical-align: middle;\n  width: 20px;\n  text-align: center;\n  line-height: 0;\n  cursor: pointer;\n}\n.vue-treeselect--disabled .vue-treeselect__control-arrow-container {\n  cursor: default;\n}\n.vue-treeselect__control-arrow {\n  width: 9px;\n  height: 9px;\n  color: #ccc;\n}\n.vue-treeselect:not(.vue-treeselect--disabled) .vue-treeselect__control-arrow-container:hover .vue-treeselect__control-arrow {\n  color: #616161;\n}\n.vue-treeselect--disabled .vue-treeselect__control-arrow {\n  opacity: 0.35;\n}\n.vue-treeselect__control-arrow--rotated {\n  -webkit-transform: rotateZ(180deg);\n          transform: rotateZ(180deg);\n}\n/**\n * Menu\n */\n.vue-treeselect__menu-container {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  overflow: visible;\n  -webkit-transition: 0s;\n  transition: 0s;\n}\n.vue-treeselect--open-below:not(.vue-treeselect--append-to-body) .vue-treeselect__menu-container {\n  top: 100%;\n}\n.vue-treeselect--open-above:not(.vue-treeselect--append-to-body) .vue-treeselect__menu-container {\n  bottom: 100%;\n}\n.vue-treeselect__menu {\n  cursor: default;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  display: block;\n  position: absolute;\n  overflow-x: hidden;\n  overflow-y: auto;\n  width: auto;\n  border: 1px solid #cfcfcf;\n  background: #fff;\n  line-height: 180%;\n  -webkit-overflow-scrolling: touch;\n}\n.vue-treeselect--open-below .vue-treeselect__menu {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  top: 0;\n  margin-top: -1px;\n  border-top-color: #f2f2f2;\n  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n}\n.vue-treeselect--open-above .vue-treeselect__menu {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  bottom: 0;\n  margin-bottom: -1px;\n  border-bottom-color: #f2f2f2;\n}\n.vue-treeselect__indent-level-0 .vue-treeselect__option {\n  padding-left: 5px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-0 .vue-treeselect__option {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.vue-treeselect__indent-level-0 .vue-treeselect__tip {\n  padding-left: 25px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-0 .vue-treeselect__tip {\n  padding-left: 5px;\n  padding-right: 25px;\n}\n.vue-treeselect__indent-level-1 .vue-treeselect__option {\n  padding-left: 25px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-1 .vue-treeselect__option {\n  padding-left: 5px;\n  padding-right: 25px;\n}\n.vue-treeselect__indent-level-1 .vue-treeselect__tip {\n  padding-left: 45px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-1 .vue-treeselect__tip {\n  padding-left: 5px;\n  padding-right: 45px;\n}\n.vue-treeselect__indent-level-2 .vue-treeselect__option {\n  padding-left: 45px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-2 .vue-treeselect__option {\n  padding-left: 5px;\n  padding-right: 45px;\n}\n.vue-treeselect__indent-level-2 .vue-treeselect__tip {\n  padding-left: 65px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-2 .vue-treeselect__tip {\n  padding-left: 5px;\n  padding-right: 65px;\n}\n.vue-treeselect__indent-level-3 .vue-treeselect__option {\n  padding-left: 65px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-3 .vue-treeselect__option {\n  padding-left: 5px;\n  padding-right: 65px;\n}\n.vue-treeselect__indent-level-3 .vue-treeselect__tip {\n  padding-left: 85px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-3 .vue-treeselect__tip {\n  padding-left: 5px;\n  padding-right: 85px;\n}\n.vue-treeselect__indent-level-4 .vue-treeselect__option {\n  padding-left: 85px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-4 .vue-treeselect__option {\n  padding-left: 5px;\n  padding-right: 85px;\n}\n.vue-treeselect__indent-level-4 .vue-treeselect__tip {\n  padding-left: 105px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-4 .vue-treeselect__tip {\n  padding-left: 5px;\n  padding-right: 105px;\n}\n.vue-treeselect__indent-level-5 .vue-treeselect__option {\n  padding-left: 105px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-5 .vue-treeselect__option {\n  padding-left: 5px;\n  padding-right: 105px;\n}\n.vue-treeselect__indent-level-5 .vue-treeselect__tip {\n  padding-left: 125px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-5 .vue-treeselect__tip {\n  padding-left: 5px;\n  padding-right: 125px;\n}\n.vue-treeselect__indent-level-6 .vue-treeselect__option {\n  padding-left: 125px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-6 .vue-treeselect__option {\n  padding-left: 5px;\n  padding-right: 125px;\n}\n.vue-treeselect__indent-level-6 .vue-treeselect__tip {\n  padding-left: 145px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-6 .vue-treeselect__tip {\n  padding-left: 5px;\n  padding-right: 145px;\n}\n.vue-treeselect__indent-level-7 .vue-treeselect__option {\n  padding-left: 145px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-7 .vue-treeselect__option {\n  padding-left: 5px;\n  padding-right: 145px;\n}\n.vue-treeselect__indent-level-7 .vue-treeselect__tip {\n  padding-left: 165px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-7 .vue-treeselect__tip {\n  padding-left: 5px;\n  padding-right: 165px;\n}\n.vue-treeselect__indent-level-8 .vue-treeselect__option {\n  padding-left: 165px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-8 .vue-treeselect__option {\n  padding-left: 5px;\n  padding-right: 165px;\n}\n.vue-treeselect__indent-level-8 .vue-treeselect__tip {\n  padding-left: 185px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-8 .vue-treeselect__tip {\n  padding-left: 5px;\n  padding-right: 185px;\n}\n.vue-treeselect__option {\n  padding-left: 5px;\n  padding-right: 5px;\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n}\n.vue-treeselect__option--highlight {\n  background: #f5f5f5;\n}\n.vue-treeselect--single .vue-treeselect__option--selected {\n  background: #e3f2fd;\n  font-weight: 600;\n}\n.vue-treeselect--single .vue-treeselect__option--selected:hover {\n  background: #e3f2fd;\n}\n.vue-treeselect__option--hide {\n  display: none;\n}\n.vue-treeselect__option-arrow-container,\n.vue-treeselect__option-arrow-placeholder {\n  display: table-cell;\n  vertical-align: middle;\n  width: 20px;\n  text-align: center;\n  line-height: 0;\n}\n.vue-treeselect__option-arrow-container {\n  cursor: pointer;\n}\n.vue-treeselect__option-arrow {\n  display: inline-block;\n  width: 9px;\n  height: 9px;\n  color: #ccc;\n  vertical-align: middle;\n  -webkit-transition: 200ms -webkit-transform cubic-bezier(0.19, 1, 0.22, 1);\n  transition: 200ms -webkit-transform cubic-bezier(0.19, 1, 0.22, 1);\n  transition: 200ms transform cubic-bezier(0.19, 1, 0.22, 1);\n  transition: 200ms transform cubic-bezier(0.19, 1, 0.22, 1), 200ms -webkit-transform cubic-bezier(0.19, 1, 0.22, 1);\n  -webkit-transform: rotateZ(-90deg);\n          transform: rotateZ(-90deg);\n}\n[dir=\"rtl\"] .vue-treeselect__option-arrow {\n  -webkit-transform: rotateZ(90deg);\n          transform: rotateZ(90deg);\n}\n.vue-treeselect__option-arrow-container:hover .vue-treeselect__option-arrow,\n.vue-treeselect--branch-nodes-disabled .vue-treeselect__option:hover .vue-treeselect__option-arrow {\n  color: #616161;\n}\n.vue-treeselect__option-arrow--rotated {\n  -webkit-transform: rotateZ(0);\n          transform: rotateZ(0);\n}\n[dir=\"rtl\"] .vue-treeselect__option-arrow--rotated {\n  -webkit-transform: rotateZ(0);\n          transform: rotateZ(0);\n}\n.vue-treeselect__option-arrow--rotated.vue-treeselect__option-arrow--prepare-enter {\n  -webkit-transform: rotateZ(-90deg) !important;\n          transform: rotateZ(-90deg) !important;\n}\n[dir=\"rtl\"] .vue-treeselect__option-arrow--rotated.vue-treeselect__option-arrow--prepare-enter {\n  -webkit-transform: rotateZ(90deg) !important;\n          transform: rotateZ(90deg) !important;\n}\n.vue-treeselect__label-container {\n  display: table-cell;\n  vertical-align: middle;\n  cursor: pointer;\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  color: inherit;\n}\n.vue-treeselect__option--disabled .vue-treeselect__label-container {\n  cursor: not-allowed;\n  color: rgba(0, 0, 0, 0.25);\n}\n.vue-treeselect__checkbox-container {\n  display: table-cell;\n  width: 20px;\n  min-width: 20px;\n  height: 100%;\n  text-align: center;\n  vertical-align: middle;\n}\n.vue-treeselect__checkbox {\n  display: block;\n  margin: auto;\n  width: 12px;\n  height: 12px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 2px;\n  position: relative;\n  -webkit-transition: 200ms all cubic-bezier(0.075, 0.82, 0.165, 1);\n  transition: 200ms all cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.vue-treeselect__check-mark,\n.vue-treeselect__minus-mark {\n  display: block;\n  position: absolute;\n  left: 1px;\n  top: 1px;\n  background-repeat: no-repeat;\n  opacity: 0;\n  -webkit-transition: 200ms all ease;\n  transition: 200ms all ease;\n}\n.vue-treeselect__minus-mark {\n  width: 8px;\n  height: 8px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAgMAAAC5YVYYAAAACVBMVEUAAAD///////9zeKVjAAAAAnRSTlMAuLMp9oYAAAAPSURBVAjXY4CDrJUgBAMAGaECJ9dz3BAAAAAASUVORK5CYII=);\n  background-size: 8px 8px;\n}\n@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx) {\n  .vue-treeselect__minus-mark {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAAD///////////84wDuoAAAAA3RSTlMAyTzPIdReAAAAGUlEQVQI12PAD+b///+Nof7//79gAsLFCwAx/w4blADeeQAAAABJRU5ErkJggg==);\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .vue-treeselect__minus-mark {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAAD///////////84wDuoAAAAA3RSTlMAyTzPIdReAAAAGUlEQVQI12PAD+b///+Nof7//79gAsLFCwAx/w4blADeeQAAAABJRU5ErkJggg==);\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {\n  .vue-treeselect__minus-mark {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAD1BMVEUAAAD///////////////+PQt5oAAAABHRSTlMAy2EFIuWxUgAAACRJREFUGNNjGBBgJOICBY7KDCoucODEAJSAS6FwUJShGjAQAADBPRGrK2/FhgAAAABJRU5ErkJggg==);\n  }\n}\n.vue-treeselect__checkbox--indeterminate > .vue-treeselect__minus-mark {\n  opacity: 1;\n}\n.vue-treeselect__checkbox--disabled .vue-treeselect__minus-mark {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAgMAAAC5YVYYAAAACVBMVEUAAADi4uLh4eHOxeSRAAAAAnRSTlMAuLMp9oYAAAAPSURBVAjXY4CDrJUgBAMAGaECJ9dz3BAAAAAASUVORK5CYII=);\n}\n@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx) {\n  .vue-treeselect__checkbox--disabled .vue-treeselect__minus-mark {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAADi4uLi4uLh4eE5RQaIAAAAA3RSTlMAyTzPIdReAAAAGUlEQVQI12PAD+b///+Nof7//79gAsLFCwAx/w4blADeeQAAAABJRU5ErkJggg==);\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .vue-treeselect__checkbox--disabled .vue-treeselect__minus-mark {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAADi4uLi4uLh4eE5RQaIAAAAA3RSTlMAyTzPIdReAAAAGUlEQVQI12PAD+b///+Nof7//79gAsLFCwAx/w4blADeeQAAAABJRU5ErkJggg==);\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {\n  .vue-treeselect__checkbox--disabled .vue-treeselect__minus-mark {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAD1BMVEUAAADh4eHg4ODNzc3h4eEYfw2wAAAABHRSTlMAy2EFIuWxUgAAACRJREFUGNNjGBBgJOICBY7KDCoucODEAJSAS6FwUJShGjAQAADBPRGrK2/FhgAAAABJRU5ErkJggg==);\n  }\n}\n.vue-treeselect__check-mark {\n  width: 8px;\n  height: 8px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////8IX9KGAAAAFXRSTlMA8u24NxILB+Tawb6jiH1zRz0xIQIIP3GUAAAAMklEQVQI1y3FtQEAMQDDQD+EGbz/qkEVOpyEOP6PudKjZNSXn4Jm2CKRdBKzSLsFWl8fMG0Bl6Jk1rMAAAAASUVORK5CYII=);\n  background-size: 8px 8px;\n  -webkit-transform: scaleY(0.125);\n          transform: scaleY(0.125);\n}\n@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx) {\n  .vue-treeselect__check-mark {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////98JRy6AAAAH3RSTlMAzu4sDenl38fBvo1OMyIdEQrj1cSihX5hYFpHNycIcQOASAAAAF9JREFUGNN9zEcOgDAMRFHTS0LvNfe/JRmHKAIJ/mqeLJn+k9uDtaeUeFnFziGsBucUTirrprfe81RqZ3Bb6hPWeuZwDFOHyf+ig9CCzQ7INBn7bG5kF+QSt13BHNJnF7AaCT4Y+CW7AAAAAElFTkSuQmCC);\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .vue-treeselect__check-mark {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////98JRy6AAAAH3RSTlMAzu4sDenl38fBvo1OMyIdEQrj1cSihX5hYFpHNycIcQOASAAAAF9JREFUGNN9zEcOgDAMRFHTS0LvNfe/JRmHKAIJ/mqeLJn+k9uDtaeUeFnFziGsBucUTirrprfe81RqZ3Bb6hPWeuZwDFOHyf+ig9CCzQ7INBn7bG5kF+QSt13BHNJnF7AaCT4Y+CW7AAAAAElFTkSuQmCC);\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {\n  .vue-treeselect__check-mark {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAWlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////9ZMre9AAAAHXRSTlMA/PiJhGNI9XlEHJB/b2ldV08+Oibk49vPp6QhAYgGBuwAAACCSURBVCjPrdHdDoIwDAXgTWAqCigo/+f9X5OwnoUwtis4V92XNWladUl+rzQPeQJAN2EHxoOnsPn7/oYk8fxBv08Rr/deOH/aZ2Nm8ZJ+s573QGfWKnNuZGzWm3+lv2V3pcU1XQ385/yjmBoM3Z+dXvlbYLLD3ujhTaOM3KaIXvNkFkuSEvYy1LqOAAAAAElFTkSuQmCC);\n  }\n}\n.vue-treeselect__checkbox--checked > .vue-treeselect__check-mark {\n  opacity: 1;\n  -webkit-transform: scaleY(1);\n          transform: scaleY(1);\n}\n.vue-treeselect__checkbox--disabled .vue-treeselect__check-mark {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEUAAADj4+Pf39/h4eHh4eHh4eHk5OTh4eHg4ODi4uLh4eHh4eHg4ODh4eHh4eHg4ODh4eHh4eHp6en////h4eFqcyvUAAAAFHRSTlMAOQfy7bgS5NrBvqOIfXNHMSELAgQ/iFsAAAA2SURBVAjXY4AANjYIzcjMAaVFuBkY+RkEWERYmRjYRXjANAOfiIgIFxNIAa8IpxBEi6AwiAQAK2MBd7xY8csAAAAASUVORK5CYII=);\n}\n@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx) {\n  .vue-treeselect__checkbox--disabled .vue-treeselect__check-mark {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAXVBMVEUAAADh4eHh4eHh4eHi4uLb29vh4eHh4eHh4eHh4eHh4eHh4eHh4eHi4uLi4uLj4+Pi4uLk5OTo6Ojh4eHh4eHi4uLg4ODg4ODh4eHg4ODh4eHf39/g4OD////h4eEzIk+wAAAAHnRSTlMAzu6/LA3p5eLZx8ONTjYiHRIKooV+YWBaRzEnCANnm5rnAAAAZElEQVQY033P2wqAIAyA4VWaaWrnc/n+j5mbhBjUf7WPoTD47TJb4i5zTr/sRDRHuyFaoWX7uK/RlbctlPEuyI1f4WY9yQINEkf6rzzo8YIzmUFoCs7J1EjeIaa9bXIEmzl8dgOZEAj/+2IvzAAAAABJRU5ErkJggg==);\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .vue-treeselect__checkbox--disabled .vue-treeselect__check-mark {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAXVBMVEUAAADh4eHh4eHh4eHi4uLb29vh4eHh4eHh4eHh4eHh4eHh4eHh4eHi4uLi4uLj4+Pi4uLk5OTo6Ojh4eHh4eHi4uLg4ODg4ODh4eHg4ODh4eHf39/g4OD////h4eEzIk+wAAAAHnRSTlMAzu6/LA3p5eLZx8ONTjYiHRIKooV+YWBaRzEnCANnm5rnAAAAZElEQVQY033P2wqAIAyA4VWaaWrnc/n+j5mbhBjUf7WPoTD47TJb4i5zTr/sRDRHuyFaoWX7uK/RlbctlPEuyI1f4WY9yQINEkf6rzzo8YIzmUFoCs7J1EjeIaa9bXIEmzl8dgOZEAj/+2IvzAAAAABJRU5ErkJggg==);\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {\n  .vue-treeselect__checkbox--disabled .vue-treeselect__check-mark {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAUVBMVEUAAADh4eHh4eHh4eHh4eHi4uLi4uLh4eHh4eHh4eHf39/j4+Ph4eHh4eHh4eHg4ODi4uLh4eHh4eHi4uLh4eHh4eHh4eHh4eHh4eH////h4eF3FMFTAAAAGnRSTlMA+/eJhGhfSHE9JBzz5KaQf3pXT0Xbz0I5AYDw8F0AAAB+SURBVCjPrdHbDoMgEEVRKAii1dZe9fz/hxplTiKIT7qfYCWTEEZdUvOwbckNAD2WHeh3brHW5f5EzGQ+iN+b1Gt6KPvtv16Dn6JX9M9ya3/A1yfu5dlyduL6Hec7mXY6ddXLPP2lpABGZ8PWXfYLTJxZekVhhl7eTX24zZPNKXoRC7zQLjUAAAAASUVORK5CYII=);\n  }\n}\n.vue-treeselect__checkbox--unchecked {\n  border-color: #e0e0e0;\n  background: #fff;\n}\n.vue-treeselect__label-container:hover .vue-treeselect__checkbox--unchecked {\n  border-color: #039be5;\n  background: #fff;\n}\n.vue-treeselect__checkbox--indeterminate {\n  border-color: #039be5;\n  background: #039be5;\n}\n.vue-treeselect__label-container:hover .vue-treeselect__checkbox--indeterminate {\n  border-color: #039be5;\n  background: #039be5;\n}\n.vue-treeselect__checkbox--checked {\n  border-color: #039be5;\n  background: #039be5;\n}\n.vue-treeselect__label-container:hover .vue-treeselect__checkbox--checked {\n  border-color: #039be5;\n  background: #039be5;\n}\n.vue-treeselect__checkbox--disabled {\n  border-color: #e0e0e0;\n  background-color: #f7f7f7;\n}\n.vue-treeselect__label-container:hover .vue-treeselect__checkbox--disabled {\n  border-color: #e0e0e0;\n  background-color: #f7f7f7;\n}\n.vue-treeselect__label {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: table-cell;\n  padding-left: 5px;\n  max-width: 100%;\n  vertical-align: middle;\n  cursor: inherit;\n}\n[dir=\"rtl\"] .vue-treeselect__label {\n  padding-left: 0;\n  padding-right: 5px;\n}\n.vue-treeselect__count {\n  margin-left: 5px;\n  font-weight: 400;\n  opacity: 0.6;\n}\n[dir=\"rtl\"] .vue-treeselect__count {\n  margin-left: 0;\n  margin-right: 5px;\n}\n.vue-treeselect__tip {\n  padding-left: 5px;\n  padding-right: 5px;\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n  color: #757575;\n}\n.vue-treeselect__tip-text {\n  display: table-cell;\n  vertical-align: middle;\n  padding-left: 5px;\n  padding-right: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n  font-size: 12px;\n}\n.vue-treeselect__error-tip .vue-treeselect__retry {\n  cursor: pointer;\n  margin-left: 5px;\n  font-style: normal;\n  font-weight: 600;\n  text-decoration: none;\n  color: #039be5;\n}\n[dir=\"rtl\"] .vue-treeselect__error-tip .vue-treeselect__retry {\n  margin-left: 0;\n  margin-right: 5px;\n}\n.vue-treeselect__icon-container {\n  display: table-cell;\n  vertical-align: middle;\n  width: 20px;\n  text-align: center;\n  line-height: 0;\n}\n.vue-treeselect--single .vue-treeselect__icon-container {\n  padding-left: 5px;\n}\n[dir=\"rtl\"] .vue-treeselect--single .vue-treeselect__icon-container {\n  padding-left: 0;\n  padding-right: 5px;\n}\n.vue-treeselect__icon-warning {\n  display: block;\n  margin: auto;\n  border-radius: 50%;\n  position: relative;\n  width: 12px;\n  height: 12px;\n  background: #fb8c00;\n}\n.vue-treeselect__icon-warning::after {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: 5px;\n  top: 2.5px;\n  width: 2px;\n  height: 1px;\n  border: 0 solid #fff;\n  border-top-width: 5px;\n  border-bottom-width: 1px;\n}\n.vue-treeselect__icon-error {\n  display: block;\n  margin: auto;\n  border-radius: 50%;\n  position: relative;\n  width: 12px;\n  height: 12px;\n  background: #e53935;\n}\n.vue-treeselect__icon-error::before,\n.vue-treeselect__icon-error::after {\n  display: block;\n  position: absolute;\n  content: \"\";\n  background: #fff;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.vue-treeselect__icon-error::before {\n  width: 6px;\n  height: 2px;\n  left: 3px;\n  top: 5px;\n}\n.vue-treeselect__icon-error::after {\n  width: 2px;\n  height: 6px;\n  left: 5px;\n  top: 3px;\n}\n.vue-treeselect__icon-loader {\n  display: block;\n  margin: auto;\n  position: relative;\n  width: 12px;\n  height: 12px;\n  text-align: center;\n  -webkit-animation: 1.6s vue-treeselect-animation-rotate linear infinite;\n          animation: 1.6s vue-treeselect-animation-rotate linear infinite;\n}\n.vue-treeselect__icon-loader::before,\n.vue-treeselect__icon-loader::after {\n  border-radius: 50%;\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  opacity: 0.6;\n  -webkit-animation: 1.6s vue-treeselect-animation-bounce ease-in-out infinite;\n          animation: 1.6s vue-treeselect-animation-bounce ease-in-out infinite;\n}\n.vue-treeselect__icon-loader::before {\n  background: #039be5;\n}\n.vue-treeselect__icon-loader::after {\n  background: #b3e5fc;\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n}\n/**\n * Menu Portal\n */\n.vue-treeselect__menu-placeholder {\n  display: none;\n}\n.vue-treeselect__portal-target {\n  position: absolute;\n  display: block;\n  left: 0;\n  top: 0;\n  height: 0;\n  width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n  overflow: visible;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-select/dist/vue-select.css":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-select/dist/vue-select.css ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{--vs-colors--lightest:rgba(60,60,60,0.26);--vs-colors--light:rgba(60,60,60,0.5);--vs-colors--dark:#333;--vs-colors--darkest:rgba(0,0,0,0.15);--vs-search-input-color:inherit;--vs-search-input-bg:#fff;--vs-search-input-placeholder-color:inherit;--vs-font-size:1rem;--vs-line-height:1.4;--vs-state-disabled-bg:#f8f8f8;--vs-state-disabled-color:var(--vs-colors--light);--vs-state-disabled-controls-color:var(--vs-colors--light);--vs-state-disabled-cursor:not-allowed;--vs-border-color:var(--vs-colors--lightest);--vs-border-width:1px;--vs-border-style:solid;--vs-border-radius:4px;--vs-actions-padding:4px 6px 0 3px;--vs-controls-color:var(--vs-colors--light);--vs-controls-size:1;--vs-controls--deselect-text-shadow:0 1px 0 #fff;--vs-selected-bg:#f0f0f0;--vs-selected-color:var(--vs-colors--dark);--vs-selected-border-color:var(--vs-border-color);--vs-selected-border-style:var(--vs-border-style);--vs-selected-border-width:var(--vs-border-width);--vs-dropdown-bg:#fff;--vs-dropdown-color:inherit;--vs-dropdown-z-index:1000;--vs-dropdown-min-width:160px;--vs-dropdown-max-height:350px;--vs-dropdown-box-shadow:0px 3px 6px 0px var(--vs-colors--darkest);--vs-dropdown-option-bg:#000;--vs-dropdown-option-color:var(--vs-dropdown-color);--vs-dropdown-option-padding:3px 20px;--vs-dropdown-option--active-bg:#5897fb;--vs-dropdown-option--active-color:#fff;--vs-dropdown-option--deselect-bg:#fb5858;--vs-dropdown-option--deselect-color:#fff;--vs-transition-timing-function:cubic-bezier(1,-0.115,0.975,0.855);--vs-transition-duration:150ms}.v-select{font-family:inherit;position:relative}.v-select,.v-select *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--vs-transition-timing-function:cubic-bezier(1,0.5,0.8,1);--vs-transition-duration:0.15s}@-webkit-keyframes vSelectSpinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes vSelectSpinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs__fade-enter-active,.vs__fade-leave-active{pointer-events:none;-webkit-transition:opacity var(--vs-transition-duration) var(--vs-transition-timing-function);transition:opacity var(--vs-transition-duration) var(--vs-transition-timing-function)}.vs__fade-enter,.vs__fade-leave-to{opacity:0}:root{--vs-disabled-bg:var(--vs-state-disabled-bg);--vs-disabled-color:var(--vs-state-disabled-color);--vs-disabled-cursor:var(--vs-state-disabled-cursor)}.vs--disabled .vs__clear,.vs--disabled .vs__dropdown-toggle,.vs--disabled .vs__open-indicator,.vs--disabled .vs__search,.vs--disabled .vs__selected{background-color:var(--vs-disabled-bg);cursor:var(--vs-disabled-cursor)}.v-select[dir=rtl] .vs__actions{padding:0 3px 0 6px}.v-select[dir=rtl] .vs__clear{margin-left:6px;margin-right:0}.v-select[dir=rtl] .vs__deselect{margin-left:0;margin-right:2px}.v-select[dir=rtl] .vs__dropdown-menu{text-align:right}.vs__dropdown-toggle{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:var(--vs-search-input-bg);border:var(--vs-border-width) var(--vs-border-style) var(--vs-border-color);border-radius:var(--vs-border-radius);display:-webkit-box;display:-ms-flexbox;display:flex;padding:0 0 4px;white-space:normal}.vs__selected-options{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0 2px;position:relative}.vs__actions{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;padding:var(--vs-actions-padding)}.vs--searchable .vs__dropdown-toggle{cursor:text}.vs--unsearchable .vs__dropdown-toggle{cursor:pointer}.vs--open .vs__dropdown-toggle{border-bottom-color:transparent;border-bottom-left-radius:0;border-bottom-right-radius:0}.vs__open-indicator{fill:var(--vs-controls-color);-webkit-transform:scale(var(--vs-controls-size));transform:scale(var(--vs-controls-size));-webkit-transition:-webkit-transform var(--vs-transition-duration) var(--vs-transition-timing-function);transition:-webkit-transform var(--vs-transition-duration) var(--vs-transition-timing-function);transition:transform var(--vs-transition-duration) var(--vs-transition-timing-function);transition:transform var(--vs-transition-duration) var(--vs-transition-timing-function), -webkit-transform var(--vs-transition-duration) var(--vs-transition-timing-function);-webkit-transition-timing-function:var(--vs-transition-timing-function);transition-timing-function:var(--vs-transition-timing-function)}.vs--open .vs__open-indicator{-webkit-transform:rotate(180deg) scale(var(--vs-controls-size));transform:rotate(180deg) scale(var(--vs-controls-size))}.vs--loading .vs__open-indicator{opacity:0}.vs__clear{fill:var(--vs-controls-color);background-color:transparent;border:0;cursor:pointer;margin-right:8px;padding:0}.vs__dropdown-menu{background:var(--vs-dropdown-bg);border:var(--vs-border-width) var(--vs-border-style) var(--vs-border-color);border-radius:0 0 var(--vs-border-radius) var(--vs-border-radius);border-top-style:none;-webkit-box-shadow:var(--vs-dropdown-box-shadow);box-shadow:var(--vs-dropdown-box-shadow);-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--vs-dropdown-color);display:block;left:0;list-style:none;margin:0;max-height:var(--vs-dropdown-max-height);min-width:var(--vs-dropdown-min-width);overflow-y:auto;padding:5px 0;position:absolute;text-align:left;top:calc(100% - var(--vs-border-width));width:100%;z-index:var(--vs-dropdown-z-index)}.vs__no-options{text-align:center}.vs__dropdown-option{clear:both;color:var(--vs-dropdown-option-color);cursor:pointer;display:block;line-height:1.42857143;padding:var(--vs-dropdown-option-padding);white-space:nowrap}.vs__dropdown-option--highlight{background:var(--vs-dropdown-option--active-bg);color:var(--vs-dropdown-option--active-color)}.vs__dropdown-option--deselect{background:var(--vs-dropdown-option--deselect-bg);color:var(--vs-dropdown-option--deselect-color)}.vs__dropdown-option--disabled{background:var(--vs-state-disabled-bg);color:var(--vs-state-disabled-color);cursor:var(--vs-state-disabled-cursor)}.vs__selected{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--vs-selected-bg);border:var(--vs-selected-border-width) var(--vs-selected-border-style) var(--vs-selected-border-color);border-radius:var(--vs-border-radius);color:var(--vs-selected-color);display:-webkit-box;display:-ms-flexbox;display:flex;line-height:var(--vs-line-height);margin:4px 2px 0;padding:0 .25em;z-index:0}.vs__deselect{fill:var(--vs-controls-color);-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;cursor:pointer;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin-left:4px;padding:0;text-shadow:var(--vs-controls--deselect-text-shadow)}.vs--single .vs__selected{background-color:transparent;border-color:transparent}.vs--single.vs--loading .vs__selected,.vs--single.vs--open .vs__selected{opacity:.4;position:absolute}.vs--single.vs--searching .vs__selected{display:none}.vs__search::-webkit-search-cancel-button{display:none}.vs__search::-ms-clear,.vs__search::-webkit-search-decoration,.vs__search::-webkit-search-results-button,.vs__search::-webkit-search-results-decoration{display:none}.vs__search,.vs__search:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:1px solid transparent;border-left:none;-webkit-box-shadow:none;box-shadow:none;color:var(--vs-search-input-color);-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;font-size:var(--vs-font-size);line-height:var(--vs-line-height);margin:4px 0 0;max-width:100%;outline:none;padding:0 7px;width:0;z-index:1}.vs__search::-moz-placeholder{color:var(--vs-search-input-placeholder-color)}.vs__search:-ms-input-placeholder{color:var(--vs-search-input-placeholder-color)}.vs__search::-webkit-input-placeholder{color:var(--vs-search-input-placeholder-color)}.vs__search::-ms-input-placeholder{color:var(--vs-search-input-placeholder-color)}.vs__search::placeholder{color:var(--vs-search-input-placeholder-color)}.vs--unsearchable .vs__search{opacity:1}.vs--unsearchable:not(.vs--disabled) .vs__search{cursor:pointer}.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search{opacity:.2}.vs__spinner{-ms-flex-item-align:center;align-self:center;-webkit-animation:vSelectSpinner 1.1s linear infinite;animation:vSelectSpinner 1.1s linear infinite;border:.9em solid hsla(0,0%,39%,.1);border-left-color:rgba(60,60,60,.45);font-size:5px;opacity:0;overflow:hidden;text-indent:-9999em;-webkit-transform:translateZ(0) scale(var(--vs-controls--spinner-size,var(--vs-controls-size)));transform:translateZ(0) scale(var(--vs-controls--spinner-size,var(--vs-controls-size)));-webkit-transition:opacity .1s;transition:opacity .1s}.vs__spinner,.vs__spinner:after{border-radius:50%;height:5em;-webkit-transform:scale(var(--vs-controls--spinner-size,var(--vs-controls-size)));transform:scale(var(--vs-controls--spinner-size,var(--vs-controls-size)));width:5em}.vs--loading .vs__spinner{opacity:1}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/book/EditBook.vue?vue&type=style&index=0&id=2666bc3e&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/book/EditBook.vue?vue&type=style&index=0&id=2666bc3e&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.vtl .vtl-drag-disabled {\n    background-color: #d0cfcf;\n}\n.vtl .vtl-drag-disabled:hover {\n    background-color: #d0cfcf;\n}\n.vtl .vtl-disabled {\n    background-color: #d0cfcf;\n}\n.icon {\n    cursor: pointer;\n}\n.icon:hover {\n    cursor: pointer;\n}\n.muted {\n    color: gray;\n    font-size: 80%;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/book/EditBook.vue?vue&type=style&index=1&id=2666bc3e&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/book/EditBook.vue?vue&type=style&index=1&id=2666bc3e&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.cropper[data-v-2666bc3e] {\n    height: 250px;\n    background: #ddd;\n}\n.crop_block[data-v-2666bc3e] {\n    position: relative;\n}\n.btn_crop[data-v-2666bc3e] {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    border: none;\n    border-radius: 8px;\n    width: 40px;\n    height: 40px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    font-size: 16px;\n    color: #000;\n    background: transparent;\n    padding: 0;\n}\n.btn_crop i[data-v-2666bc3e] {\n    position: relative;\n}\n.btn_crop[data-v-2666bc3e]::before {\n    content: \"\";\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    left: 0;\n    bottom: 0;\n    -webkit-filter: blur(20px);\n    -moz-filter: blur(20px);\n    -o-filter: blur(20px);\n    -ms-filter: blur(20px);\n    filter: blur(1px);\n    opacity: 1;\n    border-radius: 8px;\n    background: rgba(255, 255, 255, 0.8);\n}\n.jv_input_file_label[data-v-2666bc3e] {\n    height: 50px;\n    width: 50px;\n    border: 4px solid #58b6f0;\n    color: #58b6f0;\n    border-radius: 8px;\n    position: relative;\n    font-size: 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    cursor: pointer;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n}\n.jv_input_file_label input[data-v-2666bc3e] {\n    opacity: 0;\n    position: absolute;\n    pointer-events: none;\n}\n.jv_input_file_label i[data-v-2666bc3e] {\n    cursor: pointer;\n}\n.jv_input_file_label[data-v-2666bc3e]:hover {\n    background: #58b6f0;\n    color: #fff;\n}\n.btn_add_select[data-v-2666bc3e] {\n    position: absolute;\n    right: 1px;\n    top: 1px;\n    bottom: 1px;\n    padding: 5px;\n    border: 0px;\n    background: #fff;\n    font-size: 18px;\n}\n.progress_line[data-v-2666bc3e] {\n    height: 4px;\n    background: #ffffff;\n    border-radius: 6px;\n    position: relative;\n    z-index: 1;\n}\n.data-pernum[data-v-2666bc3e]::before {\n    content: attr(\"data-pernum\");\n    position: absolute;\n    top: 0;\n}\n.progress_bar[data-v-2666bc3e] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    background: #00000061;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 10px;\n}\n.progress_bar[data-v-2666bc3e]::before {\n    content: \"\";\n    position: absolute;\n    width: calc(100% - 20px);\n    left: 10px;\n    right: 10px;\n    background: rgba(255, 255, 255, 0.5);\n    height: 4px;\n    border-radius: 6px;\n    z-index: 0;\n}\n.jv_error_btn[data-v-2666bc3e] {\n    border: 4px solid #f05883;\n    color: #d6093c;\n}\n.jv_error_btn[data-v-2666bc3e]:hover {\n    background: #f05883;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/***/ (function(module) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/lodash/before.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/before.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

module.exports = before;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/***/ (function(module) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/***/ (function(module) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ (function(module) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ (function(module) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/last.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/last.js ***!
  \*************************************/
/***/ (function(module) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ "./node_modules/lodash/noop.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/noop.js ***!
  \*************************************/
/***/ (function(module) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/once.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/once.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var before = __webpack_require__(/*! ./before */ "./node_modules/lodash/before.js");

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */
function once(func) {
  return before(2, func);
}

module.exports = once;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css":
/*!**********************************************************************!*\
  !*** ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./vue-treeselect.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-select/dist/vue-select.css":
/*!*****************************************************!*\
  !*** ./node_modules/vue-select/dist/vue-select.css ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_vue_select_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./vue-select.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-select/dist/vue-select.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_vue_select_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_vue_select_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/book/EditBook.vue?vue&type=style&index=0&id=2666bc3e&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/book/EditBook.vue?vue&type=style&index=0&id=2666bc3e&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBook_vue_vue_type_style_index_0_id_2666bc3e_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditBook.vue?vue&type=style&index=0&id=2666bc3e&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/book/EditBook.vue?vue&type=style&index=0&id=2666bc3e&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBook_vue_vue_type_style_index_0_id_2666bc3e_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBook_vue_vue_type_style_index_0_id_2666bc3e_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/book/EditBook.vue?vue&type=style&index=1&id=2666bc3e&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/book/EditBook.vue?vue&type=style&index=1&id=2666bc3e&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBook_vue_vue_type_style_index_1_id_2666bc3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditBook.vue?vue&type=style&index=1&id=2666bc3e&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/book/EditBook.vue?vue&type=style&index=1&id=2666bc3e&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBook_vue_vue_type_style_index_1_id_2666bc3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBook_vue_vue_type_style_index_1_id_2666bc3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-advanced-cropper/dist/index.es.js":
/*!************************************************************!*\
  !*** ./node_modules/vue-advanced-cropper/dist/index.es.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoundingBox": function() { return /* binding */ __vue_component__$5; },
/* harmony export */   "CircleStencil": function() { return /* binding */ __vue_component__$a; },
/* harmony export */   "Cropper": function() { return /* binding */ __vue_component__$b; },
/* harmony export */   "DragEvent": function() { return /* binding */ DragEvent; },
/* harmony export */   "DraggableArea": function() { return /* binding */ __vue_component__$6; },
/* harmony export */   "DraggableElement": function() { return /* binding */ __vue_component__; },
/* harmony export */   "HandlerWrapper": function() { return /* binding */ __vue_component__$1; },
/* harmony export */   "LineWrapper": function() { return /* binding */ __vue_component__$2; },
/* harmony export */   "MoveEvent": function() { return /* binding */ MoveEvent; },
/* harmony export */   "PreviewImage": function() { return /* binding */ __vue_component__$c; },
/* harmony export */   "PreviewResult": function() { return /* binding */ __vue_component__$7; },
/* harmony export */   "RectangleStencil": function() { return /* binding */ __vue_component__$9; },
/* harmony export */   "ResizeEvent": function() { return /* binding */ ResizeEvent; },
/* harmony export */   "SimpleHandler": function() { return /* binding */ __vue_component__$3; },
/* harmony export */   "SimpleLine": function() { return /* binding */ __vue_component__$4; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function ownKeys(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,o)}return i}function _objectSpread2(e){for(var t,o=1;o<arguments.length;o++)t=null==arguments[o]?{}:arguments[o],o%2?ownKeys(Object(t),!0).forEach(function(i){_defineProperty(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))});return e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,s=Array(t);o<t;o++)s[o]=e[o];return s}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function createCommonjsModule(e,t,i){return i={path:t,exports:{},require:function(e,t){return commonjsRequire(e,t===void 0||null===t?i.path:t)}},e(i,i.exports),i.exports}function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var classnames=createCommonjsModule(function(e){(function(){function t(){for(var e,o=[],s=0;s<arguments.length;s++)if(e=arguments[s],e){var a=typeof e;if("string"===a||"number"===a)o.push(e);else if(Array.isArray(e)&&e.length){var n=t.apply(null,e);n&&o.push(n)}else if("object"===a)for(var r in e)i.call(e,r)&&e[r]&&o.push(r)}return o.join(" ")}var i={}.hasOwnProperty;e.exports?(t.default=t,e.exports=t):window.classNames=t})()}),easyBem=function(e){return function(t,i){if(!t)return e;var o;"string"==typeof t?o=t:i=t;var s=e;return o&&(s+="__"+o),s+(i?Object.keys(i).reduce(function(e,t){var o=i[t];return o&&(e+=" "+("boolean"==typeof o?s+"--"+t:s+"--"+t+"_"+o)),e},""):"")}};function debounce(e,t,i){function o(){var h=Date.now()-r;h<t&&0<=h?s=setTimeout(o,t-h):(s=null,!i&&(l=e.apply(n,a),n=a=null))}var s,a,n,r,l;null==t&&(t=100);var h=function(){n=this,a=arguments,r=Date.now();var h=i&&!s;return s||(s=setTimeout(o,t)),h&&(l=e.apply(n,a),n=a=null),l};return h.clear=function(){s&&(clearTimeout(s),s=null)},h.flush=function(){s&&(l=e.apply(n,a),n=a=null,clearTimeout(s),s=null)},h}debounce.debounce=debounce;var debounce_1=debounce,__assign=function(){return __assign=Object.assign||function(e){for(var t,o=1,a=arguments.length;o<a;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},__assign.apply(this,arguments)},ManipulateImageEvent=function(){return function(e,t){void 0===e&&(e={}),void 0===t&&(t={}),this.type="manipulateImage",this.move=e,this.scale=t}}(),ResizeEvent=function(){return function(e,t){void 0===t&&(t={}),this.type="resize",this.directions=e,this.params=t}}(),MoveEvent=function(){return function(e){this.type="move",this.directions=e}}(),DragEvent=function(){function e(e,t,i,o,s){this.type="drag",this.nativeEvent=e,this.position=i,this.previousPosition=o,this.element=t,this.anchor=s}return e.prototype.shift=function(){var e=this,t=e.element,i=e.anchor,o=e.position,s=t.getBoundingClientRect(),a=s.left,n=s.top;return{left:o.left-a-i.left,top:o.top-n-i.top}},e}(),ALL_DIRECTIONS=["left","right","top","bottom"],HORIZONTAL_DIRECTIONS=["left","right"],VERTICAL_DIRECTIONS=["top","bottom"],MAIN_DIRECTIONS=["left","top"],IMAGE_RESTRICTIONS=["area","stencil","none"],DEFAULT_COORDINATES={left:0,top:0,width:0,height:0};function toLimits(e){return{left:e.left,top:e.top,right:e.left+e.width,bottom:e.top+e.height}}function diff(e,t){return{left:e.left-t.left,top:e.top-t.top}}function getCenter(e){return{left:e.left+e.width/2,top:e.top+e.height/2}}function getIntersections(e,t){var i=Math.max,o={left:0,top:0,right:0,bottom:0};return ALL_DIRECTIONS.forEach(function(s){var a=t[s],n=toLimits(e)[s];o[s]=void 0!==a&&void 0!==n?"left"===s||"top"===s?i(0,a-n):i(0,n-a):0}),o}function applyDirections(e,t){return{left:e.left-t.left,top:e.top-t.top,width:e.width+t.left+t.right,height:e.height+t.top+t.bottom}}function inverseMove(e){return{left:-e.left,top:-e.top}}function applyMove(e,t){return __assign(__assign({},e),{left:e.left+t.left,top:e.top+t.top})}function applyScale(e,t,i,o){if(i){var s=getCenter(e);return{width:e.width*t,height:e.height*t,left:e.left+e.width*(1-t)/2+(i.left-s.left)*(o||1-t),top:e.top+e.height*(1-t)/2+(i.top-s.top)*(o||1-t)}}return{width:e.width*t,height:e.height*t,left:e.left+e.width*(1-t)/2,top:e.top+e.height*(1-t)/2}}function ratio(e){return e.width/e.height}function maxScale(e,t){return Math.min(t.right!==void 0&&t.left!==void 0?(t.right-t.left)/e.width:1/0,t.bottom!==void 0&&t.top!==void 0?(t.bottom-t.top)/e.height:1/0)}function fit(e,t){var i={left:0,top:0},o=getIntersections(e,t);return o.left&&0<o.left?i.left=o.left:o.right&&0<o.right&&(i.left=-o.right),o.top&&0<o.top?i.top=o.top:o.bottom&&0<o.bottom&&(i.top=-o.bottom),i}function getBrokenRatio(e,t){var i;return t.minimum&&e<t.minimum?i=t.minimum:t.maximum&&e>t.maximum&&(i=t.maximum),i}function fitSize(e,t){var i=ratio(e),o=ratio(t);return t.width<1/0&&t.height<1/0?i>o?{width:t.width,height:t.width/i}:{width:t.height*i,height:t.height}:t.width<1/0?{width:t.width,height:t.width/i}:t.height<1/0?{width:t.height*i,height:t.height}:e}function fitToLimits(e,t){return applyMove(e,fit(e,t))}function limitsToSize(e){return{width:e.right!==void 0&&e.left!==void 0?e.right-e.left:1/0,height:e.bottom!==void 0&&e.top!==void 0?e.bottom-e.top:1/0}}function limitSizeRestrictions(e,t){var i=Math.min;return __assign(__assign({},e),{minWidth:i(t.width,e.minWidth),minHeight:i(t.height,e.minHeight),maxWidth:i(t.width,e.maxWidth),maxHeight:i(t.height,e.maxHeight)})}function joinLimits(e,t,i){var o=Math.min,s=Math.max;void 0===i&&(i=!0);var a={};return ALL_DIRECTIONS.forEach(function(n){var r=e[n],l=t[n];void 0!==r&&void 0!==l?"left"===n||"top"===n?a[n]=i?s(r,l):o(r,l):a[n]=i?o(r,l):s(r,l):void 0===l?void 0!==r&&(a[n]=r):a[n]=l}),a}function intersectionLimits(e,t){return joinLimits(e,t,!0)}function validateSize(e){var t=e.size,i=e.aspectRatio,o=e.ignoreMinimum,s=e.sizeRestrictions;return!!((t.correctRatio||ratio(t)>=i.minimum&&ratio(t)<=i.maximum)&&t.height<=s.maxHeight&&t.width<=s.maxWidth&&t.width&&t.height&&(o||t.height>=s.minHeight&&t.width>=s.minWidth))}function distance(e,t){var i=Math.pow;return i(e.width-t.width,2)+i(e.height-t.height,2)}function approximatedSize(e){var i=Math.min,o=Math.max;function t(e,t){return void 0===t&&(t=!1),e.reduce(function(e,i){return validateSize({size:i,aspectRatio:r,sizeRestrictions:n,ignoreMinimum:t})?!e||distance(i,{width:s,height:a})<distance(e,{width:s,height:a})?i:e:e},null)}var s=e.width,a=e.height,n=e.sizeRestrictions,r={minimum:e.aspectRatio&&e.aspectRatio.minimum||0,maximum:e.aspectRatio&&e.aspectRatio.maximum||1/0},l={width:o(n.minWidth,i(n.maxWidth,s)),height:o(n.minHeight,i(n.maxHeight,a))},h=[];r&&[r.minimum,r.maximum].forEach(function(e){e&&h.push({width:l.width,height:l.width/e,correctRatio:!0},{width:l.height*e,height:l.height,correctRatio:!0})}),validateSize({size:l,aspectRatio:r,sizeRestrictions:n})&&h.push(l);var c=t(h)||t(h,!0);return c&&{width:c.width,height:c.height}}function directionNames(e,t){var i,o;return e&&t?(i=""+e+t[0].toUpperCase()+t.slice(1),o=e+"-"+t):(i=e||t,o=e||t),{name:i,classname:o}}function isLocal(e){return /^data:/.test(e)||/^blob:/.test(e)}function isCrossOriginURL(e){if(isLocal(e))return!1;var t=window.location,i=/(\w+:)?(?:\/\/)([\w.-]+)?(?::(\d+))?\/?/.exec(e)||[],o={protocol:i[1]||"",host:i[2]||"",port:i[3]||""},s=function(e){return"http"===e?80:433},a=function(e){return e.port||s(e.protocol||t.protocol)};return(o.protocol||o.host||o.port)&&!!!(o.protocol&&o.protocol==t.protocol&&o.host&&o.host==t.host&&o.host&&a(o)==a(t))}function isFunction(e){return!!(e&&e.constructor&&e.call&&e.apply)}function isUndefined(e){return e===void 0}function isObject(e){return"object"==typeof e&&null!==e}function getSettings(e,t){var i=__assign({enabled:!!e},t);return isObject(e)&&(i=__assign(__assign({},i),e)),i}function parseNumber(e){var t=Number.isNaN,i=+e;return t(i)?e:i}function replacedProp(e,t,i){return isEmpty(e)||!0||0,!0}function isEmpty(e){return(!e||0===Object.keys(e).length)&&"function"!=typeof e}function isLoadedImage(e){return!!e.naturalWidth}function distance$1(e,t){var i=Math.pow;return Math.sqrt(i(e.x-t.x,2)+i(e.y-t.y,2))}function move(e){var t=e.event,i=e.coordinates,o=e.positionRestrictions,s=void 0===o?{}:o,a=applyMove(i,t.directions);return applyMove(a,fit(a,s))}function applyTransform(e){var t=e.coordinates,i=e.transform,o=e.imageSize,s=e.sizeRestrictions,a=e.positionRestrictions,n=e.aspectRatio,r=function(e,t){return move({coordinates:e,positionRestrictions:a,event:new MoveEvent({left:t.left-e.left,top:t.top-e.top})})},l=function(e,t){var i=__assign(__assign(__assign({},e),approximatedSize({width:t.width,height:t.height,sizeRestrictions:s,aspectRatio:n})),{left:0,top:0});return r(i,{left:e.left,top:e.top})},h=__assign({},t),c=Array.isArray(i)?i:[i];return c.forEach(function(e){var t={};t="function"==typeof e?e(__assign({},h),o):e,isUndefined(t.width)&&isUndefined(t.height)||(h=l(h,__assign(__assign({},h),t))),isUndefined(t.left)&&isUndefined(t.top)||(h=r(h,__assign(__assign({},h),t)))}),h}function areaRestrictions(e){var t=e.imageSize,i=e.imageRestriction,o={};return"area"===i&&(o={left:0,top:0,right:t.width,bottom:t.height}),o}function autoZoom(e){var t=Math.min,i=Math.max,o=e.coordinates,s=e.visibleArea,a=e.areaRestrictions,n=__assign({},s),r=__assign({},o),l=i(0,r.width-n.width),h=i(0,r.height-n.height);return l>h?n=applyScale(n,t(r.width/n.width,maxScale(n,a))):h>l&&(n=applyScale(n,t(r.height/n.height,maxScale(n,a)))),n=applyMove(n,inverseMove(fit(r,toLimits(n)))),n=applyMove(n,fit(n,a)),{visibleArea:n}}function fitBoundaries(e){var t=e.cropper,i=e.imageSize,o=t.clientHeight,s=t.clientWidth,a=o,n=i.width*o/i.height;return n>s&&(n=s,a=i.height*s/i.width),{width:n,height:a}}function fillBoundaries(e){var t=e.cropper;return{width:t.clientWidth,height:t.clientHeight}}function defaultPosition(e){var t=e.imageSize,i=e.visibleArea,o=e.coordinates,s=i||t;return{left:(i?i.left:0)+s.width/2-o.width/2,top:(i?i.top:0)+s.height/2-o.height/2}}function defaultSize(e){var t=e.imageSize,i=e.visibleArea,o=e.boundaries,s=e.aspectRatio,a=e.sizeRestrictions,n=i||t,r=o.width>o.height?{width:.8*n.width,height:.8*n.width/ratio(o)}:{height:.8*n.height,width:.8*n.height*ratio(o)};return approximatedSize(__assign(__assign({},r),{aspectRatio:s,sizeRestrictions:a}))}function defaultVisibleArea(e){var t=Math.max,i=e.areaRestrictions,o=e.coordinates,s=e.imageSize,a=e.boundaries,n=ratio(a);if(o){var r={height:t(o.height,s.height),width:t(o.width,s.width)},l=ratio(r),h=fitSize({width:l>n?r.width:r.height*n,height:l>n?r.width/n:r.height},limitsToSize(i)),c={left:o.left+o.width/2-h.width/2,top:o.top+o.height/2-h.height/2,width:h.width,height:h.height},d=getIntersections(o,toLimits(__assign({left:0,top:0},s))),p={};return d.left||d.right||!(c.width<=s.width)||(p.left=0,p.right=s.width),d.top||d.bottom||!(c.height<=s.height)||(p.top=0,p.bottom=s.height),fitToLimits(c,intersectionLimits(p,i))}var m=ratio(s),h={height:m>n?s.height:s.width/n,width:m>n?s.height*n:s.width};return{left:s.width/2-h.width/2,top:s.height/2-h.height/2,width:h.width,height:h.height}}function fitCoordinates(e){var t=Math.min,i=e.visibleArea,o=e.coordinates,s=e.aspectRatio,a=e.sizeRestrictions,n=e.positionRestrictions,r=__assign(__assign({},o),approximatedSize({width:o.width,height:o.height,aspectRatio:s,sizeRestrictions:{maxWidth:i.width,maxHeight:i.height,minHeight:t(i.height,a.minHeight),minWidth:t(i.width,a.minWidth)}}));return r=applyMove(r,diff(getCenter(o),getCenter(r))),r=applyMove(r,fit(r,intersectionLimits(toLimits(i),n))),r}function initStretcher(e){var t=e.stretcher,i=e.imageSize,o=ratio(i);t.style.width=i.width+"px",t.style.height=t.clientWidth/o+"px",t.style.width=t.clientWidth+"px"}function limitBy(e,t){return joinLimits(e,toLimits(t))}function manipulateImage(e){var t=Math.abs,i=Math.pow,o=Math.min,s=Math.max,a=e.event,n=e.coordinates,r=e.visibleArea,l=e.sizeRestrictions,h=e.areaRestrictions,c=e.positionRestrictions,d=e.settings,p=void 0===d?{}:d,m=a.scale,g=a.move,u=__assign({},r),f=__assign({},n),v=1,b=1,w=m.factor&&1e-3<t(m.factor-1);u=applyMove(u,{left:g.left||0,top:g.top||0});var y={stencil:{minimum:s(l.minWidth?l.minWidth/f.width:0,l.minHeight?l.minHeight/f.height:0),maximum:o(l.maxWidth?l.maxWidth/f.width:1/0,l.maxHeight?l.maxHeight/f.height:1/0,maxScale(f,c))},area:{maximum:maxScale(u,h)}};m.factor&&w&&(1>m.factor?(b=s(m.factor,y.stencil.minimum),1<b&&(b=1)):1<m.factor&&(b=o(m.factor,o(y.area.maximum,y.stencil.maximum)),1>b&&(b=1))),b&&(u=applyScale(u,b,m.center));var R={left:n.left-r.left,right:r.width+r.left-(n.width+n.left),top:n.top-r.top,bottom:r.height+r.top-(n.height+n.top)};return u=applyMove(u,fit(u,h)),u=applyMove(u,fit(u,{left:void 0===c.left?void 0:c.left-R.left*b,top:void 0===c.top?void 0:c.top-R.top*b,bottom:void 0===c.bottom?void 0:c.bottom+R.bottom*b,right:void 0===c.right?void 0:c.right+R.right*b})),f.width*=b,f.height*=b,f.left=u.left+R.left*b,f.top=u.top+R.top*b,m.factor&&w&&p.stencil&&(1<m.factor?v=o(y.area.maximum,m.factor)/b:1>m.factor&&(v=s(f.height/u.height,m.factor)/b),u=applyScale(u,v,getCenter(f),i(1<m.factor?y.area.maximum:f.height/u.height,2)),u=applyMove(u,fit(u,h))),{coordinates:f,visibleArea:u}}function normalizeEvent(e){var t=e.event,i=e.visibleArea,o=e.coefficient;if("manipulateImage"===t.type)return __assign(__assign({},t),{move:{left:t.move&&t.move.left?o*t.move.left:0,top:t.move&&t.move.top?o*t.move.top:0},scale:{factor:t.scale&&t.scale.factor?t.scale.factor:1,center:t.scale&&t.scale.center?{left:t.scale.center.left*o+i.left,top:t.scale.center.top*o+i.top}:null}});if("resize"===t.type){var s=__assign(__assign({},t),{directions:__assign({},t.directions)});return ALL_DIRECTIONS.forEach(function(e){s.directions[e]*=o}),s}if("move"===t.type){var a=__assign(__assign({},t),{directions:__assign({},t.directions)});return MAIN_DIRECTIONS.forEach(function(e){a.directions[e]*=o}),a}return t}function percentRestrictions(e){var t=e.imageSize,i=e.minWidth,o=e.minHeight,s=e.maxWidth,a=e.maxHeight;return{minWidth:i/100*t.width,minHeight:o/100*t.height,maxWidth:s/100*t.width,maxHeight:a/100*t.height}}function positionRestrictions(e){var t=e.imageSize,i=e.imageRestriction,o={};return"none"!==i&&(o={left:0,top:0,right:t.width,bottom:t.height}),o}function refineSizeRestrictions(e){var t=Math.min,i=e.sizeRestrictions,o=e.imageSize,s=e.boundaries,a=e.positionRestrictions,n=e.imageRestriction,r=void 0===n?"none":n,l=__assign(__assign({},i),{minWidth:void 0===i.minWidth?0:i.minWidth,minHeight:void 0===i.minHeight?0:i.minHeight,maxWidth:void 0===i.maxWidth?1/0:i.maxWidth,maxHeight:void 0===i.maxHeight?1/0:i.maxHeight});if(void 0!==a.left&&void 0!==a.right&&(l.maxWidth=t(l.maxWidth,a.right-a.left)),void 0!==a.bottom&&void 0!==a.top&&(l.maxHeight=t(l.maxHeight,a.bottom-a.top)),"none"!==r){var h=fitSize(s,o),c="area"===r?h.width:o.width,d="area"===r?h.height:o.height;(!l.maxWidth||l.maxWidth>c)&&(l.maxWidth=c),(!l.maxHeight||l.maxHeight>d)&&(l.maxHeight=d)}return l.minWidth>l.maxWidth&&(l.minWidth=l.maxWidth,l.widthFrozen=!0),l.minHeight>l.maxHeight&&(l.minHeight=l.maxHeight,l.heightFrozen=!0),l}function refineVisibleArea(e){var t=e.visibleArea,i=e.boundaries,o=e.areaRestrictions,s=__assign({},t),a=ratio(i);return s.width/s.height!==a&&(s.height=s.width/a),fitToLimits(s,o)}function fitConditions(e){var t=Math.min,i=Math.max,o=e.directions,s=e.coordinates,a=e.positionRestrictions,n=void 0===a?{}:a,r=e.sizeRestrictions,l=e.preserveRatio,h=e.compensate,c=__assign({},o),d=applyDirections(s,c).width,p=applyDirections(s,c).height;0>d&&(0>c.left&&0>c.right?(c.left=-(s.width-r.minWidth)/(c.left/c.right),c.right=-(s.width-r.minWidth)/(c.right/c.left)):0>c.left?c.left=-(s.width-r.minWidth):0>c.right&&(c.right=-(s.width-r.minWidth))),0>p&&(0>c.top&&0>c.bottom?(c.top=-(s.height-r.minHeight)/(c.top/c.bottom),c.bottom=-(s.height-r.minHeight)/(c.bottom/c.top)):0>c.top?c.top=-(s.height-r.minHeight):0>c.bottom&&(c.bottom=-(s.height-r.minHeight)));var m=getIntersections(applyDirections(s,c),n);h&&(m.left&&0<m.left&&0===m.right?(c.right+=m.left,c.left-=m.left):m.right&&0<m.right&&0===m.left&&(c.left+=m.right,c.right-=m.right),m.top&&0<m.top&&0===m.bottom?(c.bottom+=m.top,c.top-=m.top):m.bottom&&0<m.bottom&&0===m.top&&(c.top+=m.bottom,c.bottom-=m.bottom),m=getIntersections(applyDirections(s,c),n));var g={width:1/0,height:1/0,left:1/0,right:1/0,top:1/0,bottom:1/0};if(ALL_DIRECTIONS.forEach(function(e){var t=m[e];t&&c[e]&&(g[e]=i(0,1-t/c[e]))}),l){var u=t.apply(Math,ALL_DIRECTIONS.map(function(e){return g[e]}));u!==1/0&&ALL_DIRECTIONS.forEach(function(e){c[e]*=u})}else ALL_DIRECTIONS.forEach(function(e){g[e]!==1/0&&(c[e]*=g[e])});if(d=applyDirections(s,c).width,p=applyDirections(s,c).height,c.right+c.left&&(d>r.maxWidth?g.width=(r.maxWidth-s.width)/(c.right+c.left):d<r.minWidth&&(g.width=(r.minWidth-s.width)/(c.right+c.left))),c.bottom+c.top&&(p>r.maxHeight?g.height=(r.maxHeight-s.height)/(c.bottom+c.top):p<r.minHeight&&(g.height=(r.minHeight-s.height)/(c.bottom+c.top))),l){var f=t(g.width,g.height);f!==1/0&&ALL_DIRECTIONS.forEach(function(e){c[e]*=f})}else g.width!==1/0&&HORIZONTAL_DIRECTIONS.forEach(function(e){c[e]*=g.width}),g.height!==1/0&&VERTICAL_DIRECTIONS.forEach(function(e){c[e]*=g.height});return c}function resize(e){var t=Math.abs,i=e.event,o=e.coordinates,s=e.aspectRatio,a=e.positionRestrictions,n=e.sizeRestrictions,r=__assign(__assign({},o),{right:o.left+o.width,bottom:o.top+o.height}),l=i.params||{},h=__assign({},i.directions),c=l.allowedDirections||{left:!0,right:!0,bottom:!0,top:!0};n.widthFrozen&&(h.left=0,h.right=0),n.heightFrozen&&(h.top=0,h.bottom=0),ALL_DIRECTIONS.forEach(function(e){c[e]||(h[e]=0)}),h=fitConditions({coordinates:r,directions:h,sizeRestrictions:n,positionRestrictions:a});var d=applyDirections(r,h).width,p=applyDirections(r,h).height,m=l.preserveRatio?ratio(r):getBrokenRatio(d/p,s);if(m){var g=l.respectDirection;if(g||(r.width>=r.height||1===m?g="width":g="height"),"width"===g){var u=d/m-r.height;c.top&&c.bottom?(h.bottom=u/2,h.top=u/2):c.bottom?h.bottom=u:c.top?h.top=u:c.right?h.right=0:c.left&&(h.left=0)}else if("height"===g){var f=r.width-p*m;c.left&&c.right?(h.left=-f/2,h.right=-f/2):c.left?h.left=-f:c.right?h.right=-f:c.top?h.top=0:c.bottom&&(h.bottom=0)}h=fitConditions({directions:h,coordinates:r,sizeRestrictions:n,positionRestrictions:a,preserveRatio:!0,compensate:l.compensate})}return d=applyDirections(r,h).width,p=applyDirections(r,h).height,m=l.preserveRatio?ratio(r):getBrokenRatio(d/p,s),m&&1e-3<t(m-d/p)&&ALL_DIRECTIONS.forEach(function(e){c[e]||(h[e]=0)}),move({event:new MoveEvent({left:-h.left,top:-h.top}),coordinates:{width:o.width+h.right+h.left,height:o.height+h.top+h.bottom,left:o.left,top:o.top},positionRestrictions:a})}function roundCoordinates(e){var t=Math.ceil,i=Math.floor,o=Math.round,s=e.coordinates,a=e.sizeRestrictions,n=e.positionRestrictions,r={width:o(s.width),height:o(s.height),left:o(s.left),top:o(s.top)};return r.width>a.maxWidth?r.width=i(s.width):r.width<a.minWidth&&(r.width=t(s.width)),r.height>a.maxHeight?r.height=i(s.height):r.height<a.minHeight&&(r.height=t(s.height)),void 0!==n.left&&(r.left<n.left||void 0!==n.right&&r.left+r.width>n.right)&&(r.left=i(n.left)),void 0!==n.top&&(r.top<n.top||void 0!==n.bottom&&r.top+r.height>n.bottom)&&(r.top=i(n.top)),r}function fitVisibleArea(e){var t=Math.min,i=Math.max,o=e.visibleArea,s=e.boundaries,a=e.areaRestrictions,n=e.coordinates,r=__assign({},o);r.height=r.width/ratio(s),r.top+=(o.height-r.height)/2,(0<n.height-r.height||0<n.width-r.width)&&(r=applyScale(r,i(n.height/r.height,n.width/r.height)));var l=getIntersections(r,a);l.left+l.right+l.top+l.bottom&&(l.left+l.right>l.top+l.bottom?r=applyScale(r,t((r.width+l.left+l.right)/r.width,maxScale(r,a))):r=applyScale(r,t((r.height+l.top+l.bottom)/r.height,maxScale(r,a))));var h=inverseMove(fit(n,toLimits(r)));return r.width<n.width&&(h.left=0),r.height<n.height&&(h.top=0),r=applyMove(r,h),r=fitToLimits(r,a),r}var draggable={beforeMount:function(){window.addEventListener("mouseup",this.onMouseUp,{passive:!1}),window.addEventListener("mousemove",this.onMouseMove,{passive:!1}),window.addEventListener("touchmove",this.onTouchMove,{passive:!1}),window.addEventListener("touchend",this.onTouchEnd,{passive:!1})},beforeDestroy:function(){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd)},mounted:function(){if(!this.$refs.draggable)throw new Error("You should add ref \"draggable\" to your root element to use draggable mixin");this.touches=[],this.hovered=!1},methods:{onMouseOver:function(){this.hovered||(this.hovered=!0,this.$emit("enter"))},onMouseLeave:function(){this.hovered&&!this.touches.length&&(this.hovered=!1,this.$emit("leave"))},onTouchStart:function(t){t.cancelable&&!this.disabled&&1===t.touches.length&&(this.touches=_toConsumableArray(t.touches),!this.hovered&&(this.$emit("enter"),this.hovered=!0),t.touches.length&&this.initAnchor(this.touches.reduce(function(e,i){return{clientX:e.clientX+i.clientX/t.touches.length,clientY:e.clientY+i.clientY/t.touches.length}},{clientX:0,clientY:0})),t.preventDefault&&t.preventDefault(),t.stopPropagation())},onTouchEnd:function(){this.processEnd()},onTouchMove:function(t){this.touches.length&&(this.processMove(t,t.touches),t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation())},onMouseDown:function(t){if(!this.disabled){var e={fake:!0,clientX:t.clientX,clientY:t.clientY};this.touches=[e],this.initAnchor(e),t.stopPropagation()}},onMouseMove:function(t){this.touches.length&&(this.processMove(t,[{fake:!0,clientX:t.clientX,clientY:t.clientY}]),t.preventDefault&&t.preventDefault())},onMouseUp:function(){this.processEnd()},initAnchor:function(e){var t=this.$refs.draggable,i=t.getBoundingClientRect(),o=i.left,s=i.right,a=i.bottom,n=i.top;this.anchor={left:e.clientX-o,top:e.clientY-n,bottom:a-e.clientY,right:s-e.clientX}},processMove:function(e,t){var i=_toConsumableArray(t);if(this.touches.length){if(1===this.touches.length&&1===i.length){var o=this.$refs.draggable;this.$emit("drag",new DragEvent(e,o,{left:i[0].clientX,top:i[0].clientY},{left:this.touches[0].clientX,top:this.touches[0].clientY},this.anchor))}this.touches=i}},processEnd:function(){this.touches=[],this.hovered&&(this.$emit("leave"),this.hovered=!1)}}},script={name:"DraggableElement",mixins:[draggable],props:{classname:{type:String}}};function normalizeComponent(e,t,i,o,s,a,n,r,l,h){"boolean"!=typeof n&&(l=r,r=n,n=!1);const c="function"==typeof i?i.options:i;e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,s&&(c.functional=!0)),o&&(c._scopeId=o);let d;if(a?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=d):t&&(d=n?function(e){t.call(this,h(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,r(e))}),d)if(c.functional){const e=c.render;c.render=function(t,i){return d.call(i),e(t,i)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,d):[d]}return i}var __vue_script__=script,__vue_render__=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"draggable",class:e.classname,on:{touchstart:e.onTouchStart,mousedown:e.onMouseDown,mouseover:e.onMouseOver,mouseleave:e.onMouseLeave}},[e._t("default")],2)},__vue_staticRenderFns__=[],__vue_inject_styles__=void 0,__vue_scope_id__=void 0,__vue_module_identifier__=void 0,__vue_is_functional_template__=!1,__vue_component__=normalizeComponent({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},__vue_inject_styles__,__vue_script__,__vue_scope_id__,__vue_is_functional_template__,__vue_module_identifier__,!1,void 0,void 0,void 0),cn=easyBem("vue-handler-wrapper"),script$1={name:"HandlerWrapper",components:{DraggableElement:__vue_component__},props:{horizontalPosition:{type:String},verticalPosition:{type:String},disabled:{type:Boolean,default:!1},classname:{type:String,validator:function(e){return replacedProp(e,"classname","class")}}},computed:{classes:function(){var e;if(this.horizontalPosition||this.verticalPosition){var t,i=directionNames(this.horizontalPosition,this.verticalPosition);e=classnames(this.classname,cn((t={},_defineProperty(t,i.classname,!0),_defineProperty(t,"disabled",this.disabled),t)))}else e=classnames(this.classname,cn({disabled:this.disabled}));return{root:e,draggable:cn("draggable")}}}},__vue_script__$1=script$1,__vue_render__$1=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:e.classes.root},[i("DraggableElement",{class:e.classes.draggable,attrs:{disabled:e.disabled},on:{drag:function(t){return e.$emit("drag",t)},leave:function(){return e.$emit("leave")},enter:function(){return e.$emit("enter")}}},[e._t("default")],2)],1)},__vue_staticRenderFns__$1=[],__vue_inject_styles__$1=void 0,__vue_scope_id__$1=void 0,__vue_module_identifier__$1=void 0,__vue_is_functional_template__$1=!1,__vue_component__$1=normalizeComponent({render:__vue_render__$1,staticRenderFns:__vue_staticRenderFns__$1},__vue_inject_styles__$1,__vue_script__$1,__vue_scope_id__$1,__vue_is_functional_template__$1,__vue_module_identifier__$1,!1,void 0,void 0,void 0),cn$1=easyBem("vue-line-wrapper"),script$2={name:"LineWrapper",components:{DraggableElement:__vue_component__},props:{position:{type:String,required:!0},disabled:{type:Boolean,default:!1}},computed:{classname:function(){var e;return cn$1((e={},_defineProperty(e,this.position,!0),_defineProperty(e,"disabled",this.disabled),e))}}},__vue_script__$2=script$2,__vue_render__$2=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("DraggableElement",{class:e.classname,attrs:{disabled:e.disabled},on:{drag:function(t){return e.$emit("drag",t)},leave:function(){return e.$emit("leave")},enter:function(){return e.$emit("enter")}}},[e._t("default")],2)},__vue_staticRenderFns__$2=[],__vue_inject_styles__$2=void 0,__vue_scope_id__$2=void 0,__vue_module_identifier__$2=void 0,__vue_is_functional_template__$2=!1,__vue_component__$2=normalizeComponent({render:__vue_render__$2,staticRenderFns:__vue_staticRenderFns__$2},__vue_inject_styles__$2,__vue_script__$2,__vue_scope_id__$2,__vue_is_functional_template__$2,__vue_module_identifier__$2,!1,void 0,void 0,void 0),cn$2=easyBem("vue-simple-handler"),script$3={name:"SimpleHandler",components:{HandlerWrapper:__vue_component__$1},props:{classname:{type:String},hoverClassname:{type:String},horizontalPosition:{type:String},verticalPosition:{type:String},disabled:{type:Boolean,default:!1}},data:function(){return{hover:!1}},computed:{classnames:function(){var e;return{default:classnames(cn$2((e={},_defineProperty(e,this.horizontalPosition,!!this.horizontalPosition),_defineProperty(e,this.verticalPosition,!!this.verticalPosition),_defineProperty(e,"".concat(this.horizontalPosition,"-").concat(this.verticalPosition),!!(this.verticalPosition&&this.horizontalPosition)),_defineProperty(e,"hover",this.hover),e)),this.classname,this.hover&&this.hoverClassname)}}},methods:{onDrag:function(e){this.$emit("drag",e)},onEnter:function(){this.hover=!0},onLeave:function(){this.hover=!1}}},__vue_script__$3=script$3,__vue_render__$3=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("HandlerWrapper",{attrs:{"vertical-position":e.verticalPosition,"horizontal-position":e.horizontalPosition,disabled:e.disabled},on:{drag:e.onDrag,enter:e.onEnter,leave:e.onLeave}},[i("div",{class:e.classnames.default})])},__vue_staticRenderFns__$3=[],__vue_inject_styles__$3=void 0,__vue_scope_id__$3=void 0,__vue_module_identifier__$3=void 0,__vue_is_functional_template__$3=!1,__vue_component__$3=normalizeComponent({render:__vue_render__$3,staticRenderFns:__vue_staticRenderFns__$3},__vue_inject_styles__$3,__vue_script__$3,__vue_scope_id__$3,__vue_is_functional_template__$3,__vue_module_identifier__$3,!1,void 0,void 0,void 0),cn$3=easyBem("vue-simple-line"),script$4={name:"SimpleLine",components:{LineWrapper:__vue_component__$2},props:{classname:{type:String},hoverClassname:{type:String},position:{type:String},disabled:{type:Boolean,default:!1}},data:function(){return{hover:!1}},computed:{classes:function(){return{root:classnames(cn$3(_defineProperty({},this.position,!0)),this.classname,this.hover&&this.hoverClassname)}}},methods:{onDrag:function(e){this.$emit("drag",e)},onEnter:function(){this.hover=!0},onLeave:function(){this.hover=!1}}},__vue_script__$4=script$4,__vue_render__$4=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("LineWrapper",{attrs:{position:e.position,disabled:e.disabled},on:{enter:e.onEnter,leave:e.onLeave,drag:e.onDrag}},[i("div",{class:e.classes.root})])},__vue_staticRenderFns__$4=[],__vue_inject_styles__$4=void 0,__vue_scope_id__$4=void 0,__vue_module_identifier__$4=void 0,__vue_is_functional_template__$4=!1,__vue_component__$4=normalizeComponent({render:__vue_render__$4,staticRenderFns:__vue_staticRenderFns__$4},__vue_inject_styles__$4,__vue_script__$4,__vue_scope_id__$4,__vue_is_functional_template__$4,__vue_module_identifier__$4,!1,void 0,void 0,void 0),cn$4=easyBem("vue-bounding-box"),HORIZONTAL_DIRECTIONS$1=["east","west",null],VERTICAL_DIRECTIONS$1=["south","north",null],script$5={name:"BoundingBox",props:{handlers:{type:Object,default:function(){return{eastNorth:!0,north:!0,westNorth:!0,west:!0,westSouth:!0,south:!0,eastSouth:!0,east:!0}}},handlerComponent:{type:[Object,String],default:function(){return __vue_component__$3}},handlersClasses:{type:Object,default:function(){return{}}},lines:{type:Object,default:function(){return{west:!0,north:!0,east:!0,south:!0}}},lineComponent:{type:[Object,String],default:function(){return __vue_component__$4}},linesClasses:{type:Object,default:function(){return{}}},scalable:{type:Boolean,default:!0},classname:{type:String,validator:function(e){return replacedProp(e,"classname","class")}},linesClassnames:{type:Object,default:function(){return{}},validator:function(e){return replacedProp(e,"linesClassnames","linesClasses")}},handlersClassnames:{type:Object,default:function(){return{}},validator:function(e){return replacedProp(e,"handlersClassnames","handlersClasses")}}},data:function(){var e=[];return HORIZONTAL_DIRECTIONS$1.forEach(function(t){VERTICAL_DIRECTIONS$1.forEach(function(i){if(t!==i){var o=directionNames(t,i),s=o.name,a=o.classname;e.push({name:s,classname:a,verticalDirection:i,horizontalDirection:t})}})}),{points:e}},computed:{classes:function(){var e=isEmpty(this.handlersClasses)?this.handlersClassnames:this.handlersClasses,t=isEmpty(this.linesClasses)?this.linesClassnames:this.linesClasses;return{root:classnames(cn$4(),this.classname),handlers:e,lines:t}},lineNodes:function(){var e=this,t=[];return this.points.forEach(function(i){i.horizontalDirection&&i.verticalDirection||!e.lines[i.name]||t.push({name:i.name,component:e.lineComponent,class:classnames(e.classes.lines.default,e.classes.lines[i.name],!e.scalable&&e.classes.lines.disabled),hoverClass:e.classes.lines.hover,verticalDirection:i.verticalDirection,horizontalDirection:i.horizontalDirection,disabled:!e.scalable})}),t},handlerNodes:function(){var e=this,t=[];return this.points.forEach(function(i){e.handlers[i.name]&&t.push({name:i.name,component:e.handlerComponent,class:classnames(e.classes.handlers.default,e.classes.handlers[i.name]),hoverClass:e.classes.handlers.hover,verticalDirection:i.verticalDirection,horizontalDirection:i.horizontalDirection,disabled:!e.scalable})}),t}},beforeMount:function(){window.addEventListener("mouseup",this.onMouseUp,{passive:!1}),window.addEventListener("mousemove",this.onMouseMove,{passive:!1}),window.addEventListener("touchmove",this.onTouchMove,{passive:!1}),window.addEventListener("touchend",this.onTouchEnd,{passive:!1})},beforeDestroy:function(){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd)},mounted:function(){this.touches=[]},methods:{onHandlerDrag:function(e,t,i){var o=e.shift(),s=o.left,a=o.top,n={left:0,right:0,top:0,bottom:0};"west"===t?n.left-=s:"east"==t&&(n.right+=s),"north"===i?n.top-=a:"south"==i&&(n.bottom+=a);var r;!i&&t?r="width":i&&!t&&(r="height"),this.scalable&&this.$emit("resize",new ResizeEvent(n,{allowedDirections:{left:"west"===t||!t,right:"east"===t||!t,bottom:"south"===i||!i,top:"north"===i||!i},preserveAspectRatio:e.nativeEvent&&e.nativeEvent.shiftKey,respectDirection:r}))}}},__vue_script__$5=script$5,__vue_render__$5=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"box",class:e.classes.root},[e._t("default"),e._v(" "),i("div",e._l(e.lineNodes,function(t){return i(t.component,{key:t.name,tag:"component",attrs:{classname:t.class,"hover-classname":t.hoverClass,position:t.name,disabled:t.disabled},on:{drag:function(i){return e.onHandlerDrag(i,t.horizontalDirection,t.verticalDirection)}}})}),1),e._v(" "),i("div",e._l(e.handlerNodes,function(t){return i(t.component,{key:t.name,tag:"component",attrs:{classname:t.class,"hover-classname":t.hoverClass,"horizontal-position":t.horizontalDirection,"vertical-position":t.verticalDirection,disabled:t.disabled},on:{drag:function(i){return e.onHandlerDrag(i,t.horizontalDirection,t.verticalDirection)}}})}),1)],2)},__vue_staticRenderFns__$5=[],__vue_inject_styles__$5=void 0,__vue_scope_id__$5=void 0,__vue_module_identifier__$5=void 0,__vue_is_functional_template__$5=!1,__vue_component__$5=normalizeComponent({render:__vue_render__$5,staticRenderFns:__vue_staticRenderFns__$5},__vue_inject_styles__$5,__vue_script__$5,__vue_scope_id__$5,__vue_is_functional_template__$5,__vue_module_identifier__$5,!1,void 0,void 0,void 0),ManipulateImageEvent$1=function(){return function(e,t){void 0===e&&(e={}),void 0===t&&(t={}),this.type="manipulateImage",this.move=e,this.scale=t}}(),MoveEvent$1=function(){return function(e){this.type="move",this.directions=e}}(),cn$5=easyBem("vue-draggable-area"),script$6={name:"DraggableArea",props:{movable:{type:Boolean,default:!0},activationDistance:{type:Number,default:20}},computed:{classnames:function(){return{default:classnames(cn$5(),this.classname)}}},beforeMount:function(){window.addEventListener("mouseup",this.onMouseUp,{passive:!1}),window.addEventListener("mousemove",this.onMouseMove,{passive:!1}),window.addEventListener("touchmove",this.onTouchMove,{passive:!1}),window.addEventListener("touchend",this.onTouchEnd,{passive:!1})},beforeDestroy:function(){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd)},mounted:function(){this.touches=[],this.touchStarted=!1},methods:{onTouchStart:function(t){if(t.cancelable){var e=this.movable&&1===t.touches.length;e&&(this.touches=_toConsumableArray(t.touches)),(this.touchStarted||e)&&(t.preventDefault(),t.stopPropagation())}},onTouchEnd:function(){this.touchStarted=!1,this.processEnd()},onTouchMove:function(t){1<=this.touches.length&&(this.touchStarted?(this.processMove(t,t.touches),t.preventDefault(),t.stopPropagation()):distance$1({x:this.touches[0].clientX,y:this.touches[0].clientY},{x:t.touches[0].clientX,y:t.touches[0].clientY})>this.activationDistance&&(this.initAnchor({clientX:t.touches[0].clientX,clientY:t.touches[0].clientY}),this.touchStarted=!0))},onMouseDown:function(t){if(this.movable){var e={fake:!0,clientX:t.clientX,clientY:t.clientY};this.touches=[e],this.initAnchor(e),t.stopPropagation()}},onMouseMove:function(t){this.touches.length&&(this.processMove(t,[{fake:!0,clientX:t.clientX,clientY:t.clientY}]),t.preventDefault&&t.cancelable&&t.preventDefault(),t.stopPropagation())},onMouseUp:function(){this.touches=[]},initAnchor:function(e){var t=this.$refs.container,i=t.getBoundingClientRect(),o=i.left,s=i.top;this.anchor={x:e.clientX-o,y:e.clientY-s}},processMove:function(e,t){var i=_toConsumableArray(t);if(this.touches.length){var o=this.$refs.container,s=o.getBoundingClientRect(),a=s.left,n=s.top;1===this.touches.length&&1===i.length&&this.$emit("move",new MoveEvent$1({left:i[0].clientX-(a+this.anchor.x),top:i[0].clientY-(n+this.anchor.y)}))}},processEnd:function(){this.touches=[]}}},__vue_script__$6=script$6,__vue_render__$6=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"container",on:{touchstart:e.onTouchStart,mousedown:e.onMouseDown}},[e._t("default")],2)},__vue_staticRenderFns__$6=[],__vue_inject_styles__$6=void 0,__vue_scope_id__$6=void 0,__vue_module_identifier__$6=void 0,__vue_is_functional_template__$6=!1,__vue_component__$6=normalizeComponent({render:__vue_render__$6,staticRenderFns:__vue_staticRenderFns__$6},__vue_inject_styles__$6,__vue_script__$6,__vue_scope_id__$6,__vue_is_functional_template__$6,__vue_module_identifier__$6,!1,void 0,void 0,void 0),XHR_DONE=4;function prepareSource(e,t,i){var o=Math.PI,s=i.flipped,a=i.orientation,n=t.naturalWidth,r=t.naturalHeight,l=e.getContext("2d");return e.width=n,e.height=r,l.save(),s&&(e.width=r,e.height=n),2==a?(l.translate(n,0),l.scale(-1,1)):3==a?(l.translate(n,r),l.rotate(1*o)):4==a?(l.translate(0,r),l.scale(1,-1)):5==a?(l.rotate(90/180*o),l.scale(1,-1)):6==a?(l.rotate(90/180*o),l.translate(0,-r)):7==a?(l.rotate(270/180*o),l.translate(-n,r),l.scale(1,-1)):8==a&&(l.translate(0,n),l.rotate(270/180*o)),l.drawImage(t,0,0,n,r),l.restore(),e}function base64ToArrayBuffer(e){e=e.replace(/^data:([^;]+);base64,/gim,"");for(var t=atob(e),o=t.length,s=new ArrayBuffer(o),a=new Uint8Array(s),n=0;n<o;n++)a[n]=t.charCodeAt(n);return s}function objectURLToBlob(e,t){var i=new XMLHttpRequest;i.open("GET",e,!0),i.responseType="blob",i.onload=function(){(200==this.status||0===this.status)&&t(this.response)},i.send()}function getImageTransforms(e){var t={orientation:e};return e&&(2===e?t.scaleX=-1:3===e?t.rotate=-180:4===e?t.scaleY=-1:5===e?(t.rotate=90,t.scaleY=-1):6===e?t.rotate=90:7===e?(t.rotate=90,t.scaleX=-1):8===e?t.rotate=-90:void 0),(90===t.rotate||-90===t.rotate)&&(t.flipped=!0),t}function getImageData(e){return new Promise(function(t,i){try{if(!e)i("Error: the image is empty");else if(/^data:/i.test(e))t(base64ToArrayBuffer(e));else if(/^blob:/i.test(e)){var o=new FileReader;o.onload=function(i){t(i.target.result)},objectURLToBlob(e,function(e){o.readAsArrayBuffer(e)})}else{var s=new XMLHttpRequest;s.onreadystatechange=function(){s.readyState!==XHR_DONE||(200===s.status||0===s.status?t(s.response):i("Warning: could not load an image to parse its orientation"),s=null)},s.onprogress=function(){"image/jpeg"!==s.getResponseHeader("content-type")&&s.abort()},s.withCredentials=!1,s.open("GET",e,!0),s.responseType="arraybuffer",s.send(null)}}catch(t){i(t)}})}function getStyleTransforms(e){var t=e.rotate,i=e.scaleX,o=e.scaleY,s="";return(t||i||o)&&(t&&(s+=" rotate("+t+"deg) "),i&&(s+=" scaleX("+i+") "),o&&(s+=" scaleY("+o+") ")),s}function getStringFromCharCode(e,t,o){var s,a="";for(s=t,o+=t;s<o;s++)a+=String.fromCharCode(e.getUint8(s));return a}function getOrientation(e){try{var t,o=new DataView(e),s=void 0,a=void 0,n=void 0,r=void 0,l=void 0;if(255===o.getUint8(0)&&216===o.getUint8(1))for(var h=o.byteLength,c=2;c+1<h;){if(255===o.getUint8(c)&&225===o.getUint8(c+1)){r=c;break}c++}if(r&&(s=r+4,a=r+10,"Exif"===getStringFromCharCode(o,s,4))){var d=o.getUint16(a);if(n=18761===d,(n||19789===d)&&42===o.getUint16(a+2,n)){var p=o.getUint32(a+4,n);8<=p&&(l=a+p)}}if(l)for(var c,m=o.getUint16(l,n),g=0;g<m;g++)if(c=l+12*g+2,274===o.getUint16(c,n)){c+=8,t=o.getUint16(c,n),o.setUint16(c,1,n);break}return t}catch(e){return null}}function parseImage(e){return new Promise(function(t){getImageData(e).then(function(i){t(i?{source:e,arrayBuffer:i,orientation:getOrientation(i)}:{source:e,arrayBuffer:null,orientation:null})}).catch(function(i){console.warn(i),t({source:e,arrayBuffer:null,orientation:null})})})}function arrayBufferToDataURL(e){for(var t=[],i=8192,o=new Uint8Array(e);0<o.length;){var s=o.subarray(0,i);t.push(String.fromCharCode.apply(null,Array.from?Array.from(s):s.slice())),o=o.subarray(i)}return"data:image/jpeg;base64,"+btoa(t.join(""))}var cn$6=easyBem("vue-preview-result"),script$7={name:"PreviewResult",props:{img:{type:Object},stencilCoordinates:{type:Object,default:function(){return{width:0,height:0,left:0,top:0}}},imageClass:{type:String},classname:{type:String,validator:function(e){return replacedProp(e,"classname","class")}},imageClassname:{type:String,validator:function(e){return replacedProp(e,"imageClassname","imageClass")}}},computed:{classes:function(){return{root:classnames(cn$6(),this.classname),image:classnames(cn$6("image"),this.imageClass||this.imageClassname),wrapper:cn$6("wrapper")}},wrapperStyle:function(){return{width:"".concat(this.stencilCoordinates.width,"px"),height:"".concat(this.stencilCoordinates.height,"px"),left:"calc(50% - ".concat(this.stencilCoordinates.width/2,"px)"),top:"calc(50% - ".concat(this.stencilCoordinates.height/2,"px)")}},imageStyle:function(){var e=this.img.transforms,t=e.flipped,i=this.img.coefficient,o=this.img.size.height/i,s=this.img.size.width/i,a={width:"".concat(s,"px"),height:"".concat(o,"px")};return t?(a.width="".concat(o,"px"),a.height="".concat(s,"px"),a.left="".concat(-this.stencilCoordinates.left-e.translateX-(o-s)/2,"px"),a.top="".concat(-this.stencilCoordinates.top-e.translateY-(s-o)/2,"px")):(a.left="".concat(-this.stencilCoordinates.left-e.translateX,"px"),a.top="".concat(-this.stencilCoordinates.top-e.translateY,"px")),a.transform=getStyleTransforms(e),a}}},__vue_script__$7=script$7,__vue_render__$7=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:e.classes.root},[i("div",{ref:"wrapper",class:e.classes.wrapper,style:e.wrapperStyle},[i("img",{ref:"image",class:e.classes.image,style:e.imageStyle,attrs:{src:e.img.src}})])])},__vue_staticRenderFns__$7=[],__vue_inject_styles__$7=void 0,__vue_scope_id__$7=void 0,__vue_module_identifier__$7=void 0,__vue_is_functional_template__$7=!1,__vue_component__$7=normalizeComponent({render:__vue_render__$7,staticRenderFns:__vue_staticRenderFns__$7},__vue_inject_styles__$7,__vue_script__$7,__vue_scope_id__$7,__vue_is_functional_template__$7,__vue_module_identifier__$7,!1,void 0,void 0,void 0);function calculateGeometricProperties(e,t){var i=t.getBoundingClientRect(),o=i.left,s=i.top,a={left:0,top:0},n=0;return e.forEach(function(t){a.left+=(t.clientX-o)/e.length,a.top+=(t.clientY-s)/e.length}),e.forEach(function(e){n+=distance$1({x:a.left,y:a.top},{x:e.clientX-o,y:e.clientY-s})}),{centerMass:a,spread:n,count:e.length}}var script$8={name:"CropperWrapper",props:{touchMove:{type:Object,required:!0},mouseMove:{type:Object,required:!0},touchResize:{type:Object,required:!0},wheelResize:{type:Object,required:!0}},beforeMount:function(){window.addEventListener("mouseup",this.onMouseUp,{passive:!1}),window.addEventListener("mousemove",this.onMouseMove,{passive:!1}),window.addEventListener("touchmove",this.onTouchMove,{passive:!1}),window.addEventListener("touchend",this.onTouchEnd,{passive:!1})},beforeDestroy:function(){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd)},mounted:function(){this.touches=[]},methods:{onTouchStart:function(t){if(t.cancelable&&(this.touchMove.enabled||this.touchResize.enabled&&1<t.touches.length)){var e=this.$refs.container,i=e.getBoundingClientRect(),o=i.left,s=i.top,a=i.bottom,n=i.right;this.touches=_toConsumableArray(t.touches).filter(function(e){return e.clientX>o&&e.clientX<n&&e.clientY>s&&e.clientY<a}),this.oldGeometricProperties=calculateGeometricProperties(this.touches,e),t.preventDefault&&t.preventDefault(),t.stopPropagation()}},onTouchEnd:function(t){0===t.touches.length&&this.processEnd()},onTouchMove:function(t){var e=this;if(this.touches.length){var i=_toConsumableArray(t.touches).filter(function(t){return!t.identifier||e.touches.find(function(e){return e.identifier===t.identifier})});this.processMove(t,i),t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation()}},onMouseDown:function(t){if(this.mouseMove&&"buttons"in t&&1===t.buttons){var e={fake:!0,clientX:t.clientX,clientY:t.clientY};this.touches=[e],t.stopPropagation()}},onMouseMove:function(t){this.touches.length&&(this.processMove(t,[{fake:!0,clientX:t.clientX,clientY:t.clientY}]),t.preventDefault&&t.cancelable&&t.preventDefault())},onMouseUp:function(){this.touches=[]},processMove:function(e,t){if(this.touches.length){if(1===this.touches.length&&1===t.length&&this.touchMove.enabled)this.$emit("move",new ManipulateImageEvent$1({left:this.touches[0].clientX-t[0].clientX,top:this.touches[0].clientY-t[0].clientY}));else if(1<this.touches.length&&this.touchResize){var i=calculateGeometricProperties(t,this.$refs.container),o=this.oldGeometricProperties;o.count===i.count&&1<o.count&&this.$emit("resize",new ManipulateImageEvent$1({left:o.centerMass.left-i.centerMass.left,top:o.centerMass.top-i.centerMass.top},{factor:o.spread/i.spread,center:i.centerMass})),this.oldGeometricProperties=i}this.touches=t}},processEnd:function(){this.touches=[]},onWheel:function(e){if(this.wheelResize.enabled){var t=this.$refs.container,i=t.getBoundingClientRect(),o=i.left,s=i.top,a=1+this.wheelResize.ratio*Math.sign(e.deltaY||e.detail||e.wheelDelta),n={left:e.clientX-o,top:e.clientY-s};this.$emit("resize",new ManipulateImageEvent$1({},{factor:a,center:n})),e.preventDefault(),e.stopPropagation()}}}},__vue_script__$8=script$8,__vue_render__$8=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"container",on:{touchstart:e.onTouchStart,mousedown:e.onMouseDown,wheel:e.onWheel}},[e._t("default")],2)},__vue_staticRenderFns__$8=[],__vue_inject_styles__$8=void 0,__vue_scope_id__$8=void 0,__vue_module_identifier__$8=void 0,__vue_is_functional_template__$8=!1,__vue_component__$8=normalizeComponent({render:__vue_render__$8,staticRenderFns:__vue_staticRenderFns__$8},__vue_inject_styles__$8,__vue_script__$8,__vue_scope_id__$8,__vue_is_functional_template__$8,__vue_module_identifier__$8,!1,void 0,void 0,void 0),cn$7=easyBem("vue-rectangle-stencil"),script$9={name:"RectangleStencil",components:{PreviewResult:__vue_component__$7,BoundingBox:__vue_component__$5,DraggableArea:__vue_component__$6},props:{img:{type:Object},stencilCoordinates:{type:Object},handlers:{type:Object},handlerComponent:{type:[Object,String],default:function(){return __vue_component__$3}},lines:{type:Object},lineComponent:{type:[Object,String],default:function(){return __vue_component__$4}},aspectRatio:{type:[Number,String]},minAspectRatio:{type:[Number,String]},maxAspectRatio:{type:[Number,String]},movable:{type:Boolean,default:!0},scalable:{type:Boolean,default:!0},previewClass:{type:String},boundingBoxClass:{type:String},linesClasses:{type:Object,default:function(){return{}}},handlersClasses:{type:Object,default:function(){return{}}},classname:{type:String,validator:function(e){return replacedProp(e,"classname","class")}},previewClassname:{type:String,validator:function(e){return replacedProp(e,"previewClassname","previewClass")}},boundingBoxClassname:{type:String,validator:function(e){return replacedProp(e,"boundingBoxClassname","boundingBoxClass")}},linesClassnames:{type:Object,validator:function(e){return replacedProp(e,"linesClassnames","linesClasses")}},handlersClassnames:{type:Object,validator:function(e){return replacedProp(e,"handlersClassnames","handlersClasses")}}},computed:{classes:function(){return{stencil:classnames(cn$7({movable:this.movable}),this.classname),preview:classnames(cn$7("preview"),this.previewClass||this.previewClassname),boundingBox:classnames(cn$7("bounding-box"),this.boundingBoxClass||this.boundingBoxClassname)}},style:function(){var e=this.stencilCoordinates,t=e.height,i=e.width,o=e.left,s=e.top;return{width:"".concat(i,"px"),height:"".concat(t,"px"),left:"".concat(o,"px"),top:"".concat(s,"px")}}},methods:{onMove:function(e){this.$emit("move",e)},onResize:function(e){this.$emit("resize",e)},aspectRatios:function(){return{minimum:this.aspectRatio||this.minAspectRatio,maximum:this.aspectRatio||this.maxAspectRatio}}}},__vue_script__$9=script$9,__vue_render__$9=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:e.classes.stencil,style:e.style},[i("BoundingBox",{class:e.classes.boundingBox,attrs:{handlers:e.handlers,"handler-component":e.handlerComponent,"handlers-classnames":e.handlersClassnames,"handlers-classes":e.handlersClasses,lines:e.lines,"line-component":e.lineComponent,"lines-classnames":e.linesClassnames,"lines-classes":e.linesClasses,scalable:e.scalable},on:{resize:e.onResize}},[i("DraggableArea",{attrs:{movable:e.movable},on:{move:e.onMove}},[i("PreviewResult",{class:e.classes.preview,attrs:{img:e.img,"stencil-coordinates":e.stencilCoordinates}})],1)],1)],1)},__vue_staticRenderFns__$9=[],__vue_inject_styles__$9=void 0,__vue_scope_id__$9=void 0,__vue_module_identifier__$9=void 0,__vue_is_functional_template__$9=!1,__vue_component__$9=normalizeComponent({render:__vue_render__$9,staticRenderFns:__vue_staticRenderFns__$9},__vue_inject_styles__$9,__vue_script__$9,__vue_scope_id__$9,__vue_is_functional_template__$9,__vue_module_identifier__$9,!1,void 0,void 0,void 0),cn$8=easyBem("vue-circle-stencil"),script$a={name:"CircleStencil",components:{PreviewResult:__vue_component__$7,BoundingBox:__vue_component__$5,DraggableArea:__vue_component__$6},props:{img:{type:Object},stencilCoordinates:{type:Object},handlers:{type:Object,default:function(){return{eastNorth:!0,westNorth:!0,westSouth:!0,eastSouth:!0}}},handlerComponent:{type:[Object,String],default:function(){return __vue_component__$3}},lines:{type:Object},lineComponent:{type:[Object,String],default:function(){return __vue_component__$4}},movable:{type:Boolean,default:!0},scalable:{type:Boolean,default:!0},previewClass:{type:String},boundingBoxClass:{type:String},linesClasses:{type:Object,default:function(){return{}}},handlersClasses:{type:Object,default:function(){return{}}},classname:{type:String,validator:function(e){return replacedProp(e,"classname","class")}},previewClassname:{type:String,validator:function(e){return replacedProp(e,"previewClassname","previewClass")}},boundingBoxClassname:{type:String,validator:function(e){return replacedProp(e,"boundingBoxClassname","boundingBoxClass")}},linesClassnames:{type:Object,validator:function(e){return replacedProp(e,"linesClassnames","linesClasses")}},handlersClassnames:{type:Object,validator:function(e){return replacedProp(e,"handlersClassnames","handlersClasses")}}},computed:{classes:function(){return{stencil:classnames(cn$8(),this.classname),preview:classnames(cn$8("preview"),this.previewClass||this.previewClassname),boundingBox:classnames(cn$8("bounding-box"),this.boundingBoxClass||this.boundingBoxClassname)}},style:function(){var e=this.stencilCoordinates,t=e.height,i=e.width,o=e.left,s=e.top;return{width:"".concat(i,"px"),height:"".concat(t,"px"),left:"".concat(o,"px"),top:"".concat(s,"px")}}},methods:{onMove:function(e){this.$emit("move",e)},onResize:function(e){this.$emit("resize",e)},aspectRatios:function(){return{minimum:1,maximum:1}}}},__vue_script__$a=script$a,__vue_render__$a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:e.classes.stencil,style:e.style},[i("BoundingBox",{class:e.classes.boundingBox,attrs:{handlers:e.handlers,"handler-component":e.handlerComponent,"handlers-classes":e.handlersClasses,"handlers-classnames":e.handlersClassnames,lines:e.lines,"line-component":e.lineComponent,"lines-classes":e.linesClasses,"lines-classnames":e.linesClassnames,scalable:e.scalable},on:{resize:e.onResize}},[i("DraggableArea",{attrs:{movable:e.movable},on:{move:e.onMove}},[i("PreviewResult",{class:e.classes.preview,attrs:{img:e.img,"stencil-coordinates":e.stencilCoordinates}})],1)],1)],1)},__vue_staticRenderFns__$a=[],__vue_inject_styles__$a=void 0,__vue_scope_id__$a=void 0,__vue_module_identifier__$a=void 0,__vue_is_functional_template__$a=!1,__vue_component__$a=normalizeComponent({render:__vue_render__$a,staticRenderFns:__vue_staticRenderFns__$a},__vue_inject_styles__$a,__vue_script__$a,__vue_scope_id__$a,__vue_is_functional_template__$a,__vue_module_identifier__$a,!1,void 0,void 0,void 0);function updateCanvas(e,t,i){e.width=i.width,e.height=i.height;var o=e.getContext("2d");o.clearRect(0,0,e.width,e.height),o.drawImage(t,i.left,i.top,i.width,i.height,0,0,i.width,i.height)}var cn$9=easyBem("vue-advanced-cropper"),script$b={name:"Cropper",components:{CropperWrapper:__vue_component__$8},props:{src:{type:String,default:null},stencilComponent:{type:[Object,String],default:function(){return __vue_component__$9}},stencilProps:{type:Object,default:function(){return{}}},imageClass:{type:String},boundariesClass:{type:String},backgroundClass:{type:String},minWidth:{type:[Number,String]},minHeight:{type:[Number,String]},maxWidth:{type:[Number,String]},maxHeight:{type:[Number,String]},debounce:{type:[Boolean,Number],default:500},canvas:{type:Boolean,default:!0},checkOrientation:{type:Boolean,default:!0},crossOrigin:{type:String,default:"anonymous"},transitionTime:{type:Number,default:300},wheelResize:{type:[Boolean,Object],default:!0},touchResize:{type:[Boolean,Object],default:!0},touchMove:{type:[Boolean,Object],default:!0},mouseMove:{type:[Boolean,Object],default:!0},imageRestriction:{type:String,default:"area",validator:function(e){return-1!==IMAGE_RESTRICTIONS.indexOf(e)}},roundResult:{type:Boolean,default:!0},resizeAlgorithm:{type:Function,default:resize},moveAlgorithm:{type:Function,default:move},initStretcher:{type:Function,default:initStretcher},fitCoordinates:{type:Function,default:fitCoordinates},fitVisibleArea:{type:Function,default:fitVisibleArea},defaultVisibleArea:{type:[Function,Object],default:defaultVisibleArea},defaultSize:{type:[Function,Object],default:defaultSize},defaultPosition:{type:[Function,Object],default:defaultPosition},defaultBoundaries:{type:[Function,String],default:fitBoundaries,validator:function(e){return!("string"==typeof e&&"fill"!==e&&"fit"!==e)}},areaRestrictionsAlgorithm:{type:Function,default:areaRestrictions},sizeRestrictionsAlgorithm:{type:Function,default:percentRestrictions},positionRestrictionsAlgorithm:{type:Function,default:positionRestrictions},priority:{type:String,default:"coordinates"},restrictions:{type:Function,validator:function(e){return replacedProp(e,"restrictions","sizeRestrictionsAlgorithm")}},classname:{type:String,validator:function(e){return replacedProp(e,"classname","class")}},imageClassname:{type:String,validator:function(e){return replacedProp(e,"imageClassname","imageClass")}},areaClassname:{type:String,validator:function(e){return replacedProp(e,"areaClassname","boundariesClass")}},backgroundClassname:{type:String,validator:function(e){return replacedProp(e,"backgroundClassname","backgroundClass")}},areaClass:{type:String,validator:function(e){return replacedProp(e,"areaClass","boundariesClass")}}},data:function(){return{imageLoaded:!1,imageAttributes:{crossOrigin:!1,src:null},basicImageTransforms:{rotate:null,scaleX:null,scaleY:null},imageSize:{width:0,height:0},boundaries:{width:0,height:0},visibleArea:null,coordinates:_objectSpread2({},DEFAULT_COORDINATES)}},computed:{initialized:function(){return!!(this.visibleArea&&this.imageLoaded)},settings:function(){return{resize:getSettings(this.resize,{stencil:!1}),touchResize:getSettings(this.touchResize),touchMove:getSettings(this.touchMove),mouseMove:getSettings(this.mouseMove),wheelResize:getSettings(this.wheelResize,{ratio:.1})}},coefficient:function(){return this.visibleArea?this.visibleArea.width/this.boundaries.width:0},areaRestrictions:function(){return this.imageLoaded?this.areaRestrictionsAlgorithm({imageSize:this.imageSize,imageRestriction:this.imageRestriction}):{}},sizeRestrictions:function e(){if(this.boundaries.width&&this.boundaries.height){var e=(this.restrictions||this.sizeRestrictionsAlgorithm)({imageSize:this.imageSize,minWidth:isUndefined(this.minWidth)?0:parseNumber(this.minWidth),minHeight:isUndefined(this.minHeight)?0:parseNumber(this.minHeight),maxWidth:isUndefined(this.maxWidth)?1/0:parseNumber(this.maxWidth),maxHeight:isUndefined(this.maxHeight)?1/0:parseNumber(this.maxHeight),imageWidth:this.imageSize.width,imageHeight:this.imageSize.height,props:this.$props});return refineSizeRestrictions({sizeRestrictions:e,imageSize:this.imageSize,boundaries:this.boundaries,positionRestrictions:this.positionRestrictions,imageRestriction:this.imageRestriction})}return{minWidth:0,minHeight:0,maxWidth:0,maxHeight:0}},positionRestrictions:function(){return this.positionRestrictionsAlgorithm({imageSize:this.imageSize,imageRestriction:this.imageRestriction})},classes:function(){return{cropper:classnames(cn$9(),this.classname),image:classnames(cn$9("image"),this.imageClass||this.imageClassname),boundaries:classnames(cn$9("boundaries"),this.boundariesClass||this.areaClass||this.areaClassname),stretcher:classnames(cn$9("stretcher")),background:classnames(cn$9("background"),this.backgroundClass||this.backgroundClassname),imageWrapper:classnames(cn$9("image-wrapper")),cropperWrapper:classnames(cn$9("cropper-wrapper"))}},imageTransforms:function(){return _objectSpread2(_objectSpread2({},this.basicImageTransforms),{},{scaleX:this.basicImageTransforms.scaleX||1,scaleY:this.basicImageTransforms.scaleY||1,translateX:this.visibleArea?this.visibleArea.left/this.coefficient:0,translateY:this.visibleArea?this.visibleArea.top/this.coefficient:0})},stencilCoordinates:function(){if(this.initialized){var e=this.coordinates,t=e.width,i=e.height,o=e.left,s=e.top;return{width:t/this.coefficient,height:i/this.coefficient,left:(o-this.visibleArea.left)/this.coefficient,top:(s-this.visibleArea.top)/this.coefficient}}return this.defaultCoordinates()},wrapperStyle:function(){return{width:"".concat(this.stencilCoordinates.width,"px"),height:"".concat(this.stencilCoordinates.height,"px"),left:"".concat(this.stencilCoordinates.left,"px"),top:"".concat(this.stencilCoordinates.top,"px")}},boundariesStyle:function(){return{width:this.boundaries.width?"".concat(this.boundaries.width,"px"):"auto",height:this.boundaries.height?"".concat(this.boundaries.height,"px"):"auto",opacity:this.imageLoaded?1:0,transition:"opacity ".concat(this.transitionTime,"ms"),pointerEvents:this.imageLoaded?"all":"none"}},imageStyle:function(){var e={left:"".concat(this.imageSize.width/(2*this.coefficient)-this.imageTransforms.translateX,"px"),top:"".concat(this.imageSize.height/(2*this.coefficient)-this.imageTransforms.translateY,"px"),transform:"translate(-50%, -50%)"+getStyleTransforms(this.imageTransforms)},t=this.imageTransforms.flipped;return t?(e.width="".concat(this.imageSize.height/this.coefficient,"px"),e.height="".concat(this.imageSize.width/this.coefficient,"px")):(e.width="".concat(this.imageSize.width/this.coefficient,"px"),e.height="".concat(this.imageSize.height/this.coefficient,"px")),e}},watch:{src:function(){this.onChangeImage()},stencilComponent:function(){var e=this;this.$nextTick(function(){e.resetCoordinates()})},minWidth:function(){this.onPropsChange()},maxWidth:function(){this.onPropsChange()},minHeight:function(){this.onPropsChange()},maxHeight:function(){this.onPropsChange()},imageRestriction:function(){this.reset()},stencilProps:function(e,t){["aspectRatio","minAspectRatio","maxAspectRatio"].find(function(i){return e[i]!==t[i]})&&this.$nextTick(this.onPropsChange)}},mounted:function(){this.debouncedUpdate=debounce_1(this.update,this.debounce),this.$refs.image.addEventListener("load",this.onSuccessLoadImage),this.$refs.image.addEventListener("error",this.onFailLoadImage),this.onChangeImage(),window.addEventListener("resize",this.refresh),window.addEventListener("orientationchange",this.refresh)},destroyed:function(){window.removeEventListener("resize",this.refresh),window.removeEventListener("orientationchange",this.refresh)},methods:{getResult:function(e){var t=this.initialized?this.prepareResult(_objectSpread2({},this.coordinates)):this.defaultCoordinates();return(e||this.canvas)&&this.src&&this.imageLoaded?(this.updateCanvas(),{coordinates:t,visibleArea:this.visibleArea?_objectSpread2({},this.visibleArea):null,canvas:this.$refs.canvas}):{coordinates:t,visibleArea:this.visibleArea?_objectSpread2({},this.visibleArea):null}},zoom:function(e,t){this.onManipulateImage(new ManipulateImageEvent({},{factor:1/e,center:t}),!1)},move:function(e,t){this.onManipulateImage(new ManipulateImageEvent({left:e||0,top:t||0}),!1)},setCoordinates:function(e){var t=this,i=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},o=i.autoZoom;this.$nextTick(function(){t.imageLoaded?t.applyTransform(e,!(void 0!==o)||o):t.delayedTransforms=e})},refresh:function(){var e=this.$refs.image;if(this.src&&e)return this.initialized?this.updateVisibleArea():this.reset()},reset:function(){return this.resetVisibleArea()},prepareResult:function(e){return this.roundResult?roundCoordinates(_objectSpread2(_objectSpread2({},this.getPublicProperties()),{},{positionRestrictions:limitBy(this.positionRestrictions,this.visibleArea),coordinates:e})):e},autoZoom:function(e){var t=autoZoom(_objectSpread2(_objectSpread2({},this.getPublicProperties()),{},{coordinates:e})),i=t.visibleArea;this.visibleArea=i},normalizeEvent:function(e){return normalizeEvent(_objectSpread2(_objectSpread2({},this.getPublicProperties()),{},{event:e}))},updateCanvas:function(){if(this.$refs.canvas){var e=this.$refs.canvas,t=this.$refs.image,i=this.checkOrientation?prepareSource(this.$refs.sourceCanvas,t,this.imageTransforms):t;updateCanvas(e,i,this.coordinates)}},update:function(){this.$emit("change",this.getResult())},applyTransform:function(e){var t=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],i=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],o=this.visibleArea&&i?limitSizeRestrictions(this.sizeRestrictions,this.visibleArea):this.sizeRestrictions,s=this.visibleArea&&i?limitBy(this.positionRestrictions,this.visibleArea):this.positionRestrictions,a=applyTransform({transform:e,coordinates:this.coordinates,imageSize:this.imageSize,sizeRestrictions:o,positionRestrictions:s,aspectRatio:this.getAspectRatio()});return t&&this.autoZoom(a),this.onChangeCoordinates(a,!1),a},resetCoordinates:function(){var e=this;if(this.$refs.image){var t=this.$refs.cropper,i=this.$refs.image,o=this.sizeRestrictions,s=o.minWidth,a=o.minHeight,n=o.maxWidth,r=o.maxHeight,l=isFunction(this.defaultSize)?this.defaultSize(_objectSpread2({boundaries:this.boundaries,imageSize:this.imageSize,aspectRatio:this.getAspectRatio(),sizeRestrictions:this.sizeRestrictions,visibleArea:this.visibleArea,cropper:t,image:i,imageWidth:this.imageSize.width,imageHeight:this.imageSize.height,props:this.$props},this.sizeRestrictions)):this.defaultSize,h=[l,function(o){return _objectSpread2({},isFunction(e.defaultPosition)?e.defaultPosition({coordinates:o,imageSize:e.imageSize,visibleArea:e.visibleArea,cropper:t,image:i,stencilWidth:o.width,stencilHeight:o.height,imageWidth:e.imageSize.width,imageHeight:e.imageSize.height,props:e.$props}):e.defaultPosition)}];this.delayedTransforms&&h.push.apply(h,_toConsumableArray(Array.isArray(this.delayedTransforms)?this.delayedTransforms:[this.delayedTransforms])),this.applyTransform(h,!1,!0),this.delayedTransforms=null}},clearImage:function(){var e=this;this.imageLoaded=!1,setTimeout(function(){var t=e.$refs.stretcher;t&&(t.style.height="auto",t.style.width="auto"),e.coordinates=e.defaultCoordinates(),e.boundaries={width:0,height:0}},this.transitionTime)},updateBoundaries:function(){var e=this,t=this.$refs.stretcher,i=this.$refs.cropper;return this.initStretcher({cropper:i,stretcher:t,imageSize:this.imageSize}),this.$nextTick().then(function(){var t={cropper:i,imageSize:e.imageSize};if(e.boundaries=isFunction(e.defaultBoundaries)?e.defaultBoundaries(t):"fill"===e.defaultBoundaries?fillBoundaries(t):fitBoundaries(t),!e.boundaries.width||!e.boundaries.height)throw new Error("It's impossible to fit the cropper in the current container")})},resetVisibleArea:function(){var e=this;return this.updateBoundaries().then(function(){"visibleArea"!==e.priority&&(e.visibleArea=null,e.resetCoordinates()),e.visibleArea=refineVisibleArea({visibleArea:isFunction(e.defaultVisibleArea)?e.defaultVisibleArea({imageSize:e.imageSize,boundaries:e.boundaries,coordinates:"visibleArea"===e.priority?null:e.coordinates,areaRestrictions:e.areaRestrictions}):e.defaultVisibleArea,boundaries:e.boundaries,areaRestrictions:e.areaRestrictions}),"visibleArea"===e.priority?e.resetCoordinates():e.coordinates=e.fitCoordinates({visibleArea:e.visibleArea,coordinates:e.coordinates,aspectRatio:e.getAspectRatio(),positionRestrictions:e.positionRestrictions,sizeRestrictions:e.sizeRestrictions})}).catch(function(){e.visibleArea=null})},updateVisibleArea:function(){var e=this;return this.updateBoundaries().then(function(){e.visibleArea=e.fitVisibleArea({imageSize:e.imageSize,boundaries:e.boundaries,visibleArea:e.visibleArea,coordinates:e.coordinates,areaRestrictions:e.areaRestrictions}),e.coordinates=e.fitCoordinates({visibleArea:e.visibleArea,coordinates:e.coordinates,aspectRatio:e.getAspectRatio(),positionRestrictions:e.positionRestrictions,sizeRestrictions:e.sizeRestrictions})}).catch(function(){e.visibleArea=null})},onChangeCoordinates:function(e){var t=!(1<arguments.length&&arguments[1]!==void 0)||arguments[1];this.coordinates=e,this.$listeners&&this.$listeners.change&&(t&&this.debounce?this.debouncedUpdate():this.update())},onChangeImage:function(){var e=this;if(this.imageLoaded=!1,this.delayedTransforms=null,this.imageAttributes.src=null,this.src){var t=parseImage(this.src);isCrossOriginURL(this.src)&&(this.imageAttributes.crossOrigin=this.crossOrigin),setTimeout(function(){t.then(e.onParseImage)},this.transitionTime)}else this.clearImage()},onFailLoadImage:function(){this.clearImage(),this.$emit("error")},onSuccessLoadImage:function(){var e=this,t=this.$refs.image;t&&!this.imageLoaded&&(this.imageTransforms.flipped?(this.imageSize.height=t.naturalWidth,this.imageSize.width=t.naturalHeight):(this.imageSize.height=t.naturalHeight,this.imageSize.width=t.naturalWidth),this.imageLoaded=!0,this.reset().then(function(){e.$emit("ready")}))},onParseImage:function(e){var t=this,i=e.source,o=e.arrayBuffer,s=e.orientation;this.imageAttributes.src=o&&s&&isLocal(i)?arrayBufferToDataURL(o):i,this.basicImageTransforms=getImageTransforms(s),this.$nextTick(function(){var e=t.$refs.image;e&&e.complete&&(isLoadedImage(e)?t.onSuccessLoadImage():t.onFailLoadImage())})},onMove:function(e){this.onChangeCoordinates(this.moveAlgorithm(_objectSpread2(_objectSpread2({},this.getPublicProperties()),{},{positionRestrictions:limitBy(this.positionRestrictions,this.visibleArea),coordinates:this.coordinates,event:this.normalizeEvent(e)})))},onResize:function(e){var t=Math.max,i=this.sizeRestrictions,o=Math.min(this.coordinates.width,this.coordinates.height,20*this.coefficient);this.onChangeCoordinates(this.resizeAlgorithm(_objectSpread2(_objectSpread2({},this.getPublicProperties()),{},{positionRestrictions:limitBy(this.positionRestrictions,this.visibleArea),sizeRestrictions:_objectSpread2(_objectSpread2({},i),{},{minWidth:t(i.minWidth,o),minHeight:t(i.minHeight,o)}),event:this.normalizeEvent(e)})))},onManipulateImage:function(e){var t=!(1<arguments.length&&arguments[1]!==void 0)||arguments[1],i=manipulateImage(_objectSpread2(_objectSpread2({},this.getPublicProperties()),{},{event:t?this.normalizeEvent(e):e,imageRestriction:this.imageRestriction,settings:{resize:this.settings.resize.stencil}})),o=i.visibleArea,s=i.coordinates;this.visibleArea=o,this.onChangeCoordinates(s)},onPropsChange:function(){this.applyTransform(this.coordinates,!0,!0)},getAspectRatio:function(){return this.$refs.stencil.aspectRatios?this.$refs.stencil.aspectRatios():{minimum:this.stencilProps.aspectRatio||this.stencilProps.minAspectRatio,maximum:this.stencilProps.aspectRatio||this.stencilProps.maxAspectRatio}},getPublicProperties:function(){return{coefficient:this.coefficient,visibleArea:this.visibleArea,coordinates:this.coordinates,boundaries:this.boundaries,sizeRestrictions:this.sizeRestrictions,positionRestrictions:this.positionRestrictions,areaRestrictions:this.areaRestrictions,aspectRatio:this.getAspectRatio(),imageRestriction:this.imageRestriction}},defaultCoordinates:function(){return _objectSpread2({},DEFAULT_COORDINATES)}}},__vue_script__$b=script$b,__vue_render__$b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"cropper",class:e.classes.cropper},[i("div",{class:e.classes.background,style:e.boundariesStyle}),e._v(" "),i("div",{ref:"stretcher",class:e.classes.stretcher}),e._v(" "),i("div",{class:e.classes.boundaries,style:e.boundariesStyle},[i("cropper-wrapper",{class:e.classes.cropperWrapper,attrs:{"wheel-resize":e.settings.wheelResize,"touch-resize":e.settings.touchResize,"touch-move":e.settings.touchMove,"mouse-move":e.settings.mouseMove},on:{move:e.onManipulateImage,resize:e.onManipulateImage}},[i("div",{class:e.classes.imageWrapper},[i("img",{ref:"image",class:e.classes.image,style:e.imageStyle,attrs:{crossorigin:e.imageAttributes.crossOrigin,src:e.imageAttributes.src},on:{mousedown:function(e){e.preventDefault()}}})]),e._v(" "),i(e.stencilComponent,e._b({ref:"stencil",tag:"component",attrs:{img:{src:e.imageAttributes.src,size:e.imageSize,transforms:e.imageTransforms,coefficient:e.coefficient},"result-coordinates":e.coordinates,"stencil-coordinates":e.stencilCoordinates},on:{resize:e.onResize,move:e.onMove}},"component",e.stencilProps,!1)),e._v(" "),i("canvas",{ref:"canvas",style:{display:"none"}}),e._v(" "),i("canvas",{ref:"sourceCanvas",style:{display:"none"}})],1)],1)])},__vue_staticRenderFns__$b=[],__vue_inject_styles__$b=void 0,__vue_scope_id__$b=void 0,__vue_module_identifier__$b=void 0,__vue_is_functional_template__$b=!1,__vue_component__$b=normalizeComponent({render:__vue_render__$b,staticRenderFns:__vue_staticRenderFns__$b},__vue_inject_styles__$b,__vue_script__$b,__vue_scope_id__$b,__vue_is_functional_template__$b,__vue_module_identifier__$b,!1,void 0,void 0,void 0),cn$a=easyBem("vue-preview-image"),script$c={name:"PreviewImage",props:{img:{type:String},imageClass:{type:String},width:{type:Number},height:{type:Number},top:{type:Number},left:{type:Number},previewWidth:{type:Number,required:!0},previewHeight:{type:Number,required:!0}},data:function(){return{imageSize:{width:0,height:0}}},computed:{classes:function(){return{root:cn$a(),image:classnames(cn$a("image"),this.imageClass)}},wrapperStyle:function(){return{width:"".concat(this.previewWidth,"px"),height:"".concat(this.previewHeight,"px")}},imageStyle:function(){var e=this.previewHeight/this.height;return{width:"".concat(this.imageSize.width*e,"px"),height:"".concat(this.imageSize.height*e,"px"),left:"".concat(-this.left*e,"px"),top:"".concat(-this.top*e,"px")}}},watch:{img:function(){this.onChangeImage()}},mounted:function(){this.onChangeImage()},methods:{refreshImage:function(){var e=this.$refs.image;this.imageSize.height=e.naturalHeight,this.imageSize.width=e.naturalWidth},onChangeImage:function(){var e=this,t=this.$refs.image;t.complete?this.refreshImage():t.addEventListener("load",function(){e.refreshImage()})}}},__vue_script__$c=script$c,__vue_render__$c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:e.classes.root,style:e.wrapperStyle},[i("img",{ref:"image",class:e.classes.image,style:e.imageStyle,attrs:{src:e.img}})])},__vue_staticRenderFns__$c=[],__vue_inject_styles__$c=void 0,__vue_scope_id__$c=void 0,__vue_module_identifier__$c=void 0,__vue_is_functional_template__$c=!1,__vue_component__$c=normalizeComponent({render:__vue_render__$c,staticRenderFns:__vue_staticRenderFns__$c},__vue_inject_styles__$c,__vue_script__$c,__vue_scope_id__$c,__vue_is_functional_template__$c,__vue_module_identifier__$c,!1,void 0,void 0,void 0);vue__WEBPACK_IMPORTED_MODULE_0__["default"].component("cropper",__vue_component__$b),vue__WEBPACK_IMPORTED_MODULE_0__["default"].component("rectangle-stencil",__vue_component__$9),vue__WEBPACK_IMPORTED_MODULE_0__["default"].component("circle-stencil",__vue_component__$a),vue__WEBPACK_IMPORTED_MODULE_0__["default"].component("simple-handler",__vue_component__$3),vue__WEBPACK_IMPORTED_MODULE_0__["default"].component("simple-line",__vue_component__$4);

function styleInject(id, css) {
	if (!css || typeof document === 'undefined') { return; }

	var element;
	var head = document.head || document.getElementsByTagName('head')[0];
	var styleElements  = head.getElementsByTagName('style');

	// To prevent dublicate of the style code during the script reload
	for (var i = 0; i < styleElements.length; i++) {
		if (styleElements[i] && styleElements[i].innerText && styleElements[i].innerText.startsWith('/*for=' + id)) {
			element = styleElements[i];
		}
	}

	if (!element) {
		element = document.createElement('style');
		element.type = 'text/css';
		head.insertBefore(element, styleElements[0] || head.firstChild);
	}

	if (element.styleSheet) {
		element.styleSheet.cssText = css;
	} else {
		var text = document.createTextNode('/*for=' + id + '*/' + css);
		element.innerHTML = "";
		element.appendChild(text);
	}
};
styleInject("vue-advanced-cropper", ".vue-advanced-cropper{text-align:center;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;max-height:100%;max-width:100%;direction:ltr}.vue-advanced-cropper__stretcher{pointer-events:none;position:relative;max-width:100%;max-height:100%}.vue-advanced-cropper__image{opacity:.5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;-webkit-transform-origin:center;transform-origin:center;max-width:unset!important}.vue-advanced-cropper__boundaries{position:absolute;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);top:50%}.vue-advanced-cropper__background{position:absolute;background:#000;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-advanced-cropper__cropper-wrapper{width:100%;height:100%}.vue-advanced-cropper__image-wrapper{overflow:hidden;position:absolute;width:100%;height:100%}.vue-advanced-cropper__stencil-wrapper{position:absolute}.vue-handler-wrapper{position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-handler-wrapper__draggable{width:30px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vue-handler-wrapper--west-north{left:0;top:0;cursor:nw-resize}.vue-handler-wrapper--north{left:50%;top:0;cursor:n-resize}.vue-handler-wrapper--east-north{left:100%;top:0;cursor:ne-resize}.vue-handler-wrapper--east{left:100%;top:50%;cursor:e-resize}.vue-handler-wrapper--east-south{left:100%;top:100%;cursor:se-resize}.vue-handler-wrapper--south{left:50%;top:100%;cursor:s-resize}.vue-handler-wrapper--west-south{left:0;top:100%;cursor:sw-resize}.vue-handler-wrapper--west{left:0;top:50%;cursor:w-resize}.vue-handler-wrapper--disabled{cursor:auto}.vue-draggable-area{position:relative}.vue-simple-handler{display:block;background:#fff;height:10px;width:10px}.vue-line-wrapper{background:0 0;position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vue-line-wrapper--north,.vue-line-wrapper--south{height:12px;width:100%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-line-wrapper--north{top:0;cursor:n-resize}.vue-line-wrapper--south{top:100%;cursor:s-resize}.vue-line-wrapper--east,.vue-line-wrapper--west{width:12px;height:100%;-webkit-transform:translateX(-50%);transform:translateX(-50%);top:0}.vue-line-wrapper--east{left:100%;cursor:e-resize}.vue-line-wrapper--west{left:0;cursor:w-resize}.vue-line-wrapper--disabled{cursor:auto}.vue-preview-result{overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;height:100%;width:100%}.vue-preview-result__wrapper{position:absolute}.vue-preview-result__image{pointer-events:none;position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform-origin:center;transform-origin:center;max-width:unset!important}.vue-bounding-box{position:relative;height:100%;width:100%}.vue-preview-image{overflow:hidden;position:relative}.vue-preview-image__image{pointer-events:none;position:absolute;max-width:unset!important}.vue-circle-stencil{position:absolute;height:100%;width:100%;-webkit-box-sizing:content-box;box-sizing:content-box;cursor:move}.vue-circle-stencil__preview{border-radius:50%}.vue-rectangle-stencil{position:absolute;height:100%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.vue-rectangle-stencil--movable{cursor:move}.vue-simple-line{background:0 0;-webkit-transition:border .5s;transition:border .5s;border-color:rgba(255,255,255,.3);border-width:0;border-style:solid}.vue-simple-line--north,.vue-simple-line--south{height:0;width:100%}.vue-simple-line--east,.vue-simple-line--west{height:100%;width:0}.vue-simple-line--east{border-right-width:1px}.vue-simple-line--west{border-left-width:1px}.vue-simple-line--south{border-top-width:1px}.vue-simple-line--north{border-bottom-width:1px}.vue-simple-line--hover{opacity:1;border-color:#fff}");

/***/ }),

/***/ "./containers/forms/CustomInputExample.vue":
/*!*************************************************!*\
  !*** ./containers/forms/CustomInputExample.vue ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomInputExample_vue_vue_type_template_id_4c99f6e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomInputExample.vue?vue&type=template&id=4c99f6e0& */ "./containers/forms/CustomInputExample.vue?vue&type=template&id=4c99f6e0&");
/* harmony import */ var _CustomInputExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomInputExample.vue?vue&type=script&lang=js& */ "./containers/forms/CustomInputExample.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomInputExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomInputExample_vue_vue_type_template_id_4c99f6e0___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomInputExample_vue_vue_type_template_id_4c99f6e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "containers/forms/CustomInputExample.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./views/app/pages/author/AddAuthor.vue":
/*!**********************************************!*\
  !*** ./views/app/pages/author/AddAuthor.vue ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddAuthor_vue_vue_type_template_id_07b5f350___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddAuthor.vue?vue&type=template&id=07b5f350& */ "./views/app/pages/author/AddAuthor.vue?vue&type=template&id=07b5f350&");
/* harmony import */ var _AddAuthor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddAuthor.vue?vue&type=script&lang=js& */ "./views/app/pages/author/AddAuthor.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddAuthor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddAuthor_vue_vue_type_template_id_07b5f350___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddAuthor_vue_vue_type_template_id_07b5f350___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "views/app/pages/author/AddAuthor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./views/app/pages/book/EditBook.vue":
/*!*******************************************!*\
  !*** ./views/app/pages/book/EditBook.vue ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditBook_vue_vue_type_template_id_2666bc3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditBook.vue?vue&type=template&id=2666bc3e&scoped=true& */ "./views/app/pages/book/EditBook.vue?vue&type=template&id=2666bc3e&scoped=true&");
/* harmony import */ var _EditBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditBook.vue?vue&type=script&lang=js& */ "./views/app/pages/book/EditBook.vue?vue&type=script&lang=js&");
/* harmony import */ var _EditBook_vue_vue_type_style_index_0_id_2666bc3e_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditBook.vue?vue&type=style&index=0&id=2666bc3e&lang=css& */ "./views/app/pages/book/EditBook.vue?vue&type=style&index=0&id=2666bc3e&lang=css&");
/* harmony import */ var _EditBook_vue_vue_type_style_index_1_id_2666bc3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditBook.vue?vue&type=style&index=1&id=2666bc3e&scoped=true&lang=css& */ "./views/app/pages/book/EditBook.vue?vue&type=style&index=1&id=2666bc3e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _EditBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditBook_vue_vue_type_template_id_2666bc3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditBook_vue_vue_type_template_id_2666bc3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2666bc3e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "views/app/pages/book/EditBook.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./containers/forms/CustomInputExample.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./containers/forms/CustomInputExample.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomInputExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomInputExample.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/forms/CustomInputExample.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomInputExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./views/app/pages/author/AddAuthor.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./views/app/pages/author/AddAuthor.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAuthor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddAuthor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/author/AddAuthor.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAuthor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./views/app/pages/book/EditBook.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./views/app/pages/book/EditBook.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditBook.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/book/EditBook.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./containers/forms/CustomInputExample.vue?vue&type=template&id=4c99f6e0&":
/*!********************************************************************************!*\
  !*** ./containers/forms/CustomInputExample.vue?vue&type=template&id=4c99f6e0& ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomInputExample_vue_vue_type_template_id_4c99f6e0___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomInputExample_vue_vue_type_template_id_4c99f6e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomInputExample_vue_vue_type_template_id_4c99f6e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomInputExample.vue?vue&type=template&id=4c99f6e0& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./containers/forms/CustomInputExample.vue?vue&type=template&id=4c99f6e0&");


/***/ }),

/***/ "./views/app/pages/author/AddAuthor.vue?vue&type=template&id=07b5f350&":
/*!*****************************************************************************!*\
  !*** ./views/app/pages/author/AddAuthor.vue?vue&type=template&id=07b5f350& ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAuthor_vue_vue_type_template_id_07b5f350___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAuthor_vue_vue_type_template_id_07b5f350___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAuthor_vue_vue_type_template_id_07b5f350___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddAuthor.vue?vue&type=template&id=07b5f350& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/author/AddAuthor.vue?vue&type=template&id=07b5f350&");


/***/ }),

/***/ "./views/app/pages/book/EditBook.vue?vue&type=template&id=2666bc3e&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./views/app/pages/book/EditBook.vue?vue&type=template&id=2666bc3e&scoped=true& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBook_vue_vue_type_template_id_2666bc3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBook_vue_vue_type_template_id_2666bc3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBook_vue_vue_type_template_id_2666bc3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditBook.vue?vue&type=template&id=2666bc3e&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/book/EditBook.vue?vue&type=template&id=2666bc3e&scoped=true&");


/***/ }),

/***/ "./views/app/pages/book/EditBook.vue?vue&type=style&index=0&id=2666bc3e&lang=css&":
/*!****************************************************************************************!*\
  !*** ./views/app/pages/book/EditBook.vue?vue&type=style&index=0&id=2666bc3e&lang=css& ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBook_vue_vue_type_style_index_0_id_2666bc3e_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditBook.vue?vue&type=style&index=0&id=2666bc3e&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/book/EditBook.vue?vue&type=style&index=0&id=2666bc3e&lang=css&");


/***/ }),

/***/ "./views/app/pages/book/EditBook.vue?vue&type=style&index=1&id=2666bc3e&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./views/app/pages/book/EditBook.vue?vue&type=style&index=1&id=2666bc3e&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBook_vue_vue_type_style_index_1_id_2666bc3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditBook.vue?vue&type=style&index=1&id=2666bc3e&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./views/app/pages/book/EditBook.vue?vue&type=style&index=1&id=2666bc3e&scoped=true&lang=css&");


/***/ }),

/***/ "./node_modules/vue-select/dist/vue-select.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-select/dist/vue-select.js ***!
  \****************************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}("undefined"!=typeof self?self:this,(function(){return(()=>{var e={646:e=>{e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},713:e=>{e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},860:e=>{e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},206:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},319:(e,t,n)=>{var o=n(646),i=n(860),s=n(206);e.exports=function(e){return o(e)||i(e)||s()}},8:e=>{function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{"use strict";n.r(o),n.d(o,{VueSelect:()=>m,default:()=>O,mixins:()=>_});var e=n(319),t=n.n(e),i=n(8),s=n.n(i),r=n(713),a=n.n(r);const l={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer:function(){this.autoscroll&&this.maybeAdjustScroll()},open:function(e){var t=this;this.autoscroll&&e&&this.$nextTick((function(){return t.maybeAdjustScroll()}))}},methods:{maybeAdjustScroll:function(){var e,t=(null===(e=this.$refs.dropdownMenu)||void 0===e?void 0:e.children[this.typeAheadPointer])||!1;if(t){var n=this.getDropdownViewport(),o=t.getBoundingClientRect(),i=o.top,s=o.bottom,r=o.height;if(i<n.top)return this.$refs.dropdownMenu.scrollTop=t.offsetTop;if(s>n.bottom)return this.$refs.dropdownMenu.scrollTop=t.offsetTop-(n.height-r)}},getDropdownViewport:function(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},c={data:function(){return{typeAheadPointer:-1}},watch:{filteredOptions:function(){for(var e=0;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},open:function(e){e&&this.typeAheadToLastSelected()},selectedValue:function(){this.open&&this.typeAheadToLastSelected()}},methods:{typeAheadUp:function(){for(var e=this.typeAheadPointer-1;e>=0;e--)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadDown:function(){for(var e=this.typeAheadPointer+1;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadSelect:function(){var e=this.filteredOptions[this.typeAheadPointer];e&&this.selectable(e)&&this.select(e)},typeAheadToLastSelected:function(){var e=0!==this.selectedValue.length?this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length-1]):-1;-1!==e&&(this.typeAheadPointer=e)}}},u={props:{loading:{type:Boolean,default:!1}},data:function(){return{mutableLoading:!1}},watch:{search:function(){this.$emit("search",this.search,this.toggleLoading)},loading:function(e){this.mutableLoading=e}},methods:{toggleLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.mutableLoading=null==e?!this.mutableLoading:e}}};function p(e,t,n,o,i,s,r,a){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),r?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=l):i&&(l=a?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:e,options:c}}const h={Deselect:p({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"}},[t("path",{attrs:{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"}})])}),[],!1,null,null,null).exports,OpenIndicator:p({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"}},[t("path",{attrs:{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"}})])}),[],!1,null,null,null).exports},d={inserted:function(e,t,n){var o=n.context;if(o.appendToBody){var i=o.$refs.toggle.getBoundingClientRect(),s=i.height,r=i.top,a=i.left,l=i.width,c=window.scrollX||window.pageXOffset,u=window.scrollY||window.pageYOffset;e.unbindPosition=o.calculatePosition(e,o,{width:l+"px",left:c+a+"px",top:u+r+s+"px"}),document.body.appendChild(e)}},unbind:function(e,t,n){n.context.appendToBody&&(e.unbindPosition&&"function"==typeof e.unbindPosition&&e.unbindPosition(),e.parentNode&&e.parentNode.removeChild(e))}};const f=function(e){var t={};return Object.keys(e).sort().forEach((function(n){t[n]=e[n]})),JSON.stringify(t)};var y=0;const g=function(){return++y};function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const m=p({components:v({},h),directives:{appendToBody:d},mixins:[l,c,u],props:{value:{},components:{type:Object,default:function(){return{}}},options:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},deselectFromDropdown:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:function(e){return e}},selectable:{type:Function,default:function(e){return!0}},getOptionLabel:{type:Function,default:function(e){return"object"===s()(e)?e.hasOwnProperty(this.label)?e[this.label]:console.warn('[vue-select warn]: Label key "option.'.concat(this.label,'" does not')+" exist in options object ".concat(JSON.stringify(e),".\n")+"https://vue-select.org/api/props.html#getoptionlabel"):e}},getOptionKey:{type:Function,default:function(e){if("object"!==s()(e))return e;try{return e.hasOwnProperty("id")?e.id:f(e)}catch(t){return console.warn("[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.\nhttps://vue-select.org/api/props.html#getoptionkey",e,t)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default:function(e,t,n){return(t||"").toLocaleLowerCase().indexOf(n.toLocaleLowerCase())>-1}},filter:{type:Function,default:function(e,t){var n=this;return e.filter((function(e){var o=n.getOptionLabel(e);return"number"==typeof o&&(o=o.toString()),n.filterBy(e,o,t)}))}},createOption:{type:Function,default:function(e){return"object"===s()(this.optionList[0])?a()({},this.label,e):e}},resetOnOptionsChange:{default:!1,validator:function(e){return["function","boolean"].includes(s()(e))}},clearSearchOnBlur:{type:Function,default:function(e){var t=e.clearSearchOnSelect,n=e.multiple;return t&&!n}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:function(){return[13]}},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:function(e,t){return e}},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default:function(e,t,n){var o=n.width,i=n.top,s=n.left;e.style.top=i,e.style.left=s,e.style.width=o}},dropdownShouldOpen:{type:Function,default:function(e){var t=e.noDrop,n=e.open,o=e.mutableLoading;return!t&&(n&&!o)}},uid:{type:[String,Number],default:function(){return g()}}},data:function(){return{search:"",open:!1,isComposing:!1,pushedTags:[],_value:[]}},computed:{isTrackingValues:function(){return void 0===this.value||this.$options.propsData.hasOwnProperty("reduce")},selectedValue:function(){var e=this.value;return this.isTrackingValues&&(e=this.$data._value),null!=e&&""!==e?[].concat(e):[]},optionList:function(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl:function(){return this.$scopedSlots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope:function(){var e=this,t={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:v({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":"vs".concat(this.uid,"__combobox"),"aria-controls":"vs".concat(this.uid,"__listbox"),ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":"vs".concat(this.uid,"__option-").concat(this.typeAheadPointer)}:{}),events:{compositionstart:function(){return e.isComposing=!0},compositionend:function(){return e.isComposing=!1},keydown:this.onSearchKeyDown,keypress:this.onSearchKeyPress,blur:this.onSearchBlur,focus:this.onSearchFocus,input:function(t){return e.search=t.target.value}}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:t,listFooter:t,header:v({},t,{deselect:this.deselect}),footer:v({},t,{deselect:this.deselect})}},childComponents:function(){return v({},h,{},this.components)},stateClasses:function(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching:function(){return!!this.search},dropdownOpen:function(){return this.dropdownShouldOpen(this)},searchPlaceholder:function(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions:function(){var e=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return e;var t=this.search.length?this.filter(e,this.search,this):e;if(this.taggable&&this.search.length){var n=this.createOption(this.search);this.optionExists(n)||t.unshift(n)}return t},isValueEmpty:function(){return 0===this.selectedValue.length},showClearButton:function(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options:function(e,t){var n=this;!this.taggable&&("function"==typeof n.resetOnOptionsChange?n.resetOnOptionsChange(e,t,n.selectedValue):n.resetOnOptionsChange)&&this.clearSelection(),this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value)},value:{immediate:!0,handler:function(e){this.isTrackingValues&&this.setInternalValueFromOptions(e)}},multiple:function(){this.clearSelection()},open:function(e){this.$emit(e?"open":"close")},search:function(e){e.length&&(this.open=!0)}},created:function(){this.mutableLoading=this.loading,this.$on("option:created",this.pushTag)},methods:{setInternalValueFromOptions:function(e){var t=this;Array.isArray(e)?this.$data._value=e.map((function(e){return t.findOptionFromReducedValue(e)})):this.$data._value=this.findOptionFromReducedValue(e)},select:function(e){this.$emit("option:selecting",e),this.isOptionSelected(e)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(e):(this.taggable&&!this.optionExists(e)&&this.$emit("option:created",e),this.multiple&&(e=this.selectedValue.concat(e)),this.updateValue(e),this.$emit("option:selected",e)),this.onAfterSelect(e)},deselect:function(e){var t=this;this.$emit("option:deselecting",e),this.updateValue(this.selectedValue.filter((function(n){return!t.optionComparator(n,e)}))),this.$emit("option:deselected",e)},clearSelection:function(){this.updateValue(this.multiple?[]:null)},onAfterSelect:function(e){var t=this;this.closeOnSelect&&(this.open=!this.open),this.clearSearchOnSelect&&(this.search=""),this.noDrop&&this.multiple&&this.$nextTick((function(){return t.$refs.search.focus()}))},updateValue:function(e){var t=this;void 0===this.value&&(this.$data._value=e),null!==e&&(e=Array.isArray(e)?e.map((function(e){return t.reduce(e)})):this.reduce(e)),this.$emit("input",e)},toggleDropdown:function(e){var n=e.target!==this.searchEl;n&&e.preventDefault();var o=[].concat(t()(this.$refs.deselectButtons||[]),t()([this.$refs.clearButton]||0));void 0===this.searchEl||o.filter(Boolean).some((function(t){return t.contains(e.target)||t===e.target}))?e.preventDefault():this.open&&n?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected:function(e){var t=this;return this.selectedValue.some((function(n){return t.optionComparator(n,e)}))},isOptionDeselectable:function(e){return this.isOptionSelected(e)&&this.deselectFromDropdown},optionComparator:function(e,t){return this.getOptionKey(e)===this.getOptionKey(t)},findOptionFromReducedValue:function(e){var n=this,o=[].concat(t()(this.options),t()(this.pushedTags)).filter((function(t){return JSON.stringify(n.reduce(t))===JSON.stringify(e)}));return 1===o.length?o[0]:o.find((function(e){return n.optionComparator(e,n.$data._value)}))||e},closeSearchOptions:function(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue:function(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){var e=null;this.multiple&&(e=t()(this.selectedValue.slice(0,this.selectedValue.length-1))),this.updateValue(e)}},optionExists:function(e){var t=this;return this.optionList.some((function(n){return t.optionComparator(n,e)}))},normalizeOptionForSlot:function(e){return"object"===s()(e)?e:a()({},this.label,e)},pushTag:function(e){this.pushedTags.push(e)},onEscape:function(){this.search.length?this.search="":this.open=!1},onSearchBlur:function(){if(!this.mousedown||this.searching){var e=this.clearSearchOnSelect,t=this.multiple;return this.clearSearchOnBlur({clearSearchOnSelect:e,multiple:t})&&(this.search=""),void this.closeSearchOptions()}this.mousedown=!1,0!==this.search.length||0!==this.options.length||this.closeSearchOptions()},onSearchFocus:function(){this.open=!0,this.$emit("search:focus")},onMousedown:function(){this.mousedown=!0},onMouseUp:function(){this.mousedown=!1},onSearchKeyDown:function(e){var t=this,n=function(e){return e.preventDefault(),!t.isComposing&&t.typeAheadSelect()},o={8:function(e){return t.maybeDeleteValue()},9:function(e){return t.onTab()},27:function(e){return t.onEscape()},38:function(e){if(e.preventDefault(),t.open)return t.typeAheadUp();t.open=!0},40:function(e){if(e.preventDefault(),t.open)return t.typeAheadDown();t.open=!0}};this.selectOnKeyCodes.forEach((function(e){return o[e]=n}));var i=this.mapKeydown(o,this);if("function"==typeof i[e.keyCode])return i[e.keyCode](e)},onSearchKeyPress:function(e){this.open||32!==e.keyCode||(e.preventDefault(),this.open=!0)}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-select",class:e.stateClasses,attrs:{dir:e.dir}},[e._t("header",null,null,e.scope.header),e._v(" "),n("div",{ref:"toggle",staticClass:"vs__dropdown-toggle",attrs:{id:"vs"+e.uid+"__combobox",role:"combobox","aria-expanded":e.dropdownOpen.toString(),"aria-owns":"vs"+e.uid+"__listbox","aria-label":"Search for option"},on:{mousedown:function(t){return e.toggleDropdown(t)}}},[n("div",{ref:"selectedOptions",staticClass:"vs__selected-options"},[e._l(e.selectedValue,(function(t){return e._t("selected-option-container",[n("span",{key:e.getOptionKey(t),staticClass:"vs__selected"},[e._t("selected-option",[e._v("\n            "+e._s(e.getOptionLabel(t))+"\n          ")],null,e.normalizeOptionForSlot(t)),e._v(" "),e.multiple?n("button",{ref:"deselectButtons",refInFor:!0,staticClass:"vs__deselect",attrs:{disabled:e.disabled,type:"button",title:"Deselect "+e.getOptionLabel(t),"aria-label":"Deselect "+e.getOptionLabel(t)},on:{click:function(n){return e.deselect(t)}}},[n(e.childComponents.Deselect,{tag:"component"})],1):e._e()],2)],{option:e.normalizeOptionForSlot(t),deselect:e.deselect,multiple:e.multiple,disabled:e.disabled})})),e._v(" "),e._t("search",[n("input",e._g(e._b({staticClass:"vs__search"},"input",e.scope.search.attributes,!1),e.scope.search.events))],null,e.scope.search)],2),e._v(" "),n("div",{ref:"actions",staticClass:"vs__actions"},[n("button",{directives:[{name:"show",rawName:"v-show",value:e.showClearButton,expression:"showClearButton"}],ref:"clearButton",staticClass:"vs__clear",attrs:{disabled:e.disabled,type:"button",title:"Clear Selected","aria-label":"Clear Selected"},on:{click:e.clearSelection}},[n(e.childComponents.Deselect,{tag:"component"})],1),e._v(" "),e._t("open-indicator",[e.noDrop?e._e():n(e.childComponents.OpenIndicator,e._b({tag:"component"},"component",e.scope.openIndicator.attributes,!1))],null,e.scope.openIndicator),e._v(" "),e._t("spinner",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.mutableLoading,expression:"mutableLoading"}],staticClass:"vs__spinner"},[e._v("Loading...")])],null,e.scope.spinner)],2)]),e._v(" "),n("transition",{attrs:{name:e.transition}},[e.dropdownOpen?n("ul",{directives:[{name:"append-to-body",rawName:"v-append-to-body"}],key:"vs"+e.uid+"__listbox",ref:"dropdownMenu",staticClass:"vs__dropdown-menu",attrs:{id:"vs"+e.uid+"__listbox",role:"listbox",tabindex:"-1"},on:{mousedown:function(t){return t.preventDefault(),e.onMousedown(t)},mouseup:e.onMouseUp}},[e._t("list-header",null,null,e.scope.listHeader),e._v(" "),e._l(e.filteredOptions,(function(t,o){return n("li",{key:e.getOptionKey(t),staticClass:"vs__dropdown-option",class:{"vs__dropdown-option--deselect":e.isOptionDeselectable(t)&&o===e.typeAheadPointer,"vs__dropdown-option--selected":e.isOptionSelected(t),"vs__dropdown-option--highlight":o===e.typeAheadPointer,"vs__dropdown-option--disabled":!e.selectable(t)},attrs:{id:"vs"+e.uid+"__option-"+o,role:"option","aria-selected":o===e.typeAheadPointer||null},on:{mouseover:function(n){e.selectable(t)&&(e.typeAheadPointer=o)},click:function(n){n.preventDefault(),n.stopPropagation(),e.selectable(t)&&e.select(t)}}},[e._t("option",[e._v("\n          "+e._s(e.getOptionLabel(t))+"\n        ")],null,e.normalizeOptionForSlot(t))],2)})),e._v(" "),0===e.filteredOptions.length?n("li",{staticClass:"vs__no-options"},[e._t("no-options",[e._v("\n          Sorry, no matching options.\n        ")],null,e.scope.noOptions)],2):e._e(),e._v(" "),e._t("list-footer",null,null,e.scope.listFooter)],2):n("ul",{staticStyle:{display:"none",visibility:"hidden"},attrs:{id:"vs"+e.uid+"__listbox",role:"listbox"}})]),e._v(" "),e._t("footer",null,null,e.scope.footer)],2)}),[],!1,null,null,null).exports,_={ajax:u,pointer:c,pointerScroll:l},O=m})(),o})()}));
//# sourceMappingURL=vue-select.js.map

/***/ }),

/***/ "./node_modules/vue-tree-list/dist/vue-tree-list.umd.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue-tree-list/dist/vue-tree-list.umd.min.js ***!
  \******************************************************************/
/***/ (function(module) {

(function(A,e){ true?module.exports=e():0})("undefined"!==typeof self?self:this,(function(){return function(A){var e={};function t(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return A[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=A,t.c=e,t.d=function(A,e,n){t.o(A,e)||Object.defineProperty(A,e,{enumerable:!0,get:n})},t.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},t.t=function(A,e){if(1&e&&(A=t(A)),8&e)return A;if(4&e&&"object"===typeof A&&A&&A.__esModule)return A;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:A}),2&e&&"string"!=typeof A)for(var r in A)t.d(n,r,function(e){return A[e]}.bind(null,r));return n},t.n=function(A){var e=A&&A.__esModule?function(){return A["default"]}:function(){return A};return t.d(e,"a",e),e},t.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},t.p="",t(t.s="fb15")}({"04ab":function(A,e,t){"use strict";var n=t("91a9"),r=t.n(n);r.a},"057f":function(A,e,t){var n=t("fc6a"),r=t("241c").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(A){try{return r(A)}catch(e){return i.slice()}};A.exports.f=function(A){return i&&"[object Window]"==o.call(A)?a(A):r(n(A))}},"06cf":function(A,e,t){var n=t("83ab"),r=t("d1e7"),o=t("5c6c"),i=t("fc6a"),a=t("c04e"),c=t("5135"),f=t("0cfb"),u=Object.getOwnPropertyDescriptor;e.f=n?u:function(A,e){if(A=i(A),e=a(e,!0),f)try{return u(A,e)}catch(t){}if(c(A,e))return o(!r.f.call(A,e),A[e])}},"0cfb":function(A,e,t){var n=t("83ab"),r=t("d039"),o=t("cc12");A.exports=!n&&!r((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"159b":function(A,e,t){var n=t("da84"),r=t("fdbc"),o=t("17c2"),i=t("9112");for(var a in r){var c=n[a],f=c&&c.prototype;if(f&&f.forEach!==o)try{i(f,"forEach",o)}catch(u){f.forEach=o}}},"17c2":function(A,e,t){"use strict";var n=t("b727").forEach,r=t("b301");A.exports=r("forEach")?function(A){return n(this,A,arguments.length>1?arguments[1]:void 0)}:[].forEach},"1be4":function(A,e,t){var n=t("d066");A.exports=n("document","documentElement")},"1c0b":function(A,e){A.exports=function(A){if("function"!=typeof A)throw TypeError(String(A)+" is not a function");return A}},"1d80":function(A,e){A.exports=function(A){if(void 0==A)throw TypeError("Can't call method on "+A);return A}},"1dde":function(A,e,t){var n=t("d039"),r=t("b622"),o=t("60ae"),i=r("species");A.exports=function(A){return o>=51||!n((function(){var e=[],t=e.constructor={};return t[i]=function(){return{foo:1}},1!==e[A](Boolean).foo}))}},"1de5":function(A,e,t){"use strict";A.exports=function(A,e){return e||(e={}),A=A&&A.__esModule?A.default:A,"string"!==typeof A?A:(/^['"].*['"]$/.test(A)&&(A=A.slice(1,-1)),e.hash&&(A+=e.hash),/["'() \t\n]/.test(A)||e.needQuotes?'"'.concat(A.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):A)}},"23cb":function(A,e,t){var n=t("a691"),r=Math.max,o=Math.min;A.exports=function(A,e){var t=n(A);return t<0?r(t+e,0):o(t,e)}},"23e7":function(A,e,t){var n=t("da84"),r=t("06cf").f,o=t("9112"),i=t("6eeb"),a=t("ce4e"),c=t("e893"),f=t("94ca");A.exports=function(A,e){var t,u,s,d,l,p,g=A.target,h=A.global,v=A.stat;if(u=h?n:v?n[g]||a(g,{}):(n[g]||{}).prototype,u)for(s in e){if(l=e[s],A.noTargetGet?(p=r(u,s),d=p&&p.value):d=u[s],t=f(h?s:g+(v?".":"#")+s,A.forced),!t&&void 0!==d){if(typeof l===typeof d)continue;c(l,d)}(A.sham||d&&d.sham)&&o(l,"sham",!0),i(u,s,l,A)}}},"241c":function(A,e,t){var n=t("ca84"),r=t("7839"),o=r.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(A){return n(A,o)}},"24fb":function(A,e,t){"use strict";function n(A,e){var t=A[1]||"",n=A[3];if(!n)return t;if(e&&"function"===typeof btoa){var o=r(n),i=n.sources.map((function(A){return"/*# sourceURL=".concat(n.sourceRoot).concat(A," */")}));return[t].concat(i).concat([o]).join("\n")}return[t].join("\n")}function r(A){var e=btoa(unescape(encodeURIComponent(JSON.stringify(A)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(t," */")}A.exports=function(A){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e,A);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(A,t){"string"===typeof A&&(A=[[null,A,""]]);for(var n=0;n<A.length;n++){var r=[].concat(A[n]);t&&(r[2]?r[2]="".concat(t," and ").concat(r[2]):r[2]=t),e.push(r)}},e}},"37e8":function(A,e,t){var n=t("83ab"),r=t("9bf2"),o=t("825a"),i=t("df75");A.exports=n?Object.defineProperties:function(A,e){o(A);var t,n=i(e),a=n.length,c=0;while(a>c)r.f(A,t=n[c++],e[t]);return A}},"428f":function(A,e,t){var n=t("da84");A.exports=n},"44ad":function(A,e,t){var n=t("d039"),r=t("c6b6"),o="".split;A.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(A){return"String"==r(A)?o.call(A,""):Object(A)}:Object},4930:function(A,e,t){var n=t("d039");A.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},"499e":function(A,e,t){"use strict";function n(A,e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],c=o[2],f=o[3],u={id:A+":"+r,css:a,media:c,sourceMap:f};n[i]?n[i].parts.push(u):t.push(n[i]={id:i,parts:[u]})}return t}t.r(e),t.d(e,"default",(function(){return p}));var r="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},i=r&&(document.head||document.getElementsByTagName("head")[0]),a=null,c=0,f=!1,u=function(){},s=null,d="data-vue-ssr-id",l="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(A,e,t,r){f=t,s=r||{};var i=n(A,e);return g(i),function(e){for(var t=[],r=0;r<i.length;r++){var a=i[r],c=o[a.id];c.refs--,t.push(c)}e?(i=n(A,e),g(i)):i=[];for(r=0;r<t.length;r++){c=t[r];if(0===c.refs){for(var f=0;f<c.parts.length;f++)c.parts[f]();delete o[c.id]}}}}function g(A){for(var e=0;e<A.length;e++){var t=A[e],n=o[t.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](t.parts[r]);for(;r<t.parts.length;r++)n.parts.push(v(t.parts[r]));n.parts.length>t.parts.length&&(n.parts.length=t.parts.length)}else{var i=[];for(r=0;r<t.parts.length;r++)i.push(v(t.parts[r]));o[t.id]={id:t.id,refs:1,parts:i}}}}function h(){var A=document.createElement("style");return A.type="text/css",i.appendChild(A),A}function v(A){var e,t,n=document.querySelector("style["+d+'~="'+A.id+'"]');if(n){if(f)return u;n.parentNode.removeChild(n)}if(l){var r=c++;n=a||(a=h()),e=B.bind(null,n,r,!1),t=B.bind(null,n,r,!0)}else n=h(),e=b.bind(null,n),t=function(){n.parentNode.removeChild(n)};return e(A),function(n){if(n){if(n.css===A.css&&n.media===A.media&&n.sourceMap===A.sourceMap)return;e(A=n)}else t()}}var E=function(){var A=[];return function(e,t){return A[e]=t,A.filter(Boolean).join("\n")}}();function B(A,e,t,n){var r=t?"":n.css;if(A.styleSheet)A.styleSheet.cssText=E(e,r);else{var o=document.createTextNode(r),i=A.childNodes;i[e]&&A.removeChild(i[e]),i.length?A.insertBefore(o,i[e]):A.appendChild(o)}}function b(A,e){var t=e.css,n=e.media,r=e.sourceMap;if(n&&A.setAttribute("media",n),s.ssrId&&A.setAttribute(d,e.id),r&&(t+="\n/*# sourceURL="+r.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),A.styleSheet)A.styleSheet.cssText=t;else{while(A.firstChild)A.removeChild(A.firstChild);A.appendChild(document.createTextNode(t))}}},"4b09":function(A,e){A.exports="data:application/vnd.ms-fontobject;base64,4AgAADwIAAABAAIAAAAAAAAAAAAAAAAAAAABAJABAAAAAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAA07p/gAAAAAAAAAAAAAAAAAAAAAAAAA4AaQBjAG8AbQBvAG8AbgAAAA4AUgBlAGcAdQBsAGEAcgAAABYAVgBlAHIAcwBpAG8AbgAgADEALgAwAAAADgBpAGMAbwBtAG8AbwBuAAAAAAAAAQAAAAsAgAADADBPUy8yDxIF+AAAALwAAABgY21hcBdW0o4AAAEcAAAAVGdhc3AAAAAQAAABcAAAAAhnbHlmXV8IXAAAAXgAAARUaGVhZA5OKqMAAAXMAAAANmhoZWEHwgPNAAAGBAAAACRobXR4JgAEfAAABigAAAAwbG9jYQWkBEwAAAZYAAAAGm1heHAAEgBwAAAGdAAAACBuYW1lmUoJ+wAABpQAAAGGcG9zdAADAAAAAAgcAAAAIAADA8cBkAAFAAACmQLMAAAAjwKZAswAAAHrADMBCQAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAAAEAAAOkHA8D/wABAA8AAQAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAMAAAAcAAMAAQAAABwABAA4AAAACgAIAAIAAgABACDpB//9//8AAAAAACDpAP/9//8AAf/jFwQAAwABAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEBMgCbAnsC5QASAAABFAcBBiMiJyY1ETQ3NjMyFwEWAnsL/wAKDw8LCwsLDw8KAQALAcAPC/8ACwsLDwIADwsLC/8ACwAAAAEA2wEuAyUCdwASAAABIicBJjU0NzYzITIXFhUGBwEGAgAPC/8ACwsLDwIADwsLAQr/AAsBLgsBAAoPDwsLCwsPDwr/AAsAAAIAqQCCA0QDHAAmADQAAAEiBhURFAYjISImNRE0NjMhMjY1NCYjISIGFREUFjMhMjY1ETQmIwUWMjcBNjQnJiIHAQYUAzAIDBgR/gcQGBgQAVgIDAwI/pQZJCQZAiIZIwwI/nEGEQYBawYGBhEG/pUGAlIMCP6UEBgYEAH5ERgMCAgMIxn93hkjIxkBgAgMxQYGAW0GEQYGBv6TBhEAAAACAAAAjgQAA8AAJgBGAAABIScuAQcjIgYVERczHgEzITUhBxE0NjM3Fx4BMyEyFh0BMzU0JiMTIzU0JiMiBh0BIyIGFRQWOwEVFBYzMjY9ATMyNjU0JgOy/dwrDRwF5yEtBhQIEwoB/f4SDQgF4ysFGBICJwYHQS0hKo4VDg8Vjg8VFQ+OFQ8OFY4PFRUDdDQQCQEuIP1QKAYGQgECowUHATUIDwcFy8sgLf4Tjg8VFQ+OFQ4PFY4PFRUPjhUPDhUAAAAAAQCAAEADfwM9ACAAAAEhETQmIyIGFREhIgYVBhYzIREUFjMyNjURITI2NTQmIwNf/sMTDQ0T/r4OEgETDQFDEw0NEwE9DRMSDgHfAT4NExMN/sITDQ0T/sEOEhIOAT8SDg0TAAUAQAAAA8ADgAASACQARABPAG0AACUiJjURNDYzMhYVETgBMRQGIzEjIiY1ETQ2MzIWFRE4ATEUBiMBIzU0JiMhIgYdASMiBhUUFjMhOAExMjY1OAE5ATQmIyU0NjMhMhYdASE1ASEiJjURNDYzMhYVERQWMyEyNjURNDYzMhYVERQGAmANExMNDRMTDcANExMNDRMTDQIAoDgn/r8oOKANExMNA0ANExMN/aATDQFBDRL+gAGg/kAoOBMNDRMTDQHADhITDQ4SOMATDQFgDRMTDf6gDRMTDQFgDRMTDf6gDRMCIEAoODgoQBMNDRMTDQ0TQA0TEw1AQPzgOCgB4A4SEg7+IA0TEw0B3w0TEw3+ISg4AAMAvwBAAz8DQAAFAAgADwAAASERIREnHwEjAREhFTMRIQJt/lICgNITUlL+fwFAwP4AA0D9AAIt021T/gECf8D+QQAAAwBHAEcDsgM2ABUAGgAfAAABIScuASsBIgYVERQWMyEyNjURNCYjITUzFyEVIREhEQOI/miNBhIKzxIZGRIDFhEZGRH89MBi/t4DAfz/Aq92CAkZEv1mEhgYEgIUERlSUjX+AgH+AAABAAAAAAAAgH+6018PPPUACwQAAAAAANWYcvMAAAAA1Zhy8wAAAAAEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAAAAgAAAAQAATIEAADbBAAAqQQAAAAEAACABAAAQAQAAL8EAABHAAAAAAAKABQAHgBCAGYAtgEYAUoB1AH2AioAAAABAAAADABuAAUAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="},"4d64":function(A,e,t){var n=t("fc6a"),r=t("50c4"),o=t("23cb"),i=function(A){return function(e,t,i){var a,c=n(e),f=r(c.length),u=o(i,f);if(A&&t!=t){while(f>u)if(a=c[u++],a!=a)return!0}else for(;f>u;u++)if((A||u in c)&&c[u]===t)return A||u||0;return!A&&-1}};A.exports={includes:i(!0),indexOf:i(!1)}},"4de4":function(A,e,t){"use strict";var n=t("23e7"),r=t("b727").filter,o=t("d039"),i=t("1dde"),a=i("filter"),c=a&&!o((function(){[].filter.call({length:-1,0:1},(function(A){throw A}))}));n({target:"Array",proto:!0,forced:!a||!c},{filter:function(A){return r(this,A,arguments.length>1?arguments[1]:void 0)}})},"50c4":function(A,e,t){var n=t("a691"),r=Math.min;A.exports=function(A){return A>0?r(n(A),9007199254740991):0}},5135:function(A,e){var t={}.hasOwnProperty;A.exports=function(A,e){return t.call(A,e)}},5692:function(A,e,t){var n=t("c430"),r=t("c6cd");(A.exports=function(A,e){return r[A]||(r[A]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.1",mode:n?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"56ef":function(A,e,t){var n=t("d066"),r=t("241c"),o=t("7418"),i=t("825a");A.exports=n("Reflect","ownKeys")||function(A){var e=r.f(i(A)),t=o.f;return t?e.concat(t(A)):e}},"5c6c":function(A,e){A.exports=function(A,e){return{enumerable:!(1&A),configurable:!(2&A),writable:!(4&A),value:e}}},"60ae":function(A,e,t){var n,r,o=t("da84"),i=t("b39a"),a=o.process,c=a&&a.versions,f=c&&c.v8;f?(n=f.split("."),r=n[0]+n[1]):i&&(n=i.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/),n&&(r=n[1]))),A.exports=r&&+r},"62a3":function(A,e){A.exports="data:font/ttf;base64,AAEAAAALAIAAAwAwT1MvMg8SBfgAAAC8AAAAYGNtYXAXVtKOAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5Zl1fCFwAAAF4AAAEVGhlYWQOTiqjAAAFzAAAADZoaGVhB8IDzQAABgQAAAAkaG10eCYABHwAAAYoAAAAMGxvY2EFpARMAAAGWAAAABptYXhwABIAcAAABnQAAAAgbmFtZZlKCfsAAAaUAAABhnBvc3QAAwAAAAAIHAAAACAAAwPHAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBwPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qf//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABATIAmwJ7AuUAEgAAARQHAQYjIicmNRE0NzYzMhcBFgJ7C/8ACg8PCwsLCw8PCgEACwHADwv/AAsLCw8CAA8LCwv/AAsAAAABANsBLgMlAncAEgAAASInASY1NDc2MyEyFxYVBgcBBgIADwv/AAsLCw8CAA8LCwEK/wALAS4LAQAKDw8LCwsLDw8K/wALAAACAKkAggNEAxwAJgA0AAABIgYVERQGIyEiJjURNDYzITI2NTQmIyEiBhURFBYzITI2NRE0JiMFFjI3ATY0JyYiBwEGFAMwCAwYEf4HEBgYEAFYCAwMCP6UGSQkGQIiGSMMCP5xBhEGAWsGBgYRBv6VBgJSDAj+lBAYGBAB+REYDAgIDCMZ/d4ZIyMZAYAIDMUGBgFtBhEGBgb+kwYRAAAAAgAAAI4EAAPAACYARgAAASEnLgEHIyIGFREXMx4BMyE1IQcRNDYzNxceATMhMhYdATM1NCYjEyM1NCYjIgYdASMiBhUUFjsBFRQWMzI2PQEzMjY1NCYDsv3cKw0cBechLQYUCBMKAf3+Eg0IBeMrBRgSAicGB0EtISqOFQ4PFY4PFRUPjhUPDhWODxUVA3Q0EAkBLiD9UCgGBkIBAqMFBwE1CA8HBcvLIC3+E44PFRUPjhUODxWODxUVD44VDw4VAAAAAAEAgABAA38DPQAgAAABIRE0JiMiBhURISIGFQYWMyERFBYzMjY1ESEyNjU0JiMDX/7DEw0NE/6+DhIBEw0BQxMNDRMBPQ0TEg4B3wE+DRMTDf7CEw0NE/7BDhISDgE/Eg4NEwAFAEAAAAPAA4AAEgAkAEQATwBtAAAlIiY1ETQ2MzIWFRE4ATEUBiMxIyImNRE0NjMyFhUROAExFAYjASM1NCYjISIGHQEjIgYVFBYzITgBMTI2NTgBOQE0JiMlNDYzITIWHQEhNQEhIiY1ETQ2MzIWFREUFjMhMjY1ETQ2MzIWFREUBgJgDRMTDQ0TEw3ADRMTDQ0TEw0CAKA4J/6/KDigDRMTDQNADRMTDf2gEw0BQQ0S/oABoP5AKDgTDQ0TEw0BwA4SEw0OEjjAEw0BYA0TEw3+oA0TEw0BYA0TEw3+oA0TAiBAKDg4KEATDQ0TEw0NE0ANExMNQED84DgoAeAOEhIO/iANExMNAd8NExMN/iEoOAADAL8AQAM/A0AABQAIAA8AAAEhESERJx8BIwERIRUzESECbf5SAoDSE1JS/n8BQMD+AANA/QACLdNtU/4BAn/A/kEAAAMARwBHA7IDNgAVABoAHwAAASEnLgErASIGFREUFjMhMjY1ETQmIyE1MxchFSERIREDiP5ojQYSCs8SGRkSAxYRGRkR/PTAYv7eAwH8/wKvdggJGRL9ZhIYGBICFBEZUlI1/gIB/gAAAQAAAAAAAIB/utNfDzz1AAsEAAAAAADVmHLzAAAAANWYcvMAAAAABAADwAAAAAgAAgAAAAAAAAABAAADwP/AAAAEAAAAAAAEAAABAAAAAAAAAAAAAAAAAAAADAQAAAAAAAAAAAAAAAIAAAAEAAEyBAAA2wQAAKkEAAAABAAAgAQAAEAEAAC/BAAARwAAAAAACgAUAB4AQgBmALYBGAFKAdQB9gIqAAAAAQAAAAwAbgAFAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGljb21vb24AaQBjAG8AbQBvAG8AblZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGljb21vb24AaQBjAG8AbQBvAG8Abmljb21vb24AaQBjAG8AbQBvAG8AblJlZ3VsYXIAUgBlAGcAdQBsAGEAcmljb21vb24AaQBjAG8AbQBvAG8AbkZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="},"65f0":function(A,e,t){var n=t("861d"),r=t("e8b5"),o=t("b622"),i=o("species");A.exports=function(A,e){var t;return r(A)&&(t=A.constructor,"function"!=typeof t||t!==Array&&!r(t.prototype)?n(t)&&(t=t[i],null===t&&(t=void 0)):t=void 0),new(void 0===t?Array:t)(0===e?0:e)}},"69f3":function(A,e,t){var n,r,o,i=t("7f9a"),a=t("da84"),c=t("861d"),f=t("9112"),u=t("5135"),s=t("f772"),d=t("d012"),l=a.WeakMap,p=function(A){return o(A)?r(A):n(A,{})},g=function(A){return function(e){var t;if(!c(e)||(t=r(e)).type!==A)throw TypeError("Incompatible receiver, "+A+" required");return t}};if(i){var h=new l,v=h.get,E=h.has,B=h.set;n=function(A,e){return B.call(h,A,e),e},r=function(A){return v.call(h,A)||{}},o=function(A){return E.call(h,A)}}else{var b=s("state");d[b]=!0,n=function(A,e){return f(A,b,e),e},r=function(A){return u(A,b)?A[b]:{}},o=function(A){return u(A,b)}}A.exports={set:n,get:r,has:o,enforce:p,getterFor:g}},"6cbe":function(A,e,t){A.exports=t.p+"img/icomoon.4fcffe35.svg"},"6eeb":function(A,e,t){var n=t("da84"),r=t("9112"),o=t("5135"),i=t("ce4e"),a=t("8925"),c=t("69f3"),f=c.get,u=c.enforce,s=String(String).split("String");(A.exports=function(A,e,t,a){var c=!!a&&!!a.unsafe,f=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet;"function"==typeof t&&("string"!=typeof e||o(t,"name")||r(t,"name",e),u(t).source=s.join("string"==typeof e?e:"")),A!==n?(c?!d&&A[e]&&(f=!0):delete A[e],f?A[e]=t:r(A,e,t)):f?A[e]=t:i(e,t)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||a(this)}))},7418:function(A,e){e.f=Object.getOwnPropertySymbols},"746f":function(A,e,t){var n=t("428f"),r=t("5135"),o=t("c032"),i=t("9bf2").f;A.exports=function(A){var e=n.Symbol||(n.Symbol={});r(e,A)||i(e,A,{value:o.f(A)})}},7839:function(A,e){A.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7a23":function(A,e,t){var n=t("24fb"),r=t("1de5"),o=t("4b09"),i=t("62a3"),a=t("ae1e"),c=t("6cbe");e=n(!1);var f=r(o),u=r(o,{hash:"#iefix"}),s=r(i),d=r(a),l=r(c,{hash:"#icomoon"});e.push([A.i,"@font-face{font-family:icomoon;src:url("+f+");src:url("+u+') format("embedded-opentype"),url('+s+') format("truetype"),url('+d+') format("woff"),url('+l+') format("svg");font-weight:400;font-style:normal}.vtl-icon{font-family:icomoon!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.vtl-icon.vtl-menu-icon{margin-right:4px}.vtl-icon.vtl-menu-icon:hover{color:inherit}.vtl-icon:hover{color:#00f}.vtl-icon-file:before{content:"\\e906"}.vtl-icon-folder:before{content:"\\e907"}.vtl-icon-caret-down:before{content:"\\e901"}.vtl-icon-caret-right:before{content:"\\e900"}.vtl-icon-edit:before{content:"\\e902"}.vtl-icon-folder-plus-e:before{content:"\\e903"}.vtl-icon-plus:before{content:"\\e904"}.vtl-icon-trash:before{content:"\\e905"}.vtl-border{height:5px}.vtl-border.vtl-up{margin-top:-5px}.vtl-border.vtl-bottom,.vtl-border.vtl-up{background-color:transparent}.vtl-border.vtl-active{border-bottom:3px dashed #00f}.vtl-node-main{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:5px 0 5px 1rem}.vtl-node-main .vtl-input{border:none;max-width:150px;border-bottom:1px solid #00f}.vtl-node-main:hover{background-color:#f0f0f0}.vtl-node-main.vtl-active{outline:2px dashed pink}.vtl-node-main .vtl-caret{margin-left:-1rem}.vtl-node-main .vtl-operation{margin-left:2rem;letter-spacing:1px}.vtl-item{cursor:pointer}.vtl-tree-margin{margin-left:2em}',""]),A.exports=e},"7b0b":function(A,e,t){var n=t("1d80");A.exports=function(A){return Object(n(A))}},"7c73":function(A,e,t){var n,r=t("825a"),o=t("37e8"),i=t("7839"),a=t("d012"),c=t("1be4"),f=t("cc12"),u=t("f772"),s=">",d="<",l="prototype",p="script",g=u("IE_PROTO"),h=function(){},v=function(A){return d+p+s+A+d+"/"+p+s},E=function(A){A.write(v("")),A.close();var e=A.parentWindow.Object;return A=null,e},B=function(){var A,e=f("iframe"),t="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(t),A=e.contentWindow.document,A.open(),A.write(v("document.F=Object")),A.close(),A.F},b=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(e){}b=n?E(n):B();var A=i.length;while(A--)delete b[l][i[A]];return b()};a[g]=!0,A.exports=Object.create||function(A,e){var t;return null!==A?(h[l]=r(A),t=new h,h[l]=null,t[g]=A):t=b(),void 0===e?t:o(t,e)}},"7f9a":function(A,e,t){var n=t("da84"),r=t("8925"),o=n.WeakMap;A.exports="function"===typeof o&&/native code/.test(r(o))},"825a":function(A,e,t){var n=t("861d");A.exports=function(A){if(!n(A))throw TypeError(String(A)+" is not an object");return A}},"83ab":function(A,e,t){var n=t("d039");A.exports=!n((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"83af":function(A,e,t){"use strict";var n;t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return i}));var r=function(A,e,t){n=t,A.addEventListener?A.addEventListener(e,t,!1):A.attachEvent?A.attachEvent("on"+e,t):A["on"+e]=t},o=function(A,e){A.removeEventListener?A.removeEventListener(e,n,!1):A.detachEvent?A.detachEvent("on"+e,n):A["on"+e]=null},i=function A(e){var t={};for(var n in e)"children"!==n&&"parent"!==n&&(t[n]=e[n]);if(e.children&&e.children.length>0){t.children=[];for(var r=0,o=e.children.length;r<o;r++)t.children.push(A(e.children[r]))}return t}},8418:function(A,e,t){"use strict";var n=t("c04e"),r=t("9bf2"),o=t("5c6c");A.exports=function(A,e,t){var i=n(e);i in A?r.f(A,i,o(0,t)):A[i]=t}},"861d":function(A,e){A.exports=function(A){return"object"===typeof A?null!==A:"function"===typeof A}},8925:function(A,e,t){var n=t("c6cd"),r=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(A){return r.call(A)}),A.exports=n.inspectSource},"90e3":function(A,e){var t=0,n=Math.random();A.exports=function(A){return"Symbol("+String(void 0===A?"":A)+")_"+(++t+n).toString(36)}},9112:function(A,e,t){var n=t("83ab"),r=t("9bf2"),o=t("5c6c");A.exports=n?function(A,e,t){return r.f(A,e,o(1,t))}:function(A,e,t){return A[e]=t,A}},"91a9":function(A,e,t){var n=t("7a23");"string"===typeof n&&(n=[[A.i,n,""]]),n.locals&&(A.exports=n.locals);var r=t("499e").default;r("65bc41e4",n,!0,{sourceMap:!1,shadowMode:!1})},"94ca":function(A,e,t){var n=t("d039"),r=/#|\.prototype\./,o=function(A,e){var t=a[i(A)];return t==f||t!=c&&("function"==typeof e?n(e):!!e)},i=o.normalize=function(A){return String(A).replace(r,".").toLowerCase()},a=o.data={},c=o.NATIVE="N",f=o.POLYFILL="P";A.exports=o},"99af":function(A,e,t){"use strict";var n=t("23e7"),r=t("d039"),o=t("e8b5"),i=t("861d"),a=t("7b0b"),c=t("50c4"),f=t("8418"),u=t("65f0"),s=t("1dde"),d=t("b622"),l=t("60ae"),p=d("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",v=l>=51||!r((function(){var A=[];return A[p]=!1,A.concat()[0]!==A})),E=s("concat"),B=function(A){if(!i(A))return!1;var e=A[p];return void 0!==e?!!e:o(A)},b=!v||!E;n({target:"Array",proto:!0,forced:b},{concat:function(A){var e,t,n,r,o,i=a(this),s=u(i,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?i:arguments[e],B(o)){if(r=c(o.length),d+r>g)throw TypeError(h);for(t=0;t<r;t++,d++)t in o&&f(s,d,o[t])}else{if(d>=g)throw TypeError(h);f(s,d++,o)}return s.length=d,s}})},"9bf2":function(A,e,t){var n=t("83ab"),r=t("0cfb"),o=t("825a"),i=t("c04e"),a=Object.defineProperty;e.f=n?a:function(A,e,t){if(o(A),e=i(e,!0),o(t),r)try{return a(A,e,t)}catch(n){}if("get"in t||"set"in t)throw TypeError("Accessors not supported");return"value"in t&&(A[e]=t.value),A}},a434:function(A,e,t){"use strict";var n=t("23e7"),r=t("23cb"),o=t("a691"),i=t("50c4"),a=t("7b0b"),c=t("65f0"),f=t("8418"),u=t("1dde"),s=Math.max,d=Math.min,l=9007199254740991,p="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!u("splice")},{splice:function(A,e){var t,n,u,g,h,v,E=a(this),B=i(E.length),b=r(A,B),m=arguments.length;if(0===m?t=n=0:1===m?(t=0,n=B-b):(t=m-2,n=d(s(o(e),0),B-b)),B+t-n>l)throw TypeError(p);for(u=c(E,n),g=0;g<n;g++)h=b+g,h in E&&f(u,g,E[h]);if(u.length=n,t<n){for(g=b;g<B-n;g++)h=g+n,v=g+t,h in E?E[v]=E[h]:delete E[v];for(g=B;g>B-n+t;g--)delete E[g-1]}else if(t>n)for(g=B-n;g>b;g--)h=g+n-1,v=g+t-1,h in E?E[v]=E[h]:delete E[v];for(g=0;g<t;g++)E[g+b]=arguments[g+2];return E.length=B-n+t,u}})},a4d3:function(A,e,t){"use strict";var n=t("23e7"),r=t("da84"),o=t("d066"),i=t("c430"),a=t("83ab"),c=t("4930"),f=t("fdbf"),u=t("d039"),s=t("5135"),d=t("e8b5"),l=t("861d"),p=t("825a"),g=t("7b0b"),h=t("fc6a"),v=t("c04e"),E=t("5c6c"),B=t("7c73"),b=t("df75"),m=t("241c"),w=t("057f"),y=t("7418"),Q=t("06cf"),I=t("9bf2"),D=t("d1e7"),N=t("9112"),M=t("6eeb"),C=t("5692"),x=t("f772"),S=t("d012"),j=t("90e3"),T=t("b622"),G=t("c032"),O=t("746f"),Y=t("d44e"),R=t("69f3"),U=t("b727").forEach,F=x("hidden"),L="Symbol",P="prototype",k=T("toPrimitive"),H=R.set,J=R.getterFor(L),V=Object[P],z=r.Symbol,_=o("JSON","stringify"),W=Q.f,Z=I.f,K=w.f,X=D.f,$=C("symbols"),q=C("op-symbols"),AA=C("string-to-symbol-registry"),eA=C("symbol-to-string-registry"),tA=C("wks"),nA=r.QObject,rA=!nA||!nA[P]||!nA[P].findChild,oA=a&&u((function(){return 7!=B(Z({},"a",{get:function(){return Z(this,"a",{value:7}).a}})).a}))?function(A,e,t){var n=W(V,e);n&&delete V[e],Z(A,e,t),n&&A!==V&&Z(V,e,n)}:Z,iA=function(A,e){var t=$[A]=B(z[P]);return H(t,{type:L,tag:A,description:e}),a||(t.description=e),t},aA=f?function(A){return"symbol"==typeof A}:function(A){return Object(A)instanceof z},cA=function(A,e,t){A===V&&cA(q,e,t),p(A);var n=v(e,!0);return p(t),s($,n)?(t.enumerable?(s(A,F)&&A[F][n]&&(A[F][n]=!1),t=B(t,{enumerable:E(0,!1)})):(s(A,F)||Z(A,F,E(1,{})),A[F][n]=!0),oA(A,n,t)):Z(A,n,t)},fA=function(A,e){p(A);var t=h(e),n=b(t).concat(pA(t));return U(n,(function(e){a&&!sA.call(t,e)||cA(A,e,t[e])})),A},uA=function(A,e){return void 0===e?B(A):fA(B(A),e)},sA=function(A){var e=v(A,!0),t=X.call(this,e);return!(this===V&&s($,e)&&!s(q,e))&&(!(t||!s(this,e)||!s($,e)||s(this,F)&&this[F][e])||t)},dA=function(A,e){var t=h(A),n=v(e,!0);if(t!==V||!s($,n)||s(q,n)){var r=W(t,n);return!r||!s($,n)||s(t,F)&&t[F][n]||(r.enumerable=!0),r}},lA=function(A){var e=K(h(A)),t=[];return U(e,(function(A){s($,A)||s(S,A)||t.push(A)})),t},pA=function(A){var e=A===V,t=K(e?q:h(A)),n=[];return U(t,(function(A){!s($,A)||e&&!s(V,A)||n.push($[A])})),n};if(c||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var A=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=j(A),t=function(A){this===V&&t.call(q,A),s(this,F)&&s(this[F],e)&&(this[F][e]=!1),oA(this,e,E(1,A))};return a&&rA&&oA(V,e,{configurable:!0,set:t}),iA(e,A)},M(z[P],"toString",(function(){return J(this).tag})),M(z,"withoutSetter",(function(A){return iA(j(A),A)})),D.f=sA,I.f=cA,Q.f=dA,m.f=w.f=lA,y.f=pA,G.f=function(A){return iA(T(A),A)},a&&(Z(z[P],"description",{configurable:!0,get:function(){return J(this).description}}),i||M(V,"propertyIsEnumerable",sA,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:z}),U(b(tA),(function(A){O(A)})),n({target:L,stat:!0,forced:!c},{for:function(A){var e=String(A);if(s(AA,e))return AA[e];var t=z(e);return AA[e]=t,eA[t]=e,t},keyFor:function(A){if(!aA(A))throw TypeError(A+" is not a symbol");if(s(eA,A))return eA[A]},useSetter:function(){rA=!0},useSimple:function(){rA=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!a},{create:uA,defineProperty:cA,defineProperties:fA,getOwnPropertyDescriptor:dA}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:lA,getOwnPropertySymbols:pA}),n({target:"Object",stat:!0,forced:u((function(){y.f(1)}))},{getOwnPropertySymbols:function(A){return y.f(g(A))}}),_){var gA=!c||u((function(){var A=z();return"[null]"!=_([A])||"{}"!=_({a:A})||"{}"!=_(Object(A))}));n({target:"JSON",stat:!0,forced:gA},{stringify:function(A,e,t){var n,r=[A],o=1;while(arguments.length>o)r.push(arguments[o++]);if(n=e,(l(e)||void 0!==A)&&!aA(A))return d(e)||(e=function(A,e){if("function"==typeof n&&(e=n.call(this,A,e)),!aA(e))return e}),r[1]=e,_.apply(null,r)}})}z[P][k]||N(z[P],k,z[P].valueOf),Y(z,L),S[F]=!0},a691:function(A,e){var t=Math.ceil,n=Math.floor;A.exports=function(A){return isNaN(A=+A)?0:(A>0?n:t)(A)}},a76f:function(A,e,t){"use strict";t("99af"),t("a434"),t("b0c0");function n(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}function r(A,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(A,n.key,n)}}function o(A,e,t){return e&&r(A.prototype,e),t&&r(A,t),A}var i=t("83af");t.d(e,"b",(function(){return a})),t.d(e,"a",(function(){return c}));var a=function(){function A(e){n(this,A);var t=e.id,r=e.isLeaf;for(var o in this.id="undefined"===typeof t?(new Date).valueOf():t,this.parent=null,this.children=null,this.isLeaf=!!r,e)"id"!==o&&"children"!==o&&"isLeaf"!==o&&(this[o]=e[o])}return o(A,[{key:"changeName",value:function(A){this.name=A}},{key:"addChildren",value:function(A){if(this.children||(this.children=[]),Array.isArray(A)){for(var e=0,t=A.length;e<t;e++){var n=A[e];n.parent=this,n.pid=this.id}this.children.concat(A)}else{var r=A;r.parent=this,r.pid=this.id,this.children.push(r)}}},{key:"remove",value:function(){var A=this.parent,e=A.findChildIndex(this);A.children.splice(e,1)}},{key:"_removeChild",value:function(A){for(var e=0,t=this.children.length;e<t;e++)if(this.children[e]===A){this.children.splice(e,1);break}}},{key:"isTargetChild",value:function(A){var e=A.parent;while(e){if(e===this)return!0;e=e.parent}return!1}},{key:"moveInto",value:function(A){"root"!==this.name&&this!==A&&(this.isTargetChild(A)||A.isLeaf||(this.parent._removeChild(this),this.parent=A,this.pid=A.id,A.children||(A.children=[]),A.children.unshift(this)))}},{key:"findChildIndex",value:function(A){for(var e,t=0,n=this.children.length;t<n;t++)if(this.children[t]===A){e=t;break}return e}},{key:"_canInsert",value:function(A){return"root"!==this.name&&this!==A&&(!this.isTargetChild(A)&&(this.parent._removeChild(this),this.parent=A.parent,this.pid=A.parent.id,!0))}},{key:"insertBefore",value:function(A){if(this._canInsert(A)){var e=A.parent.findChildIndex(A);A.parent.children.splice(e,0,this)}}},{key:"insertAfter",value:function(A){if(this._canInsert(A)){var e=A.parent.findChildIndex(A);A.parent.children.splice(e+1,0,this)}}},{key:"toString",value:function(){return JSON.stringify(Object(i["c"])(this))}}]),A}(),c=function(){function A(e){return n(this,A),this.root=new a({name:"root",isLeaf:!1,id:0}),this.initNode(this.root,e),this.root}return o(A,[{key:"initNode",value:function(A,e){for(var t=0,n=e.length;t<n;t++){var r=e[t],o=new a(r);r.children&&r.children.length>0&&this.initNode(o,r.children),A.addChildren(o)}}}]),A}()},ae1e:function(A,e){A.exports="data:font/woff;base64,d09GRgABAAAAAAiIAAsAAAAACDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF+GNtYXAAAAFoAAAAVAAAAFQXVtKOZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAABFQAAARUXV8IXGhlYWQAAAYYAAAANgAAADYOTiqjaGhlYQAABlAAAAAkAAAAJAfCA81obXR4AAAGdAAAADAAAAAwJgAEfGxvY2EAAAakAAAAGgAAABoFpARMbWF4cAAABsAAAAAgAAAAIAASAHBuYW1lAAAG4AAAAYYAAAGGmUoJ+3Bvc3QAAAhoAAAAIAAAACAAAwAAAAMDxwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QcDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkH//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQEyAJsCewLlABIAAAEUBwEGIyInJjURNDc2MzIXARYCewv/AAoPDwsLCwsPDwoBAAsBwA8L/wALCwsPAgAPCwsL/wALAAAAAQDbAS4DJQJ3ABIAAAEiJwEmNTQ3NjMhMhcWFQYHAQYCAA8L/wALCwsPAgAPCwsBCv8ACwEuCwEACg8PCwsLCw8PCv8ACwAAAgCpAIIDRAMcACYANAAAASIGFREUBiMhIiY1ETQ2MyEyNjU0JiMhIgYVERQWMyEyNjURNCYjBRYyNwE2NCcmIgcBBhQDMAgMGBH+BxAYGBABWAgMDAj+lBkkJBkCIhkjDAj+cQYRBgFrBgYGEQb+lQYCUgwI/pQQGBgQAfkRGAwICAwjGf3eGSMjGQGACAzFBgYBbQYRBgYG/pMGEQAAAAIAAACOBAADwAAmAEYAAAEhJy4BByMiBhURFzMeATMhNSEHETQ2MzcXHgEzITIWHQEzNTQmIxMjNTQmIyIGHQEjIgYVFBY7ARUUFjMyNj0BMzI2NTQmA7L93CsNHAXnIS0GFAgTCgH9/hINCAXjKwUYEgInBgdBLSEqjhUODxWODxUVD44VDw4Vjg8VFQN0NBAJAS4g/VAoBgZCAQKjBQcBNQgPBwXLyyAt/hOODxUVD44VDg8Vjg8VFQ+OFQ8OFQAAAAABAIAAQAN/Az0AIAAAASERNCYjIgYVESEiBhUGFjMhERQWMzI2NREhMjY1NCYjA1/+wxMNDRP+vg4SARMNAUMTDQ0TAT0NExIOAd8BPg0TEw3+whMNDRP+wQ4SEg4BPxIODRMABQBAAAADwAOAABIAJABEAE8AbQAAJSImNRE0NjMyFhUROAExFAYjMSMiJjURNDYzMhYVETgBMRQGIwEjNTQmIyEiBh0BIyIGFRQWMyE4ATEyNjU4ATkBNCYjJTQ2MyEyFh0BITUBISImNRE0NjMyFhURFBYzITI2NRE0NjMyFhURFAYCYA0TEw0NExMNwA0TEw0NExMNAgCgOCf+vyg4oA0TEw0DQA0TEw39oBMNAUENEv6AAaD+QCg4Ew0NExMNAcAOEhMNDhI4wBMNAWANExMN/qANExMNAWANExMN/qANEwIgQCg4OChAEw0NExMNDRNADRMTDUBA/OA4KAHgDhISDv4gDRMTDQHfDRMTDf4hKDgAAwC/AEADPwNAAAUACAAPAAABIREhEScfASMBESEVMxEhAm3+UgKA0hNSUv5/AUDA/gADQP0AAi3TbVP+AQJ/wP5BAAADAEcARwOyAzYAFQAaAB8AAAEhJy4BKwEiBhURFBYzITI2NRE0JiMhNTMXIRUhESERA4j+aI0GEgrPEhkZEgMWERkZEfz0wGL+3gMB/P8Cr3YICRkS/WYSGBgSAhQRGVJSNf4CAf4AAAEAAAAAAACAf7rTXw889QALBAAAAAAA1Zhy8wAAAADVmHLzAAAAAAQAA8AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAABAAAAQAAAAAAAAAAAAAAAAAAAAwEAAAAAAAAAAAAAAACAAAABAABMgQAANsEAACpBAAAAAQAAIAEAABABAAAvwQAAEcAAAAAAAoAFAAeAEIAZgC2ARgBSgHUAfYCKgAAAAEAAAAMAG4ABQAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},b0c0:function(A,e,t){var n=t("83ab"),r=t("9bf2").f,o=Function.prototype,i=o.toString,a=/^\s*function ([^ (]*)/,c="name";!n||c in o||r(o,c,{configurable:!0,get:function(){try{return i.call(this).match(a)[1]}catch(A){return""}}})},b2b9:function(A,e,t){"use strict";t.r(e);var n=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{staticClass:"vtl"},["root"!==A.model.name?t("div",{staticClass:"vtl-node",class:{"vtl-leaf-node":A.model.isLeaf,"vtl-tree-node":!A.model.isLeaf},attrs:{id:A.model.id}},[t("div",{staticClass:"vtl-border vtl-up",class:{"vtl-active":A.isDragEnterUp},on:{drop:A.dropBefore,dragenter:A.dragEnterUp,dragover:A.dragOverUp,dragleave:A.dragLeaveUp}}),t("div",{class:A.treeNodeClass,attrs:{draggable:!A.model.dragDisabled},on:{dragstart:A.dragStart,dragover:A.dragOver,dragenter:A.dragEnter,dragleave:A.dragLeave,drop:A.drop,dragend:A.dragEnd,mouseover:A.mouseOver,mouseout:A.mouseOut,click:function(e){return e.stopPropagation(),A.click(e)}}},[A.model.children&&A.model.children.length>0?t("span",{staticClass:"vtl-caret vtl-is-small"},[t("i",{staticClass:"vtl-icon",class:A.caretClass,on:{click:function(e){return e.preventDefault(),e.stopPropagation(),A.toggle(e)}}})]):A._e(),A.model.isLeaf?t("span",[A._t("leafNodeIcon",[t("i",{staticClass:"vtl-icon vtl-menu-icon vtl-icon-file"})],{expanded:A.expanded,model:A.model,root:A.rootNode})],2):t("span",[A._t("treeNodeIcon",[t("i",{staticClass:"vtl-icon vtl-menu-icon vtl-icon-folder"})],{expanded:A.expanded,model:A.model,root:A.rootNode})],2),A.editable?t("input",{ref:"nodeInput",staticClass:"vtl-input",attrs:{type:"text"},domProps:{value:A.model.name},on:{input:A.updateName,blur:A.setUnEditable}}):t("div",{staticClass:"vtl-node-content"},[A._t("leafNameDisplay",[A._v(" "+A._s(A.model.name)+" ")],{expanded:A.expanded,model:A.model,root:A.rootNode})],2),t("div",{directives:[{name:"show",rawName:"v-show",value:A.isHover,expression:"isHover"}],staticClass:"vtl-operation"},[A.model.isLeaf||A.model.addTreeNodeDisabled?A._e():t("span",{attrs:{title:A.defaultAddTreeNodeTitle},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),A.addChild(!1)}}},[A._t("addTreeNodeIcon",[t("i",{staticClass:"vtl-icon vtl-icon-folder-plus-e"})],{expanded:A.expanded,model:A.model,root:A.rootNode})],2),A.model.isLeaf||A.model.addLeafNodeDisabled?A._e():t("span",{attrs:{title:A.defaultAddLeafNodeTitle},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),A.addChild(!0)}}},[A._t("addLeafNodeIcon",[t("i",{staticClass:"vtl-icon vtl-icon-plus"})],{expanded:A.expanded,model:A.model,root:A.rootNode})],2),A.model.editNodeDisabled?A._e():t("span",{attrs:{title:"edit"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),A.setEditable(e)}}},[A._t("editNodeIcon",[t("i",{staticClass:"vtl-icon vtl-icon-edit"})],{expanded:A.expanded,model:A.model,root:A.rootNode})],2),A.model.delNodeDisabled?A._e():t("span",{attrs:{title:"delete"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),A.delNode(e)}}},[A._t("delNodeIcon",[t("i",{staticClass:"vtl-icon vtl-icon-trash"})],{expanded:A.expanded,model:A.model,root:A.rootNode})],2)])]),A.model.children&&A.model.children.length>0&&A.expanded?t("div",{staticClass:"vtl-border vtl-bottom",class:{"vtl-active":A.isDragEnterBottom},on:{drop:A.dropAfter,dragenter:A.dragEnterBottom,dragover:A.dragOverBottom,dragleave:A.dragLeaveBottom}}):A._e()]):A._e(),A.isFolder?t("div",{directives:[{name:"show",rawName:"v-show",value:"root"===A.model.name||A.expanded,expression:"model.name === 'root' || expanded"}],class:{"vtl-tree-margin":"root"!==A.model.name}},A._l(A.model.children,(function(e){return t("item",{key:e.id,attrs:{"default-tree-node-name":A.defaultTreeNodeName,"default-leaf-node-name":A.defaultLeafNodeName,"default-expanded":A.defaultExpanded,model:e},scopedSlots:A._u([{key:"leafNameDisplay",fn:function(e){return[A._t("leafNameDisplay",null,null,e)]}},{key:"addTreeNodeIcon",fn:function(e){return[A._t("addTreeNodeIcon",null,null,e)]}},{key:"addLeafNodeIcon",fn:function(e){return[A._t("addLeafNodeIcon",null,null,e)]}},{key:"editNodeIcon",fn:function(e){return[A._t("editNodeIcon",null,null,e)]}},{key:"delNodeIcon",fn:function(e){return[A._t("delNodeIcon",null,null,e)]}},{key:"leafNodeIcon",fn:function(e){return[A._t("leafNodeIcon",null,null,e)]}},{key:"treeNodeIcon",fn:function(e){return[A._t("treeNodeIcon",null,null,e)]}}],null,!0)})})),1):A._e()])},r=[];t("a4d3"),t("4de4"),t("b0c0"),t("e439"),t("dbb4"),t("b64b"),t("159b");function o(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}var i=t("a76f"),a=t("83af");function c(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function f(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){o(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}var u=null,s={name:"vue-tree-list",data:function(){return{isHover:!1,editable:!1,isDragEnterUp:!1,isDragEnterBottom:!1,isDragEnterNode:!1,expanded:this.defaultExpanded}},props:{model:{type:Object},defaultLeafNodeName:{type:String,default:"Leaf Node"},defaultTreeNodeName:{type:String,default:"Tree Node"},defaultAddTreeNodeTitle:{type:String,default:"Add Tree Node"},defaultAddLeafNodeTitle:{type:String,default:"Add Leaf Node"},defaultExpanded:{type:Boolean,default:!0}},computed:{rootNode:function(){var A=this.$parent;while("root"!==A._props.model.name)A=A.$parent;return A},caretClass:function(){return this.expanded?"vtl-icon-caret-down":"vtl-icon-caret-right"},isFolder:function(){return this.model.children&&this.model.children.length},treeNodeClass:function(){var A=this.model,e=A.dragDisabled,t=A.disabled,n=this.isDragEnterNode;return{"vtl-node-main":!0,"vtl-active":n,"vtl-drag-disabled":e,"vtl-disabled":t}}},beforeCreate:function(){this.$options.components.item=t("b2b9").default},mounted:function(){var A=this;Object(a["a"])(window,"keyup",(function(e){13===e.keyCode&&A.editable&&(A.editable=!1)}))},beforeDestroy:function(){Object(a["b"])(window,"keyup")},methods:{updateName:function(A){var e=this.model.name;this.model.changeName(A.target.value),this.rootNode.$emit("change-name",{id:this.model.id,oldName:e,newName:A.target.value,node:this.model})},delNode:function(){this.rootNode.$emit("delete-node",this.model)},setEditable:function(){var A=this;this.editable=!0,this.$nextTick((function(){var e=A.$refs.nodeInput;e.focus(),e.setSelectionRange(0,e.value.length)}))},setUnEditable:function(A){this.editable=!1;var e=this.model.name;this.model.changeName(A.target.value),this.rootNode.$emit("change-name",{id:this.model.id,oldName:e,newName:A.target.value,eventType:"blur"})},toggle:function(){this.isFolder&&(this.expanded=!this.expanded)},mouseOver:function(){this.model.disabled||(this.isHover=!0)},mouseOut:function(){this.isHover=!1},click:function(){this.rootNode.$emit("click",f({toggle:this.toggle},this.model))},addChild:function(A){var e=A?this.defaultLeafNodeName:this.defaultTreeNodeName;this.expanded=!0;var t=new i["b"]({name:e,isLeaf:A});this.model.addChildren(t,!0),this.rootNode.$emit("add-node",t)},dragStart:function(A){return!this.model.dragDisabled&&!this.model.disabled&&(u=this,A.dataTransfer.setData("data","data"),A.dataTransfer.effectAllowed="move",!0)},dragEnd:function(){u=null},dragOver:function(A){return A.preventDefault(),!0},dragEnter:function(){u&&u.model.id!==this.model.id&&u&&!this.model.isLeaf&&(this.isDragEnterNode=!0)},dragLeave:function(){this.isDragEnterNode=!1},drop:function(){if(u){var A=u.model.parent;u.model.moveInto(this.model),this.isDragEnterNode=!1,this.rootNode.$emit("drop",{target:this.model,node:u.model,src:A})}},dragEnterUp:function(){u&&(this.isDragEnterUp=!0)},dragOverUp:function(A){return A.preventDefault(),!0},dragLeaveUp:function(){u&&(this.isDragEnterUp=!1)},dropBefore:function(){if(u){var A=u.model.parent;u.model.insertBefore(this.model),this.isDragEnterUp=!1,this.rootNode.$emit("drop-before",{target:this.model,node:u.model,src:A})}},dragEnterBottom:function(){u&&(this.isDragEnterBottom=!0)},dragOverBottom:function(A){return A.preventDefault(),!0},dragLeaveBottom:function(){u&&(this.isDragEnterBottom=!1)},dropAfter:function(){if(u){var A=u.model.parent;u.model.insertAfter(this.model),this.isDragEnterBottom=!1,this.rootNode.$emit("drop-after",{target:this.model,node:u.model,src:A})}}}},d=s;t("04ab");function l(A,e,t,n,r,o,i,a){var c,f="function"===typeof A?A.options:A;if(e&&(f.render=e,f.staticRenderFns=t,f._compiled=!0),n&&(f.functional=!0),o&&(f._scopeId="data-v-"+o),i?(c=function(A){A=A||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,A||"undefined"===typeof __VUE_SSR_CONTEXT__||(A=__VUE_SSR_CONTEXT__),r&&r.call(this,A),A&&A._registeredComponents&&A._registeredComponents.add(i)},f._ssrRegister=c):r&&(c=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(f.functional){f._injectStyles=c;var u=f.render;f.render=function(A,e){return c.call(e),u(A,e)}}else{var s=f.beforeCreate;f.beforeCreate=s?[].concat(s,c):[c]}return{exports:A,options:f}}var p=l(d,n,r,!1,null,null,null);e["default"]=p.exports},b301:function(A,e,t){"use strict";var n=t("d039");A.exports=function(A,e){var t=[][A];return!t||!n((function(){t.call(null,e||function(){throw 1},1)}))}},b39a:function(A,e,t){var n=t("d066");A.exports=n("navigator","userAgent")||""},b622:function(A,e,t){var n=t("da84"),r=t("5692"),o=t("5135"),i=t("90e3"),a=t("4930"),c=t("fdbf"),f=r("wks"),u=n.Symbol,s=c?u:u&&u.withoutSetter||i;A.exports=function(A){return o(f,A)||(a&&o(u,A)?f[A]=u[A]:f[A]=s("Symbol."+A)),f[A]}},b64b:function(A,e,t){var n=t("23e7"),r=t("7b0b"),o=t("df75"),i=t("d039"),a=i((function(){o(1)}));n({target:"Object",stat:!0,forced:a},{keys:function(A){return o(r(A))}})},b727:function(A,e,t){var n=t("f8c2"),r=t("44ad"),o=t("7b0b"),i=t("50c4"),a=t("65f0"),c=[].push,f=function(A){var e=1==A,t=2==A,f=3==A,u=4==A,s=6==A,d=5==A||s;return function(l,p,g,h){for(var v,E,B=o(l),b=r(B),m=n(p,g,3),w=i(b.length),y=0,Q=h||a,I=e?Q(l,w):t?Q(l,0):void 0;w>y;y++)if((d||y in b)&&(v=b[y],E=m(v,y,B),A))if(e)I[y]=E;else if(E)switch(A){case 3:return!0;case 5:return v;case 6:return y;case 2:c.call(I,v)}else if(u)return!1;return s?-1:f||u?u:I}};A.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},c032:function(A,e,t){var n=t("b622");e.f=n},c04e:function(A,e,t){var n=t("861d");A.exports=function(A,e){if(!n(A))return A;var t,r;if(e&&"function"==typeof(t=A.toString)&&!n(r=t.call(A)))return r;if("function"==typeof(t=A.valueOf)&&!n(r=t.call(A)))return r;if(!e&&"function"==typeof(t=A.toString)&&!n(r=t.call(A)))return r;throw TypeError("Can't convert object to primitive value")}},c430:function(A,e){A.exports=!1},c6b6:function(A,e){var t={}.toString;A.exports=function(A){return t.call(A).slice(8,-1)}},c6cd:function(A,e,t){var n=t("da84"),r=t("ce4e"),o="__core-js_shared__",i=n[o]||r(o,{});A.exports=i},c8ba:function(A,e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(n){"object"===typeof window&&(t=window)}A.exports=t},ca84:function(A,e,t){var n=t("5135"),r=t("fc6a"),o=t("4d64").indexOf,i=t("d012");A.exports=function(A,e){var t,a=r(A),c=0,f=[];for(t in a)!n(i,t)&&n(a,t)&&f.push(t);while(e.length>c)n(a,t=e[c++])&&(~o(f,t)||f.push(t));return f}},cc12:function(A,e,t){var n=t("da84"),r=t("861d"),o=n.document,i=r(o)&&r(o.createElement);A.exports=function(A){return i?o.createElement(A):{}}},ce4e:function(A,e,t){var n=t("da84"),r=t("9112");A.exports=function(A,e){try{r(n,A,e)}catch(t){n[A]=e}return e}},d012:function(A,e){A.exports={}},d039:function(A,e){A.exports=function(A){try{return!!A()}catch(e){return!0}}},d066:function(A,e,t){var n=t("428f"),r=t("da84"),o=function(A){return"function"==typeof A?A:void 0};A.exports=function(A,e){return arguments.length<2?o(n[A])||o(r[A]):n[A]&&n[A][e]||r[A]&&r[A][e]}},d1e7:function(A,e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(A){var e=r(this,A);return!!e&&e.enumerable}:n},d44e:function(A,e,t){var n=t("9bf2").f,r=t("5135"),o=t("b622"),i=o("toStringTag");A.exports=function(A,e,t){A&&!r(A=t?A:A.prototype,i)&&n(A,i,{configurable:!0,value:e})}},da84:function(A,e,t){(function(e){var t=function(A){return A&&A.Math==Math&&A};A.exports=t("object"==typeof globalThis&&globalThis)||t("object"==typeof window&&window)||t("object"==typeof self&&self)||t("object"==typeof e&&e)||Function("return this")()}).call(this,t("c8ba"))},dbb4:function(A,e,t){var n=t("23e7"),r=t("83ab"),o=t("56ef"),i=t("fc6a"),a=t("06cf"),c=t("8418");n({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(A){var e,t,n=i(A),r=a.f,f=o(n),u={},s=0;while(f.length>s)t=r(n,e=f[s++]),void 0!==t&&c(u,e,t);return u}})},df75:function(A,e,t){var n=t("ca84"),r=t("7839");A.exports=Object.keys||function(A){return n(A,r)}},e439:function(A,e,t){var n=t("23e7"),r=t("d039"),o=t("fc6a"),i=t("06cf").f,a=t("83ab"),c=r((function(){i(1)})),f=!a||c;n({target:"Object",stat:!0,forced:f,sham:!a},{getOwnPropertyDescriptor:function(A,e){return i(o(A),e)}})},e893:function(A,e,t){var n=t("5135"),r=t("56ef"),o=t("06cf"),i=t("9bf2");A.exports=function(A,e){for(var t=r(e),a=i.f,c=o.f,f=0;f<t.length;f++){var u=t[f];n(A,u)||a(A,u,c(e,u))}}},e8b5:function(A,e,t){var n=t("c6b6");A.exports=Array.isArray||function(A){return"Array"==n(A)}},f6fd:function(A,e){(function(A){var e="currentScript",t=A.getElementsByTagName("script");e in A||Object.defineProperty(A,e,{get:function(){try{throw new Error}catch(n){var A,e=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(n.stack)||[!1])[1];for(A in t)if(t[A].src==e||"interactive"==t[A].readyState)return t[A];return null}}})})(document)},f772:function(A,e,t){var n=t("5692"),r=t("90e3"),o=n("keys");A.exports=function(A){return o[A]||(o[A]=r(A))}},f8c2:function(A,e,t){var n=t("1c0b");A.exports=function(A,e,t){if(n(A),void 0===e)return A;switch(t){case 0:return function(){return A.call(e)};case 1:return function(t){return A.call(e,t)};case 2:return function(t,n){return A.call(e,t,n)};case 3:return function(t,n,r){return A.call(e,t,n,r)}}return function(){return A.apply(e,arguments)}}},fb15:function(A,e,t){"use strict";var n;(t.r(e),"undefined"!==typeof window)&&(t("f6fd"),(n=window.document.currentScript)&&(n=n.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(t.p=n[1]));t("b0c0");var r=t("b2b9"),o=t("a76f");r["default"].install=function(A){A.component(r["default"].name,r["default"])};var i=r["default"];t.d(e,"Tree",(function(){return o["a"]})),t.d(e,"TreeNode",(function(){return o["b"]})),t.d(e,"VueTreeList",(function(){return r["default"]}));e["default"]=i},fc6a:function(A,e,t){var n=t("44ad"),r=t("1d80");A.exports=function(A){return n(r(A))}},fdbc:function(A,e){A.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(A,e,t){var n=t("4930");A.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}})}));
//# sourceMappingURL=vue-tree-list.umd.min.js.map

/***/ }),

/***/ "./node_modules/vuelidate/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vuelidate/lib/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Vuelidate = Vuelidate;
exports.validationMixin = exports["default"] = void 0;
Object.defineProperty(exports, "withParams", ({
  enumerable: true,
  get: function get() {
    return _params.withParams;
  }
}));

var _vval = __webpack_require__(/*! ./vval */ "./node_modules/vuelidate/lib/vval.js");

var _params = __webpack_require__(/*! ./params */ "./node_modules/vuelidate/lib/params.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var NIL = function NIL() {
  return null;
};

var buildFromKeys = function buildFromKeys(keys, fn, keyFn) {
  return keys.reduce(function (build, key) {
    build[keyFn ? keyFn(key) : key] = fn(key);
    return build;
  }, {});
};

function isFunction(val) {
  return typeof val === 'function';
}

function isObject(val) {
  return val !== null && (_typeof(val) === 'object' || isFunction(val));
}

function isPromise(object) {
  return isObject(object) && isFunction(object.then);
}

var getPath = function getPath(ctx, obj, path, fallback) {
  if (typeof path === 'function') {
    return path.call(ctx, obj, fallback);
  }

  path = Array.isArray(path) ? path : path.split('.');

  for (var i = 0; i < path.length; i++) {
    if (obj && _typeof(obj) === 'object') {
      obj = obj[path[i]];
    } else {
      return fallback;
    }
  }

  return typeof obj === 'undefined' ? fallback : obj;
};

var __isVuelidateAsyncVm = '__isVuelidateAsyncVm';

function makePendingAsyncVm(Vue, promise) {
  var asyncVm = new Vue({
    data: {
      p: true,
      v: false
    }
  });
  promise.then(function (value) {
    asyncVm.p = false;
    asyncVm.v = value;
  }, function (error) {
    asyncVm.p = false;
    asyncVm.v = false;
    throw error;
  });
  asyncVm[__isVuelidateAsyncVm] = true;
  return asyncVm;
}

var validationGetters = {
  $invalid: function $invalid() {
    var _this = this;

    var proxy = this.proxy;
    return this.nestedKeys.some(function (nested) {
      return _this.refProxy(nested).$invalid;
    }) || this.ruleKeys.some(function (rule) {
      return !proxy[rule];
    });
  },
  $dirty: function $dirty() {
    var _this2 = this;

    if (this.dirty) {
      return true;
    }

    if (this.nestedKeys.length === 0) {
      return false;
    }

    return this.nestedKeys.every(function (key) {
      return _this2.refProxy(key).$dirty;
    });
  },
  $anyDirty: function $anyDirty() {
    var _this3 = this;

    if (this.dirty) {
      return true;
    }

    if (this.nestedKeys.length === 0) {
      return false;
    }

    return this.nestedKeys.some(function (key) {
      return _this3.refProxy(key).$anyDirty;
    });
  },
  $error: function $error() {
    return this.$dirty && !this.$pending && this.$invalid;
  },
  $anyError: function $anyError() {
    var _this4 = this;

    if (this.$error) return true;
    return this.nestedKeys.some(function (key) {
      return _this4.refProxy(key).$anyError;
    });
  },
  $pending: function $pending() {
    var _this5 = this;

    return this.ruleKeys.some(function (key) {
      return _this5.getRef(key).$pending;
    }) || this.nestedKeys.some(function (key) {
      return _this5.refProxy(key).$pending;
    });
  },
  $params: function $params() {
    var _this6 = this;

    var vals = this.validations;
    return _objectSpread(_objectSpread({}, buildFromKeys(this.nestedKeys, function (key) {
      return vals[key] && vals[key].$params || null;
    })), buildFromKeys(this.ruleKeys, function (key) {
      return _this6.getRef(key).$params;
    }));
  }
};

function setDirtyRecursive(newState) {
  this.dirty = newState;
  var proxy = this.proxy;
  var method = newState ? '$touch' : '$reset';
  this.nestedKeys.forEach(function (key) {
    proxy[key][method]();
  });
}

var validationMethods = {
  $touch: function $touch() {
    setDirtyRecursive.call(this, true);
  },
  $reset: function $reset() {
    setDirtyRecursive.call(this, false);
  },
  $flattenParams: function $flattenParams() {
    var proxy = this.proxy;
    var params = [];

    for (var key in this.$params) {
      if (this.isNested(key)) {
        var childParams = proxy[key].$flattenParams();

        for (var j = 0; j < childParams.length; j++) {
          childParams[j].path.unshift(key);
        }

        params = params.concat(childParams);
      } else {
        params.push({
          path: [],
          name: key,
          params: this.$params[key]
        });
      }
    }

    return params;
  }
};
var getterNames = Object.keys(validationGetters);
var methodNames = Object.keys(validationMethods);
var _cachedComponent = null;

var getComponent = function getComponent(Vue) {
  if (_cachedComponent) {
    return _cachedComponent;
  }

  var VBase = Vue.extend({
    computed: {
      refs: function refs() {
        var oldVval = this._vval;
        this._vval = this.children;
        (0, _vval.patchChildren)(oldVval, this._vval);
        var refs = {};

        this._vval.forEach(function (c) {
          refs[c.key] = c.vm;
        });

        return refs;
      }
    },
    beforeCreate: function beforeCreate() {
      this._vval = null;
    },
    beforeDestroy: function beforeDestroy() {
      if (this._vval) {
        (0, _vval.patchChildren)(this._vval);
        this._vval = null;
      }
    },
    methods: {
      getModel: function getModel() {
        return this.lazyModel ? this.lazyModel(this.prop) : this.model;
      },
      getModelKey: function getModelKey(key) {
        var model = this.getModel();

        if (model) {
          return model[key];
        }
      },
      hasIter: function hasIter() {
        return false;
      }
    }
  });
  var ValidationRule = VBase.extend({
    data: function data() {
      return {
        rule: null,
        lazyModel: null,
        model: null,
        lazyParentModel: null,
        rootModel: null
      };
    },
    methods: {
      runRule: function runRule(parent) {
        var model = this.getModel();
        (0, _params.pushParams)();
        var rawOutput = this.rule.call(this.rootModel, model, parent);
        var output = isPromise(rawOutput) ? makePendingAsyncVm(Vue, rawOutput) : rawOutput;
        var rawParams = (0, _params.popParams)();
        var params = rawParams && rawParams.$sub ? rawParams.$sub.length > 1 ? rawParams : rawParams.$sub[0] : null;
        return {
          output: output,
          params: params
        };
      }
    },
    computed: {
      run: function run() {
        var _this7 = this;

        var parent = this.lazyParentModel();

        var isArrayDependant = Array.isArray(parent) && parent.__ob__;

        if (isArrayDependant) {
          var arrayDep = parent.__ob__.dep;
          arrayDep.depend();
          var target = arrayDep.constructor.target;

          if (!this._indirectWatcher) {
            var Watcher = target.constructor;
            this._indirectWatcher = new Watcher(this, function () {
              return _this7.runRule(parent);
            }, null, {
              lazy: true
            });
          }

          var model = this.getModel();

          if (!this._indirectWatcher.dirty && this._lastModel === model) {
            this._indirectWatcher.depend();

            return target.value;
          }

          this._lastModel = model;

          this._indirectWatcher.evaluate();

          this._indirectWatcher.depend();
        } else if (this._indirectWatcher) {
          this._indirectWatcher.teardown();

          this._indirectWatcher = null;
        }

        return this._indirectWatcher ? this._indirectWatcher.value : this.runRule(parent);
      },
      $params: function $params() {
        return this.run.params;
      },
      proxy: function proxy() {
        var output = this.run.output;

        if (output[__isVuelidateAsyncVm]) {
          return !!output.v;
        }

        return !!output;
      },
      $pending: function $pending() {
        var output = this.run.output;

        if (output[__isVuelidateAsyncVm]) {
          return output.p;
        }

        return false;
      }
    },
    destroyed: function destroyed() {
      if (this._indirectWatcher) {
        this._indirectWatcher.teardown();

        this._indirectWatcher = null;
      }
    }
  });
  var Validation = VBase.extend({
    data: function data() {
      return {
        dirty: false,
        validations: null,
        lazyModel: null,
        model: null,
        prop: null,
        lazyParentModel: null,
        rootModel: null
      };
    },
    methods: _objectSpread(_objectSpread({}, validationMethods), {}, {
      refProxy: function refProxy(key) {
        return this.getRef(key).proxy;
      },
      getRef: function getRef(key) {
        return this.refs[key];
      },
      isNested: function isNested(key) {
        return typeof this.validations[key] !== 'function';
      }
    }),
    computed: _objectSpread(_objectSpread({}, validationGetters), {}, {
      nestedKeys: function nestedKeys() {
        return this.keys.filter(this.isNested);
      },
      ruleKeys: function ruleKeys() {
        var _this8 = this;

        return this.keys.filter(function (k) {
          return !_this8.isNested(k);
        });
      },
      keys: function keys() {
        return Object.keys(this.validations).filter(function (k) {
          return k !== '$params';
        });
      },
      proxy: function proxy() {
        var _this9 = this;

        var keyDefs = buildFromKeys(this.keys, function (key) {
          return {
            enumerable: true,
            configurable: true,
            get: function get() {
              return _this9.refProxy(key);
            }
          };
        });
        var getterDefs = buildFromKeys(getterNames, function (key) {
          return {
            enumerable: true,
            configurable: true,
            get: function get() {
              return _this9[key];
            }
          };
        });
        var methodDefs = buildFromKeys(methodNames, function (key) {
          return {
            enumerable: false,
            configurable: true,
            get: function get() {
              return _this9[key];
            }
          };
        });
        var iterDefs = this.hasIter() ? {
          $iter: {
            enumerable: true,
            value: Object.defineProperties({}, _objectSpread({}, keyDefs))
          }
        } : {};
        return Object.defineProperties({}, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, keyDefs), iterDefs), {}, {
          $model: {
            enumerable: true,
            get: function get() {
              var parent = _this9.lazyParentModel();

              if (parent != null) {
                return parent[_this9.prop];
              } else {
                return null;
              }
            },
            set: function set(value) {
              var parent = _this9.lazyParentModel();

              if (parent != null) {
                parent[_this9.prop] = value;

                _this9.$touch();
              }
            }
          }
        }, getterDefs), methodDefs));
      },
      children: function children() {
        var _this10 = this;

        return [].concat(_toConsumableArray(this.nestedKeys.map(function (key) {
          return renderNested(_this10, key);
        })), _toConsumableArray(this.ruleKeys.map(function (key) {
          return renderRule(_this10, key);
        }))).filter(Boolean);
      }
    })
  });
  var GroupValidation = Validation.extend({
    methods: {
      isNested: function isNested(key) {
        return typeof this.validations[key]() !== 'undefined';
      },
      getRef: function getRef(key) {
        var vm = this;
        return {
          get proxy() {
            return vm.validations[key]() || false;
          }

        };
      }
    }
  });
  var EachValidation = Validation.extend({
    computed: {
      keys: function keys() {
        var model = this.getModel();

        if (isObject(model)) {
          return Object.keys(model);
        } else {
          return [];
        }
      },
      tracker: function tracker() {
        var _this11 = this;

        var trackBy = this.validations.$trackBy;
        return trackBy ? function (key) {
          return "".concat(getPath(_this11.rootModel, _this11.getModelKey(key), trackBy));
        } : function (x) {
          return "".concat(x);
        };
      },
      getModelLazy: function getModelLazy() {
        var _this12 = this;

        return function () {
          return _this12.getModel();
        };
      },
      children: function children() {
        var _this13 = this;

        var def = this.validations;
        var model = this.getModel();

        var validations = _objectSpread({}, def);

        delete validations['$trackBy'];
        var usedTracks = {};
        return this.keys.map(function (key) {
          var track = _this13.tracker(key);

          if (usedTracks.hasOwnProperty(track)) {
            return null;
          }

          usedTracks[track] = true;
          return (0, _vval.h)(Validation, track, {
            validations: validations,
            prop: key,
            lazyParentModel: _this13.getModelLazy,
            model: model[key],
            rootModel: _this13.rootModel
          });
        }).filter(Boolean);
      }
    },
    methods: {
      isNested: function isNested() {
        return true;
      },
      getRef: function getRef(key) {
        return this.refs[this.tracker(key)];
      },
      hasIter: function hasIter() {
        return true;
      }
    }
  });

  var renderNested = function renderNested(vm, key) {
    if (key === '$each') {
      return (0, _vval.h)(EachValidation, key, {
        validations: vm.validations[key],
        lazyParentModel: vm.lazyParentModel,
        prop: key,
        lazyModel: vm.getModel,
        rootModel: vm.rootModel
      });
    }

    var validations = vm.validations[key];

    if (Array.isArray(validations)) {
      var root = vm.rootModel;
      var refVals = buildFromKeys(validations, function (path) {
        return function () {
          return getPath(root, root.$v, path);
        };
      }, function (v) {
        return Array.isArray(v) ? v.join('.') : v;
      });
      return (0, _vval.h)(GroupValidation, key, {
        validations: refVals,
        lazyParentModel: NIL,
        prop: key,
        lazyModel: NIL,
        rootModel: root
      });
    }

    return (0, _vval.h)(Validation, key, {
      validations: validations,
      lazyParentModel: vm.getModel,
      prop: key,
      lazyModel: vm.getModelKey,
      rootModel: vm.rootModel
    });
  };

  var renderRule = function renderRule(vm, key) {
    return (0, _vval.h)(ValidationRule, key, {
      rule: vm.validations[key],
      lazyParentModel: vm.lazyParentModel,
      lazyModel: vm.getModel,
      rootModel: vm.rootModel
    });
  };

  _cachedComponent = {
    VBase: VBase,
    Validation: Validation
  };
  return _cachedComponent;
};

var _cachedVue = null;

function getVue(rootVm) {
  if (_cachedVue) return _cachedVue;
  var Vue = rootVm.constructor;

  while (Vue.super) {
    Vue = Vue.super;
  }

  _cachedVue = Vue;
  return Vue;
}

var validateModel = function validateModel(model, validations) {
  var Vue = getVue(model);

  var _getComponent = getComponent(Vue),
      Validation = _getComponent.Validation,
      VBase = _getComponent.VBase;

  var root = new VBase({
    computed: {
      children: function children() {
        var vals = typeof validations === 'function' ? validations.call(model) : validations;
        return [(0, _vval.h)(Validation, '$v', {
          validations: vals,
          lazyParentModel: NIL,
          prop: '$v',
          model: model,
          rootModel: model
        })];
      }
    }
  });
  return root;
};

var validationMixin = {
  data: function data() {
    var vals = this.$options.validations;

    if (vals) {
      this._vuelidate = validateModel(this, vals);
    }

    return {};
  },
  beforeCreate: function beforeCreate() {
    var options = this.$options;
    var vals = options.validations;
    if (!vals) return;
    if (!options.computed) options.computed = {};
    if (options.computed.$v) return;

    options.computed.$v = function () {
      return this._vuelidate ? this._vuelidate.refs.$v.proxy : null;
    };
  },
  beforeDestroy: function beforeDestroy() {
    if (this._vuelidate) {
      this._vuelidate.$destroy();

      this._vuelidate = null;
    }
  }
};
exports.validationMixin = validationMixin;

function Vuelidate(Vue) {
  Vue.mixin(validationMixin);
}

var _default = Vuelidate;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/params.js":
/*!**********************************************!*\
  !*** ./node_modules/vuelidate/lib/params.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports._setTarget = void 0;
exports.popParams = popParams;
exports.pushParams = pushParams;
exports.target = void 0;
exports.withParams = withParams;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var stack = [];
var target = null;
exports.target = target;

var _setTarget = function _setTarget(x) {
  exports.target = target = x;
};

exports._setTarget = _setTarget;

function pushParams() {
  if (target !== null) {
    stack.push(target);
  }

  exports.target = target = {};
}

function popParams() {
  var lastTarget = target;
  var newTarget = exports.target = target = stack.pop() || null;

  if (newTarget) {
    if (!Array.isArray(newTarget.$sub)) {
      newTarget.$sub = [];
    }

    newTarget.$sub.push(lastTarget);
  }

  return lastTarget;
}

function addParams(params) {
  if (_typeof(params) === 'object' && !Array.isArray(params)) {
    exports.target = target = _objectSpread(_objectSpread({}, target), params);
  } else {
    throw new Error('params must be an object');
  }
}

function withParamsDirect(params, validator) {
  return withParamsClosure(function (add) {
    return function () {
      add(params);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return validator.apply(this, args);
    };
  });
}

function withParamsClosure(closure) {
  var validator = closure(addParams);
  return function () {
    pushParams();

    try {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return validator.apply(this, args);
    } finally {
      popParams();
    }
  };
}

function withParams(paramsOrClosure, maybeValidator) {
  if (_typeof(paramsOrClosure) === 'object' && maybeValidator !== undefined) {
    return withParamsDirect(paramsOrClosure, maybeValidator);
  }

  return withParamsClosure(paramsOrClosure);
}

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/alpha.js":
/*!********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/alpha.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('alpha', /^[a-zA-Z]*$/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/alphaNum.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/alphaNum.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('alphaNum', /^[a-zA-Z0-9]*$/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/and.js":
/*!******************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/and.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default() {
  for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return (0, _common.withParams)({
    type: 'and'
  }, function () {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.length > 0 && validators.reduce(function (valid, fn) {
      return valid && fn.apply(_this, args);
    }, true);
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/between.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/between.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(min, max) {
  return (0, _common.withParams)({
    type: 'between',
    min: min,
    max: max
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +min <= +value && +max >= +value;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/common.js":
/*!*********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/common.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.req = exports.regex = exports.ref = exports.len = void 0;
Object.defineProperty(exports, "withParams", ({
  enumerable: true,
  get: function get() {
    return _withParams.default;
  }
}));

var _withParams = _interopRequireDefault(__webpack_require__(/*! ../withParams */ "./node_modules/vuelidate/lib/withParams.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var req = function req(value) {
  if (Array.isArray(value)) return !!value.length;

  if (value === undefined || value === null) {
    return false;
  }

  if (value === false) {
    return true;
  }

  if (value instanceof Date) {
    return !isNaN(value.getTime());
  }

  if (_typeof(value) === 'object') {
    for (var _ in value) {
      return true;
    }

    return false;
  }

  return !!String(value).length;
};

exports.req = req;

var len = function len(value) {
  if (Array.isArray(value)) return value.length;

  if (_typeof(value) === 'object') {
    return Object.keys(value).length;
  }

  return String(value).length;
};

exports.len = len;

var ref = function ref(reference, vm, parentVm) {
  return typeof reference === 'function' ? reference.call(vm, parentVm) : parentVm[reference];
};

exports.ref = ref;

var regex = function regex(type, expr) {
  return (0, _withParams.default)({
    type: type
  }, function (value) {
    return !req(value) || expr.test(value);
  });
};

exports.regex = regex;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/decimal.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/decimal.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('decimal', /^[-]?\d*(\.\d+)?$/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/email.js":
/*!********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/email.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var emailRegex = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;

var _default = (0, _common.regex)('email', emailRegex);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/index.js":
/*!********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "alpha", ({
  enumerable: true,
  get: function get() {
    return _alpha.default;
  }
}));
Object.defineProperty(exports, "alphaNum", ({
  enumerable: true,
  get: function get() {
    return _alphaNum.default;
  }
}));
Object.defineProperty(exports, "and", ({
  enumerable: true,
  get: function get() {
    return _and.default;
  }
}));
Object.defineProperty(exports, "between", ({
  enumerable: true,
  get: function get() {
    return _between.default;
  }
}));
Object.defineProperty(exports, "decimal", ({
  enumerable: true,
  get: function get() {
    return _decimal.default;
  }
}));
Object.defineProperty(exports, "email", ({
  enumerable: true,
  get: function get() {
    return _email.default;
  }
}));
exports.helpers = void 0;
Object.defineProperty(exports, "integer", ({
  enumerable: true,
  get: function get() {
    return _integer.default;
  }
}));
Object.defineProperty(exports, "ipAddress", ({
  enumerable: true,
  get: function get() {
    return _ipAddress.default;
  }
}));
Object.defineProperty(exports, "macAddress", ({
  enumerable: true,
  get: function get() {
    return _macAddress.default;
  }
}));
Object.defineProperty(exports, "maxLength", ({
  enumerable: true,
  get: function get() {
    return _maxLength.default;
  }
}));
Object.defineProperty(exports, "maxValue", ({
  enumerable: true,
  get: function get() {
    return _maxValue.default;
  }
}));
Object.defineProperty(exports, "minLength", ({
  enumerable: true,
  get: function get() {
    return _minLength.default;
  }
}));
Object.defineProperty(exports, "minValue", ({
  enumerable: true,
  get: function get() {
    return _minValue.default;
  }
}));
Object.defineProperty(exports, "not", ({
  enumerable: true,
  get: function get() {
    return _not.default;
  }
}));
Object.defineProperty(exports, "numeric", ({
  enumerable: true,
  get: function get() {
    return _numeric.default;
  }
}));
Object.defineProperty(exports, "or", ({
  enumerable: true,
  get: function get() {
    return _or.default;
  }
}));
Object.defineProperty(exports, "required", ({
  enumerable: true,
  get: function get() {
    return _required.default;
  }
}));
Object.defineProperty(exports, "requiredIf", ({
  enumerable: true,
  get: function get() {
    return _requiredIf.default;
  }
}));
Object.defineProperty(exports, "requiredUnless", ({
  enumerable: true,
  get: function get() {
    return _requiredUnless.default;
  }
}));
Object.defineProperty(exports, "sameAs", ({
  enumerable: true,
  get: function get() {
    return _sameAs.default;
  }
}));
Object.defineProperty(exports, "url", ({
  enumerable: true,
  get: function get() {
    return _url.default;
  }
}));

var _alpha = _interopRequireDefault(__webpack_require__(/*! ./alpha */ "./node_modules/vuelidate/lib/validators/alpha.js"));

var _alphaNum = _interopRequireDefault(__webpack_require__(/*! ./alphaNum */ "./node_modules/vuelidate/lib/validators/alphaNum.js"));

var _numeric = _interopRequireDefault(__webpack_require__(/*! ./numeric */ "./node_modules/vuelidate/lib/validators/numeric.js"));

var _between = _interopRequireDefault(__webpack_require__(/*! ./between */ "./node_modules/vuelidate/lib/validators/between.js"));

var _email = _interopRequireDefault(__webpack_require__(/*! ./email */ "./node_modules/vuelidate/lib/validators/email.js"));

var _ipAddress = _interopRequireDefault(__webpack_require__(/*! ./ipAddress */ "./node_modules/vuelidate/lib/validators/ipAddress.js"));

var _macAddress = _interopRequireDefault(__webpack_require__(/*! ./macAddress */ "./node_modules/vuelidate/lib/validators/macAddress.js"));

var _maxLength = _interopRequireDefault(__webpack_require__(/*! ./maxLength */ "./node_modules/vuelidate/lib/validators/maxLength.js"));

var _minLength = _interopRequireDefault(__webpack_require__(/*! ./minLength */ "./node_modules/vuelidate/lib/validators/minLength.js"));

var _required = _interopRequireDefault(__webpack_require__(/*! ./required */ "./node_modules/vuelidate/lib/validators/required.js"));

var _requiredIf = _interopRequireDefault(__webpack_require__(/*! ./requiredIf */ "./node_modules/vuelidate/lib/validators/requiredIf.js"));

var _requiredUnless = _interopRequireDefault(__webpack_require__(/*! ./requiredUnless */ "./node_modules/vuelidate/lib/validators/requiredUnless.js"));

var _sameAs = _interopRequireDefault(__webpack_require__(/*! ./sameAs */ "./node_modules/vuelidate/lib/validators/sameAs.js"));

var _url = _interopRequireDefault(__webpack_require__(/*! ./url */ "./node_modules/vuelidate/lib/validators/url.js"));

var _or = _interopRequireDefault(__webpack_require__(/*! ./or */ "./node_modules/vuelidate/lib/validators/or.js"));

var _and = _interopRequireDefault(__webpack_require__(/*! ./and */ "./node_modules/vuelidate/lib/validators/and.js"));

var _not = _interopRequireDefault(__webpack_require__(/*! ./not */ "./node_modules/vuelidate/lib/validators/not.js"));

var _minValue = _interopRequireDefault(__webpack_require__(/*! ./minValue */ "./node_modules/vuelidate/lib/validators/minValue.js"));

var _maxValue = _interopRequireDefault(__webpack_require__(/*! ./maxValue */ "./node_modules/vuelidate/lib/validators/maxValue.js"));

var _integer = _interopRequireDefault(__webpack_require__(/*! ./integer */ "./node_modules/vuelidate/lib/validators/integer.js"));

var _decimal = _interopRequireDefault(__webpack_require__(/*! ./decimal */ "./node_modules/vuelidate/lib/validators/decimal.js"));

var helpers = _interopRequireWildcard(__webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js"));

exports.helpers = helpers;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/integer.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/integer.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('integer', /(^[0-9]*$)|(^-[0-9]+$)/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/ipAddress.js":
/*!************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/ipAddress.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.withParams)({
  type: 'ipAddress'
}, function (value) {
  if (!(0, _common.req)(value)) {
    return true;
  }

  if (typeof value !== 'string') {
    return false;
  }

  var nibbles = value.split('.');
  return nibbles.length === 4 && nibbles.every(nibbleValid);
});

exports["default"] = _default;

var nibbleValid = function nibbleValid(nibble) {
  if (nibble.length > 3 || nibble.length === 0) {
    return false;
  }

  if (nibble[0] === '0' && nibble !== '0') {
    return false;
  }

  if (!nibble.match(/^\d+$/)) {
    return false;
  }

  var numeric = +nibble | 0;
  return numeric >= 0 && numeric <= 255;
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/macAddress.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/macAddress.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default() {
  var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ':';
  return (0, _common.withParams)({
    type: 'macAddress'
  }, function (value) {
    if (!(0, _common.req)(value)) {
      return true;
    }

    if (typeof value !== 'string') {
      return false;
    }

    var parts = typeof separator === 'string' && separator !== '' ? value.split(separator) : value.length === 12 || value.length === 16 ? value.match(/.{2}/g) : null;
    return parts !== null && (parts.length === 6 || parts.length === 8) && parts.every(hexValid);
  });
};

exports["default"] = _default;

var hexValid = function hexValid(hex) {
  return hex.toLowerCase().match(/^[0-9a-f]{2}$/);
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/maxLength.js":
/*!************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/maxLength.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(length) {
  return (0, _common.withParams)({
    type: 'maxLength',
    max: length
  }, function (value) {
    return !(0, _common.req)(value) || (0, _common.len)(value) <= length;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/maxValue.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/maxValue.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(max) {
  return (0, _common.withParams)({
    type: 'maxValue',
    max: max
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value <= +max;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/minLength.js":
/*!************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/minLength.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(length) {
  return (0, _common.withParams)({
    type: 'minLength',
    min: length
  }, function (value) {
    return !(0, _common.req)(value) || (0, _common.len)(value) >= length;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/minValue.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/minValue.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(min) {
  return (0, _common.withParams)({
    type: 'minValue',
    min: min
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value >= +min;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/not.js":
/*!******************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/not.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(validator) {
  return (0, _common.withParams)({
    type: 'not'
  }, function (value, vm) {
    return !(0, _common.req)(value) || !validator.call(this, value, vm);
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/numeric.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/numeric.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('numeric', /^[0-9]*$/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/or.js":
/*!*****************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/or.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default() {
  for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return (0, _common.withParams)({
    type: 'or'
  }, function () {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.length > 0 && validators.reduce(function (valid, fn) {
      return valid || fn.apply(_this, args);
    }, false);
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/required.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/required.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.withParams)({
  type: 'required'
}, function (value) {
  if (typeof value === 'string') {
    return (0, _common.req)(value.trim());
  }

  return (0, _common.req)(value);
});

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/requiredIf.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/requiredIf.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(prop) {
  return (0, _common.withParams)({
    type: 'requiredIf',
    prop: prop
  }, function (value, parentVm) {
    return (0, _common.ref)(prop, this, parentVm) ? (0, _common.req)(value) : true;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/requiredUnless.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/requiredUnless.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(prop) {
  return (0, _common.withParams)({
    type: 'requiredUnless',
    prop: prop
  }, function (value, parentVm) {
    return !(0, _common.ref)(prop, this, parentVm) ? (0, _common.req)(value) : true;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/sameAs.js":
/*!*********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/sameAs.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(equalTo) {
  return (0, _common.withParams)({
    type: 'sameAs',
    eq: equalTo
  }, function (value, parentVm) {
    return value === (0, _common.ref)(equalTo, this, parentVm);
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/url.js":
/*!******************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/url.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

var _default = (0, _common.regex)('url', urlRegex);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/vval.js":
/*!********************************************!*\
  !*** ./node_modules/vuelidate/lib/vval.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.h = h;
exports.patchChildren = patchChildren;

function isUndef(v) {
  return v === null || v === undefined;
}

function isDef(v) {
  return v !== null && v !== undefined;
}

function sameVval(oldVval, vval) {
  return vval.tag === oldVval.tag && vval.key === oldVval.key;
}

function createVm(vval) {
  var Vm = vval.tag;
  vval.vm = new Vm({
    data: vval.args
  });
}

function updateVval(vval) {
  var keys = Object.keys(vval.args);

  for (var i = 0; i < keys.length; i++) {
    keys.forEach(function (k) {
      vval.vm[k] = vval.args[k];
    });
  }
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};

  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) map[key] = i;
  }

  return map;
}

function updateChildren(oldCh, newCh) {
  var oldStartIdx = 0;
  var newStartIdx = 0;
  var oldEndIdx = oldCh.length - 1;
  var oldStartVval = oldCh[0];
  var oldEndVval = oldCh[oldEndIdx];
  var newEndIdx = newCh.length - 1;
  var newStartVval = newCh[0];
  var newEndVval = newCh[newEndIdx];
  var oldKeyToIdx, idxInOld, elmToMove;

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (isUndef(oldStartVval)) {
      oldStartVval = oldCh[++oldStartIdx];
    } else if (isUndef(oldEndVval)) {
      oldEndVval = oldCh[--oldEndIdx];
    } else if (sameVval(oldStartVval, newStartVval)) {
      patchVval(oldStartVval, newStartVval);
      oldStartVval = oldCh[++oldStartIdx];
      newStartVval = newCh[++newStartIdx];
    } else if (sameVval(oldEndVval, newEndVval)) {
      patchVval(oldEndVval, newEndVval);
      oldEndVval = oldCh[--oldEndIdx];
      newEndVval = newCh[--newEndIdx];
    } else if (sameVval(oldStartVval, newEndVval)) {
      patchVval(oldStartVval, newEndVval);
      oldStartVval = oldCh[++oldStartIdx];
      newEndVval = newCh[--newEndIdx];
    } else if (sameVval(oldEndVval, newStartVval)) {
      patchVval(oldEndVval, newStartVval);
      oldEndVval = oldCh[--oldEndIdx];
      newStartVval = newCh[++newStartIdx];
    } else {
      if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
      idxInOld = isDef(newStartVval.key) ? oldKeyToIdx[newStartVval.key] : null;

      if (isUndef(idxInOld)) {
        createVm(newStartVval);
        newStartVval = newCh[++newStartIdx];
      } else {
        elmToMove = oldCh[idxInOld];

        if (sameVval(elmToMove, newStartVval)) {
          patchVval(elmToMove, newStartVval);
          oldCh[idxInOld] = undefined;
          newStartVval = newCh[++newStartIdx];
        } else {
          createVm(newStartVval);
          newStartVval = newCh[++newStartIdx];
        }
      }
    }
  }

  if (oldStartIdx > oldEndIdx) {
    addVvals(newCh, newStartIdx, newEndIdx);
  } else if (newStartIdx > newEndIdx) {
    removeVvals(oldCh, oldStartIdx, oldEndIdx);
  }
}

function addVvals(vvals, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    createVm(vvals[startIdx]);
  }
}

function removeVvals(vvals, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    var ch = vvals[startIdx];

    if (isDef(ch)) {
      ch.vm.$destroy();
      ch.vm = null;
    }
  }
}

function patchVval(oldVval, vval) {
  if (oldVval === vval) {
    return;
  }

  vval.vm = oldVval.vm;
  updateVval(vval);
}

function patchChildren(oldCh, ch) {
  if (isDef(oldCh) && isDef(ch)) {
    if (oldCh !== ch) updateChildren(oldCh, ch);
  } else if (isDef(ch)) {
    addVvals(ch, 0, ch.length - 1);
  } else if (isDef(oldCh)) {
    removeVvals(oldCh, 0, oldCh.length - 1);
  }
}

function h(tag, key, args) {
  return {
    tag: tag,
    key: key,
    args: args
  };
}

/***/ }),

/***/ "./node_modules/vuelidate/lib/withParams.js":
/*!**************************************************!*\
  !*** ./node_modules/vuelidate/lib/withParams.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var withParams = process.env.BUILD === 'web' ? (__webpack_require__(/*! ./withParamsBrowser */ "./node_modules/vuelidate/lib/withParamsBrowser.js").withParams) : (__webpack_require__(/*! ./params */ "./node_modules/vuelidate/lib/params.js").withParams);
var _default = withParams;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/withParamsBrowser.js":
/*!*********************************************************!*\
  !*** ./node_modules/vuelidate/lib/withParamsBrowser.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.withParams = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var root = typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {};

var fakeWithParams = function fakeWithParams(paramsOrClosure, maybeValidator) {
  if (_typeof(paramsOrClosure) === 'object' && maybeValidator !== undefined) {
    return maybeValidator;
  }

  return paramsOrClosure(function () {});
};

var withParams = root.vuelidate ? root.vuelidate.withParams : fakeWithParams;
exports.withParams = withParams;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/***/ (function(module) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ (function(module) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/***/ (function(module) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/***/ (function(module) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ (function(module) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/toPrimitive.js");
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/watch-size/index.es.mjs":
/*!**********************************************!*\
  !*** ./node_modules/watch-size/index.es.mjs ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var index = (function (element, listener) {
	var expand = document.createElement('_');
	var shrink = expand.appendChild(document.createElement('_'));
	var expandChild = expand.appendChild(document.createElement('_'));
	var shrinkChild = shrink.appendChild(document.createElement('_'));

	var lastWidth = void 0,
	    lastHeight = void 0;

	shrink.style.cssText = expand.style.cssText = 'height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1';
	shrinkChild.style.cssText = expandChild.style.cssText = 'display:block;height:100%;transition:0s;width:100%';
	shrinkChild.style.width = shrinkChild.style.height = '200%';

	element.appendChild(expand);

	test();

	return stop;

	function test() {
		unbind();

		var width = element.offsetWidth;
		var height = element.offsetHeight;

		if (width !== lastWidth || height !== lastHeight) {
			lastWidth = width;
			lastHeight = height;

			expandChild.style.width = width * 2 + 'px';
			expandChild.style.height = height * 2 + 'px';

			expand.scrollLeft = expand.scrollWidth;
			expand.scrollTop = expand.scrollHeight;
			shrink.scrollLeft = shrink.scrollWidth;
			shrink.scrollTop = shrink.scrollHeight;

			listener({ width: width, height: height });
		}

		shrink.addEventListener('scroll', test);
		expand.addEventListener('scroll', test);
	}

	function unbind() {
		shrink.removeEventListener('scroll', test);
		expand.removeEventListener('scroll', test);
	}

	function stop() {
		unbind();

		element.removeChild(expand);
	}
});

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ })

}]);