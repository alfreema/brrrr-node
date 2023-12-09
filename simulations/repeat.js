function simulate(strategy) {
  // validate(strategy)
  const purchaseLoanCosts = strategy.buy.loan.downPayment + strategy.buy.loan.closingCosts;
  const carryCostsDuringRehab = strategy.buy.carryCosts.totalMonthlyCosts * strategy.rehab.monthsToCompleteRepairs
  const incomeAfterRehab = (Math.max(strategy.buy.loan.loanTermMonths - strategy.rehab.monthsToCompleteRepairs, 0) * strategy.rent.monthlyCashFlowUntilRefinance)
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
  return strategy;
}

/*
const validate = strategy => {
  const requiredProps = ['afterRepairValue', 'repairCosts', 'monthsToCompleteRepairs']
  for (const prop of requiredProps) {
    if (!strategy.rehab[prop]) {
      const error = `"strategy.rehab" requires a ${prop} property`
      console.error(error)
      throw new Error(error);
    }
  }
}
*/
module.exports = {
  simulate
}
