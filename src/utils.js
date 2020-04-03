/**
 *
 * @param {String} dateString A date representing a date in yyyy-mm-dd format
 * @returns {Object} An object of the form {year, month, day}
 */
function parseDate(dateString) {
  const arrayfiedDate = dateString.split("-");
  return {
    year: arrayfiedDate[0],
    month: arrayfiedDate[1],
    day: arrayfiedDate[2]
  };
}

/**
 *
 * @param {String} region region selected by the user
 * @param {String} startingDate starting date from user input
 * @param {String} endingDate ending date from user input
 * @param {JSON} data sample data in json format (top level is an array)
 * @returns {Array} An containing the data for starting date
 */
function getDataWithinGivenTime(region, startingDate, endingDate, data) {
  const { year: startYear, month: startMonth, day: startDay } = parseDate(startingDate);
  const { year: endYear, month: endMonth, day: endDay } = parseDate(endingDate);
  let outputArr = [];
  data.forEach(entry => {
    if (
      entry.date.year >= parseInt(startYear) &&
      entry.date.year <= parseInt(endYear) &&
      entry.date.month >= parseInt(startMonth) &&
      entry.date.month <= parseInt(endMonth) &&
      entry.date.day >= parseInt(startDay) &&
      entry.date.day <= parseInt(endDay) &&
      entry.region === region
    ) {
      outputArr.push(entry);
    }
  });

  return outputArr;
}

/**
 *
 * @param {String} startDate
 * @param {String} endDate
 * @returns {Boolean} True if endDate occurs earlier in calender.
 */
function isStartDateBigger(startDate, endDate) {
  const diff = parseInt(endDate.split("-").join("")) - parseInt(startDate.split("-").join(""));
  if (diff < 1) {
    return true;
  } else {
    return false;
  }
}
