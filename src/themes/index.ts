// Libs
import { extendTheme } from '@chakra-ui/react';

// Custom theme
import { fonts, fontWeights, fontSizes, lineHeights } from './typographies';
import { borderRadius, sizes } from './metrics';
import { colors } from './colors';

export const theme = extendTheme({
  fonts,
  fontWeights,
  fontSizes,
  lineHeights,
  radii: borderRadius,
  sizes,
  colors,
  styles: {
    global: {
      'html, body': {
        fontFamily: 'lato',
      },
    },
  },
});
