module.exports = function(grunt) {

  grunt.initConfig({

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'dest/noajax.min.js': ['src/js/noajax.js']
        }
      }
    },
    copy: {
      main: {
        expand: true,
        src: 'src/php/noajax.php',
        dest: 'PHPTestMethods/',
        flatten: true,
      },
    },
    watch: {
      files: ['src/**/*.js', 'src/**/*.php'],
      tasks: ['uglify', 'copy']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['uglify','copy']);

};