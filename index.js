const buy = require('./simulations/buy');
const rehab = require('./simulations/rehab');
const rent = require('./simulations/rent');
const refinance = require('./simulations/refinance');
const percentage = require('./math/percentage');

module.exports = {
  buy,
  rehab,
  rent,
  refinance,
  percentage
};
