/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Apollo JS v0.2.2
	 */

	///
	/// Bootstrap jQuery Plugins
	///

	__webpack_require__( 1 );
	__webpack_require__( 3 );


	///
	/// Custom scripts
	///

	var offCanvas = __webpack_require__( 4 );

	$( document ).ready( function() {
	  offCanvas.init();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module, require('./util'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod, global.Util);
	    global.dropdown = mod.exports;
	  }
	})(this, function (exports, module, _util) {
	  'use strict';

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var _Util = _interopRequireDefault(_util);

	  /**
	   * --------------------------------------------------------------------------
	   * Bootstrap (v4.0.0-alpha.2): dropdown.js
	   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	   * --------------------------------------------------------------------------
	   */

	  var Dropdown = (function ($) {

	    /**
	     * ------------------------------------------------------------------------
	     * Constants
	     * ------------------------------------------------------------------------
	     */

	    var NAME = 'dropdown';
	    var VERSION = '4.0.0-alpha';
	    var DATA_KEY = 'bs.dropdown';
	    var EVENT_KEY = '.' + DATA_KEY;
	    var DATA_API_KEY = '.data-api';
	    var JQUERY_NO_CONFLICT = $.fn[NAME];

	    var Event = {
	      HIDE: 'hide' + EVENT_KEY,
	      HIDDEN: 'hidden' + EVENT_KEY,
	      SHOW: 'show' + EVENT_KEY,
	      SHOWN: 'shown' + EVENT_KEY,
	      CLICK: 'click' + EVENT_KEY,
	      CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
	      KEYDOWN_DATA_API: 'keydown' + EVENT_KEY + DATA_API_KEY
	    };

	    var ClassName = {
	      BACKDROP: 'dropdown-backdrop',
	      DISABLED: 'disabled',
	      OPEN: 'open'
	    };

	    var Selector = {
	      BACKDROP: '.dropdown-backdrop',
	      DATA_TOGGLE: '[data-toggle="dropdown"]',
	      FORM_CHILD: '.dropdown form',
	      ROLE_MENU: '[role="menu"]',
	      ROLE_LISTBOX: '[role="listbox"]',
	      NAVBAR_NAV: '.navbar-nav',
	      VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, ' + '[role="listbox"] li:not(.disabled) a'
	    };

	    /**
	     * ------------------------------------------------------------------------
	     * Class Definition
	     * ------------------------------------------------------------------------
	     */

	    var Dropdown = (function () {
	      function Dropdown(element) {
	        _classCallCheck(this, Dropdown);

	        this._element = element;

	        this._addEventListeners();
	      }

	      /**
	       * ------------------------------------------------------------------------
	       * Data Api implementation
	       * ------------------------------------------------------------------------
	       */

	      // getters

	      _createClass(Dropdown, [{
	        key: 'toggle',

	        // public

	        value: function toggle() {
	          if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
	            return false;
	          }

	          var parent = Dropdown._getParentFromElement(this);
	          var isActive = $(parent).hasClass(ClassName.OPEN);

	          Dropdown._clearMenus();

	          if (isActive) {
	            return false;
	          }

	          if ('ontouchstart' in document.documentElement && !$(parent).closest(Selector.NAVBAR_NAV).length) {

	            // if mobile we use a backdrop because click events don't delegate
	            var dropdown = document.createElement('div');
	            dropdown.className = ClassName.BACKDROP;
	            $(dropdown).insertBefore(this);
	            $(dropdown).on('click', Dropdown._clearMenus);
	          }

	          var relatedTarget = { relatedTarget: this };
	          var showEvent = $.Event(Event.SHOW, relatedTarget);

	          $(parent).trigger(showEvent);

	          if (showEvent.isDefaultPrevented()) {
	            return false;
	          }

	          this.focus();
	          this.setAttribute('aria-expanded', 'true');

	          $(parent).toggleClass(ClassName.OPEN);
	          $(parent).trigger($.Event(Event.SHOWN, relatedTarget));

	          return false;
	        }
	      }, {
	        key: 'dispose',
	        value: function dispose() {
	          $.removeData(this._element, DATA_KEY);
	          $(this._element).off(EVENT_KEY);
	          this._element = null;
	        }

	        // private

	      }, {
	        key: '_addEventListeners',
	        value: function _addEventListeners() {
	          $(this._element).on(Event.CLICK, this.toggle);
	        }

	        // static

	      }], [{
	        key: '_jQueryInterface',
	        value: function _jQueryInterface(config) {
	          return this.each(function () {
	            var data = $(this).data(DATA_KEY);

	            if (!data) {
	              $(this).data(DATA_KEY, data = new Dropdown(this));
	            }

	            if (typeof config === 'string') {
	              if (data[config] === undefined) {
	                throw new Error('No method named "' + config + '"');
	              }
	              data[config].call(this);
	            }
	          });
	        }
	      }, {
	        key: '_clearMenus',
	        value: function _clearMenus(event) {
	          if (event && event.which === 3) {
	            return;
	          }

	          var backdrop = $(Selector.BACKDROP)[0];
	          if (backdrop) {
	            backdrop.parentNode.removeChild(backdrop);
	          }

	          var toggles = $.makeArray($(Selector.DATA_TOGGLE));

	          for (var i = 0; i < toggles.length; i++) {
	            var _parent = Dropdown._getParentFromElement(toggles[i]);
	            var relatedTarget = { relatedTarget: toggles[i] };

	            if (!$(_parent).hasClass(ClassName.OPEN)) {
	              continue;
	            }

	            if (event && event.type === 'click' && /input|textarea/i.test(event.target.tagName) && $.contains(_parent, event.target)) {
	              continue;
	            }

	            var hideEvent = $.Event(Event.HIDE, relatedTarget);
	            $(_parent).trigger(hideEvent);
	            if (hideEvent.isDefaultPrevented()) {
	              continue;
	            }

	            toggles[i].setAttribute('aria-expanded', 'false');

	            $(_parent).removeClass(ClassName.OPEN).trigger($.Event(Event.HIDDEN, relatedTarget));
	          }
	        }
	      }, {
	        key: '_getParentFromElement',
	        value: function _getParentFromElement(element) {
	          var parent = undefined;
	          var selector = _Util['default'].getSelectorFromElement(element);

	          if (selector) {
	            parent = $(selector)[0];
	          }

	          return parent || element.parentNode;
	        }
	      }, {
	        key: '_dataApiKeydownHandler',
	        value: function _dataApiKeydownHandler(event) {
	          if (!/(38|40|27|32)/.test(event.which) || /input|textarea/i.test(event.target.tagName)) {
	            return;
	          }

	          event.preventDefault();
	          event.stopPropagation();

	          if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
	            return;
	          }

	          var parent = Dropdown._getParentFromElement(this);
	          var isActive = $(parent).hasClass(ClassName.OPEN);

	          if (!isActive && event.which !== 27 || isActive && event.which === 27) {

	            if (event.which === 27) {
	              var toggle = $(parent).find(Selector.DATA_TOGGLE)[0];
	              $(toggle).trigger('focus');
	            }

	            $(this).trigger('click');
	            return;
	          }

	          var items = $.makeArray($(Selector.VISIBLE_ITEMS));

	          items = items.filter(function (item) {
	            return item.offsetWidth || item.offsetHeight;
	          });

	          if (!items.length) {
	            return;
	          }

	          var index = items.indexOf(event.target);

	          if (event.which === 38 && index > 0) {
	            // up
	            index--;
	          }

	          if (event.which === 40 && index < items.length - 1) {
	            // down
	            index++;
	          }

	          if (! ~index) {
	            index = 0;
	          }

	          items[index].focus();
	        }
	      }, {
	        key: 'VERSION',
	        get: function get() {
	          return VERSION;
	        }
	      }]);

	      return Dropdown;
	    })();

	    $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.ROLE_MENU, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.ROLE_LISTBOX, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, Dropdown.prototype.toggle).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
	      e.stopPropagation();
	    });

	    /**
	     * ------------------------------------------------------------------------
	     * jQuery
	     * ------------------------------------------------------------------------
	     */

	    $.fn[NAME] = Dropdown._jQueryInterface;
	    $.fn[NAME].Constructor = Dropdown;
	    $.fn[NAME].noConflict = function () {
	      $.fn[NAME] = JQUERY_NO_CONFLICT;
	      return Dropdown._jQueryInterface;
	    };

	    return Dropdown;
	  })(jQuery);

	  module.exports = Dropdown;
	});


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod);
	    global.util = mod.exports;
	  }
	})(this, function (exports, module) {
	  /**
	   * --------------------------------------------------------------------------
	   * Bootstrap (v4.0.0-alpha.2): util.js
	   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	   * --------------------------------------------------------------------------
	   */

	  'use strict';

	  var Util = (function ($) {

	    /**
	     * ------------------------------------------------------------------------
	     * Private TransitionEnd Helpers
	     * ------------------------------------------------------------------------
	     */

	    var transition = false;

	    var TransitionEndEvent = {
	      WebkitTransition: 'webkitTransitionEnd',
	      MozTransition: 'transitionend',
	      OTransition: 'oTransitionEnd otransitionend',
	      transition: 'transitionend'
	    };

	    // shoutout AngusCroll (https://goo.gl/pxwQGp)
	    function toType(obj) {
	      return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
	    }

	    function isElement(obj) {
	      return (obj[0] || obj).nodeType;
	    }

	    function getSpecialTransitionEndEvent() {
	      return {
	        bindType: transition.end,
	        delegateType: transition.end,
	        handle: function handle(event) {
	          if ($(event.target).is(this)) {
	            return event.handleObj.handler.apply(this, arguments);
	          }
	        }
	      };
	    }

	    function transitionEndTest() {
	      if (window.QUnit) {
	        return false;
	      }

	      var el = document.createElement('bootstrap');

	      for (var _name in TransitionEndEvent) {
	        if (el.style[_name] !== undefined) {
	          return { end: TransitionEndEvent[_name] };
	        }
	      }

	      return false;
	    }

	    function transitionEndEmulator(duration) {
	      var _this = this;

	      var called = false;

	      $(this).one(Util.TRANSITION_END, function () {
	        called = true;
	      });

	      setTimeout(function () {
	        if (!called) {
	          Util.triggerTransitionEnd(_this);
	        }
	      }, duration);

	      return this;
	    }

	    function setTransitionEndSupport() {
	      transition = transitionEndTest();

	      $.fn.emulateTransitionEnd = transitionEndEmulator;

	      if (Util.supportsTransitionEnd()) {
	        $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
	      }
	    }

	    /**
	     * --------------------------------------------------------------------------
	     * Public Util Api
	     * --------------------------------------------------------------------------
	     */

	    var Util = {

	      TRANSITION_END: 'bsTransitionEnd',

	      getUID: function getUID(prefix) {
	        do {
	          prefix += ~ ~(Math.random() * 1000000); // "~~" acts like a faster Math.floor() here
	        } while (document.getElementById(prefix));
	        return prefix;
	      },

	      getSelectorFromElement: function getSelectorFromElement(element) {
	        var selector = element.getAttribute('data-target');

	        if (!selector) {
	          selector = element.getAttribute('href') || '';
	          selector = /^#[a-z]/i.test(selector) ? selector : null;
	        }

	        return selector;
	      },

	      reflow: function reflow(element) {
	        new Function('bs', 'return bs')(element.offsetHeight);
	      },

	      triggerTransitionEnd: function triggerTransitionEnd(element) {
	        $(element).trigger(transition.end);
	      },

	      supportsTransitionEnd: function supportsTransitionEnd() {
	        return Boolean(transition);
	      },

	      typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
	        for (var property in configTypes) {
	          if (configTypes.hasOwnProperty(property)) {
	            var expectedTypes = configTypes[property];
	            var value = config[property];
	            var valueType = undefined;

	            if (value && isElement(value)) {
	              valueType = 'element';
	            } else {
	              valueType = toType(value);
	            }

	            if (!new RegExp(expectedTypes).test(valueType)) {
	              throw new Error(componentName.toUpperCase() + ': ' + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
	            }
	          }
	        }
	      }
	    };

	    setTransitionEndSupport();

	    return Util;
	  })(jQuery);

	  module.exports = Util;
	});


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module, require('./util'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod, global.Util);
	    global.modal = mod.exports;
	  }
	})(this, function (exports, module, _util) {
	  'use strict';

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var _Util = _interopRequireDefault(_util);

	  /**
	   * --------------------------------------------------------------------------
	   * Bootstrap (v4.0.0-alpha.2): modal.js
	   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	   * --------------------------------------------------------------------------
	   */

	  var Modal = (function ($) {

	    /**
	     * ------------------------------------------------------------------------
	     * Constants
	     * ------------------------------------------------------------------------
	     */

	    var NAME = 'modal';
	    var VERSION = '4.0.0-alpha';
	    var DATA_KEY = 'bs.modal';
	    var EVENT_KEY = '.' + DATA_KEY;
	    var DATA_API_KEY = '.data-api';
	    var JQUERY_NO_CONFLICT = $.fn[NAME];
	    var TRANSITION_DURATION = 300;
	    var BACKDROP_TRANSITION_DURATION = 150;

	    var Default = {
	      backdrop: true,
	      keyboard: true,
	      focus: true,
	      show: true
	    };

	    var DefaultType = {
	      backdrop: '(boolean|string)',
	      keyboard: 'boolean',
	      focus: 'boolean',
	      show: 'boolean'
	    };

	    var Event = {
	      HIDE: 'hide' + EVENT_KEY,
	      HIDDEN: 'hidden' + EVENT_KEY,
	      SHOW: 'show' + EVENT_KEY,
	      SHOWN: 'shown' + EVENT_KEY,
	      FOCUSIN: 'focusin' + EVENT_KEY,
	      RESIZE: 'resize' + EVENT_KEY,
	      CLICK_DISMISS: 'click.dismiss' + EVENT_KEY,
	      KEYDOWN_DISMISS: 'keydown.dismiss' + EVENT_KEY,
	      MOUSEUP_DISMISS: 'mouseup.dismiss' + EVENT_KEY,
	      MOUSEDOWN_DISMISS: 'mousedown.dismiss' + EVENT_KEY,
	      CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
	    };

	    var ClassName = {
	      SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
	      BACKDROP: 'modal-backdrop',
	      OPEN: 'modal-open',
	      FADE: 'fade',
	      IN: 'in'
	    };

	    var Selector = {
	      DIALOG: '.modal-dialog',
	      DATA_TOGGLE: '[data-toggle="modal"]',
	      DATA_DISMISS: '[data-dismiss="modal"]',
	      FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
	    };

	    /**
	     * ------------------------------------------------------------------------
	     * Class Definition
	     * ------------------------------------------------------------------------
	     */

	    var Modal = (function () {
	      function Modal(element, config) {
	        _classCallCheck(this, Modal);

	        this._config = this._getConfig(config);
	        this._element = element;
	        this._dialog = $(element).find(Selector.DIALOG)[0];
	        this._backdrop = null;
	        this._isShown = false;
	        this._isBodyOverflowing = false;
	        this._ignoreBackdropClick = false;
	        this._originalBodyPadding = 0;
	        this._scrollbarWidth = 0;
	      }

	      /**
	       * ------------------------------------------------------------------------
	       * Data Api implementation
	       * ------------------------------------------------------------------------
	       */

	      // getters

	      _createClass(Modal, [{
	        key: 'toggle',

	        // public

	        value: function toggle(relatedTarget) {
	          return this._isShown ? this.hide() : this.show(relatedTarget);
	        }
	      }, {
	        key: 'show',
	        value: function show(relatedTarget) {
	          var _this = this;

	          var showEvent = $.Event(Event.SHOW, {
	            relatedTarget: relatedTarget
	          });

	          $(this._element).trigger(showEvent);

	          if (this._isShown || showEvent.isDefaultPrevented()) {
	            return;
	          }

	          this._isShown = true;

	          this._checkScrollbar();
	          this._setScrollbar();

	          $(document.body).addClass(ClassName.OPEN);

	          this._setEscapeEvent();
	          this._setResizeEvent();

	          $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, $.proxy(this.hide, this));

	          $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
	            $(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
	              if ($(event.target).is(_this._element)) {
	                _this._ignoreBackdropClick = true;
	              }
	            });
	          });

	          this._showBackdrop($.proxy(this._showElement, this, relatedTarget));
	        }
	      }, {
	        key: 'hide',
	        value: function hide(event) {
	          if (event) {
	            event.preventDefault();
	          }

	          var hideEvent = $.Event(Event.HIDE);

	          $(this._element).trigger(hideEvent);

	          if (!this._isShown || hideEvent.isDefaultPrevented()) {
	            return;
	          }

	          this._isShown = false;

	          this._setEscapeEvent();
	          this._setResizeEvent();

	          $(document).off(Event.FOCUSIN);

	          $(this._element).removeClass(ClassName.IN);

	          $(this._element).off(Event.CLICK_DISMISS);
	          $(this._dialog).off(Event.MOUSEDOWN_DISMISS);

	          if (_Util['default'].supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {

	            $(this._element).one(_Util['default'].TRANSITION_END, $.proxy(this._hideModal, this)).emulateTransitionEnd(TRANSITION_DURATION);
	          } else {
	            this._hideModal();
	          }
	        }
	      }, {
	        key: 'dispose',
	        value: function dispose() {
	          $.removeData(this._element, DATA_KEY);

	          $(window).off(EVENT_KEY);
	          $(document).off(EVENT_KEY);
	          $(this._element).off(EVENT_KEY);
	          $(this._backdrop).off(EVENT_KEY);

	          this._config = null;
	          this._element = null;
	          this._dialog = null;
	          this._backdrop = null;
	          this._isShown = null;
	          this._isBodyOverflowing = null;
	          this._ignoreBackdropClick = null;
	          this._originalBodyPadding = null;
	          this._scrollbarWidth = null;
	        }

	        // private

	      }, {
	        key: '_getConfig',
	        value: function _getConfig(config) {
	          config = $.extend({}, Default, config);
	          _Util['default'].typeCheckConfig(NAME, config, DefaultType);
	          return config;
	        }
	      }, {
	        key: '_showElement',
	        value: function _showElement(relatedTarget) {
	          var _this2 = this;

	          var transition = _Util['default'].supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

	          if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
	            // don't move modals dom position
	            document.body.appendChild(this._element);
	          }

	          this._element.style.display = 'block';
	          this._element.scrollTop = 0;

	          if (transition) {
	            _Util['default'].reflow(this._element);
	          }

	          $(this._element).addClass(ClassName.IN);

	          if (this._config.focus) {
	            this._enforceFocus();
	          }

	          var shownEvent = $.Event(Event.SHOWN, {
	            relatedTarget: relatedTarget
	          });

	          var transitionComplete = function transitionComplete() {
	            if (_this2._config.focus) {
	              _this2._element.focus();
	            }
	            $(_this2._element).trigger(shownEvent);
	          };

	          if (transition) {
	            $(this._dialog).one(_Util['default'].TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
	          } else {
	            transitionComplete();
	          }
	        }
	      }, {
	        key: '_enforceFocus',
	        value: function _enforceFocus() {
	          var _this3 = this;

	          $(document).off(Event.FOCUSIN) // guard against infinite focus loop
	          .on(Event.FOCUSIN, function (event) {
	            if (_this3._element !== event.target && !$(_this3._element).has(event.target).length) {
	              _this3._element.focus();
	            }
	          });
	        }
	      }, {
	        key: '_setEscapeEvent',
	        value: function _setEscapeEvent() {
	          var _this4 = this;

	          if (this._isShown && this._config.keyboard) {
	            $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
	              if (event.which === 27) {
	                _this4.hide();
	              }
	            });
	          } else if (!this._isShown) {
	            $(this._element).off(Event.KEYDOWN_DISMISS);
	          }
	        }
	      }, {
	        key: '_setResizeEvent',
	        value: function _setResizeEvent() {
	          if (this._isShown) {
	            $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this));
	          } else {
	            $(window).off(Event.RESIZE);
	          }
	        }
	      }, {
	        key: '_hideModal',
	        value: function _hideModal() {
	          var _this5 = this;

	          this._element.style.display = 'none';
	          this._showBackdrop(function () {
	            $(document.body).removeClass(ClassName.OPEN);
	            _this5._resetAdjustments();
	            _this5._resetScrollbar();
	            $(_this5._element).trigger(Event.HIDDEN);
	          });
	        }
	      }, {
	        key: '_removeBackdrop',
	        value: function _removeBackdrop() {
	          if (this._backdrop) {
	            $(this._backdrop).remove();
	            this._backdrop = null;
	          }
	        }
	      }, {
	        key: '_showBackdrop',
	        value: function _showBackdrop(callback) {
	          var _this6 = this;

	          var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

	          if (this._isShown && this._config.backdrop) {
	            var doAnimate = _Util['default'].supportsTransitionEnd() && animate;

	            this._backdrop = document.createElement('div');
	            this._backdrop.className = ClassName.BACKDROP;

	            if (animate) {
	              $(this._backdrop).addClass(animate);
	            }

	            $(this._backdrop).appendTo(document.body);

	            $(this._element).on(Event.CLICK_DISMISS, function (event) {
	              if (_this6._ignoreBackdropClick) {
	                _this6._ignoreBackdropClick = false;
	                return;
	              }
	              if (event.target !== event.currentTarget) {
	                return;
	              }
	              if (_this6._config.backdrop === 'static') {
	                _this6._element.focus();
	              } else {
	                _this6.hide();
	              }
	            });

	            if (doAnimate) {
	              _Util['default'].reflow(this._backdrop);
	            }

	            $(this._backdrop).addClass(ClassName.IN);

	            if (!callback) {
	              return;
	            }

	            if (!doAnimate) {
	              callback();
	              return;
	            }

	            $(this._backdrop).one(_Util['default'].TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
	          } else if (!this._isShown && this._backdrop) {
	            $(this._backdrop).removeClass(ClassName.IN);

	            var callbackRemove = function callbackRemove() {
	              _this6._removeBackdrop();
	              if (callback) {
	                callback();
	              }
	            };

	            if (_Util['default'].supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
	              $(this._backdrop).one(_Util['default'].TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
	            } else {
	              callbackRemove();
	            }
	          } else if (callback) {
	            callback();
	          }
	        }

	        // ----------------------------------------------------------------------
	        // the following methods are used to handle overflowing modals
	        // todo (fat): these should probably be refactored out of modal.js
	        // ----------------------------------------------------------------------

	      }, {
	        key: '_handleUpdate',
	        value: function _handleUpdate() {
	          this._adjustDialog();
	        }
	      }, {
	        key: '_adjustDialog',
	        value: function _adjustDialog() {
	          var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

	          if (!this._isBodyOverflowing && isModalOverflowing) {
	            this._element.style.paddingLeft = this._scrollbarWidth + 'px';
	          }

	          if (this._isBodyOverflowing && !isModalOverflowing) {
	            this._element.style.paddingRight = this._scrollbarWidth + 'px~';
	          }
	        }
	      }, {
	        key: '_resetAdjustments',
	        value: function _resetAdjustments() {
	          this._element.style.paddingLeft = '';
	          this._element.style.paddingRight = '';
	        }
	      }, {
	        key: '_checkScrollbar',
	        value: function _checkScrollbar() {
	          var fullWindowWidth = window.innerWidth;
	          if (!fullWindowWidth) {
	            // workaround for missing window.innerWidth in IE8
	            var documentElementRect = document.documentElement.getBoundingClientRect();
	            fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
	          }
	          this._isBodyOverflowing = document.body.clientWidth < fullWindowWidth;
	          this._scrollbarWidth = this._getScrollbarWidth();
	        }
	      }, {
	        key: '_setScrollbar',
	        value: function _setScrollbar() {
	          var bodyPadding = parseInt($(Selector.FIXED_CONTENT).css('padding-right') || 0, 10);

	          this._originalBodyPadding = document.body.style.paddingRight || '';

	          if (this._isBodyOverflowing) {
	            document.body.style.paddingRight = bodyPadding + this._scrollbarWidth + 'px';
	          }
	        }
	      }, {
	        key: '_resetScrollbar',
	        value: function _resetScrollbar() {
	          document.body.style.paddingRight = this._originalBodyPadding;
	        }
	      }, {
	        key: '_getScrollbarWidth',
	        value: function _getScrollbarWidth() {
	          // thx d.walsh
	          var scrollDiv = document.createElement('div');
	          scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
	          document.body.appendChild(scrollDiv);
	          var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	          document.body.removeChild(scrollDiv);
	          return scrollbarWidth;
	        }

	        // static

	      }], [{
	        key: '_jQueryInterface',
	        value: function _jQueryInterface(config, relatedTarget) {
	          return this.each(function () {
	            var data = $(this).data(DATA_KEY);
	            var _config = $.extend({}, Modal.Default, $(this).data(), typeof config === 'object' && config);

	            if (!data) {
	              data = new Modal(this, _config);
	              $(this).data(DATA_KEY, data);
	            }

	            if (typeof config === 'string') {
	              if (data[config] === undefined) {
	                throw new Error('No method named "' + config + '"');
	              }
	              data[config](relatedTarget);
	            } else if (_config.show) {
	              data.show(relatedTarget);
	            }
	          });
	        }
	      }, {
	        key: 'VERSION',
	        get: function get() {
	          return VERSION;
	        }
	      }, {
	        key: 'Default',
	        get: function get() {
	          return Default;
	        }
	      }]);

	      return Modal;
	    })();

	    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
	      var _this7 = this;

	      var target = undefined;
	      var selector = _Util['default'].getSelectorFromElement(this);

	      if (selector) {
	        target = $(selector)[0];
	      }

	      var config = $(target).data(DATA_KEY) ? 'toggle' : $.extend({}, $(target).data(), $(this).data());

	      if (this.tagName === 'A') {
	        event.preventDefault();
	      }

	      var $target = $(target).one(Event.SHOW, function (showEvent) {
	        if (showEvent.isDefaultPrevented()) {
	          // only register focus restorer if modal will actually get shown
	          return;
	        }

	        $target.one(Event.HIDDEN, function () {
	          if ($(_this7).is(':visible')) {
	            _this7.focus();
	          }
	        });
	      });

	      Modal._jQueryInterface.call($(target), config, this);
	    });

	    /**
	     * ------------------------------------------------------------------------
	     * jQuery
	     * ------------------------------------------------------------------------
	     */

	    $.fn[NAME] = Modal._jQueryInterface;
	    $.fn[NAME].Constructor = Modal;
	    $.fn[NAME].noConflict = function () {
	      $.fn[NAME] = JQUERY_NO_CONFLICT;
	      return Modal._jQueryInterface;
	    };

	    return Modal;
	  })(jQuery);

	  module.exports = Modal;
	});


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var $ = window.jQuery;

	var STRINGS = __webpack_require__( 5 ).strings;
	var CLASSES = __webpack_require__( 5 ).classes;
	var SELECTORS = __webpack_require__( 5 ).selectors;

	/**
	 * Binds a click handler to the given jQuery object
	 * @param  { Object }   $el   jQuery object which represents the element(s)
	 *                            that should be bound to toggle the off-canvas menu.
	 */
	function bindOffCanvasToggle( $el ) {
	  $el.click( function() {
	    var targetString = $( this ).data( STRINGS.target );
	    var $target = $( targetString );

	    $target.toggleClass( CLASSES.open );

	    return false;
	  });
	}

	module.exports.init = function() {
	  var $offCanvasToggle = $( SELECTORS.offCanvasToggle );

	  bindOffCanvasToggle( $offCanvasToggle );
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  strings: {
	    target: 'target'
	  },
	  classes: {
	    open: 'open'
	  },
	  selectors: {
	    offCanvasToggle: '[data-toggle="off-canvas"]'
	  }
	};


/***/ }
/******/ ]);