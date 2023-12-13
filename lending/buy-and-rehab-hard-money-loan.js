const loanLib = require('./loan.js')
const { verifyProperties } = require('../util/validate.js')

const simulate = strategy => {
  validate(strategy)
  return loanLib.simulate(strategy)
}

const validate = strategy => {
  if(!verifyProperties(strategy, [
    'rehab.repairCosts'
  ])) {
    const error = '"Missing property!'
    console.error(error)
    throw new Error(error)
  }
}

module.exports = {
  simulate
}
