// Libs
import { render, screen } from '@testing-library/react';

// Types
import { CartItem as ICartItem } from '@types';

// Components
import CartTable from '..';

// Mocks
import { MOCK_CART_ITEMS } from '@mocks';

const mockProps = {
  cart: MOCK_CART_ITEMS,
  onQuantityChange: jest.fn(),
  onCartItemRemove: jest.fn(),
};

describe('CartTable component', () => {
  test('should match snapshot for CartTable component', () => {
    const { container } = render(<CartTable {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  test('renders no products message in cart when data is empty', () => {
    render(<CartTable {...mockProps} cart={[]} />);

    expect(screen.getByText('No products in your cart.')).toBeInTheDocument();
  });

  test('should render CartTable component successfully when has null item', () => {
    const { container } = render(
      <CartTable {...mockProps} cart={[null] as unknown as ICartItem[]} />,
    );

    expect(container).toBeInTheDocument();
  });
});
