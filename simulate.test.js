const brrrrNode = require('./index.js')
/*
const buy = require('./simulations/buy.js');
const rehab = require('./simulations/rehab.js');
const rent = require('./simulations/rent.js');
const refinance = require('./simulations/refinance.js');
*/
const propertyOwnershipRates = {
  propertyTaxRate: 1.2, // 1.2% property tax rate
  insuranceRate: 0.5, // 0.5% homeowners insurance rate
  maintenanceRate: 0.3 // 0.3% maintenance cost rate
};

const traditionalMortgageLoan = { 
  propertyPrice: 160000, // Replace with the actual property price
  downPaymentPercentage: 20, // 20% down payment
  loanTermYears: 30, // 30-year loan term
  annualInterestRate: 4.5, // 4.5% annual interest rate,
  closingCostRate: 2.5 // 2.5% closing cost rate
}

const hardMoneyLoan = { 
  propertyPrice: 200000, // Replace with the actual property price
  loanToValueRatio: 70, // 70% loan-to-value ratio
  interestRate: 12, // 12% annual interest rate
  loanTermMonths: 12, // 12 months loan term
  closingCostRate: 3 // 3% closing cost rate
}

const rehabParameters = {
  afterRepairValue: 280000,
  repairCosts: 25000
}

const cashflowParameters = {
  monthlyRent: 1100,                   // Example monthly rent amount
  propertyManagementRate: 8,          // Example property management rate as a percentage
  vacancyRate: 5                      // Example vacancy rate as a percentage
};

const traditionalMortgageRefinance = {
  loanToValue: 70,              // Example Loan-to-Value ratio
  refinanceCostRate: 3,         // Example Refinancing Costs
  carryDuration: 6              // In months
};

describe('Simulation Tests', () => {
  let buyResult,
      rehabResult,
      rentResult,
      refinanceResult
  test('buy simulation', () => {
    const expectedBuyResult = {
      downPayment: 32000,
      loanAmount: 128000,
      monthlyPayment: 648.5571965771337,
      closingCosts: 4000,
      carryCosts: {
        monthlyLoanPayment: 648.5571965771337,
        monthlyPropertyTax: 160,
        monthlyInsurance: 66.66666666666666,
        monthlyMaintenance: 40,
        totalMonthlyCosts: 915.2238632438003
      }
    };
    buyResult = brrrrNode.buy.simulate({
      traditionalMortgageLoan,
      propertyOwnershipRates
    });
    expect(buyResult).toEqual(expectedBuyResult);
  });

  test('rehab simulation', () => {
    const expectedRehabResult = {
      equity: 95000
    };
    rehabResult = brrrrNode.rehab.simulate({
      ...rehabParameters,
      propertyPrice: traditionalMortgageLoan.propertyPrice
    });
    expect(rehabResult).toEqual(expectedRehabResult);
  });

  test('rent simulation', () => {
    const expectedRentResult = {
      vacancyAmount: 55,
      propertyManagementAmount: 88,
      monthlyCashFlow: 41.776136756199776,
      annualCashFlow: 501.3136410743973
    }
    rentResult = brrrrNode.rent.simulate({
      ...cashflowParameters,
      carryingCosts: buyResult.carryCosts.totalMonthlyCosts
    });
    expect(rentResult).toEqual(expectedRentResult);
  });

  test('refinance simulation', () => {
    const expectedRefinanceResult = {
      totalInvestment: 66491.3431794628,
      loanAmountBeforeRefi: 196000,
      loanAmountAfterRefi: 201880,
      cashOutRefinance: 135388.6568205372
    }
    refinanceResult = brrrrNode.refinance.simulate({
      traditionalMortgageRefinance: {
        ...traditionalMortgageRefinance,
        afterRepairValue: rehabParameters.afterRepairValue
      },
      investment: {
        downPayment: buyResult.downPayment,
        closingCosts: buyResult.closingCosts,
        carryingCosts: buyResult.carryCosts.totalMonthlyCosts,
        rehabCosts: rehabParameters.repairCosts
      }
    });
    expect(refinanceResult).toEqual(expectedRefinanceResult)
  });
});

// Output
console.log("Property Purchase Simulation with Traditional Mortgage Loan:");
// ... (rest of the output)
console.log("Loan and Refinance Simulation:");
// ... (rest of the output)
