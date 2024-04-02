// Libs
import { fireEvent, render, screen } from '@testing-library/react';

// Components
import SearchInput from '..';

const mockProps = {
  value: 'abc',
  onChange: jest.fn(),
};

describe('SearchInput component', () => {
  test('should render SearchInput successfully', () => {
    const { container } = render(<SearchInput {...mockProps} />);

    expect(container).toBeInTheDocument();
  });

  test('should match snapshot for SearchInput', () => {
    const { container } = render(<SearchInput {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  test('should call onChange when typing value', () => {
    render(<SearchInput {...mockProps} />);

    const searchInput = screen.getByPlaceholderText('Search Here....');

    fireEvent.change(searchInput, { target: { value: 'test' } });

    expect(mockProps.onChange).toHaveBeenCalled();
  });
});
