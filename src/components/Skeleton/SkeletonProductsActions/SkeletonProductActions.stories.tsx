import type { Meta, StoryObj } from '@storybook/react';

// Components
import SkeletonProductActions from '.';

const meta = {
  title: 'Skeletons/SkeletonProductActions',
  component: SkeletonProductActions,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SkeletonProductActions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
