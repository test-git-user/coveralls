'use strict';

require('chai').should();
var rewire = require('rewire');
var index = rewire('../index');

describe('index/', function() {
  describe('main()', function () {
    it('should call getRunData() and manager.run()', function (done) {
      var getRunDataCalled = false;
      var runCalled = false;
      index.__set__('inAdapter', {
        getRunData: function() {
          getRunDataCalled = true;
        }
      });
      index.__set__('manager', {
        run: function() {
          runCalled = true;
        }
      });
      index.main();
      getRunDataCalled.should.be.equal(true);
      runCalled.should.be.equal(true);
      done();
    });
  });
});

describe('unused', function() {
    describe('unusedFunction()', function() {
        it('should return garbage', function(done) {
            expect(unusedFunction()).to.be.equal('neverused');
            done();
        });
    });
});
