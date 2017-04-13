/*!
 * Apollo JS v1.3.2
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