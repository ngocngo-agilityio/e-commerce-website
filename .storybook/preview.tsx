import type { Preview } from '@storybook/react';
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';

// Themes
import { theme } from '../src/themes';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextRouter: {
      Provider: AppRouterContext.Provider,
    },
    chakra: {
      theme,
    },
  },
};

export default preview;
