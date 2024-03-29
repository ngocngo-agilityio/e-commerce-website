// Libs
import { render } from '@testing-library/react';

// Components
import Navigation from '..';

describe('Navigation component', () => {
  test('should render Navigation successfully', () => {
    const { container } = render(<Navigation />);

    expect(container).toBeInTheDocument();
  });

  test('should match snapshot for Navigation', () => {
    const { container } = render(<Navigation />);

    expect(container).toMatchSnapshot();
  });
});
