// Libs
import { render } from '@testing-library/react';

// Components
import Footer from '..';

describe('Footer component', () => {
  test('should render Footer successfully', () => {
    const { container } = render(<Footer />);

    expect(container).toBeInTheDocument();
  });

  test('should match snapshot for Footer', () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
  });
});
