// Libs
import { render } from '@testing-library/react';

// Sections
import Categories from '..';

// Mocks
import { MOCK_CATEGORIES } from '@mocks';

const mockGetCategoryList = jest.fn();

jest.mock('@apis', () => ({
  ...jest.requireActual('@apis'),
  getCategoryList: () => mockGetCategoryList(),
}));

describe('Categories section', () => {
  test('should match with snapshot', async () => {
    const mockCategoryIDs = MOCK_CATEGORIES.map((item) => item.id);
    mockGetCategoryList.mockResolvedValue({ data: MOCK_CATEGORIES });

    const { container } = render(
      await Categories({ categoryIds: mockCategoryIDs }),
    );

    expect(container).toMatchSnapshot();
  });
});
