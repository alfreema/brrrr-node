const cashflow = require('./cashflow');

describe('cashflow support calculations', () => {
  test('calculates net income correctly', () => {
    const baseIncome = 1000;
    const deductionAmount = 200;
    const result = cashflow.calculateNetIncome(baseIncome, deductionAmount);
    expect(result).toBe(800); // Expected net income: baseIncome - deductionAmount
  });
  test('calculates annual cash flow final correctly', () => {
    const result = cashflow.calculateAnnualCashFlowFinal(8200, 2000, 10); // Mocked values
    expect(result).toBe(5380);
  });
});

describe('primary cashflow calculation: calculateAnnualCashFlow', () => {
  test('calculateAnnualCashFlow', () => {
    const result = cashflow.calculateAnnualCashFlow(1200, 2000, 8, 5, 2, 1, 1); // Added property tax percentage (1)
    expect(result).toBe(-995.36);
  });
});