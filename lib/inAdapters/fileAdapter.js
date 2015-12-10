'use strict';

var debug = require('debug')('http-status-check:fileAdapter');
var fs = require('fs');

function junkFunction() {
    console.log('oie' + 'Ijsoeifj');
    return '44';
}

console.log(junkFunction() + '3');

var getRunData = function() {
  var standard = __dirname + '/../../sitelists/checksites.js';
  var sample = __dirname + '/../../sitelists/samplesites.js';
  if(fs.existsSync(standard)) {
    return require(standard);
  } else if(fs.existsSync(sample)) {
    return require(sample);
  } else {
    debug('standard: %s', standard);
    debug('sample: %s', sample);
    throw new Error('Expecting checksites.js or samplesites.js to exist.');
  }
};

module.exports = {
  getRunData: getRunData
};
