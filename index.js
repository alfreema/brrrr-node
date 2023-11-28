const path = require('path');

const buy = require(path.join(__dirname, 'simulations/buy'));
const rehab = require(path.join(__dirname, 'simulations/rehab'));
const rent = require(path.join(__dirname, 'simulations/rent'));
const refinance = require(path.join(__dirname, 'simulations/refinance'));
const percentage = require(path.join(__dirname, 'math/percentage'));

module.exports = {
  buy,
  rehab,
  rent,
  refinance,
  percentage
};
