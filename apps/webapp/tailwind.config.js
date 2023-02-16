let defaultTailwindPreset = require('../../libs/tailwind-config/src');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [defaultTailwindPreset(__dirname)],
};
