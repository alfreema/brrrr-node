const buyModule = require('../../simulations/buy.js');
const rehabModule = require('../../simulations/rehab.js');
const rentModule = require('../../simulations/rent.js');
const refinanceModule = require('../../simulations/refinance.js');
const repeatModule = require('../../simulations/repeat.js');
const basicStrategy = require('../strategies/basic.js');

console.warn = jest.fn();
console.error = jest.fn();

describe('simulate function in refinance module', () => {
  it('should simulate the refinance strategy and calculate refinance details', () => {
    // TODO:  The buy, rehab, and rent modules should be mocked!
    let strategy = buyModule.simulate(basicStrategy);
    strategy = rehabModule.simulate(strategy);
    strategy = rentModule.simulate(strategy);
    strategy = refinanceModule.simulate(strategy);
    const result = repeatModule.simulate(strategy);
    expect(result).toBeDefined();
    expect(result.repeat.cash.cashOut).toBe(-18700);
  });

  it('should handle missing required properties and throw an error', () => {
    // Create a strategy with missing required properties for testing error handling
    const brokenStrategy = basicStrategy;
    brokenStrategy.refinance.loan.type = null; // Set a required property to null
    expect(() => refinanceModule.simulate(brokenStrategy)).toThrowError();
  });
});
