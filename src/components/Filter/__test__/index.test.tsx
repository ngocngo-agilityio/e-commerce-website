// Libs
import { fireEvent, render, screen } from '@testing-library/react';

// Components
import Filter from '..';

const mockProps = {
  options: [
    { value: '1', label: 'Women' },
    { value: '2', label: 'Man' },
    { value: '3', label: 'Casual' },
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
    fireEvent.click(screen.getByText(mockProps.options[0].label));

    expect(mockProps.onChange).toHaveBeenCalled();
  });
});
