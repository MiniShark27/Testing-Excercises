/**
 * A two dimensional function that takes in one value as an input, and returns an output
 *
 * @callback continuousFunction
 * @param {number} input the input to the function
 * @returns {number} the output of the function
 */

/**
 * A function that finds the root of a continuousFunction between two values
 * The root found is garmented to be between the two values, and to be at most epsilon away from the true root
 * For Example: If the root is 2 and epsilon is 0.1, then the root will be between 1.9 and 2.1
 * A root is where a continuousFunction has a value of 0
 *
 * @param {continuousFunction} f the function where the root will be found
 * @param {number} a the lower bound of the root
 * @param {number} b the upper bound of the root
 * @param {number} epsilon the precision of the root
 * @returns {object} the root of the function, or undefined if no root was found
 */
function findRoot(f, a, b, epsilon) {
  if (typeof f !== "function") {
    throw new Error("f must be a function");
  }
  if (f(a) * f(b) > 0) {
    // Unable to find a root with this method
    return { root: undefined, iterations: 0 };
  }
  let c = a;
  let count = 0;
  while (b - a > epsilon) {
    count++;
    c = (a + b) / 2;
    if (f(c) == 0) {
      break;
    }
    if (f(c) * f(a) < 0) {
      b = c;
    } else {
      a = c;
    }
  }
  return { root: c, iterations: count };
}

// Demonstration of how the findRoot function works
// The function below has Roots at +/- sqrt(2)
const f = x => x * x - 2;

const root1 = findRoot(f, 0, 10, 0.00001);
const root2 = findRoot(f, -10, 0, 0.00001);
// Uncomment Below Line to see output
// console.log(root1, root2);

module.exports = { findRoot };
