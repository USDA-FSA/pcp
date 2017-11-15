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
			dist: [ 'dist', 'ugly' ],
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

      fsaStyle_jsComponents: {
        expand: true,
        src: '**',
        cwd: 'node_modules/fsa-style/src/js/components',
        dest: 'src/js/components'
      },

      jQuery: {
        expand: true,
        src: '**',
        cwd: 'node_modules/jquery/dist',
        dest: 'src/js/vendor'
      },

      // Copy fonts, img, and js **FROM** /src/ **TO** /dist/

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

    simple_include: {
      options: {
        html_comment: true,
      },
      default_options: {
        src: [
          'src/*.html'
        ],
        dest: 'ugly/'
      },
    },

    // Make our HTML files perfectly formatted
    prettify: {
      options: {
        config: '.prettifyrc'
      },
      all: {
        expand: true,
        cwd: './ugly',
        ext: '.html',
        src: ['*.html'],
        dest: 'dist/'
      },
    },

    // Sass all the style things
    sass: {
      default: {
        files: {
          'dist/css/pcp.css': 'src/stylesheets/pcp.scss'
        },
        options: {
          sourceMap: true,
          outputStyle: 'expanded'
        },
      },
      minify: {
        files: {
          'dist/css/pcp.min.css': 'src/stylesheets/pcp.scss'
        },
        options: {
          sourceMap: true,
          outputStyle: 'compressed'
        },
      },
    },

    // PostCSS, primarily to autoprefix
    postcss: {
      options: {
        map: {
          inline: false, // save all sourcemaps as separate files...
          annotation: 'dist/css' // ...to the specified directory
        },
        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer')({ browsers: 'last 2 versions' }), // add vendor prefixes
          // require('postcss-quantity-queries')(), // do things like .asdf:at-least(4) {} ; https://github.com/pascalduez/postcss-quantity-queries
          // require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'dist/css/*.css'
      }
    },

    /// Watching chchchchanges
    watch: {
      img: {
        files: 'src/img/*',
        tasks: ['copy:img'],
      },
      html: {
        files: ['src/**/*.html'],
        tasks: ['simple_include','prettify'],
      },
      css: {
        files: ['src/**/*.css', 'src/**/*.scss'],
        tasks: ['sass'],
      },
      cssPost: {
        files: ['dist/**/*.css'],
        tasks: ['postcss'],
      },
      js: {
        files: ['src/**/*.js'],
        tasks: ['copy:js'],
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
          server: './dist'
        }
      }

    },

  });

  // Register Tasks
  grunt.registerTask('default', ['build', 'browserSync', 'watch']);

  grunt.registerTask('build', [
    'clean',
    'copy',
    'sass',
    'postcss',
    'simple_include',
    'prettify',
  ]);
  // 'watch'

  grunt.registerTask('test', 'default', function () { grunt.log.writeln('Test that the app runs');});

};
