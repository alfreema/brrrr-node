const purchase = (lib, terms, propertyOwnershipRates) => {
  const buyLib = require(lib)
  const purchase = buyLib.simulate(terms)
  console.log('')
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
    return purchase('./buy/traditional-mortgage-loan.js', financeDetails.traditionalMortgageLoan, financeDetails.propertyOwnershipRates)
  } else if(financeDetails?.hardMoneyLoan) {
   return purchase('./buy/hard-money-loan.js', financeDetails.hardMoneyLoan, financeDetails.propertyOwnershipRates)
  }
  console.warn('No finance method was recognized.')
  console.warn('Try passing a "traditionalMortgageLoan" property.')
  return null
}

module.exports = {
  simulate
}