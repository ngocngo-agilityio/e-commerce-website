// Libs
import { Table } from '@chakra-ui/react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

// Components
import CartItem from '..';

// Mocks
import { MOCK_CART_ITEM } from '@mocks';

// Constants
import { COUNTER_DEBOUNCE_TIME } from '@constants';

const mockProps = {
  ...MOCK_CART_ITEM,
  onQuantityChange: jest.fn(),
  onRemoveProduct: jest.fn(),
};

describe('CartItem components', () => {
  test('should render CartItem successfully', () => {
    const { container } = render(<CartItem {...mockProps} />, {
      wrapper: Table,
    });

    expect(container).toBeInTheDocument();
  });

  test('should match snapshot for CartItem', () => {
    const { container } = render(<CartItem {...mockProps} />, {
      wrapper: Table,
    });

    expect(container).toMatchSnapshot();
  });

  test('should call onQuantityChange when click increment button', () => {
    jest.useFakeTimers();

    render(<CartItem {...mockProps} />, {
      wrapper: Table,
    });
    const incrementBtn = screen.getByTestId('increment-btn');

    fireEvent.click(incrementBtn);

    jest.advanceTimersByTime(COUNTER_DEBOUNCE_TIME);

    expect(mockProps.onQuantityChange).toHaveBeenCalledWith(
      MOCK_CART_ITEM.id,
      MOCK_CART_ITEM.quantity + 1,
    );

    jest.clearAllTimers();
    jest.useRealTimers();
  });

  test('should call onRemoveProduct when confirm delete cart item', async () => {
    render(<CartItem {...mockProps} />, {
      wrapper: Table,
    });
    const removeBtn = screen.getByText('x');

    fireEvent.click(removeBtn);

    await waitFor(() => {
      expect(screen.getByText('Delete')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Yes'));

    waitFor(() => {
      expect(mockProps.onRemoveProduct).toHaveBeenCalledWith(MOCK_CART_ITEM.id);
    });
  });

  test('should close confirm modal when click No button', async () => {
    render(<CartItem {...mockProps} />, {
      wrapper: Table,
    });
    const removeBtn = screen.getByText('x');

    fireEvent.click(removeBtn);

    await waitFor(() => {
      expect(screen.getByText('Delete')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('No'));

    waitFor(() => {
      expect(screen.queryByText('Delete')).toBeNull();
    });
  });
});
