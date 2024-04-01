import type { Meta, StoryObj } from '@storybook/react';

import UserProfile from '.';

const meta = {
  title: 'UserProfile',
  component: UserProfile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UserProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onLogout: () => {},
  },
};
