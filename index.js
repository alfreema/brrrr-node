const buy = require('./simulations/buy');
const rehab = require('./simulations/rehab');
const rent = require('./simulations/rent');
const refinance = require('./simulations/refinance');
const percentage = require('./math/percentage');

const simulate = parameters => {
  if(!parameters.traditionalMortgageLoan &&
     !parameters.cashPurchase &&
     !parameters.hardMoneyLoan
  ) {
    console.log('traditionalMortgageLoan, cashPurchase, or hardMoneyLoan parameter is required')
    return null
  }
  if(!parameters.propertyOwnershipRates) {
    console.log('propertyOwnershipRates is required')
    return null
  }
  if(!parameters.rehabParameters) {
    console.log('rehabParameters is required')
    return null
  }
  if(!parameters.cashflowParameters) {
    console.log('cashflowParameters is required')
    return null
  }
  if(!parameters.traditionalMortgageRefinance
  ) {
   console.log('traditionalMortgageRefinance parameter is required')
   return null
 }
 
  const propertyPrice = parameters.traditionalMortgageLoan?.propertyPrice ?? 
                        parameters.cashPurchase?.propertyPrice ??
                        parameters.hardMoneyLoan.propertyPrice
  const downPaymentPercentage = parameters.traditionalMortgageLoan?.propertyPrice * ( 100 / parameters.traditionalMortgageLoan?.downPaymentPercentage) ?? 
                        parameters.cashPurchase?.propertyPrice ??
                        parameters.hardMoneyLoan.propertyPrice * (100 / ( 100 - parameters.hardMoneyLoan.loanToValueRatio))

  const buyResult = buy.simulate({ 
    ...(parameters.traditionalMortgageLoan && { traditionalMortgageLoan: parameters.traditionalMortgageLoan }),
    ...(parameters.cashPurchase && { cashPurchase: parameters.cashPurchase }),
    ...(parameters.hardMoneyLoan && { hardMoneyLoan: parameters.hardMoneyLoan }),
    propertyOwnershipRates: parameters.propertyOwnershipRates
  })
  const rehabResult = rehab.simulate({ 
    ...parameters.rehabParameters,
    propertyPrice
  })

  const rentResult = rent.simulate({
    ...parameters.cashflowParameters,
    carryingCosts: buyResult.carryCosts.totalMonthlyCosts
  })
  
  const refinanceResult = refinance.simulate({
    ...(parameters.traditionalMortgageRefinance && { 
      traditionalMortgageRefinance: {
        ...parameters.traditionalMortgageRefinance,
        afterRepairValue: parameters.rehabParameters.afterRepairValue
      }
    }),
    investment: {
      propertyPrice,
      downPaymentPercentage,
      closingCosts: buyResult.closingCosts,
      carryingCosts: buyResult.carryCosts.totalMonthlyCosts,
      rehabCosts: parameters.rehabParameters.repairCosts
    }
  })
  return {
    buy: buyResult,
    rehab: rehabResult,
    rent: rentResult,
    refinance: refinanceResult
  }
}

module.exports = {
  simulate,
  buy,
  rehab,
  rent,
  refinance,
  percentage
};
