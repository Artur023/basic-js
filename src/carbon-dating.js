const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (isNaN(sampleActivity)) {
    return false;
  }
  if (typeof sampleActivity !== "string") {
    return false;
  }
  if (typeof Number(sampleActivity) !== "number") {
    return false;
  }
  if (
    Math.sign(Number(sampleActivity)) === -1 ||
    Math.sign(Number(sampleActivity) === NaN)
  ) {
    return false;
  }

  let result =
    Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD);
  result = Math.ceil(result);
  if (Math.sign(Number(result)) === -1 || Math.sign(Number(result) == NaN)) {
    return false;
  }
  if (result === Infinity) {
    return false;
  }
  if (typeof result === "number") {
    console.log(result);
    return result;
  }
  return false;
}

module.exports = {
  dateSample,
};
