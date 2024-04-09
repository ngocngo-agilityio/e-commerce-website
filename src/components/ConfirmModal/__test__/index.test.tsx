// Libs
import { fireEvent, render, screen } from '@testing-library/react';

// Components
import ModalConfirm from '..';

const mockProps = {
  // isOpen: true,
  title: 'title',
  message: 'This is modal',
  textSubmit: 'Cancel',
  textCancel: 'Submit',
  onClose: jest.fn(),
  onSubmit: jest.fn(),
};

describe('ModalConfirm', () => {
  test('should render ModalConfirm successfully', () => {
    render(<ModalConfirm {...mockProps} />);

    expect(
      screen.getByRole('button', { name: mockProps.textCancel }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: mockProps.textSubmit }),
    ).toBeInTheDocument();
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.message)).toBeInTheDocument();
  });

  test('should match snapshot for ModalConfirm', () => {
    const { container } = render(<ModalConfirm {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  test('should call onClose when click the cancel button', () => {
    render(<ModalConfirm {...mockProps} />);
    const cancelBtn = screen.getByRole('button', {
      name: mockProps.textCancel,
    });

    fireEvent.click(cancelBtn);

    expect(mockProps.onClose).toHaveBeenCalledTimes(1);
  });

  test('should call onSubmit when click the submit button', () => {
    render(<ModalConfirm {...mockProps} />);
    const submitBtn = screen.getByRole('button', {
      name: mockProps.textSubmit,
    });

    fireEvent.click(submitBtn);

    expect(mockProps.onSubmit).toHaveBeenCalledTimes(1);
  });
});
