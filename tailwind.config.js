const lineClamp = require('@tailwindcss/line-clamp');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': 'url(/assets/main/bg.png)',
        'cash-bg': 'url(/assets/home/cash-bg.png)',
        'trade-bg': 'url(/assets/home/trade-bg.png)',
        'group-bg': 'url(/assets/home/group-bg.png)',
        'best-bg': 'url(/assets/home/best-bg.png)',
        'flag-bg': 'url(/assets/aboutus/flag-bg.png)',
        'app-bg': 'url(/assets/ourapp/app-bg.png)',
        'horse': 'url(/assets/betting/bg-horse-2.png)',
        'betting-bg': 'url(/assets/betting/betting-bg.png)',
      },
      colors: {
        primary: '#D21F26', // red
        secondary: '#B51218', // red 2
        gray1: '#A6A6A6', // gray
        gray2: '#F2F2F2', // light gray 1
        golden1: '#DA9C2C', // golden
        golden: '#D8BF37',
        footer: '#1E1E1E',
        gray3: '#29211E',
      },
      height: {
        inherit: 'inherit',
      },
      width: {
        inherit: 'inherit',
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [
    lineClamp,
    plugin(function newCom({ addComponents }) {
      const components = {
        '.container-full': {},
        '.container-fluid': {},
        '.text-border': {},
        '.font-inter': {},
      };

      addComponents(components);
    }),
  ],
};
