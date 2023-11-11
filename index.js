const brrrr = require('./calculations/brrrr');

const buy = require('./calculations/buy');
const rehab = require('./calculations/rehab');
const rent = require('./calculations/rent');
const refinance = require('./calculations/refinance');

const analyze = require('./calculations/analyze');
const percentage = require('./math/percentage');

module.exports = {
  calculate: brrrr.calculate,
  buy,
  rehab,
  rent,
  refinance,
  analyze,
  percentage
};
