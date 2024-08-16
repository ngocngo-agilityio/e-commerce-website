import type { Meta, StoryObj } from '@storybook/react';

// Components
import CartTable from '.';

// Mocks
import { MOCK_CART_ITEMS } from '@mocks';

const meta = {
  title: 'CartTable',
  component: CartTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CartTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cart: MOCK_CART_ITEMS,
    onCartItemRemove: () => {},
    onQuantityChange: () => {},
  },
};
