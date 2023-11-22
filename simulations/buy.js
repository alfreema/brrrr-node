const path = require('path-browserify');

const purchase = (lib, terms, propertyOwnershipRates) => {
  const buyLib = require(lib)
  const purchase = buyLib.simulate(terms)
  const carryCostsLib = require(path.join(__dirname, 'buy/carrying-costs.js'))
  purchase.carryCosts = carryCostsLib.simulate({
    propertyPrice: terms.propertyPrice,
    monthlyLoanPayment: purchase.monthlyPayment,
    ...propertyOwnershipRates
  })
  return purchase
}

const simulate = financeDetails => {
  if(financeDetails?.traditionalMortgageLoan) {
    return purchase(path.join(__dirname, 'buy/traditional-mortgage-loan.js'), financeDetails.traditionalMortgageLoan, financeDetails.propertyOwnershipRates)
  } else if(financeDetails?.cashPurchase) {
    return purchase(path.join(__dirname, 'buy/cash-purchase.js'), financeDetails.cashPurchase, financeDetails.propertyOwnershipRates)
  } else if(financeDetails?.hardMoneyLoan) {
    return purchase(path.join(__dirname, 'buy/hard-money-loan.js'), financeDetails.hardMoneyLoan, financeDetails.propertyOwnershipRates)
  }
  console.warn('No finance method was recognized.')
  console.warn('Try passing a "traditionalMortgageLoan" property.')
  return null
}

module.exports = {
  simulate
}
