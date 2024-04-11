// Libs
import { render, screen } from '@testing-library/react';

// Apis
import { getCategoryList } from '@apis';

// Mocks
import { MOCK_CATEGORIES } from '@mocks';

// Components
import Categories from '../Categories';

jest.mock('@apis');

(
  getCategoryList as jest.MockedFunction<typeof getCategoryList>
).mockResolvedValue({
  data: MOCK_CATEGORIES,
});

describe('Categories', () => {
  test('should render Categories successfully', async () => {
    const productDetailPage = await Categories({ categoryIds: ['1'] });

    render(productDetailPage);

    expect(screen.getByText('Category:')).toBeInTheDocument();
  });

  test('should match snapshot for Categories', async () => {
    const productDetailPage = await Categories({ categoryIds: ['1'] });

    const { container } = render(productDetailPage);

    expect(container).toMatchSnapshot();
  });
});
