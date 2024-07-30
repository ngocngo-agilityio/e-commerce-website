// Libs
import { render, screen } from '@testing-library/react';

// Mocks
import { MOCK_PRODUCT_LIST } from '@mocks';

// Types
import { Product } from '@types';

// Components
import ProductList from '..';

describe('ProductList component', () => {
  test('renders no products message when data is empty', () => {
    render(<ProductList data={[]} />);

    expect(screen.getByText('No products in list')).toBeInTheDocument();
  });

  test('should match snapshot for ProductCard', () => {
    const mockData = MOCK_PRODUCT_LIST;
    mockData[1] = null as unknown as Product;

    const { container } = render(<ProductList data={MOCK_PRODUCT_LIST} />);

    expect(container).toMatchSnapshot();
  });
});
