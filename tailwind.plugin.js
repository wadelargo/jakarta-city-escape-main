const plugin = require('tailwindcss/plugin');

const neonShadow = plugin(function ({ addUtilities, theme }) {
  const neonUtilities = {};
  const colors = theme('colors');

  for (const color in colors) {
    if (typeof colors[color] === 'object') {
      const color1 = colors[color]['500'];
      const color2 = colors[color]['700'];
      neonUtilities[`.neon-${color}`] = {
        '--tw-shadow-color': color1,
        'box-shadow': `0px 0px 6px ${color1}, 5px 7px 10px ${color2}`,
        'animation': 'neon-pulse 2s infinite ease-in-out',
      };
    }
  }

  addUtilities(neonUtilities, {
    variants: ['responsive', 'hover'],
  });
});

module.exports = neonShadow;