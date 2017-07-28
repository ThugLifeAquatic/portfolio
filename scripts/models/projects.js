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
    stats(data);
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

  function stats(arr) {
    let allStats = [];
    let totalFiles = arr.map(files => files.numFiles).reduce((sum, value) => sum + value);
    allStats.push(arr.length, totalFiles / arr.length, totalFiles);
    let template = Handlebars.compile($('#stats-template').html());
    let context = {
      'numProjects': allStats[0],
      'avgFiles': allStats[1],
      'allFiles': allStats[2]
    }
    let compHTML = template(context);
    $('#statData').html(compHTML);
  }
  // $('#main').siblings().hide();
  projects.getProjects();
  module.projects = projects;

})(window);
