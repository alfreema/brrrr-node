const simulate = (price, { loanToValueRatio, interestRate, loanTermMonths, closingCostRate }, monthlyIncome, monthlyExpenses) => {
  const loanAmount = price * (loanToValueRatio / 100);
  const downPayment = price - loanAmount;
  const closingCosts = price * (closingCostRate / 100);
  const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTermMonths);
  const totalRepayment = monthlyPayment * loanTermMonths;
  const netOperatingIncome = monthlyIncome - monthlyExpenses;
  const totalDebtService = monthlyPayment + monthlyExpenses;
  const debtServiceCoverageRatio = netOperatingIncome / totalDebtService;

  return {
    loanAmount,
    downPayment,
    totalRepayment,
    monthlyPayment,
    closingCosts,
    debtServiceCoverageRatio,
    netOperatingIncome,
    totalDebtService,
  };
};
  
// Helper function to calculate monthly payment
const calculateMonthlyPayment = (loanAmount, interestRate, loanTermMonths) => {
  const monthlyInterestRate = interestRate / 12 / 100;
  const numerator = loanAmount * monthlyInterestRate;
  const denominator = 1 - Math.pow(1 + monthlyInterestRate, -loanTermMonths);
  return numerator / denominator;
};

// Helper function to calculate loan amount based on DSCR
const calculateDSCRLoanAmount = (debtServiceCoverageRatio, monthlyPayment) => {
  return monthlyPayment / debtServiceCoverageRatio;
};

module.exports = {
  simulate
}
