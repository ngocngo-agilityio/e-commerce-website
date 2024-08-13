import type { Meta, StoryObj } from '@storybook/react';

// Components
import Breadcrumb from '.';

// Constants
import { CART_PAGE_BREADCRUMB } from '@constants';

const meta = {
  title: 'Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    breadcrumb: [...CART_PAGE_BREADCRUMB],
  },
};
