'use strict';
(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // DONE: Refactor your ajax call to use the $.get method, and make a request to our new proxy route.
    //       Don't forget to remove the headers from our request - we're no longer using a token on the
    //       client side of our app, our new proxyGitHub function will be handling the token using our
    //       new environment variable!
    $.get('/github/user/repos')
      .then(data => repos.all = data, err => console.error(err)) // es6 syntax arrow functions
      .then(callback);
  };


  // RENDERING
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  repos.index = function() {
    $('#Repos').hide();
    const render = Handlebars.compile($('#repo-template').text());
    $('#Repos').append(
      repos.with('name').map(render)
    );
  };


  module.repos = repos;
})(window);