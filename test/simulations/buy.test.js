const buyModule = require('../../simulations/buy.js');
const basicStrategy = require('../strategies/basic.js');

console.warn = jest.fn();

describe('simulate function in buy module', () => {
  it('should simulate the buy strategy with a recognized loan type', () => {
    const result = buyModule.simulate(basicStrategy);
    expect(result).toBeDefined();
    expect(result.buy.loan).toMatchObject({
      loanAmount: 120000,
      downPayment: 30000,
      monthlyPayment: 800,
      closingCosts: 3000
    });
    expect(result.buy.carryCosts).toMatchObject({
      monthlyPropertyTax: 100,
      monthlyInsurance: 50,
      monthlyMaintenance: 25,
      totalMonthlyCosts: 975
    });
  });

  it('should handle unrecognized loan type and return null', () => {
    const brokenStrategy = basicStrategy
    brokenStrategy.buy.loan.type = 'unknownLoanType'
    const result = buyModule.simulate(brokenStrategy);
    expect(result).toBeNull();
  });
});
