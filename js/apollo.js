/*!
 * Apollo JS v1.2.0
 */

///
/// Bootstrap jQuery Plugins
///

require( '../node_modules/bootstrap/dist/js/bootstrap' );


///
/// Custom scripts
///

var offCanvas = require( './off-canvas' );

$( document ).ready( function() {
  offCanvas.init();
});