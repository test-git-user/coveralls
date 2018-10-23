'use strict';

var should = require('chai').should();
var rewire = require('rewire');
var outAdapter = rewire('../../../lib/outAdapters/consoleAdapter');

describe('outAdapters/consoleAdapter/', function() {
  describe('writeResult()', function () {
    it('should increment fail counter when unsuccessful', function (done) {
      outAdapter.writeResult('fail', {errors: 'some error'});
      var failHits = outAdapter.__get__('failHits');
      //var successHits = outAdapter.__get__('successHits');
      failHits.should.be.above(0);
      done();
    });
  });

  describe('writeResult()', function () {
    it('should increment disabled counter when url is disabled', function (done) {
      outAdapter.writeResult('disabled', {verbose: true});
      var disableHits = outAdapter.__get__('disableHits');
      disableHits.should.be.above(0);
      done();
    });
  });

  describe('writeResult()', function () {
    it('should throw an exception if an unrecognized result type is passed', function (done) {
      var exceptionThrown = false;
      try {
        outAdapter.writeResult('unknown', {errors: 'some error'});
      } catch (e) {
        exceptionThrown = true;
      }
      exceptionThrown.should.equal(true);
      done();
    });
  });

  describe('done()', function () {
    it('should call console.log()', function (done) {
      var logCallCount = 0;
      outAdapter.__set__('console', {
        log: function() {
          logCallCount++;
        }
      });

      outAdapter.done();
      logCallCount.should.equal(4);
      done();
    });
  });

});
