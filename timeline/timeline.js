const { getNextMonthFirstDay } = require('../util/calendar.js');

// Function to print the provided date
const generate = () => {
  console.log(getNextMonthFirstDay());
}

module.exports = { 
  generate 
};
