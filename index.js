const buy = require('./simulations/buy');
const rehab = require('./simulations/rehab');
const rent = require('./simulations/rent');
const refinance = require('./simulations/refinance');
const percentage = require('./math/percentage');

const simulate = parameters => {
  const propertyPrice = parameters.traditionalMortgageLoan?.propertyPrice ?? 
                        parameters.cashPurchase?.propertyPrice ??
                        parameters.hardMoneyLoan.propertyPrice

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
