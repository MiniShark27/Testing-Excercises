/*
  File to test the isEven and isOdd functions
  Below is a completed test suite for the isEven function
  After that is the first excercist (making a test suite for the isOdd function)
*/

// Need to import/require assert to use it (not imported by default)
let assert = require("assert");
// Remember to import the function you are testing
let isEven = require("./EvenOdd.js").isEven;

// describe() is used to label a group of tests
describe("isEven", function () {
  // Use the test() function to define a test
  test("should return true if an even number is passed", function () {
    // To verify that the function returns true, we use assert.equal()
    assert.equal(isEven(2), true);
  });

  // Note: it() is an alias for test()
  it("should return false if an odd number is passed", function () {
    assert.equal(isEven(1), false);
  });
});

/*
  Excercise 1: 
    Write 2 tests for isOdd()
    Put those tests in a describe block
    Note: assert is already imported, but isOdd() is not
*/

//CODE START

//CODE END
