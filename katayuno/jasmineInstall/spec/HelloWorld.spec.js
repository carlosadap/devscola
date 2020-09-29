// This is the file which will call our JavaScript file that need to be tested.
// Each describe block is equivalent to one test case.
const Helloworld = require("../helloworld")

describe("Hello World", function() {
  var hi = new Helloworld();

  it("Should return Hello World", function() {
    expect(helloworld()).toEqual('Hello World');
  });
});