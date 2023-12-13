// Based on the description found here:  https://www.youtube.com/watch?v=R7efrjnC95Y
const loanLib = require('./loan.js')
const { verifyProperties } = require('../util/validate.js')

const simulate = strategy => {
  validate(strategy)
  const {
    buy: {
      loan: {
        interestRate, 
        loanTermMonths, 
        closingCostRate, 
        equityHoldbackLoanToValueRatio
      }
    },
    rehab: {
      afterRepairValue
    }, 
  } = strategy;
  const loan = loanLib.simulate(strategy)
  const loanAmount = afterRepairValue * (equityHoldbackLoanToValueRatio / 100);
  const equityHoldback = loanAmount - loan.loanAmount;
  const closingCosts = loanAmount * (closingCostRate / 100);
  const monthlyPayment = loanAmount * (interestRate / 12 / 100);
  const totalRepayment = monthlyPayment * loanTermMonths;
  return {
    loanAmount,
    downPayment: loan.downPayment,
    totalRepayment,
    monthlyPayment,
    closingCosts,
    equityHoldback
  };
}  

const validate = strategy => {
  // We only need to check the parameters that buy-and-rehab-hard-money-loan aren't checking
  if(!verifyProperties(strategy, [
    'buy.loan.equityHoldbackLoanToValueRatio',
    'rehab.afterRepairValue'
  ])) {
    const error = '"Missing property!'
    console.error(error)
    throw new Error(error)
  }
}

module.exports = {
  simulate
}
