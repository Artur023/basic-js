const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 * spring, summer, autumn (fall), winter.
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * Если date аргумент не был передан, функция должна вернуть string 'Unable to determine the time of year!'.
 * Если date аргумент недействителен , функция должна выдать Error сообщение with Invalid date!.
 */

function getSeason(date) {
  if (date != undefined && Object.getOwnPropertyNames(date).length != 0) {
    throw new Error("Invalid date!");
  }
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }
  if (Object.prototype.toString.call(date) !== "[object Date]" || isNaN(date)) {
    throw new Error("Invalid date!");
  }
  if (
    Object.prototype.toString.call(date) === "[object Date]" ||
    !isNaN(date)
  ) {
    let month = date.getMonth();
    if (month === 11 || month === 0 || month === 1) {
      return "winter";
    }
    if (month === 2 || month === 3 || month === 4) {
      return "spring";
    }
    if (month === 5 || month === 6 || month === 7) {
      return "summer";
    }
    if (month === 8 || month === 9 || month === 10) {
      return "autumn";
    }
  }
}

module.exports = {
  getSeason,
};
