const buy = require('./simulations/buy.js');
const rehab = require('./simulations/rehab.js');
const rent = require('./simulations/rent.js');
const refinance = require('./simulations/refinance.js');
const repeat = require('./simulations/repeat.js');
const percentage = require('./util/percentage.js');

const simulate = strategy => {
  validate(strategy)
  strategy = buy.simulate(strategy)
  strategy = rehab.simulate(strategy)
  strategy = rent.simulate(strategy)
  strategy = refinance.simulate(strategy)
  strategy = repeat.simulate(strategy)
  return strategy
}

const validate = strategy => {
  if(!strategy) {
    const error = `"strategy" is required`
    console.error(error)
    throw new Error(error)
  }
  const steps = ['buy', 'rehab', 'rent', 'refinance', 'repeat']
  for (const step of steps) {
    if (!strategy[step]) {
      const error = `"strategy" requires a ${step} property`
      console.error(error)
      throw new Error(error);
    }
  }
}

module.exports = {
  simulate,
  buy,
  rehab,
  rent,
  refinance,
  repeat,
  percentage
};
