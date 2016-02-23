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

	var offCanvas = __webpack_require__( 1 );

	$( document ).ready( function() {
	  offCanvas.init();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var $ = window.jQuery;

	var STRINGS = __webpack_require__( 2 ).strings;
	var CLASSES = __webpack_require__( 2 ).classes;
	var SELECTORS = __webpack_require__( 2 ).selectors;

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
/* 2 */
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