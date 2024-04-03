// Libs
import { render, screen } from '@testing-library/react';

// Mocks
import { MOCK_PRODUCT_CARD } from '@mocks';

// Components
import ProductCard from '..';

const mockProps = {
  ...MOCK_PRODUCT_CARD,
};

describe('ProductCard component', () => {
  test('should render ProductCard successfully', () => {
    render(<ProductCard {...mockProps} />);

    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
  });

  test('should match snapshot for ProductCard', () => {
    const { container } = render(<ProductCard {...mockProps} />);

    expect(container).toMatchSnapshot();
  });
});
