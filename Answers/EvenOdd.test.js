let isOdd = require("../1. Even Odd/EvenOdd.js").isOdd;

describe("isOdd Testing", function () {
  test("should return false if an even number is passed", function () {
    expect(isOdd(2)).toBe(false);
  });

  it("should return true if an odd number is passed", function () {
    expect(isOdd(1)).toBe(true);
  });
});
