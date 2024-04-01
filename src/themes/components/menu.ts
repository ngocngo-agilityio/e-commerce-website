// Library
import { defineStyleConfig } from '@chakra-ui/react';

export const Menu = defineStyleConfig({
  baseStyle: {
    item: {
      borderRadius: 'xs',
      _hover: {
        bg: 'menu.hoverBg',
        color: 'menu.hoverColor',
      },
    },

    list: {
      p: '10px',
      minWidth: '160px',
    },
  },
});
