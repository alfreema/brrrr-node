const buyModule = require('../../simulations/buy.js');
const rehabModule = require('../../simulations/rehab.js');
const rentModule = require('../../simulations/rent.js');
const refinanceModule = require('../../simulations/refinance.js');  // Import the refinance module
const basicStrategy = require('../strategies/basic.js');

console.warn = jest.fn();
console.error = jest.fn();

describe('simulate function in refinance module', () => {
  it('should simulate the refinance strategy and calculate refinance details', () => {
    // TODO:  The buy, rehab, and rent modules should be mocked!
    let strategy = buyModule.simulate(basicStrategy);
    strategy = rehabModule.simulate(strategy);
    strategy = rentModule.simulate(strategy);
    const result = refinanceModule.simulate(strategy);
    expect(result).toBeDefined();
    expect(result.refinance.loan).toMatchObject({
      loanAmount: 150000,
      monthlyPayment: 1100.65,
      closingCosts: 4000
    });
    expect(result.refinance.carryCosts).toMatchObject({
      monthlyPropertyTax: 200,
      monthlyInsurance: 100,
      monthlyMaintenance: 50,
      totalMonthlyCosts: 1450.65
    });
  });

  it('should handle missing required properties and throw an error', () => {
    // Create a strategy with missing required properties for testing error handling
    let brokenStrategy = buyModule.simulate(basicStrategy);
    brokenStrategy = rehabModule.simulate(brokenStrategy);
    brokenStrategy = rentModule.simulate(brokenStrategy);
    brokenStrategy.refinance.loan.type = null; // Set a required property to null
    expect(() => refinanceModule.simulate(brokenStrategy)).toThrowError();
  });
});
