const refinance = require('./refinance');

describe('refinance support calculations', () => {
  test('calculates loan amount before refinance correctly', () => {
    const result = refinance.calculateLoanAmountBeforeRefi(150000, 75);
    expect(result).toBe(37500);
  });

  test('calculates loan amount after refinance correctly', () => {
    const result = refinance.calculateLoanAmountAfterRefi(112500, 2000);
    expect(result).toBe(114500);
  });

  test('calculates cash out refinance correctly', () => {
    const result = refinance.calculateCashOutRefinance(114500, 127000);
    expect(result).toBe(0);
  });
});
