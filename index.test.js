const { simulate } = require('./index');

describe('Simulation Tests', () => {
  const parameters = {
    traditionalMortgageLoan: {
      propertyPrice: 160000,
      downPaymentPercentage: 20,
      loanTermYears: 30,
      annualInterestRate: 4.5,
      closingCostRate: 2.5,
    },
    propertyOwnershipRates: {
      propertyTaxRate: 1.2,
      insuranceRate: 0.5,
      maintenanceRate: 0.3,
    },
    rehabParameters: {
      afterRepairValue: 280000,
      repairCosts: 25000,
    },
    cashflowParameters: {
      monthlyRent: 1100,
      propertyManagementRate: 8,
      vacancyRate: 5,
    },
    traditionalMortgageRefinance: {
      loanToValue: 70,
      refinanceCostRate: 3,
      carryDuration: 6,
    },
    hardMoneyLoan: {
      propertyPrice: 200000,
      loanToValueRatio: 70,
      interestRate: 12,
      loanTermMonths: 12,
      closingCostRate: 3,
    },
  };

  test('simulate function', () => {
    const result = simulate(parameters);
    // Add your assertions based on expected results
    expect(result).toBeDefined();
    // Add more specific assertions based on your expected result structure
  });
});
