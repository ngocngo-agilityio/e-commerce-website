import type { Meta, StoryObj } from '@storybook/react';

import SearchInput from '.';

const meta = {
  title: 'SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    onChange: () => {},
  },
};

export const HaveValue: Story = {
  args: {
    value: 'abcd',
    onChange: () => {},
  },
};
