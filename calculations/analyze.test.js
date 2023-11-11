const analyzeModule = require('./analyze');

// Test cases for calculateCashOnCashReturn function
describe('calculateCashOnCashReturn function', () => {
  test('calculates Cash-on-Cash return correctly for positive values', () => {
    const result = analyzeModule.calculateCashOnCashReturn(12000, 100000);
    expect(result).toBe(144);
  });

  test('calculates Cash-on-Cash return correctly for zero values', () => {
    const result = analyzeModule.calculateCashOnCashReturn(0, 0);
    expect(result).toBe(NaN);
  });

  test('calculates Cash-on-Cash return correctly for negative values', () => {
    const result = analyzeModule.calculateCashOnCashReturn(-5000, -30000);
    expect(result).toBe(200);
  });

  // Add more test cases as needed
});
