const buyModule = require('../../simulations/buy.js');
const rehabModule = require('../../simulations/rehab.js');
const basicStrategy = require('../strategies/basic.js');

console.warn = jest.fn();
console.error = jest.fn();

describe('simulate function in rehab module', () => {
  it('should simulate the rehab strategy and calculate equity', () => {
    // TODO: rehabModule should be mocked!
    let strategy = buyModule.simulate(basicStrategy)
    const result = rehabModule.simulate(strategy);
    expect(result).toBeDefined();
    expect(result.rehab.equity).toBe(50000)
  });

  it('should handle missing required properties and throw an error', () => {
    const brokenStrategy = basicStrategy;
    delete brokenStrategy.rehab.afterRepairValue
    expect(() => rehabModule.simulate(brokenStrategy)).toThrowError();
  });
});
