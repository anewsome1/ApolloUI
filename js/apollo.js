/*!
 * Apollo JS v0.2.2
 */

///
/// Bootstrap jQuery Plugins
///

require( '../node_modules/bootstrap/dist/js/umd/dropdown' );
require( '../node_modules/bootstrap/dist/js/umd/modal' );


///
/// Custom scripts
///

var offCanvas = require( './off-canvas' );

$( document ).ready( function() {
  offCanvas.init();
});