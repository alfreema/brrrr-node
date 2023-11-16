const refinance = (lib, terms, investment) => {
  const refinanceLib = require(lib)
  return refinanceLib.simulate(terms, investment)
}

const simulate = financeDetails => {
  if(financeDetails?.traditionalMortgageRefinance) {
    return refinance('./refinance/traditional-mortgage-refinance.js', financeDetails.traditionalMortgageRefinance, financeDetails.investment)
  } else if(financeDetails?.commercialLoan) {
   return refinance('./refinance/commercial-loan.js', financeDetails.commercialLoan, financeDetails.investment)
  }
  console.warn('No refinance method was recognized.')
  console.warn('Try passing a "traditionalMortgageRefinance" property.')
  return null
}

module.exports = {
  simulate
}