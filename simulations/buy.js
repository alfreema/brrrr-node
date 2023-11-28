const traditionalMortgageLoanLib = require('./buy/traditional-mortgage-loan.js')
const cashPurchaseLib = require('./buy/cash-purchase.js')
const hardMoneyLoanLib = require('./buy/hard-money-loan.js')

const purchase = (lib, terms, propertyOwnershipRates) => {
  const purchase = lib.simulate(terms)
  const carryCostsLib = require('./buy/carrying-costs.js')
  purchase.carryCosts = carryCostsLib.simulate({
    propertyPrice: terms.propertyPrice,
    monthlyLoanPayment: purchase.monthlyPayment,
    ...propertyOwnershipRates
  })
  return purchase
}

const simulate = financeDetails => {
  if(financeDetails?.traditionalMortgageLoan) {
    return purchase(traditionalMortgageLoanLib, financeDetails.traditionalMortgageLoan, financeDetails.propertyOwnershipRates)
  } else if(financeDetails?.cashPurchase) {
    return purchase(cashPurchaseLib, financeDetails.cashPurchase, financeDetails.propertyOwnershipRates)
  } else if(financeDetails?.hardMoneyLoan) {
   return purchase(hardMoneyLoanLib, financeDetails.hardMoneyLoan, financeDetails.propertyOwnershipRates)
  }
  console.warn('No finance method was recognized.')
  console.warn('Try passing a "traditionalMortgageLoan" property.')
  return null
}

module.exports = {
  simulate
}