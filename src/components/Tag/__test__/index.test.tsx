// Libs
import { fireEvent, render, waitFor } from '@testing-library/react';

// Components
import Tag from '..';

const mockProps = {
  id: 1,
  label: 'Women',
  onClose: jest.fn(),
};

describe('Sort component', () => {
  test('should match snapshot for Sort', () => {
    const { container } = render(<Tag {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  test('should call onClose when click on the close button', () => {
    const { getByTestId } = render(<Tag {...mockProps} />);

    fireEvent.click(getByTestId('close-btn'));

    waitFor(() => expect(mockProps.onClose).toHaveBeenCalledWith(mockProps.id));
  });
});
