const { calculate } = require('./brrrr');

describe('primary brrrr calculation', () => {
  test('calculates BRRRR metrics correctly', () => {
    const result = calculate(100000, 20000, 5000, 1000, 150000, 1200, 2000, 75, 8, 5, 2, 1, 1);
    expect(result.totalInvestment).toBe(126000);
    expect(result.equityAfterRehab).toBe(24000);
    expect(result.loanAmountBeforeRefi).toBe(37500);
    expect(result.LAAR).toBe(39500);
    expect(result.cashOutRefinance).toBe(0);
    expect(result.annualCashFlow).toBe(4.640000000000001);
    expect(result.cashOnCashReturn).toBe(0.0441904761904762);
  });
});
