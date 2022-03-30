/**
 * Tests if a number is even.
 * @param {number} n the number to test if it is even
 * @returns {boolean} true if n is even, false otherwise
 */
function isEven(n) {
  return n % 2 === 0;
}

/**
 * Tests if a number is odd.
 * @param {number} n the number to test if it is odd
 * @returns {boolean} true if n is odd, false otherwise
 */
function isOdd(n) {
  return n % 2 !== 0;
}

module.exports = { isEven, isOdd };
