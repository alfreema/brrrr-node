const brrrr = require('./calculations/brrrr');
const cashflow = require('./calculations/cashflow');
const investment = require('./calculations/investment');
const percentage = require('./math/percentage');

module.exports = {
  calculate: brrrr.calculate,
  cashflow,
  investment,
  percentage
};
