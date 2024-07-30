// Libs
import { fireEvent, render, waitFor } from '@testing-library/react';

// Mocks
import { MOCK_SORT_OPTIONS } from '@mocks';

// Types
import { SortOption } from '@types';

// Components
import Sort from '..';

const mockProps = {
  options: MOCK_SORT_OPTIONS,
  onChange: jest.fn(),
};

describe('Sort component', () => {
  test('should match snapshot for Sort', () => {
    const { container } = render(<Sort {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  test('should call onChange when select option', () => {
    const mockOptions = MOCK_SORT_OPTIONS;
    mockOptions[2] = null as unknown as SortOption;

    const { getByText } = render(
      <Sort {...mockProps} defaultValue={MOCK_SORT_OPTIONS[0].value} />,
    );

    fireEvent.click(getByText(MOCK_SORT_OPTIONS[1].label));

    waitFor(() =>
      expect(mockProps.onChange).toHaveBeenCalledWith(
        MOCK_SORT_OPTIONS[1].value,
      ),
    );
  });
});
