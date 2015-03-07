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
    },
    jasmine: {
      src: 'build/**/*.js',
      options: {
        specs: 'test/**/*_spec.js',
        helpers: 'test/helpers/*_helper.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['babel']);
  grunt.registerTask('package', ['babel']);
  grunt.registerTask('test', ['package', 'jasmine']);
};

