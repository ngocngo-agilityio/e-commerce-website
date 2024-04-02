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
    selectBtn: {
      w: '210px',
      h: '48px',
      color: 'selectBtn.text',
      bg: 'selectBtn.bg',
      borderWidth: '1px',
      borderColor: 'selectBtn.border',
      fontSize: 'xl',
      px: '16px',
      textAlign: 'left',
    },
  },

  sizes: {
    sm: {
      px: 'lg',
      py: 'md',
      fontSize: '2xl',
    },
    md: {
      px: 'xl',
      py: 'sm',
      fontSize: 'md',
    },
    lg: {
      px: 'xl',
      py: 'md',
      fontSize: 'xl',
    },
  },

  defaultProps: {
    variant: 'solid',
    size: 'md',
  },
});
