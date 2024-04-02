// Libs
import { screen, render, fireEvent } from '@testing-library/react';

// Components
import SelectSize from '..';

const mockProps = {
  options: [
    { value: '1', label: 'Small', code: 'S' },
    { value: '2', label: 'Medium', code: 'M' },
    { value: '3', label: 'Large', code: 'L' },
    { value: '4', label: 'Extra Large', code: 'XL' },
  ],
  onChange: jest.fn(),
};

describe('SelectSize component', () => {
  test('should render SelectSize successfully', () => {
    render(<SelectSize {...mockProps} />);

    expect(screen.getByText(mockProps.options[0].label)).toBeInTheDocument();
  });

  test('should match snapshot for SelectSize', () => {
    const { container } = render(<SelectSize {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  test('should call onChange when select the size option', () => {
    render(<SelectSize {...mockProps} />);

    fireEvent.click(screen.getByText(mockProps.options[1].label));

    expect(mockProps.onChange).toHaveBeenCalled();
  });
});
