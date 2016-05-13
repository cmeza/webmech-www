module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      always: [
        'web/fonts/**',
        'web/lib/**'
      ],
      prod: [
        '~/public_html/*'
      ]
    },
    
    concat: {    
      jsSrc: {
        src: [
          'src/Webmechanix/js/wmApp.js',
          'src/Webmechanix/js/wmStates.js',
          'src/Webmechanix/js/**'
        ],
        dest: 'web/wm.js'
      },
      jsLib: {
        src:  [
          'vendor/bower/angular/angular.js',
          'vendor/bower/angular-ui-router/release/angular-ui-router.js',
          'vendor/bower/underscore/underscore.js',
          'vendor/bower/jquery/dist/jquery.js',
          'vendor/bower/bootstrap/dist/bootstrap.js'
        ],
        dest: 'web/lib/lib.js'
      },
      css: {
        src: [ 
          'src/Webmechanix/css/**'
        ],
        dest: 'web/wm.css'
      },
      cssLib: {
        src:  [
          'vendor/bower/bootstrap/dist/css/bootstrap.css',
          'vendor/bower/font-awesome/css/font-awesome.css'
        ],
        dest: 'web/lib/lib.css'
      }
    },

    copy: {
      fontAwesome: {
        cwd: 'vendor/bower/',
        src: 'font-awesome/fonts/*',
        dest: 'web/fonts',
        expand: true,
        flatten: true
      },
      fontBootstrap: {
        cwd: 'vendor/bower/',
        src: 'bootstrap/dist/fonts/*',
        dest: 'web/fonts',
        expand: true,
        flatten: true
      },
      prodFiles: {
        cwd: '~/webmech-www',
        src: 'web/**',
        dest: '~/public_html',
        expand: true
      }
    },

    comments: {
      js: {
        options: {
          singleline: true,
          multiline: true
        },
        src: [ 'web/wm.js' ]
      },
      css: {
        options: {
          singleline: true,
          multiline: true
        },
        src: [ 'web/wm.css' ]
      }
    },

    uglify: {
      dist: {
        files: {
          'web/wm.js': ['web/wm.js'],
          'web/lib/lib.js': ['web/lib/lib.js']
        },
        mangle: false
      }
    },

    less: {
      production: {
        files: {
          "web/wm.css": "web/wm.css"
        }
      }
    },

    cssmin: {
      combine: {
        files: {
          'web/wm.css': ['web/wm.css'],
          'web/lib/lib.css': ['web/lib/lib.css']
        }
      }
    },

    watch: {
      scripts: {
        files: [
          'src/Webmechanix/**',
          'vendor/bower/**'
        ],
        tasks: ['default'],
        options: {
          spawn: false
        }
      }
    },

    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      wmApp: {
        files: {
          'web/wm.js': ['web/wm.js']
        }
      }
    }
  });
  
  require('load-grunt-tasks')(grunt);

  grunt.registerTask( 
    'prod', [
      'clean', 
      'concat',
      'copy',
      'less',
      'comments',
      'ngAnnotate',
      'cssmin',
      'uglify'
    ]
  );
  
  grunt.registerTask(
    'default', [
      'clean:always',
      'concat',
      'copy:fontAwesome',
      'copy:fontBootstrap',
      'less',
      'ngAnnotate'
    ]
  );

};