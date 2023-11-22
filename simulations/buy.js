const joinPath = (...paths) => {
  // Check if the process object exists (Node.js environment)
  if (typeof process !== 'undefined' && process?.cwd) {
    const path = require('path');
    return path.join(...paths);
  } else {
    // Browser environment
    return paths.join('/');
  }
};

const purchase = (lib, terms, propertyOwnershipRates) => {
  const buyLib = require(lib);
  const purchaseResult = buyLib.simulate(terms);

  // Use joinPath for path resolution
  const carryCostsLibPath = joinPath(__dirname, 'buy/carrying-costs.js');
  const carryCostsLib = require(carryCostsLibPath);
  
  purchaseResult.carryCosts = carryCostsLib.simulate({
    propertyPrice: terms.propertyPrice,
    monthlyLoanPayment: purchaseResult.monthlyPayment,
    ...propertyOwnershipRates
  });

  return purchaseResult;
};

const simulate = financeDetails => {
  const getFilePath = subPath => joinPath(__dirname, `buy/${subPath}.js`);

  if (financeDetails?.traditionalMortgageLoan) {
    return purchase(getFilePath('traditional-mortgage-loan'), financeDetails.traditionalMortgageLoan, financeDetails.propertyOwnershipRates);
  } else if (financeDetails?.cashPurchase) {
    return purchase(getFilePath('cash-purchase'), financeDetails.cashPurchase, financeDetails.propertyOwnershipRates);
  } else if (financeDetails?.hardMoneyLoan) {
    return purchase(getFilePath('hard-money-loan'), financeDetails.hardMoneyLoan, financeDetails.propertyOwnershipRates);
  }

  console.warn('No finance method was recognized.');
  console.warn('Try passing a "traditionalMortgageLoan" property.');
  return null;
};

module.exports = {
  simulate
};