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

var unusedFunction = function() {
    return 'neverused';
};

function coolNewFunction() {
    var x = 3;
    if(x % 3 === 0) {
        console.log('it seems like a 3');
    }
    return x * x;
}

main(verbose);

module.exports = {
  main: main,
  unusedFunction: unusedFunction
};
