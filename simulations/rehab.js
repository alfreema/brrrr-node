function simulate(strategy) {
  validate(strategy)
  strategy.rehab.equity = strategy.rehab.afterRepairValue - (strategy.buy.property.price + strategy.rehab.repairCosts);
  return strategy;
}

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

module.exports = {
  simulate
}
