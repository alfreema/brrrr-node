const conventionalLoanLib = require('../lending/conventional-loan.js')
const debtServiceCoverageRatioLoanLib = require('../lending/debt-service-coverage-ratio-loan.js')

// All of the loans use "buy.loan", so the strategy is to make a deep copy of the "strategy"
// object, then overwrite the copy's buy.loan values to calculate the loan, then update
// the "refinance" section of the original "strategy"
const refinance = (lib, strategy) => {
  // Make a deep copy of "strategy" so we don't overwrite values
  const copyStrategy = JSON.parse(JSON.stringify(strategy));
  const carryCostsLib = require('../lending/carrying-costs.js')
  copyStrategy.buy.loan = copyStrategy.refinance.loan
  copyStrategy.buy.carryCosts = carryCostsLib.simulate(strategy, strategy.rehab.afterRepairValue)
  copyStrategy.buy.carryCosts.totalMonthlyCosts -= copyStrategy.buy.carryCosts.monthlyLoanPayment
  copyStrategy.buy.property.price = copyStrategy.rehab.afterRepairValue
  copyStrategy.rehab.repairCosts = 0
  const refinance = lib.simulate(copyStrategy)
  refinance.carryCosts = carryCostsLib.simulate(strategy, strategy.rehab.afterRepairValue, refinance.monthlyPayment)
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
  if(!strategy.refinance.loan.seasoningMonths && strategy.refinance.loan.seasoningMonths < 0) {
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