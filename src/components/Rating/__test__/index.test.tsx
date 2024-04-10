// Libs
import { render } from '@testing-library/react';

// Components
import Rating from '..';

const mockProps = {
  rating: 4,
};

describe('Rating component', () => {
  test('should render Rating successfully', () => {
    const { container } = render(<Rating {...mockProps} />);

    expect(container).toBeInTheDocument();
  });

  test('should match snapshot for Rating', () => {
    const { container } = render(<Rating {...mockProps} />);

    expect(container).toMatchSnapshot();
  });
});
