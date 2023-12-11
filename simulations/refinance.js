const conventionalLoanLib = require('../lending/conventional-loan.js')
const debtServiceCoverageRatioLoanLib = require('../lending/debt-service-coverage-ratio-loan.js')

const refinance = (lib, strategy) => {
  // Need to calculate expenses first
  const carryCostsLib = require('../lending/carrying-costs.js')
  let carryCosts = carryCostsLib.simulate(
    strategy.rehab.afterRepairValue,
    {
      ...strategy,
      monthlyLoanPayment: 0
    }
  )
  const refinance = lib.simulate(
    strategy.rehab.afterRepairValue, 
    strategy.refinance.loan, 
    strategy.rent.monthlyRent,
    carryCosts.totalMonthlyCosts + strategy.rent.vacancyAmount + strategy.rent.propertyManagementAmount
  )
  carryCosts = carryCostsLib.simulate(
    strategy.rehab.afterRepairValue,
    {
      ...strategy,
      monthlyLoanPayment: refinance.monthlyPayment
    }
  )  
  refinance.carryCosts = carryCosts
  return refinance
}

const strategyToLibraryMap = {
  debtServiceCoverageRatioLoan: debtServiceCoverageRatioLoanLib,
  conventionalLoan: conventionalLoanLib
};

const simulate = strategy => {
  validate(strategy)
  const lib = strategyToLibraryMap[strategy.refinance.loan.type]
  if(lib) {
    const calculations = refinance(lib, strategy)
    strategy.refinance.carryCosts = { ...calculations.carryCosts };
    strategy.refinance.loan = { ...strategy.refinance.loan, ...calculations };
    delete strategy.refinance.loan.downPayment // Refinances don't have downpayments
    delete strategy.refinance.loan.carryCosts
    return strategy
  }
  console.warn('No refinance method was recognized.')
  console.warn('Try passing a loan property with type of "debtServiceCoverageRatioLoan".')
  return null
}

function mapKeysToString (map) {
  let keyString = '';
  for (const key in map) {
    keyString += key + ', ';
  }
  if (keyString.length > 0) {
    keyString = keyString.slice(0, -2);
  }
  return keyString
}

const validate = strategy => {
  if(!strategy.refinance.loan) {
    const error = '"strategy.refinance" must include "loan"'
    console.error(error)
    throw new Error(error)
  }
  if(!strategy.refinance.loan.type) {
    const error = '"strategy.refinance.loan" must include "type"'
    console.error(error)
    throw new Error(error)
  }
  if(!strategy.refinance.loan.seasoningMonths) {
    const error = '"strategy.refinance.loan" must include "seasoningMonths"'
    console.error(error)
    throw new Error(error)
  }
  if(!strategyToLibraryMap[strategy.refinance.loan.type]) {
    const error = `"strategy.refinance.loan.type" must be one of: ${mapKeysToString(strategyToLibraryMap)}`
    console.error(error)
    throw new Error(error)
  }
}


module.exports = {
  simulate
}