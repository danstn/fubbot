process.env.NODE_PATH = __dirname + '/src';
require('module').Module._initPaths();

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
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['babel']);
  grunt.registerTask('build', ['babel']);

  grunt.registerTask('specs', function() {
    require('babel/register')();
    var Jasmine = require('./node_modules/jasmine/lib/jasmine.js');
    var jasmine = new Jasmine();

    process.env.NODE_PATH = process.env.NODE_PATH + ":" + __dirname + '/spec';
    require('module').Module._initPaths();

    jasmine.loadConfigFile(process.env.JASMINE_CONFIG_PATH);
    jasmine.configureDefaultReporter({
      showColors: true,
      onComplete: this.async()
    });

    var reporters = require('jasmine-reporters');
    var junitReporter = new reporters.JUnitXmlReporter({
        savePath: __dirname + '/tmp/test/reports/',
        consolidateAll: true
    });
    jasmine.addReporter(junitReporter);

    jasmine.execute();
  })
};

