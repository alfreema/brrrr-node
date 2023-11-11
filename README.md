<h1 align="center">
  <br>
  brrrr-node
  <br>
</h1>

<h4 align="center">BRRRR real estate calculations that can be imported into node projects</h4>

<p align="center">
  <a href="#how-to-install">How To Install</a> •
  <a href="#how-to-use">How To Use</a> •
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

> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.


## How To Use

In your node application, `require` the plugin and call the `calculate` function.

```javascript
const brrrrNode = require('brrrr-node');

const brrrr = brrrrNode.calculate(100000, 20000, 5000, 1000, 150000, 1200, 2000, 75, 8, 5, 2, 1, 1);
// ...
```

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


