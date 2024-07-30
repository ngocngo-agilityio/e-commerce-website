// Libs
import { fireEvent, render, screen } from '@testing-library/react';

// Components
import Counter from '..';

// Constants
import { COUNTER_DEBOUNCE_TIME } from '@constants';

const mockProps = {
  initialQuantity: 1,
  onQuantityChange: jest.fn(),
};

describe('Counter component', () => {
  test('should match snapshot for Counter', () => {
    const { container } = render(
      <Counter {...mockProps} initialQuantity={2} />,
    );

    expect(container).toMatchSnapshot();
  });

  test('should call onQuantityChange when click increment button', () => {
    jest.useFakeTimers();

    render(<Counter {...mockProps} />);
    const incrementBtn = screen.getByTestId('increment-btn');

    fireEvent.click(incrementBtn);

    jest.advanceTimersByTime(COUNTER_DEBOUNCE_TIME);

    expect(mockProps.onQuantityChange).toHaveBeenCalledWith(2);
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  test('should call onQuantityChange when click decrement button', () => {
    jest.useFakeTimers();

    render(<Counter {...mockProps} initialQuantity={2} />);
    const decrementBtn = screen.getByTestId('minus-btn');

    fireEvent.click(decrementBtn);

    jest.advanceTimersByTime(COUNTER_DEBOUNCE_TIME);

    expect(mockProps.onQuantityChange).toHaveBeenCalledWith(1);
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
