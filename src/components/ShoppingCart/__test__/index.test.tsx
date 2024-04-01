// Libs
import { screen, render } from '@testing-library/react';

// Components
import ShoppingCart from '..';

describe('ShoppingCart component', () => {
  test('should render ShoppingCart successfully', () => {
    render(<ShoppingCart cartItemQuantity={1} />);

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('should match snapshot for ShoppingCart', () => {
    const { container } = render(<ShoppingCart />);

    expect(container).toMatchSnapshot();
  });
});
