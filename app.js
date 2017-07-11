'use strict';

function ProjectModel(name, description, image, link ){
  this.name = name;
  this.description = description;
  this.image = image;
  this.link =link;
  ProjectModel.all.push(this);
}

ProjectModel.all = [];
