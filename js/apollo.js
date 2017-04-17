/*!
 * Apollo JS v1.3.2
 */

/* global window, document */

var $ = window.jQuery;
var offCanvas = require( './off-canvas' );

//
// Bootstrap jQuery Plugins
//

require( '../node_modules/bootstrap/dist/js/bootstrap' );


//
// Custom scripts
//


$( document ).ready( function () {
  offCanvas.init();
});
