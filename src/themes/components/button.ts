// Library
import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    fontFamily: 'lato',
    fontWeight: 'normal',
    lineHeight: 'none',
    fontSize: 'xl',
    borderRadius: 'none',
    width: 'fit-content',
  },

  variants: {
    solid: {
      color: 'solidBtn.color',
      bg: 'solidBtn.bg',
      borderWidth: '1px',
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
      _hover: {
        bg: 'transparent',
      },
      _active: {
        bg: 'transparent',
      },
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
      textTransform: 'uppercase',
      fontSize: 'xl',
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
    cancelModal: {
      color: 'cancelModalBtn.color',
      bgColor: 'transparent',
      borderWidth: '1px',
      borderColor: 'cancelModalBtn.border',
      _hover: {
        bg: 'transparent',
      },
      _active: {
        bg: 'transparent',
      },
    },
  },

  sizes: {
    xs: {
      paddingInline: '22px',
      paddingBlock: '16px',
      fontSize: 'sm',
    },
    sm: {
      paddingInline: 'lg',
      paddingBlock: 'md',
      fontSize: '2xl',
    },
    md: {
      px: '36px',
      py: '18px',
      fontSize: 'md',
      height: '48px',
    },
    lg: {
      paddingInline: 'xl',
      paddingBlock: 'md',
      fontSize: '2xl',
    },
  },

  defaultProps: {
    variant: 'solid',
    size: 'md',
  },
});
