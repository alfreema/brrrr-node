const { percentageAmount } = require('./percentage');

// Test cases for percentageAmount function
describe('percentageAmount function', () => {
  test('calculates percentage correctly for positive base value and percentage', () => {
    const result = percentageAmount(100, 20);
    expect(result).toBe(20);
  });

  test('calculates percentage correctly for negative base value and percentage', () => {
    const result = percentageAmount(-50, 10);
    expect(result).toBe(-5);
  });

  test('calculates percentage correctly for zero base value', () => {
    const result = percentageAmount(0, 15);
    expect(result).toBe(0);
  });

  test('calculates percentage correctly for zero percentage', () => {
    const result = percentageAmount(200, 0);
    expect(result).toBe(0);
  });

  test('calculates percentage correctly for decimal base value and percentage', () => {
    const result = percentageAmount(75.5, 25);
    expect(result).toBe(18.875);
  });

  test('calculates percentage correctly for decimal percentage', () => {
    const result = percentageAmount(120, 7.5);
    expect(result).toBe(9);
  });

  // Add more test cases as needed
});
