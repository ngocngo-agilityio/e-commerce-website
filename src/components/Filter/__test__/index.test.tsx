// Libs
import { fireEvent, render, screen } from '@testing-library/react';

// Components
import Filter from '..';

// Types
import { Category } from '@types';

// Mocks
import { MOCK_CATEGORIES } from '@mocks';

const mockProps = {
  options: MOCK_CATEGORIES,
  onChange: jest.fn(),
};

describe('Filter component', () => {
  const mockOptions = mockProps.options;
  mockOptions[2] = null as unknown as Category;

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
