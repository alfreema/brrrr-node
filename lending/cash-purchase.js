const { verifyProperties } = require('../util/validate.js')

const simulate = strategy => {
  validate(strategy)
  const {
    buy: {
      property: {
        price 
      },
      loan: {
        closingCostRate,
      }
    }
  } = strategy;
  const closingCosts = price * (closingCostRate / 100);
  return {
    downPayment: price,
    loanAmount: 0,
    monthlyPayment: 0,
    closingCosts,
    equityHoldback: 0
  };
};

const validate = strategy => {
  // We only need to check the parameters that buy-and-rehab-hard-money-loan aren't checking
  if(!verifyProperties(strategy, [
    'buy.property.price',
    'buy.loan.closingCostRate'
  ])) {
    const error = '"Missing property!'
    console.error(error)
    throw new Error(error)
  }
}

module.exports = {
  simulate
};
