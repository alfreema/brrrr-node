const percentage = require('../util/percentage.js')

function simulate(strategy) {
  validate(strategy)
  const vacancyAmount = percentage.percentageAmount(strategy.rent.monthlyRent, strategy.rent.vacancyRate);
  const propertyManagementAmount = percentage.percentageAmount(strategy.rent.monthlyRent, strategy.rent.propertyManagementRate);
  const netMonthlyIncome = strategy.rent.monthlyRent - (vacancyAmount + propertyManagementAmount + strategy.buy.carryCosts.totalMonthlyCosts);
  strategy.rent = {
    ...strategy.rent,
    vacancyAmount,
    propertyManagementAmount,
    monthlyCashFlowUntilRefinance: netMonthlyIncome
  }
  return strategy;
}

const validate = strategy => {
  const requiredProps = ['monthlyRent', 'propertyManagementRate', 'vacancyRate']
  for (const prop of requiredProps) {
    if (!strategy.rent[prop]) {
      const error = `"strategy.rent" requires a ${prop} property`
      console.error(error)
      throw new Error(error);
    }
  }
}

module.exports = {
  simulate
};