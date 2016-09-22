/*!
 * Apollo JS v1.0.0-beta.4
 */


///
/// Bootstrap jQuery Plugins
///

require( '../node_modules/bootstrap/js/dist/alert' );
require( '../node_modules/bootstrap/js/dist/carousel' );
require( '../node_modules/bootstrap/js/dist/collapse' );
require( '../node_modules/bootstrap/js/dist/dropdown' );
require( '../node_modules/bootstrap/js/dist/modal' );
require( '../node_modules/bootstrap/js/dist/tab' );
require( '../node_modules/bootstrap/js/dist/util' );


///
/// Custom scripts
///

var offCanvas = require( './off-canvas' );

$( document ).ready( function() {
  offCanvas.init();
});
