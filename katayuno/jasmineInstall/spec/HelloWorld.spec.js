// This is the file which will call our JavaScript file that need to be tested.
// Each describe block is equivalent to one test case.
const helloworld = require("../helloworld.js")

describe("Hello World", function() {

  it("Should return Hello World", function() {
    expect(helloworld()).toBe('Hello World');
  });
});