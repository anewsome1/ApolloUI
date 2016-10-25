var Clipboard = require( 'clipboard' );
var clipboard = new Clipboard('.js-code-copy');

// Success!
clipboard.on( 'success', function( event ) {
  var btnText = event.trigger.textContent;
  event.trigger.textContent = 'Copied!';
  window.setTimeout(function() {
    event.trigger.textContent = btnText;
  }, 2000);
  event.clearSelection();
});

// Oh noes!
clipboard.on( 'error', function( event ) {
  var btnText = event.trigger.textContent;
  event.trigger.textContent = 'Press "⌘ + C" to copy';
  window.setTimeout(function() {
    event.trigger.textContent = btnText;
  }, 5000);
});
