import type { Meta, StoryObj } from '@storybook/react';

// Components
import Tag from '.';

// Mocks
import { MOCK_CATEGORIES } from '@mocks';

const meta = {
  title: 'Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: MOCK_CATEGORIES[0].id,
    label: MOCK_CATEGORIES[0].name,
    onClose: () => {},
  },
};
