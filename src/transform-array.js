const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let result = [];
  let bin = [];
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  if (arr.length === 0) {
    return result;
  }
  if (
    !arr.includes("--discard-prev") &&
    !arr.includes("--double-prev") &&
    !arr.includes("--discard-next") &&
    !arr.includes("--double-next")
  ) {
    result = arr;
  }
  for (let i = 0; i > arr.length; i++) {
    if (arr[i] === "--discard-prev") {
      result.splice(arr[i - 1], 1);
    }
    if (arr[i] === "--double-prev") {
      result.splice(arr[i - 1], 0, arr[i - 1]);
    }
    if (arr[i - 1] === "--discard-next") {
      bin.push(arr[i]);
    }
    if (arr[i + 1] === "--double-next") {
      result.push(arr[i]);
    }
    result.push(arr[i]);
  }
  return result;
}

module.exports = {
  transform,
};
