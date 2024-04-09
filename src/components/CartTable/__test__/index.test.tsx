// Libs
import { render, screen } from '@testing-library/react';

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
  test('should render CartTable component successfully', () => {
    const { container, getByText } = render(<CartTable {...mockProps} />);

    expect(container).toBeInTheDocument();
    expect(getByText(MOCK_CART_ITEMS[0].name)).toBeInTheDocument();
  });

  test('should match snapshot for CartTable component', () => {
    const { container } = render(<CartTable {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  test('renders no products message in cart when data is empty', () => {
    render(<CartTable {...mockProps} cart={[]} />);

    expect(screen.getByText('No products in your cart.')).toBeInTheDocument();
  });
});
