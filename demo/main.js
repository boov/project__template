/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
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
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/gutter.js":
/*!*************************************!*\
  !*** ./src/js/components/gutter.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gutter; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Gutter = function Gutter() {
  _classCallCheck(this, Gutter);

  this.gutterToggles = document.querySelectorAll(".js_gutter-toggle");
  this.gutterToggles.forEach(function (gutterToggle) {
    gutterToggle.addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector(".c_gutter#" + this.dataset.target).classList.toggle("c_gutter--reveal");
    });
  });
};


;

/***/ }),

/***/ "./src/js/components/modal.js":
/*!************************************!*\
  !*** ./src/js/components/modal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modal = function Modal() {
  _classCallCheck(this, Modal);

  this.modalsToggles = document.querySelectorAll(".js_toggle-modal");
  this.modals = document.querySelectorAll(".c_modal");
  this.modalsToggles.forEach(function (modalsToggle) {
    modalsToggle.addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector(".c_modal#" + this.dataset.target).classList.toggle("c_modal--reveal");
    });
  });
  this.modals.forEach(function (modal) {
    modal.querySelector(".c_modal__close").addEventListener("click", function (event) {
      event.preventDefault();
      modal.classList.toggle("c_modal--reveal");
    });
  });
};


;

/***/ }),

/***/ "./src/js/components/notification.js":
/*!*******************************************!*\
  !*** ./src/js/components/notification.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Notification; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Notification =
/*#__PURE__*/
function () {
  function Notification() {
    _classCallCheck(this, Notification);

    this.notifications = document.querySelectorAll(".c_notification");
    this.notifications.forEach(function (notification) {
      notification.querySelector(".c_notification__close").addEventListener("click", function (event) {
        event.preventDefault();
        this.hide();
      });
    });
  }

  _createClass(Notification, [{
    key: "hide",
    value: function hide(notification) {
      notification.classList.toggle("c_notification--deleted");
    }
  }]);

  return Notification;
}();


;

/***/ }),

/***/ "./src/js/components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tabs; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tabs =
/*#__PURE__*/
function () {
  function Tabs(height, width) {
    _classCallCheck(this, Tabs);

    this.height = height;
    this.width = width;
  }

  _createClass(Tabs, [{
    key: "area",
    get: function get() {
      return this.calcArea();
    }
  }], [{
    key: "calcArea",
    value: function calcArea() {
      return this.height * this.width;
    }
  }]);

  return Tabs;
}();


;

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_gutter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/gutter.js */ "./src/js/components/gutter.js");
/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal.js */ "./src/js/components/modal.js");
/* harmony import */ var _components_notification_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/notification.js */ "./src/js/components/notification.js");
/* harmony import */ var _components_tabs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tabs.js */ "./src/js/components/tabs.js");





/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/main.js ./src/scss/main.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/matthew/repositories/github/framework/src/js/main.js */"./src/js/main.js");
module.exports = __webpack_require__(/*! /home/matthew/repositories/github/framework/src/scss/main.scss */"./src/scss/main.scss");


/***/ })

/******/ });