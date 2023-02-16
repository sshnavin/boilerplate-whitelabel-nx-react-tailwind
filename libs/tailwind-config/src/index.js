// Goto https://javisperez.github.io/tailwindcolorshades to generate your brand color
const defaultPreset = require('./lib/default.config');
const {join} = require("path");
let clientPreset = [defaultPreset];

console.log(`\n ====>>> client = ${process.env.CLIENT} <<<==== \n`);

if (process.env.CLIENT !== undefined) {
  clientPreset.push(require(`./lib/${process.env.CLIENT}.config`));
}

module.exports = (dirname) => {
  return {
    content: [
      join(
        dirname,
        'src/**/**/*.{js,jsx,ts,tsx}',
      ),
    ],
    presets: clientPreset,
  };
};

