import type { Meta, StoryObj } from '@storybook/react';

// Components
import ModalConfirm from '.';

const meta = {
  title: 'ModalConfirm',
  component: ModalConfirm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ModalConfirm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    message: 'Are you sure remove this product?',
    title: 'Delete Product',
    textSubmit: 'Yes',
    textCancel: 'No',
    onClose: () => {},
    onSubmit: () => {},
  },
};
