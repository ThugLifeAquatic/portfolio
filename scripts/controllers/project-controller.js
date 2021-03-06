'use strict';

(function(module) {
  const projectController = {};
  projectController.index = function() {
    // SCROLL CODE TAKEN FROM:
    // https://stackoverflow.com/questions/2905867/how-to-scroll-to-specific-item-using-jquery
    let container = $('body'),
      scrollTo = $('#Projects');

    container.animate({
      scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
    });

    container.animate(1000);
  };

  module.projectController = projectController;
})(window);
