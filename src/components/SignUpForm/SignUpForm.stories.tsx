import type { Meta, StoryObj } from '@storybook/react';

// Components
import SignUpForm from '.';

const meta = {
  title: 'SignUpForm',
  component: SignUpForm,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SignUpForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isSubmitting: false,
    onSignUp: () => {},
  },
};
