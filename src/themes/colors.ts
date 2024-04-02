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
  alabaster: '#FBFBFB',
  mercury: '#E8E8E8',
  submarine: '#B7BFC5',
  orange: '#FF5B19',
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

  // Shopping Cart
  shoppingCart: { color: BASE.white, bg: BASE.orient },

  // Footer
  footer: {
    bg: BASE.alabaster,
    text: BASE.codGray,
  },

  // Divider
  divider: BASE.mercury,

  // Input
  placeholderInput: BASE.submarine,
  valueInput: BASE.codGray,

  // Flushed Input
  flushedInput: {
    border: BASE.codGray,
  },

  // OutLine Input
  outlineInput: {
    borderColor: BASE.submarine,
    focusBorder: BASE.orange,
  },
};
