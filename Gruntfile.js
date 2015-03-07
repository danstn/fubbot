module.exports = function(grunt) {
  grunt.initConfig({
    'babel': {
      dist: {
        files: [{
            "expand": true,
            "cwd": "src/",
            "src": ["**/*.js"],
            "dest": "build/",
            "ext": ".js"
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-babel');

  grunt.registerTask('default', ['babel']);
};

