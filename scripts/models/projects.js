'use strict';

(function(module) {

  const projects = {};
  // LOAD AND RENDER
  const successCallback = function(data) {
    localStorage.setItem('key', JSON.stringify(data));
    render();
  }

  const errorCallback = function(err) {
    console.error(err);
  }

  function render() {
    let template = Handlebars.compile($('#address-template').html())
    // TODO: Make data global
    let data = JSON.parse(localStorage.getItem('key'));
    $('#web').html(template({
      project: data.filter(ele => ele.cat === 'web')
    }))
    $('#art').html(template({
      project: data.filter(ele => ele.cat === 'art')
    }))
  }

  projects.getProjects = () => {
    if (localStorage.length === 0) {
      $.getJSON('data/projects.json')
        .then(successCallback, errorCallback);
    } else {
      render();
    }
  }

  projects.getProjects();
  module.projects = projects;

})(window);
