// Libs
import { Lato, Arimo, Baloo_2, Inter } from 'next/font/google';

const lato = Lato({ subsets: ['latin'], weight: ['400'] });

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
});

export const fonts = {
  lato: lato.style.fontFamily,
  arimo: arimo.style.fontFamily,
  baloo: baloo.style.fontFamily,
  inter: inter.style.fontFamily,
};

export const fontWeights = {
  normal: 400,
  bold: 700,
  extrabold: 800,
};

export const fontSizes = {
  '2xs': '10px',
  xs: '12px',
  sm: '13px',
  md: '14px',
  lg: '15px',
  xl: '16px',
  '2xl': '20px',
  '3xl': '24px',
  '4xl': '36px',
  '5xl': '48px',
};

export const lineHeights = {
  none: 1,
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
  tall: 1.625,
};
