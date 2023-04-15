const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  let count = 0;
  let catsArr = [];
  for (let cats of backyard) {
    cats = cats.flat(Infinity);
    catsArr.push(cats);
  }
  catsArr = catsArr.flat(1)
  for (let i = 0; i < catsArr.length; i++) {
    const element = catsArr[i];
    if(element === '^^'){
      count ++
    }
  }
  return count;
}

module.exports = {
  countCats,
};
