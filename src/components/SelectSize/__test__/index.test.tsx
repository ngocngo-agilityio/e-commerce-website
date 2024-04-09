// Libs
import { screen, render, fireEvent } from '@testing-library/react';

// Components
import SelectSize from '..';

const mockProps = {
  options: [
    { id: '1', size: 'Small', symbol: 'S' },
    { id: '2', size: 'Medium', symbol: 'M' },
    { id: '3', size: 'Large', symbol: 'L' },
    { id: '4', size: 'Extra Large', symbol: 'XL' },
  ],
  onChange: jest.fn(),
};

describe('SelectSize component', () => {
  test('should render SelectSize successfully', () => {
    render(<SelectSize {...mockProps} />);

    expect(screen.getByText(mockProps.options[0].size)).toBeInTheDocument();
  });

  test('should match snapshot for SelectSize', () => {
    const { container } = render(<SelectSize {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  test('should call onChange when select the size option', () => {
    render(<SelectSize {...mockProps} />);

    fireEvent.click(screen.getByText(mockProps.options[1].size));

    expect(mockProps.onChange).toHaveBeenCalled();
  });
});
