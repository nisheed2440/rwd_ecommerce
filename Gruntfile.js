module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
    ' * ECommerce v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
    ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
    ' */\n\n',
    
    concat: {
        options: {
          banner: '<%= banner %>',
          stripBanners: false
        },
        bootstrap: {
          src: [
            'theme/js/development/bootstrap/transition.js',
            'theme/js/development/bootstrap/alert.js',
            'theme/js/development/bootstrap/button.js',
            'theme/js/development/bootstrap/carousel.js',
            'theme/js/development/bootstrap/collapse.js',
            'theme/js/development/bootstrap/dropdown.js',
            'theme/js/development/bootstrap/modal.js',
            'theme/js/development/bootstrap/tooltip.js',
            'theme/js/development/bootstrap/popover.js',
            'theme/js/development/bootstrap/scrollspy.js',
            'theme/js/development/bootstrap/tab.js',
            'theme/js/development/bootstrap/affix.js'
          ],
          dest: 'theme/js/production/<%= pkg.name %>.js'
        }
      },

      uglify: {
        options: {
          banner: '<%= banner %>',
          report: 'min'
        },
        bootstrap: {
          src: ['<%= concat.bootstrap.dest %>'],
          dest: 'theme/js/production/<%= pkg.name %>.min.js'
        }
      },

      recess: {
        options: {
          compile: true,
          banner: '<%= banner %>'
        },
        bootstrap: {
          src: ['theme/less/bootstrap/bootstrap.less'],
          dest: 'theme/css/<%= pkg.name %>.css'
        },
        min: {
          options: {
            compress: true
          },
          src: ['theme/less/bootstrap/bootstrap.less'],
          dest: 'theme/css/<%= pkg.name %>.min.css'
        },
        theme: {
          src: ['theme/less/theme/theme.less'],
          dest: 'theme/css/<%= pkg.name %>-theme.css'
        },
        theme_min: {
          options: {
            compress: true
          },
          src: ['theme/less/theme/theme.less'],
          dest: 'theme/css/<%= pkg.name %>-theme.min.css'
        }
      }
    
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-recess');

  // Default task(s).
  grunt.registerTask('default', ['concat','uglify','recess']);

};