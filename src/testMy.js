
let discardNext = "--discard-next";
let discardPrev = "--discard-prev";
let doubleNext = "--double-next";
let doublePrev = "--double-prev";
const cases = [
    ['--discard-prev', 1, 2, 3],
    ['--double-prev', 1, 2, 3],
    [1, 2, 3, '--double-next'],
    [1, 2, 3, '--discard-next']
];
console.log('message')
function transform(arr) {
  console.log(arr)

  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  if (arr.length === 0) {
    return arr;
  }
  if (
    !arr.includes(discardPrev) &&
    !arr.includes(doublePrev) &&
    !arr.includes(discardNext) &&
    !arr.includes(doubleNext)
  ) {
    return arr;
  }
  let result = arr;
  for (let i = 0; i < result.length; i++) {
    // "--discard-next"
    if (
      result[i] === discardNext &&
      result.indexOf(discardNext) !== result.length - 1
    ) {
      result.splice(result.indexOf(discardNext), 2);
    } else if (
      result[i] === discardNext &&
      result.indexOf(discardNext) === result.length - 1
    ) {
      result.splice(result.indexOf(discardNext), 1);
    }
    // "--discard-prev"
    if (result[i] === discardPrev && result.indexOf(discardPrev) === 0) {
      result.splice(result.indexOf(discardPrev), 1);
    } else if (result[i] === discardPrev && result.indexOf(discardPrev) !== 0) {
      result.splice(result.indexOf(discardPrev) - 1, 2);
    }
    // "--double-next"
    if (result[i] === doubleNext && result.indexOf(doubleNext) !== 0) {
      result[result.indexOf(doubleNext)] =
        result[result.indexOf(doubleNext) + 1];
    } else if (
      result[i] === doubleNext &&
      result.indexOf(doubleNext) === result.length - 1
    ) {
      result.splice(result.indexOf(doubleNext), 1);
    }
    // "--double-prev"
    if (result[i] === doublePrev && result.indexOf(doublePrev) !== 0) {
      result[result.indexOf(doublePrev)] =
        result[result.indexOf(doublePrev - 1)];
    } else if (result[i] === doublePrev && result.indexOf(doublePrev) === 0) {
      result.splice(result.indexOf(doublePrev), 1);
    }
  }
  console.log(arr)
  return result;
}
transform(cases)

