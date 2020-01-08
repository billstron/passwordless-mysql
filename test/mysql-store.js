var standardTests = require('passwordless-tokenstore-test');
var mysql = require("mysql");

var MySQLStore = require("../");
var connUrl = "mysql://test@localhost/test";

function TokenStoreFactory() {
  return new MySQLStore(connUrl);
}

var beforeEachTest = function(done) {
  // clean database before usage
  var con = mysql.createConnection(connUrl);
  con.query("delete from passwordless", function(err, rows){
    if(err){
      console.log("err:", err);
    }
    done();
  });
}

var afterEachTest = function(done) {
  // any other activity after each test
  done();
}

// Call the test suite
standardTests(TokenStoreFactory, beforeEachTest, afterEachTest);

describe("MySQLStore", function() {

  beforeEach(function(done) {
    beforeEachTest(done);
  });

  afterEach(function(done) {
    afterEachTest(done);
  });

});
