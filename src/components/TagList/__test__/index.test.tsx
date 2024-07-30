// Libs
import { fireEvent, render, waitFor } from '@testing-library/react';

// Mocks
import { MOCK_TAG_LIST } from '@mocks';

// Types
import { ITag } from '@types';

// Components
import TagList from '..';

const mockProps = {
  tags: MOCK_TAG_LIST,
  onClose: jest.fn(),
};

describe('Sort component', () => {
  test('should match snapshot', () => {
    const { container } = render(<TagList {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  test('should call onClose when click on the close button', () => {
    const mockTags = MOCK_TAG_LIST;
    mockTags[1] = null as unknown as ITag;

    const { getAllByTestId } = render(<TagList {...mockProps} />);

    fireEvent.click(getAllByTestId('close-btn')[0]);

    waitFor(() =>
      expect(mockProps.onClose).toHaveBeenCalledWith(MOCK_TAG_LIST[0].id),
    );
  });
});
