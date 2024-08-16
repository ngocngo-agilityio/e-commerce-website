import type { Meta, StoryObj } from '@storybook/react';

// Components
import Sort from '.';

// Constants
import { SORT_OPTIONS } from '@constants';

const meta = {
  title: 'Sort',
  component: Sort,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sort>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: SORT_OPTIONS,
    defaultValue: SORT_OPTIONS[0].label,
    onChange: () => {},
  },
};
