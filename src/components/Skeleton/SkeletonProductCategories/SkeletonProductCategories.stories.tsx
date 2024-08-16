import type { Meta, StoryObj } from '@storybook/react';

// Components
import SkeletonProductCategories from '.';

const meta = {
  title: 'Skeletons/SkeletonProductCategories',
  component: SkeletonProductCategories,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SkeletonProductCategories>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
