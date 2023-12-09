const strategy = {
  buy: {
    property: {
      price: 100000,
      propertyTaxRate: 1.2,
      insuranceRate: 0.6,
      maintenanceRate: 0.3
    },
    loan: {
      type: 'buyAndRehabHardMoneyLoan',
      loanToValueRatio: 80,
      interestRate: 8,
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
    monthlyRent: 1800,
    propertyManagementRate: 6,
    vacancyRate: 5
  },
  refinance: {
    loan: {
      type: 'debtServiceCoverageRatioLoan',
      loanToValueRatio: 75,
      interestRate: 8,
      loanTermMonths: 12*30,
      closingCostRate: 2
    }
  }
};

module.exports = strategy