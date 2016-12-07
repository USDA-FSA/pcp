module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Listing Tasks
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Clear files and folders
		clean: {
			dist: [ 'dist' ],
		},

    // Copies templates and assets from dependencies and/or src
    copy: {

      // Stylesheets, fonts, img, and js **FROM** /node_modules/uswds/

      // node_modules/fsa-style/src/stylesheets

      fsaStyle_stylesheets: {
        expand: true,
        src: '**',
        cwd: 'node_modules/fsa-style/src/stylesheets',
        dest: 'src/stylesheets/lib/fsa-style'
      },

      fsaStyle_fonts: {
        expand: true,
        src: '**',
        cwd: 'node_modules/fsa-style/src/fonts',
        dest: 'src/fonts'
      },

      fsaStyle_img: {
        expand: true,
        src: '**',
        cwd: 'node_modules/fsa-style/src/img',
        dest: 'src/img'
      },

      fsaStyle_js: {
        expand: true,
        src: '**',
        cwd: 'node_modules/fsa-style/src/js/vendor',
        dest: 'src/js/vendor'
      },

      jQuery: {
        expand: true,
        src: '**',
        cwd: 'node_modules/jquery/dist',
        dest: 'src/js/vendor'
      },

      // Copy fonts, img, and js **TO** /dist/

      stylesheets: {
        expand: true,
        src: '**',
        cwd: 'src/stylesheets',
        dest: 'dist/stylesheets'
      },

      fonts: {
        expand: true,
        src: '**',
        cwd: 'src/fonts',
        dest: 'dist/fonts'
      },

      img: {
        expand: true,
        src: '**',
        cwd: 'src/img',
        dest: 'dist/img'
      },

      js: {
        expand: true,
        src: '**',
        cwd: 'src/js',
        dest: 'dist/js'
      },

    },

    // Make our HTML files perfectly formatted and chucked in `dist`
    prettify: {
      options: {
        config: '.prettifyrc'
      },
      all: {
        expand: true,
        cwd: 'src/',
        ext: '.html',
        src: ['*.html'],
        dest: 'dist/'
      },
    },

    // Live Reload and Browser Sync'ing
    browserSync: {

      // browser-sync start --server "dist" --files "dist"

      dev: {
        files: {
          src : [
            'dist'
          ]
        },
        options: {
          watchTask: true,
          server: 'dist'
        }
      }
    },

  });

  // Register Tasks
  grunt.registerTask('default', ['build', 'browserSync']);

  grunt.registerTask('build', [
    'clean',
    'copy',
    'prettify'
  ]);

  grunt.registerTask('test', 'default', function () { grunt.log.writeln('Test that the app runs');});

};
