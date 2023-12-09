<h1 align="center">
  <br>
  brrrr-node
  <br>
</h1>

<h4 align="center">BRRRR real estate calculations that can be imported into node projects</h4>

<p align="center">
  <a href="#how-to-install">How To Install</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#how-to-clone">How To Clone</a> •
  <a href="#how-to-run-tests">How To Run Tests</a> •
  <a href="#credits">Credits</a> •
  <a href="#support">Support</a> •
  <a href="#license">License</a>
</p>

## How To Install

To add these calculations to your node application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Install this repository
$ npm install alfreema/brrrr-node
```

## How To Use

In your node application, `require` the plugin and call the `calculate` function.

```javascript
const brrrrNode = require('brrrr-node');

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
      interestRate: 10,
      loanTermMonths: 12,
      closingCostRate: 2
    }
  },
  rehab: {
    afterRepairValue: 200000,
    repairCosts: 50000,
    monthsToCompleteRepairs: 6
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
  },
  repeat: {
  }
}

const brrrr = brrrrNode.simulate(strategy);
console.log(brrrr)
// ...
```

## How To Clone

If you would like a copy of the repository to review or run tests against you can clone the repository with:

```bash
# Clone the repository
$ git clone git@github.com:alfreema/brrrr-node

# Install dependencies
$ npm i
```

## How To Run Tests

All functions are tested using the [Jest](https://jestjs.io/) testing framework.  To run the tests:

```bash
# Run the tests
$ npm test
```

> **Note**
> If you get any errors, please report them!

## Credits

This software uses the following open source packages:

- [Node.js](https://nodejs.org/)
- [jest](https://jestjs.io/)

## Support

<a href="https://www.buymeacoffee.com/alfreema" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## License

MIT

---

> [sendthisfile.com](https://sendthisfile.com) &nbsp;&middot;&nbsp;
> GitHub [@alfreema](https://github.com/alfreema)


