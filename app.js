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
  var templateScript = $('#address-template').html();
  var compTemp = Handlebars.compile(templateScript);
  var context = {
    'name': this.name,
    'description': this.description,
    'image': this.image,
    'link': this.link
  }
  var compiled = compTemp(context);
  return compiled;
};

function hideSections() {
  $('#main').siblings().hide();
}

function navBar() {
  $('nav').on('click', 'li', function() {
    this.clicked;
    if (this.clicked === true) {
      $('#' + $(this).children('a').html()).fadeOut('slow');
      console.log('Hide!');
      this.clicked = false;
    } else {
      console.log('click!');
      $('#' + $(this).children('a').html()).fadeIn('slow');
      this.clicked = true;
    }
  });
}

ProjectModel.all.forEach(function(project) {
  $('#Projects .row').append(project.toHtml());
});

hideSections();
navBar();
