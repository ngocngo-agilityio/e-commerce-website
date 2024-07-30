// Libs
import { screen, render, fireEvent, waitFor } from '@testing-library/react';

// Mocks
import { MOCK_PRODUCT_SIZES } from '@mocks';

// Types
import { SizeOption } from '@types';

// Components
import SelectSize from '..';

const mockProps = {
  options: MOCK_PRODUCT_SIZES,
  onChange: jest.fn(),
};

describe('SelectSize component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should match snapshot for SelectSize', () => {
    const mockOptions = MOCK_PRODUCT_SIZES;
    mockOptions[0] = null as unknown as SizeOption;
    const { container } = render(<SelectSize {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  test('should call onChange when select the size option', () => {
    render(<SelectSize {...mockProps} />);

    fireEvent.click(screen.getByText(mockProps.options[1].size));

    waitFor(() =>
      expect(mockProps.onChange).toHaveBeenCalledWith(MOCK_PRODUCT_SIZES[1]),
    );
  });
});
