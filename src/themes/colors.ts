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
  gallery: '#EBEBEB',
  silver: '#BEBEBE',
  gray: '#818181',
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

  // Select Button
  selectBtn: {
    text: BASE.codGray,
    bg: BASE.alabaster,
    border: BASE.gallery,
  },

  // Checkout button
  checkoutBtn: {
    color: BASE.white,
    bg: BASE.redDamask,
    hoverBg: BASE.tuscany,
  },

  // CancelModalBtn:
  cancelModalBtn: {
    color: BASE.codGray,
    border: BASE.codGray,
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
    border: BASE.gallery,
    text: BASE.codGray,
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

  // Quantity Input
  quantityInputBorder: BASE.gallery,

  // Price
  price: BASE.orient,
  discountedPrice: BASE.gray,

  // Banner
  bannerHeading: BASE.white,

  // Pagination:
  pagination: {
    color: BASE.white,
    bg: BASE.redDamask,
    hoverBg: BASE.tuscany,
    activeBg: BASE.orange,
  },

  // Product detail
  productDetail: {
    categoryTitle: BASE.black,
    reviewNumber: BASE.black,
  },

  // Table
  headerCellText: BASE.codGray,
  bodyCellText: BASE.emperor,
  removeProduct: BASE.silver,

  // Breadcrumb
  breadcrumb: BASE.emperor,
  currentPageBreadcrumb: BASE.codGray,
};
