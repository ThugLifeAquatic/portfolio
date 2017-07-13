'use strict';

function ProjectModel(name, description, image, link) {
  this.name = name;
  this.description = description;
  this.image = image;
  this.link = link;
  ProjectModel.all.push(this);
}

ProjectModel.all = [];

new ProjectModel('Optimus Prime', 'An advanced cybernetic life-form that can turn into a truck.', 'optimus.jpg', 'https://en.wikipedia.org/wiki/Optimus_Prime');
new ProjectModel('Noah\'s Ark', 'A party boat for nature.', 'ark.jpg', 'https://en.wikipedia.org/wiki/Noahs_Ark');
new ProjectModel('Millenium Falcon', 'A super fast spaceship thats ideal for smuggling.', 'falcon.jpg', 'https://en.wikipedia.org/wiki/Millenium_Falcon');

ProjectModel.prototype.toHtml = function() {
  var $newArticle = $('.template').clone();
  $newArticle.removeClass('template');
  $newArticle.find('h4').html(this.name);
  $newArticle.find('img').attr('src', this.image);
  $newArticle.find('p').html(this.description);
  $newArticle.find('section').html(this.body);
  $newArticle.find('a').attr('href', this.link);
  return $newArticle;
};

function hideSections() {
  $('#main').siblings().hide();
}

function navBar() {
  $('nav').on('click', 'li', function() {
    hideSections();
    $('#' + $(this).children('a').html()).fadeIn('slow');
  })
}

ProjectModel.all.forEach(function(project) {
  $('#Projects .row').append(project.toHtml());
});

hideSections();
navBar();
