'use strict';

require('handlebars');

// project list
const { projects } = require('../data/projects');
let projectTemplate = require('../templates/project.hbs');
let projectCards = projectTemplate({ projects });
$('#projectList').append(projectCards);

// technology list
const { technologies } = require('../data/technologies');
let techTemplate = require('../templates/technologies.hbs');
let techBadges = techTemplate({ technologies });
$('#techList').append(techBadges);

// materialize initialization
$(document).ready(function() {
	$('.button-collapse').sideNav({
		menuWidth: 200,
		closeOnClick: true,
		draggable: true
	});
});
