module.exports = function (grunt) {

grunt.loadNpmTasks('grunt-coveralls');

grunt.initConfig({
  coveralls: {
    // Options relevant to all targets
    options: {
      // When true, grunt-coveralls will only print a warning rather than
      // an error, to prevent CI builds from failing unnecessarily (e.g. if
      // coveralls.io is down). Optional, defaults to false.
      force: false
    },

    coverage: {
      // LCOV coverage file (can be string, glob or array)
      src: 'coverage/lcov.info',
      options: {
        // Any options for just this target
      }
    },
  },
});
};
