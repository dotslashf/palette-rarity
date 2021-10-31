module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      'dark-bg': '#191A19',
      'sugar-candy': {
        1: '#FF9292',
        2: '#FFB4B4',
        3: '#FFDCDC',
        4: '#FFE8E8',
      },
      'windy-sunset': {
        1: '#FCF8E8',
        2: '#D4E2D4',
        3: '#ECB390',
        4: '#DF7861',
      },
      'pink-sky': {
        1: '#FCD1D1',
        2: '#ECE2E1',
        3: '#D3E0DC',
        4: '#AEE1E1',
      },
      'rainbow-cream': {
        1: '#98DDCA',
        2: '#D5ECC2',
        3: '#FFD3B4',
        4: '#FFAAA7',
      },
      'summer-cream': {
        1: '#FDFFBC',
        2: '#FFEEBB',
        3: '#FFDCB8',
        4: '#FFC1B6',
      },
      'muted-beach': {
        1: '#FCF8EC',
        2: '#D0E8F2',
        3: '#79A3B1',
        4: '#456268',
      },
      'dazzling-jungle': {
        1: '#FEFFDE',
        2: '#DDFFBC',
        3: '#91C788',
        4: '#52734D',
      },
      'cheerish-pink': {
        1: '#FFE6E6',
        2: '#FFABE1',
        3: '#A685E2',
        4: '#6155A6',
      },
      'comfy-autumn': {
        1: '#FFF5EB',
        2: '#DEEDF0',
        3: '#F4C7AB',
        4: '#B2B8A3',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
