const BASE = {
  emperor: '#555555',
  codGray: '#1D1D1D',
  white: '#FFFFFF',
  prussianBlue: '#013050',
  orient: '#024E82',
  opal: '#9DB9C1',
  redDamask: '#D6763C',
  tuscany: '#B85E27',
  black: '#000000',
};

export const colors = {
  // Paragraph
  paragraph: BASE.emperor,

  // Heading
  heading: BASE.codGray,

  // Solid button
  solidBtn: {
    bg: BASE.orient,
    color: BASE.white,
    disableBg: BASE.opal,
    hoverBg: BASE.prussianBlue,
  },

  // Outline button
  outlineBtn: {
    border: BASE.white,
    color: BASE.white,
  },

  // Checkout button
  checkoutBtn: {
    color: BASE.white,
    bg: BASE.redDamask,
    hoverBg: BASE.tuscany,
  },

  // Logo
  logo: BASE.codGray,

  // Navigation
  navigation: {
    color: BASE.black,
  },

  // Menu
  menu: {
    hoverColor: BASE.white,
    hoverBg: BASE.orient,
  },
};
