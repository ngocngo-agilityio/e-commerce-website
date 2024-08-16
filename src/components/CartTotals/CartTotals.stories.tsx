import type { Meta, StoryObj } from '@storybook/react';

// Components
import CartTotals from '.';

const meta = {
  title: 'CartTotals',
  component: CartTotals,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CartTotals>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    total: 23.43,
    onCheckout: () => {},
  },
};
