var standardTests = require('passwordless-tokenstore-test');


var MySQLStore = require("../");
var connUrl = "mysql://test:test@localhost/passwordless-test";

function TokenStoreFactory() {
  return new MySQLStore(connUrl);
}

var beforeEachTest = function(done) {
  // clean database before usage
  done();
}

var afterEachTest = function(done) {
  // any other activity after each test
  done();
}

// Call the test suite
standardTests(TokenStoreFactory, beforeEachTest, afterEachTest);

describe('Your specific tests', function() {

  beforeEach(function(done) {
    beforeEachTest(done);
  });

  afterEach(function(done) {
    afterEachTest(done);
  });

  it('should...', function () {
    expect(...).to...
  });
});