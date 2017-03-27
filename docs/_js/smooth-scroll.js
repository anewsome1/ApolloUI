const $ = window.jQuery;

const scrollTiming = 500;

const SELECTORS = {
  ANCHOR_TAGS: '.js-docs-smooth-scroll',
  SCROLL_AREA: 'html, body'
}

$(function() {
  $( SELECTORS.ANCHOR_TAGS ).click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $( SELECTORS.SCROLL_AREA ).animate({
          scrollTop: target.offset().top
        }, scrollTiming);
        return false;
      }
    }
  });
});
