'use strict';

// function ProjectModel(name, description, image, link, cat) {
//   this.category = cat;
//   this.name = name;
//   this.description = description;
//   this.image = image;
//   this.link = link;
// }

// new ProjectModel('Optimus Prime', 'An advanced cybernetic life-form that can turn into a truck.', 'optimus.jpg', 'https://en.wikipedia.org/wiki/Optimus_Prime');
// new ProjectModel('Noah\'s Ark', 'A party boat for nature.', 'ark.jpg', 'https://en.wikipedia.org/wiki/Noahs_Ark');
// new ProjectModel('Millenium Falcon', 'A super fast spaceship thats ideal for smuggling.', 'falcon.jpg', 'https://en.wikipedia.org/wiki/Millenium_Falcon');
// new ProjectModel('The Creation of T-Rex', 'And God said \"Let there be T-Rex\".', 'https://ih0.redbubble.net/image.263673671.9704/flat,1000x1000,075,f.jpg', 'https://www.redbubble.com/people/adjusted', 'art');
// new ProjectModel('Secret Weapon', 'The Empire\'s new groove.', 'https://ih1.redbubble.net/image.202307245.8949/flat,1000x1000,075,f.jpg', 'https://www.redbubble.com/people/adjusted', 'art');
// new ProjectModel('The Amazing Spideraptor', 'Your friendly neighborhood mash-up.', 'https://ih0.redbubble.net/image.202305717.9965/flat,1000x1000,075,f.jpg', 'https://www.redbubble.com/people/adjusted', 'art');

const successCallback = function(data) {
  console.log(data);
  let template = Handlebars.compile($('#address-template').html())
  console.log(template);
  $('#web').html(template({
    project: data}))
}

const errorCallback = function(err) {
  console.error(err)
}

$.getJSON('projects.json')
.then(successCallback, errorCallback)

// ProjectModel.prototype.toHtml = function() {
//   var templateScript = $('#address-template').html();
//   var compTemp = Handlebars.compile(templateScript);
//   var context = {
//     'name': this.name,
//     'description': this.description,
//     'image': this.image,
//     'link': this.link
//   }
//   var compiled = compTemp(context);
//   return compiled;
// };

function hideSections() {
  $('#main').siblings().hide();
}

function navBar() {
  $('nav').on('click', 'li', function() {
    this.clicked;
    if (this.clicked === true) {
      $('#' + $(this).children('a').html()).slideUp(1500).focus();
      console.log('Hide!');
      this.clicked = false;
    } else {
      console.log('click!');
      $('#' + $(this).children('a').html()).slideDown(1500).focus();
      this.clicked = true;
    }
  });
}
// if (localStorage.length > 0) {
//   let all = JSON.parse(localStorage.getItem('data'));
//   all.forEach(function(project) {
//     if (project.category === 'art') {
//       $('#Projects #art').append(project.toHtml());
//     } else {
//       $('#Projects #web').append(project.toHtml());
//     }
//   });
// }

hideSections();
navBar();
