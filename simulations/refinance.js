const traditionalMortgageRefinanceLib = require('./refinance/traditional-mortgage-refinance.js')
// const commercialLoanLib = require('./refinance/commercial-loan.js')

const refinance = (lib, terms, investment) => {
  return lib.simulate(terms, investment)
}

const simulate = financeDetails => {
  if(financeDetails?.traditionalMortgageRefinance) {
    return refinance(traditionalMortgageRefinanceLib, financeDetails.traditionalMortgageRefinance, financeDetails.investment)
  }
  
/*  
  else if(financeDetails?.commercialLoan) {
   return refinance(commercialLoanLib, financeDetails.commercialLoan, financeDetails.investment)
  }
*/  
  console.warn('No refinance method was recognized.')
  console.warn('Try passing a "traditionalMortgageRefinance" property.')
  return null
}

module.exports = {
  simulate
}