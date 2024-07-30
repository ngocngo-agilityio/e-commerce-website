// Libs
import { fireEvent, render, waitFor } from '@testing-library/react';

// Mocks
import { MOCK_TAG } from '@mocks';

// Components
import Tag from '..';

const mockProps = {
  ...MOCK_TAG,
  onClose: jest.fn(),
};

describe('Tag component', () => {
  test('should match snapshot', () => {
    const { container } = render(<Tag {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  test('should call onClose when click on the close button', () => {
    const { getByTestId } = render(<Tag {...mockProps} />);

    fireEvent.click(getByTestId('close-btn'));

    waitFor(() => expect(mockProps.onClose).toHaveBeenCalledWith(mockProps.id));
  });
});
