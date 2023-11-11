const buyModule = require('./buy');

// Test cases for calculateTotalInvestment function
describe('calculateTotalInvestment function', () => {
  test('calculates total investment correctly for positive values', () => {
    const result = buyModule.calculateTotalInvestment(100000, 20000, 5000, 1000);
    expect(result).toBe(126000);
  });

  test('calculates total investment correctly for zero values', () => {
    const result = buyModule.calculateTotalInvestment(0, 0, 0, 0);
    expect(result).toBe(0);
  });

  test('calculates total investment correctly for negative values', () => {
    const result = buyModule.calculateTotalInvestment(-50000, -10000, -3000, -500);
    expect(result).toBe(-63500);
  });

  // Add more test cases as needed
});
