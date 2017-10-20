'use strict';

const $ = require('jquery');
require('handlebars');

const { projects } = require('../data/projects');
let projectTemplate = require('../templates/project.hbs');

let projectCards = projectTemplate({ projects });

$('#projectList').append(projectCards);
