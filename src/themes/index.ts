// Libs
import { extendTheme } from '@chakra-ui/react';

// Custom theme
import { fonts, fontWeights, fontSizes, lineHeights } from './typographies';
import { borderRadius, sizes } from './metrics';
import { colors } from './colors';
import * as components from './components';

export const theme = extendTheme({
  components: {
    ...components,
  },
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
