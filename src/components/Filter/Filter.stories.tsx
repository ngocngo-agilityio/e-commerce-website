import type { Meta, StoryObj } from '@storybook/react';

// Components
import Filter from '.';

// Mocks
import { MOCK_CATEGORIES } from '@mocks';

const meta = {
  title: 'Filter',
  component: Filter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: MOCK_CATEGORIES,
    defaultValue: [MOCK_CATEGORIES[0].id],
    placeholder: 'Categories',
    onChange: () => {},
  },
};
