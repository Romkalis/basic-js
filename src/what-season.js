const { NotImplementedError } = require("../lib");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  const month = date.getMonth();
  if (month === 0 || month < 3) {
    return "winter";
  } else if (month > 2 && month < 6) {
    return "spring";
  } else if (month > 5 && month < 9) {
    return "summer";
  } else {
    return "autumn";
  }
}

module.exports = {
  getSeason,
};
