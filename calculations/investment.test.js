const investment = require('./investment');

describe('investment support calculations', () => {
  test('calculates total investment correctly', () => {
    const result = investment.calculateTotalInvestment(100000, 20000, 5000, 1000);
    expect(result).toBe(126000);
  });

  test('calculates equity after rehab correctly', () => {
    const result = investment.calculateEquityAfterRehab(150000, 127000);
    expect(result).toBe(23000);
  });

  test('calculates loan amount before refinance correctly', () => {
    const result = investment.calculateLoanAmountBeforeRefi(150000, 75);
    expect(result).toBe(37500);
  });

  test('calculates loan amount after refinance correctly', () => {
    const result = investment.calculateLoanAmountAfterRefi(112500, 2000);
    expect(result).toBe(114500);
  });

  test('calculates cash out refinance correctly', () => {
    const result = investment.calculateCashOutRefinance(114500, 127000);
    expect(result).toBe(0);
  });

  test('calculates cash on cash return correctly', () => {
    const result = investment.calculateCashOnCashReturn(200, 126000);
    expect(result).toBe(1.9047619047619049);
  });
});
