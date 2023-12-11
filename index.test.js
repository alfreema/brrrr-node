const { simulate } = require('./index');

const strategy1 = {
  buy: {
    property: {
      price: 100000,
      propertyTaxRate: 1,
      insuranceRate: 0.5,
      maintenanceRate: 0.5
    },
    loan: {
      type: 'buyAndRehabHardMoneyLoan',
      loanToValueRatio: 80,
      interestRate: 10,
      loanTermMonths: 12,
      closingCostRate: 2
    }
  },
  rehab: {
    afterRepairValue: 200000,
    repairCosts: 50000,
    monthsToCompleteRepairs: 12
  },
  rent: {
    monthlyRent: 2000,
    propertyManagementRate: 5,
    vacancyRate: 5
  },
  refinance: {
    loan: {
      type: 'debtServiceCoverageRatioLoan',
      loanToValueRatio: 75,
      interestRate: 10,
      loanTermMonths: 12*30,
      closingCostRate: 2,
      seasoningMonths: 12
    }
  },
  repeat: {
  }
}

describe('Simulation Tests', () => {
  test('simulate function', () => {
    const result = simulate(strategy1);
    // Add your assertions based on expected results
    expect(result).toBeDefined();
    // Add more specific assertions based on your expected result structure
  });
});
