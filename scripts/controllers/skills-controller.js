'use strict';

(function(module) {
  const skillsController = {};
  skillsController.index = function() {
    // SCROLL CODE TAKEN FROM:
    // https://stackoverflow.com/questions/2905867/how-to-scroll-to-specific-item-using-jquery
    let container = $('body'),
      scrollTo = $('#Skills');

    container.animate({
      scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
    });

    container.animate(1000);
  };

  skillsController.home = function() {
    page('/');
    $('.container').hide();
    $('.container').show();
    // SCROLL CODE TAKEN FROM:
    // https://stackoverflow.com/questions/2905867/how-to-scroll-to-specific-item-using-jquery
    let container = $('body'),
      scrollTo = $('#main');

    container.animate({
      scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
    });
    container.animate(1000);
  };

  module.skillsController = skillsController;
})(window);
