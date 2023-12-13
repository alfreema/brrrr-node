const { payment } = require('finance');
const { verifyProperties } = require('../util/validate.js')

const simulate = strategy => {
  validate(strategy)
  const {
    buy: {
      property: {
        price 
      },
      loan: {
        loanToValueRatio, 
        interestRate, 
        loanTermMonths, 
        closingCostRate, 
        interestOnly = true
      }
    },
    rehab: {
      repairCosts = 0
    }, 
  } = strategy;
  const downPayment = price * ((100 - loanToValueRatio) / 100);
  const loanAmount = price - downPayment + repairCosts;
  const closingCosts = price * (closingCostRate / 100);
  const monthlyInterestRate = interestRate / 12;
  const monthlyPayment = interestOnly ? loanAmount * (monthlyInterestRate / 100) : Number(payment(monthlyInterestRate, loanTermMonths, -loanAmount).toFixed(2));
  const totalRepayment = monthlyPayment * loanTermMonths;
  return {
    loanAmount,
    downPayment,
    totalRepayment,
    monthlyPayment,
    closingCosts,
    equityHoldback: 0
  };
}

const validate = strategy => {
  if(!verifyProperties(strategy, [
    'buy.property.price',
    'buy.loan.loanToValueRatio',
    'buy.loan.interestRate',
    'buy.loan.loanTermMonths',
    'buy.loan.closingCostRate'
  ])) {
    const error = '"Missing property!'
    console.error(error)
    throw new Error(error)
  }
}

module.exports = {
  simulate
}
