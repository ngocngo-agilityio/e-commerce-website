// Libs
import { Table } from '@chakra-ui/react';
import { fireEvent, render, screen } from '@testing-library/react';

// Components
import CartItem from '..';

// Mocks
import { MOCK_CART_ITEM } from '@mocks';

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
    render(<CartItem {...mockProps} />, {
      wrapper: Table,
    });
    const incrementBtn = screen.getByRole('button', { name: '+' });

    fireEvent.click(incrementBtn);

    expect(mockProps.onQuantityChange).toHaveBeenCalledWith(
      MOCK_CART_ITEM.id,
      MOCK_CART_ITEM.quantity + 1,
    );
  });
});
