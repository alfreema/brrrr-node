const loanLib = require('./loan.js')
const { verifyProperties } = require('../util/validate.js')

const simulate = (strategy) => {  
  validate(strategy)
  const {loanAmount, downPayment, closingCosts, monthlyPayment, totalRepayment, equityHoldback} = loanLib.simulate(strategy)
  const monthlyExpenses = strategy.buy.carryCosts.totalMonthlyCosts + strategy.rent.vacancyAmount + strategy.rent.propertyManagementAmount
  const netOperatingIncome = strategy.rent.monthlyRent - monthlyExpenses;
  const totalDebtService = monthlyPayment + monthlyExpenses;
  const debtServiceCoverageRatio = netOperatingIncome / totalDebtService;

  return {
    loanAmount,
    downPayment,
    totalRepayment,
    monthlyPayment,
    closingCosts,
    equityHoldback,
    debtServiceCoverageRatio,
    netOperatingIncome,
    totalDebtService,
  };
};


const validate = strategy => {
  if(!verifyProperties(strategy, [
    'rent.monthlyRent',
    'buy.carryCosts.totalMonthlyCosts',
    'rent.vacancyAmount',
    'rent.propertyManagementAmount'
  ])) {
    const error = '"Missing property!'
    console.error(error)
    throw new Error(error)
  }
}

  
// Helper function to calculate monthly payment
const calculateMonthlyPayment = (loanAmount, interestRate, loanTermMonths) => {
  const monthlyInterestRate = interestRate / 12 / 100;
  const numerator = loanAmount * monthlyInterestRate;
  const denominator = 1 - Math.pow(1 + monthlyInterestRate, -loanTermMonths);
  return numerator / denominator;
};

// Helper function to calculate loan amount based on DSCR
const calculateDSCRLoanAmount = (debtServiceCoverageRatio, monthlyPayment) => {
  return monthlyPayment / debtServiceCoverageRatio;
};

module.exports = {
  simulate
}
