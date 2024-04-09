// Libs
import { fireEvent, render, screen } from '@testing-library/react';

// Components
import Filter from '..';

const mockProps = {
  options: [
    { id: '1', name: 'Women' },
    { id: '2', name: 'Man' },
    { id: '3', name: 'Casual' },
  ],
  onChange: jest.fn(),
};

describe('Filter component', () => {
  test('should render Filter successfully', () => {
    const { container } = render(<Filter {...mockProps} />);

    expect(container).toBeInTheDocument();
  });

  test('should match snapshot for Filter', () => {
    const { container } = render(<Filter {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  test('should call onChange when changing options', () => {
    render(<Filter {...mockProps} />);

    const filterBtn = screen.getByPlaceholderText('Filters');

    fireEvent.click(filterBtn);
    fireEvent.click(screen.getByText(mockProps.options[0].name));

    expect(mockProps.onChange).toHaveBeenCalled();
  });
});
