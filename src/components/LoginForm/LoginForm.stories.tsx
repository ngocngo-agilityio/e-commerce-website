import type { Meta, StoryObj } from '@storybook/react';

// Components
import LoginForm from '.';

const meta = {
  title: 'LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isPending: false,
    onSignIn: () => {},
  },
};
