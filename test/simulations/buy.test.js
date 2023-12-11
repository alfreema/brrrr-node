const buyModule = require('../../simulations/buy.js');
const basicStrategy = require('../strategies/basic.js');

console.warn = jest.fn();
console.error = jest.fn();

describe('simulate function in buy module', () => {
  it('should simulate the buy strategy with a recognized loan type', () => {
    const result = buyModule.simulate(basicStrategy);
    expect(result).toBeDefined();
    expect(result.buy.loan).toMatchObject({
      loanAmount: 130000,
      downPayment: 20000,
      monthlyPayment: 866.6666666666666,
      closingCosts: 2000
    });
    expect(result.buy.carryCosts).toMatchObject({
      monthlyPropertyTax: 100,
      monthlyInsurance: 50,
      monthlyMaintenance: 25,
      totalMonthlyCosts: 1041.6666666666665
    });
  });

  it('should handle unrecognized loan type and return null', () => {
    const brokenStrategy = basicStrategy
    brokenStrategy.buy.loan.type = 'unknownLoanType'
    expect(() => buyModule.simulate(brokenStrategy)).toThrowError();
  });
});
