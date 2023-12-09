const buy = require('./simulations/buy');
const rehab = require('./simulations/rehab');
const rent = require('./simulations/rent');
const refinance = require('./simulations/refinance');
const percentage = require('./math/percentage');

const simulate = strategy => {
  validate(strategy)
  strategy = buy.simulate(strategy)
  strategy = rehab.simulate(strategy)
  strategy = rent.simulate(strategy)
  strategy = refinance.simulate(strategy)
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
  percentage
};
