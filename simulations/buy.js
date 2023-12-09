const buyAndRehabHardMoneyLoanLib = require('../lending/buy-and-rehab-hard-money-loan.js')
const conventionalLoanLib = require('../lending/conventional-loan.js')
const cashPurchaseLib = require('../lending/cash-purchase.js')
const hardMoneyLoanLib = require('../lending/hard-money-loan.js')
const homestyleLoanLib = require('../lending/homestyle-loan.js')

const purchase = (lib, strategy) => {
  const purchase = lib.simulate(strategy.buy.property.price, strategy.buy.loan, strategy.rehab.repairCosts)
  const carryCostsLib = require('../lending/carrying-costs.js')
  purchase.carryCosts = carryCostsLib.simulate(
    strategy.buy.property.price,
    {
      ...strategy,
      monthlyLoanPayment: purchase.monthlyPayment
    }
  )
  return purchase
}

const strategyToLibraryMap = {
  buyAndRehabHardMoneyLoan: buyAndRehabHardMoneyLoanLib,
  conventionalLoan: conventionalLoanLib,
  cashPurchase: cashPurchaseLib,
  hardMoneyLoan: hardMoneyLoanLib,
  homestyleLoan: homestyleLoanLib,
};

const simulate = strategy => {
  validate(strategy)
  const lib = strategyToLibraryMap[strategy.buy.loan.type]
  if(lib) {
    const calculations = purchase(lib, strategy)
    strategy.buy.carryCosts = { ...calculations.carryCosts };
    strategy.buy.loan = { ...strategy.buy.loan, ...calculations };
    delete strategy.buy.loan.carryCosts
    return strategy
  }
  console.warn('No finance method was recognized.')
  console.warn('Try passing a "conventionalLoan" property.')
  return null
}

const validate = strategy => {
  if(!strategy.buy.property) {
    const error = '"strategy.buy" must include "property"'
    console.error(error)
    throw new Error(error)
  }
  const requiredProps = ['price', 'propertyTaxRate', 'insuranceRate', 'maintenanceRate']
  for (const prop of requiredProps) {
    if (!strategy.buy.property[prop]) {
      const error = `"strategy.buy.property" requires a ${prop} property`
      console.error(error)
      throw new Error(error);
    }
  }
  if(!strategy.buy.loan) {
    const error = '"strategy.buy" must include "loan"'
    console.error(error)
    throw new Error(error)
  }
  if(!strategy.buy.loan.type) {
    const error = '"strategy.buy.loan" must include "type"'
    console.error(error)
    throw new Error(error)
  }
  if(!strategy.buy.loan.type == 'buyAndRehabHardMoneyLoan' &&
    !strategy.buy.loan.type == 'conventionalLoan' &&
    !strategy.buy.loan.type == 'cashPurchase' &&
    !strategy.buy.loan.type == 'hardMoneyLoan'
  ) {
    const error = '"strategy.buy.loan.type" must be one of: "buyAndRehabHardMoneyLoan", "conventionalLoan", "cashPurchase", or "hardMoneyLoan"'
    console.error(error)
    throw new Error(error)
  }
}

module.exports = {
  simulate
}