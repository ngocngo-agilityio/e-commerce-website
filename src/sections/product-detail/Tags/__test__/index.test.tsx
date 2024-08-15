// Libs
import { render } from '@testing-library/react';

// Sections
import Tags from '..';

// Mocks
import { MOCK_TAGS } from '@mocks';

const mockGetTagList = jest.fn();

jest.mock('@apis', () => ({
  ...jest.requireActual('@apis'),
  getTagList: () => mockGetTagList(),
}));

describe('Tags section', () => {
  test('should match with snapshot', async () => {
    const mockCategoryIDs = MOCK_TAGS.map((item) => +item.id);
    mockGetTagList.mockResolvedValue({ data: MOCK_TAGS });

    const { container } = render(await Tags({ tagIds: mockCategoryIDs }));

    expect(container).toMatchSnapshot();
  });
});
