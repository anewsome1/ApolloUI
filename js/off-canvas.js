var $ = window.jQuery;

var STRINGS = require( './util/strings' ).strings;
var CLASSES = require( './util/strings' ).classes;
var SELECTORS = require( './util/strings' ).selectors;

function bindOffCanvasToggle( $el ) {

  $el.click( function() {
    var targetString = $( this ).data( STRINGS.target );
    var $target = $( targetString );

    $target.toggleClass( CLASSES.open );
  });
}

module.exports.init = function() {
  var $offCanvasToggle = $( SELECTORS.offCanvasToggle );

  bindOffCanvasToggle( $offCanvasToggle );
};
