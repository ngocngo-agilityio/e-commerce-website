// Library
import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    fontFamily: 'lato',
    fontWeight: 'normal',
    lineHeight: 'none',
    fontSize: 'xl',
    borderRadius: 'none',
  },

  variants: {
    solid: {
      color: 'solidBtn.color',
      bg: 'solidBtn.bg',
      _hover: {
        bg: 'solidBtn.hoverBg',
        _disabled: {
          bg: 'solidBtn.disableBg',
        },
      },
      _active: {
        bg: 'solidBtn.bg',
      },
      _disabled: {
        bg: 'solidBtn.disableBg',
      },
    },
    outline: {
      color: 'outlineBtn.color',
      bgColor: 'transparent',
      borderWidth: '5px',
      borderColor: 'outlineBtn.border',
    },
    checkoutBtn: {
      color: 'checkoutBtn.color',
      bg: 'checkoutBtn.bg',
      _hover: {
        bg: 'checkoutBtn.hoverBg',
      },
      _active: {
        bg: 'checkoutBtn.bg',
      },
    },
  },

  sizes: {
    sm: {
      px: '28px',
      py: '18px',
      fontSize: '2xl',
    },
    md: {
      px: '36px',
      py: '14px',
      fontSize: 'md',
    },
    lg: {
      px: '36px',
      py: '18px',
      fontSize: 'xl',
    },
  },

  defaultProps: {
    variant: 'solid',
    size: 'md',
  },
});
