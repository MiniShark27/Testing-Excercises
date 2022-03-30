const findRoot = require("./FindRoot").findRoot;

/*
  This part of the exercise is to create tests using different Jest Matchers
  Documentation: https://jestjs.io/docs/using-matchers

  Probably use the following: (though there are many other ways to test it)
  - toBeUndefined()
  - toThrow()
  - toBeGreaterThanOrEqual()
  - toBeLessThanOrEqual()
*/

describe("findRoot Testing", () => {
  // Put tests here
  test("Empty (here to prevent Jest from failing)", () => {
    expect(true).toBe(true);
  });
});

/*
  Exercise 2 (Do Below):
    Brainstorm the different cases that could be tested (should be at least 3)
      Try to use a different function than the one in FindRoot.js
    Write a test for each case in the above describe block
    Run `npm test` to run the tests and verify they pass
*/
