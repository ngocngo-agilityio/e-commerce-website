// Libs
import { render, screen } from '@testing-library/react';

// Apis
// import { getCategoryList, getProductDetail, getTagList } from '@apis';

// Mocks
import { MOCK_PRODUCT_LIST, MOCK_PRODUCT_SIZES } from '@mocks';

// Components
import AddToCard from '../AddToCard';

jest.mock('@apis');

const mockProps = {
  sizes: MOCK_PRODUCT_SIZES,
  product: MOCK_PRODUCT_LIST[0],
};

describe('AddToCard', () => {
  test('should render AddToCard page successfully', async () => {
    render(<AddToCard {...mockProps} />);

    expect(screen.getByText('Add to card')).toBeInTheDocument();
  });

  test('should match snapshot for AddToCard page', async () => {
    const { container } = render(<AddToCard {...mockProps} />);

    expect(container).toMatchSnapshot();
  });
});
