import type { Meta, StoryObj } from '@storybook/react';

// Components
import Counter from '.';

const meta = {
  title: 'Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialQuantity: 1,
    onQuantityChange: () => {},
  },
};
