const { verifyProperties } = require('../util/validate.js')

function simulate(strategy) {
  validate(strategy)
  const purchaseLoanCosts = strategy.buy.loan.downPayment + strategy.buy.loan.closingCosts;
  const carryCostsDuringRehab = strategy.buy.carryCosts.totalMonthlyCosts * strategy.rehab.monthsToCompleteRepairs
  const incomeAfterRehab = (Math.max(strategy.refinance.loan.seasoningMonths - strategy.rehab.monthsToCompleteRepairs, 0) * strategy.rent.monthlyCashFlowUntilRefinance)
  const totalCashInvestment = purchaseLoanCosts + 
                              carryCostsDuringRehab -
                              incomeAfterRehab +
                              strategy.refinance.loan.closingCosts;
  const cashOut = strategy.refinance.loan.loanAmount - strategy.buy.loan.loanAmount - totalCashInvestment + strategy.buy.loan.equityHoldback;
  strategy.repeat.cash = {
    purchaseLoanCosts,
    carryCostsDuringRehab,
    incomeAfterRehab,
    totalCashInvestment,
    cashOut
  }
  const monthlyCashflow = strategy.rent.monthlyRent - strategy.refinance.loan.totalDebtService
  strategy.repeat.cashflow = {
    monthlyCashflow,
    annualCashflow: monthlyCashflow * 12
  }
  const cashOnCashReturn = (strategy.repeat.cashflow.annualCashflow / Math.max(-strategy.repeat.cash.cashOut, 0)) * 100
  const allInCosts =  strategy.buy.property.price + 
                      strategy.buy.loan.closingCosts + 
                      strategy.rehab.repairCosts + 
                      (strategy.buy.carryCosts.totalMonthlyCosts * strategy.rehab.monthsToCompleteRepairs) +
                      strategy.refinance.loan.closingCosts
  const allInOverARV = (allInCosts / strategy.rehab.afterRepairValue) * 100
  const seventyPercentRule = {
    meets: allInOverARV > 70 ? 'no' : 'yes',
    actual: allInOverARV,
    recommendedMaximumPurchasePrice: (strategy.rehab.afterRepairValue * 0.70) - (allInCosts - strategy.buy.property.price)
  }
  const onePercentCalc = strategy.rehab.afterRepairValue * 0.01
  const onePercentRule = {
    meets: strategy.rent.monthlyRent >= onePercentCalc ? 'yes' : 'no',
    recommendedMinimumRent: onePercentCalc
  }
  strategy.repeat.analysis = {
    allInCosts,
    cashOnCashReturn,
    seventyPercentRule,
    onePercentRule
  }
  return strategy;
}

// Function to check if properties exist
/*
function verifyProperties(strategy, properties) {
  for (let i = 0; i < properties.length; i++) {
    const propertyPath = properties[i].split('.');
    let currentObj = strategy;

    for (let j = 0; j < propertyPath.length; j++) {
      const propertyName = propertyPath[j];
      if (currentObj.hasOwnProperty(propertyName)) {
        currentObj = currentObj[propertyName];
      } else {
        const error = `"strategy" must include strategy.${properties[i]}`
        console.error(error)
        throw new Error(error)
      }
    }
  }
  return true;
}
*/
const validate = strategy => {
  const propertiesToVerify = [
    'buy.carryCosts.totalMonthlyCosts',
    'buy.loan.closingCosts',
    'buy.loan.downPayment',
    'buy.loan.equityHoldback',
    'buy.loan.loanAmount',
    'buy.property.price',
    'refinance.loan.closingCosts',
    'refinance.loan.loanAmount',
    'refinance.loan.seasoningMonths',
    'refinance.loan.totalDebtService',
    'rehab.afterRepairValue',
    'rehab.monthsToCompleteRepairs',
    'rehab.repairCosts',
    'rent.monthlyCashFlowUntilRefinance',
    'rent.monthlyRent',
  ];
  if(!verifyProperties(strategy, propertiesToVerify)) {
    const error = '"Missing property!'
    console.error(error)
    throw new Error(error)
  }
}

module.exports = {
  simulate
}
