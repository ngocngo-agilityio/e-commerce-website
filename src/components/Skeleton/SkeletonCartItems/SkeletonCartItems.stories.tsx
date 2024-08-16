import type { Meta, StoryObj } from '@storybook/react';

// Components
import SkeletonCartItems from '.';

const meta = {
  title: 'Skeletons/SkeletonCartItems',
  component: SkeletonCartItems,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SkeletonCartItems>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
