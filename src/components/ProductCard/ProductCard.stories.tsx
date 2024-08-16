import type { Meta, StoryObj } from '@storybook/react';

// Mocks
import { MOCK_PRODUCT_CARD } from '@mocks';

// Components
import ProductCard from '.';

const meta = {
  title: 'ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...MOCK_PRODUCT_CARD,
  },
};
