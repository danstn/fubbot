module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['babel', 'karma']);
  grunt.registerTask('build', ['babel']);
  grunt.registerTask('test', ['karma']);
};

