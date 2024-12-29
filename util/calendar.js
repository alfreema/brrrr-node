// Module to get the first day of the next month starting from today
const getNextMonthFirstDay = () => {
  // Get today's date
  const today = new Date();
  
  // Get the next month
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  
  // Return the first day of the next month
  return nextMonth;
}

module.exports = {
  getNextMonthFirstDay
}
