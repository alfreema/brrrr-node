const rehabModule = require('./rehab');

// Test cases for calculateEquityAfterRehab function
describe('calculateEquityAfterRehab function', () => {
  test('calculates equity after rehab correctly for positive values', () => {
    const result = rehabModule.calculateEquityAfterRehab(150000, 40000);
    expect(result).toBe(110000);
  });

  test('calculates equity after rehab correctly for zero values', () => {
    const result = rehabModule.calculateEquityAfterRehab(0, 0);
    expect(result).toBe(0);
  });

  test('calculates equity after rehab correctly for negative values', () => {
    const result = rehabModule.calculateEquityAfterRehab(-50000, -10000);
    expect(result).toBe(-40000);
  });

  // Add more test cases as needed
});
