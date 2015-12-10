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

main(verbose);

function unusedFunction1() {
    console.log('this function is so unused');
    console.log('what else is this function about? it\'s not used.');
    return 3;
}

console.log(4 + unusedFunction1());

module.exports = {
  main: main
};
