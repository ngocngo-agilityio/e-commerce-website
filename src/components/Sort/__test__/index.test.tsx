// Libs
import { screen, render } from '@testing-library/react';

// Components
import Sort from '..';

const mockProps = {
  options: [
    { value: '1', label: 'Increment by name' },
    { value: '2', label: 'Decrement by name' },
  ],
  onChange: jest.fn(),
};

describe('Sort component', () => {
  test('should render Sort successfully', () => {
    render(<Sort {...mockProps} />);
    const sortButton = screen.getByPlaceholderText('Sort by');

    expect(sortButton).toBeInTheDocument();
  });

  test('should match snapshot for Sort', () => {
    const { container } = render(<Sort {...mockProps} />);

    expect(container).toMatchSnapshot();
  });
});
