const rent = require('./rent');

describe('rent support calculations', () => {
  test('calculates net income correctly', () => {
    const baseIncome = 1000;
    const deductionAmount = 200;
    const result = rent.calculateNetIncome(baseIncome, deductionAmount);
    expect(result).toBe(800); // Expected net income: baseIncome - deductionAmount
  });
  test('calculates annual cash flow final correctly', () => {
    const result = rent.calculateAnnualCashFlowFinal(8200, 2000, 10); // Mocked values
    expect(result).toBe(5380);
  });
});

describe('primary rent calculation: calculateAnnualCashFlow', () => {
  test('calculateAnnualCashFlow', () => {
    const result = rent.calculateAnnualCashFlow(1200, 2000, 8, 5, 2, 1, 1); // Added property tax percentage (1)
    expect(result).toBe(-995.36);
  });
});