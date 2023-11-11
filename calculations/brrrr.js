const investment = require('./investment');
const cashflow = require('./cashflow');

/**
 * Calculate various financial metrics for a real estate investment.
 *
 * @param {number} PP - Purchase Price (initial cost to acquire the property).
 * @param {number} R - Rehabilitation Costs (expenses for renovating or improving the property).
 * @param {number} C - Closing Costs (costs associated with the purchase and sale of the property).
 * @param {number} CC - Carrying Costs (ongoing costs associated with owning the property).
 * @param {number} ARV - After Repair Value (estimated value of the property after renovations).
 * @param {number} Rt - Rent (expected rental income from the property).
 * @param {number} RefiC - Refinancing Costs (costs associated with refinancing the property).
 * @param {number} LTV - Loan-to-Value (ratio of the loan amount to the property value).
 * @param {number} PMF - Property Management Fee (percentage of rental income assumed for property management).
 * @param {number} VP - Vacancy Percentage (percentage of rental income assumed for vacancy).
 * @param {number} MP - Maintenance Percentage (percentage of rental income assumed for maintenance).
 * @param {number} IP - Insurance Percentage (percentage of rental income assumed for insurance).
 * @param {number} PTP - Property Tax Percentage (percentage of rental income assumed for property taxes).
 *
 * @returns {object} An object containing calculated financial metrics.
 * @property {number} totalInvestment - The total investment in the property.
 * @property {number} equityAfterRehab - Equity in the property after rehabilitation.
 * @property {number} loanAmountBeforeRefi - Loan amount before refinancing.
 * @property {number} LAAR - Loan amount after refinancing.
 * @property {number} cashOutRefinance - Cash obtained through refinancing.
 * @property {number} annualCashFlow - Annual cash flow from the property.
 * @property {number} cashOnCashReturn - Cash-on-Cash return percentage.
 */
function calculate(PP, R, C, CC, ARV, Rt, RefiC, LTV, PMF, VP, MP, IP, PTP) {
  const totalInvestment = investment.calculateTotalInvestment(PP, R, C, CC);
  const equityAfterRehab = investment.calculateEquityAfterRehab(ARV, totalInvestment);
  const loanAmountBeforeRefi = investment.calculateLoanAmountBeforeRefi(ARV, LTV);
  const LAAR = investment.calculateLoanAmountAfterRefi(loanAmountBeforeRefi, RefiC);
  const cashOutRefinance = investment.calculateCashOutRefinance(LAAR, totalInvestment);
  const annualCashFlow = cashflow.calculateAnnualCashFlow(Rt, CC, PMF, VP, MP, IP, PTP);
  const cashOnCashReturn = investment.calculateCashOnCashReturn(annualCashFlow, totalInvestment);

  return {
    totalInvestment,
    equityAfterRehab,
    loanAmountBeforeRefi,
    LAAR,
    cashOutRefinance,
    annualCashFlow,
    cashOnCashReturn
  };
}

module.exports = {
  calculate
};
