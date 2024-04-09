// Libs
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import Counter from '..';

const mockProps = {
  initialQuantity: 1,
  onQuantityChange: jest.fn(),
};

describe('Counter component', () => {
  test('should render Counter successfully', () => {
    render(<Counter {...mockProps} initialQuantity={1} />);

    const decrementBtn = screen.getByRole('button', { name: '-' });
    expect(decrementBtn).toBeDisabled();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('should match snapshot for Counter', () => {
    const { container } = render(
      <Counter {...mockProps} initialQuantity={2} />,
    );

    expect(container).toMatchSnapshot();
  });

  test('should call onQuantityChange when click increment button', () => {
    render(<Counter {...mockProps} />);
    const incrementBtn = screen.getByRole('button', { name: '+' });

    fireEvent.click(incrementBtn);

    expect(mockProps.onQuantityChange).toHaveBeenCalledWith(2);
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  test('should call onQuantityChange when click decrement button', () => {
    render(<Counter {...mockProps} initialQuantity={2} />);
    const decrementBtn = screen.getByRole('button', { name: '-' });

    fireEvent.click(decrementBtn);

    expect(mockProps.onQuantityChange).toHaveBeenCalledWith(1);
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
