/* global window */

const $ = window.jQuery;
const STRINGS = require( './util/strings' ).strings;
const CLASSES = require( './util/strings' ).classes;
const SELECTORS = require( './util/strings' ).selectors;

/**
 * Binds a click handler to the given jQuery object
 * @param  { Object }   $el   jQuery object which represents the element(s)
 *                            that should be bound to toggle the off-canvas menu.
 */
function bindOffCanvasToggle( $el ) {
  $el.click(() => {
    const targetString = $( this ).data( STRINGS.target );
    const $target = $( targetString );

    $target.toggleClass( CLASSES.open );

    return false;
  });
}

module.exports.init = () => {
  const $offCanvasToggle = $( SELECTORS.offCanvasToggle );

  bindOffCanvasToggle( $offCanvasToggle );
};
