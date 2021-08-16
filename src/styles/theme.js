// Create a small helper function to loop over the themes and create CSS rule sets
// Use the helper in your styles
const ThemeDetect = cb =>
  Object.keys(ThemesPkg).reduce((acc, name) => Object.assign(acc, {
    [`.theme-${name} &`]: cb(ThemesPkg[name]),
  }), {});

export const ThemesPkg = {
  light: {
    text: 'black',
    background: 'white',
  },
  dark: {
    text: 'white',
    background: 'black',
  },
};

export default ThemeDetect;