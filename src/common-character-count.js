const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {

  const str1Object = s1.split('').reduce((acc, el) => {
    if (acc[el] !== undefined) {
      acc[el] = acc[el] + 1
    } else {
      acc[el] = 1
    }
    return acc
  }, {})
  const str2Object = s2.split('').reduce((acc, el) => {
    if (acc[el] !== undefined) {
      acc[el] = acc[el] + 1
    } else {
      acc[el] = 1
    }
    return acc
  }, {})

  const result = {}

  for (let key in str1Object) {
    if (str2Object[key] !== undefined) {
      let value = str1Object[key] > str2Object[key] ? str2Object[key] : str1Object[key]
      result[key] = value
    }
  }


  const res = Object.values(result).reduce( (acc, num) => acc + num, 0)
  retur

}

module.exports = {
  getCommonCharacterCount
};
