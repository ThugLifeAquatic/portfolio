'use strict';

(function(module) {
  const repoController = {};
  repos.requestRepos(repos.index)
  repoController.index = function() {
    // SCROLL CODE TAKEN FROM:
    // https://stackoverflow.com/questions/2905867/how-to-scroll-to-specific-item-using-jquery
    $('#Repos').show();
    let container = $('body'),
      scrollTo = $('#Repos');

    container.animate({
      scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
    });

    container.animate(1000);
  };

  module.repoController = repoController;
})(window);
