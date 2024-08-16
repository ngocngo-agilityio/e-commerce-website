import type { Meta, StoryObj } from '@storybook/react';

// Components
import SkeletonAddCartAction from '.';

const meta = {
  title: 'Skeletons/SkeletonAddCartAction',
  component: SkeletonAddCartAction,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SkeletonAddCartAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
