module.exports = function(grunt) {

  grunt.initConfig({

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'dist/noajax.min.js': ['src/noajax.js']
        }
      }
    },
    watch: {
      files: ['src/**/*.js'],
      tasks: ['uglify']
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify']);
};