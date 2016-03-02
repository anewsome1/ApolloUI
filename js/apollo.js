/*!
 * Apollo JS v0.2.0
 */

///
/// Bootstrap jQuery Plugins
///

require( '../node_modules/bootstrap/dist/js/umd/dropdown' );


///
/// Custom scripts
///

var offCanvas = require( './off-canvas' );

$( document ).ready( function() {
  offCanvas.init();
});