'use strict';

var tourism = require('tourism');

module.exports = tourism({
  analyse: {
    client: [ '**/*.js', '!node_modules/**/*.js', '!build/**/*.js' ]
  },
    shell: {
        build: 'mkdir -p build && browserify index.js -o build/bundled.js',
        buildmin: 'mkdir -p build && browserify index.js | uglifyjs -c -m --screw-ie8 -o build/bundled.js',
        start: 'http-server'
    }
});