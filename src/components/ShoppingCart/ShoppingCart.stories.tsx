import type { Meta, StoryObj } from '@storybook/react';

import ShoppingCart from '.';

const meta = {
  title: 'ShoppingCart',
  component: ShoppingCart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ShoppingCart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoHaveProduct: Story = {
  args: {},
};

export const HaveProduct: Story = {
  args: {
    cartItemQuantity: 2,
  },
};
