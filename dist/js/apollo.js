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
	 * Apollo JS v0.1.0-dev
	 */

	///
	/// Bootstrap jQuery Plugins
	///

	__webpack_require__( 1 );


	///
	/// Custom scripts
	///

	var offCanvas = __webpack_require__( 3 );

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

	var $ = window.jQuery;

	var STRINGS = __webpack_require__( 4 ).strings;
	var CLASSES = __webpack_require__( 4 ).classes;
	var SELECTORS = __webpack_require__( 4 ).selectors;

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
/* 4 */
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