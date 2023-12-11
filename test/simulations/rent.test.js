const buyModule = require('../../simulations/buy.js');
const rehabModule = require('../../simulations/rehab.js');
const rentModule = require('../../simulations/rent.js');
const basicStrategy = require('../strategies/basic.js');

console.warn = jest.fn();
console.error = jest.fn();


describe('simulate function in rent module', () => {
  it('should simulate the rent strategy and calculate monthly cash flow', () => {
    // TODO: buyModule and rehabModule should be mocked!
    let strategy = buyModule.simulate(basicStrategy)
    strategy = rehabModule.simulate(strategy)
    const result = rentModule.simulate(strategy);
    expect(result).toBeDefined();
    expect(result.rent).toMatchObject({
      vacancyAmount: 90,
      propertyManagementAmount: 108,
      monthlyCashFlowUntilRefinance: 560.3333333333335
    });
  });

  it('should handle missing required properties and throw an error', () => {
    const brokenStrategy = basicStrategy;
    brokenStrategy.rent.monthlyRent = null; // Set a required property to null
    expect(() => rentModule.simulate(brokenStrategy)).toThrowError();
  });
});
