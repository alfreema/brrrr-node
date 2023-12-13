const loan = require('./loan.js')
const { verifyProperties } = require('../util/validate.js')

const simulate = strategy => {
  validate(strategy)
  const {
    buy: {
      loan: {
        downPaymentPercentage
      }
    }
  } = strategy;
  
  strategy.buy.loan.loanToValueRatio = 100 - downPaymentPercentage;
  return loan.simulate(strategy);
};

const validate = strategy => {
  if(!verifyProperties(strategy, [
    'buy.loan.downPaymentPercentage',
  ])) {
    const error = '"Missing property!'
    console.error(error)
    throw new Error(error)
  }
}

module.exports = {
  simulate,
};
