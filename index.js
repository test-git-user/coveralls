'use strict';

var _ = require('lodash');
var manager = require('./lib/manager');
var settings = require('./package.json');
var inAdapter = require(settings.inAdapter.type);
var outAdapter = require('./lib/outAdapters/consoleAdapter');

var verbose = _.contains(process.argv.slice(2), '--verbose');
var main = function(verbose) {
  var sites = inAdapter.getRunData();
  manager.run(sites, settings, outAdapter, verbose);
};

function unusedFunction() {
    return 'neverused';
}

main(verbose);

module.exports = {
  main: main
};
