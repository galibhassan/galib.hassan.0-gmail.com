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
 * @param {String} startingDate starting date from user input
 * @param {JSON} data sample data in json format (top level is an array)
 * @returns {Array} An containing the data for starting date
 */
function getDataOfStartingDate(region, startingDate, data) {
  const { year, month, day } = parseDate(startingDate);
  let outputArr = [];
  data.forEach(entry => {
    if (
      entry.date.year === parseInt(year) &&
      entry.date.month === parseInt(month) &&
      entry.date.day === parseInt(day) &&
      entry.region === region
    ) {
      outputArr.push(entry);
    }
  });

  return outputArr;
}
