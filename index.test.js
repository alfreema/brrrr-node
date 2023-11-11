const plugin = require('./index'); // Assuming this is your actual path to the module

// Test the calculate function
test('calculate function', () => {
  // Your test cases for calculateBrrrr function
  const result = plugin.calculate(100000, 20000, 5000, 1000, 150000, 1200, 2000, 75, 8, 5, 2, 1, 1);
  expect(result.annualCashFlow).toBe(4.640000000000001);
});

// Test the cashflow function
test('cashflow function', () => {
  // Your test cases for cashflow function
  const result = plugin.cashflow.calculateAnnualCashFlow(1200, 2000, 8, 5, 2, 1, 1);
  expect(result).toBe(-995.36);
});

// Test the investment function
test('investment function', () => {
  // Your test cases for investment function
  const result = plugin.investment.calculateCashOnCashReturn(200, 126000);
  expect(result).toBe(1.9047619047619049);
});

// Test the percentage function
test('percentage function', () => {
  // Your test cases for percentage function
  const result = plugin.percentage.percentageAmount(100, 20);
  expect(result).toBe(20);
});
