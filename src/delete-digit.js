const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  if(String(n).length === 1) return n;

  const numsArraiyg = String(n).split("")

  let maxNum = Number(numsArraiyg.splice(0,1))

  for (let i = 1; i < numsArraiyg.length; i++) {
    const num = Number(numsArraiyg.splice(i,1))
    if (num > maxNum) {
      maxNum = num
    }

    console.log(maxNum)
  }
  return maxNum
}

module.exports = {
  deleteDigit
};
