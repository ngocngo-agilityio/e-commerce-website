// Libs
import { render, screen } from '@testing-library/react';

// Components
import ProductList from '..';

// Mocks
import { MOCK_PRODUCT_LIST } from '@mocks';

describe('ProductList component', () => {
  test('renders no products message when data is empty', () => {
    render(<ProductList data={[]} />);

    expect(screen.getByText('No products in list')).toBeInTheDocument();
  });

  test('should match snapshot for ProductCard', () => {
    const { container } = render(<ProductList data={[]} />);

    expect(container).toMatchSnapshot();
  });

  test('should render ProductList successfully', () => {
    render(<ProductList data={MOCK_PRODUCT_LIST} />);

    expect(screen.getByText(MOCK_PRODUCT_LIST[0].name)).toBeInTheDocument();
    expect(screen.getByText(MOCK_PRODUCT_LIST[1].name)).toBeInTheDocument();
  });
});
