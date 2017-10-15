module.exports = function(grunt) {
	grunt.initConfig({
		browserify: {
			js: {
				src: ['../javascripts/index.js'],
				dest: '../dist/app.js'
			},
			options: {
				transform: ['hbsfy'],
				browserifyOptions: {
					paths: ['./node_modules']
				}
			}
		},
		sass: {
			dist: {
				files: {
					'../css/main.css': '../sass/main.sass'
				}
			}
		},
		watch: {
			javascripts: {
				files: ['../javascripts/**/*.js'],
				tasks: ['browserify']
			},
			sass: {
				files: ['../sass/**/*.sass'],
				tasks: ['sass']
			},
			hbs: {
				files: ['../templates/**/*.hbs'],
				tasks: ['browserify']
			}
		}
	});

	require('matchdep')
		.filterDev('grunt-*')
		.forEach(grunt.loadNpmTasks);

	grunt.registerTask('default', ['sass', 'browserify', 'watch']);
};
