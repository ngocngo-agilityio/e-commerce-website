// Libs
import { fireEvent, render, screen } from '@testing-library/react';

// Apis
// import { getCategoryList, getProductDetail, getTagList } from '@apis';

// Mocks
import { MOCK_PRODUCT_LIST, MOCK_PRODUCT_SIZES } from '@mocks';

// Components
import AddToCard from '../AddToCard';

const mockShowToast = jest.fn();
jest.mock('@apis');
jest.mock('@hooks', () => {
  const originalModule = jest.requireActual('@hooks');

  return {
    __esModule: true,
    ...originalModule,
    useCustomToast: jest.fn(() => ({ showToast: mockShowToast })),
  };
});

const mockProps = {
  sizes: MOCK_PRODUCT_SIZES,
  product: MOCK_PRODUCT_LIST[0],
};

describe('AddToCard', () => {
  test('should render AddToCard page successfully', async () => {
    render(<AddToCard {...mockProps} />);

    expect(screen.getByText('Add to cart')).toBeInTheDocument();
  });

  test('should match snapshot for AddToCard page', async () => {
    const { container } = render(<AddToCard {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  test('handle select size', async () => {
    render(<AddToCard {...mockProps} />);

    fireEvent.click(screen.getByText(mockProps.sizes[1].size));

    expect(
      screen.getByRole('button', { name: mockProps.sizes[1].size }),
    ).toBeInTheDocument();
  });

  test('handle add to card with have not yet selected size', async () => {
    render(<AddToCard {...mockProps} />);

    fireEvent.click(screen.getByRole('button', { name: 'Add to cart' }));

    expect(mockShowToast).toHaveBeenCalled();
  });
});
