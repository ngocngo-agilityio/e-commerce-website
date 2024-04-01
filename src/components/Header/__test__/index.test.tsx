// Libs
import { render } from '@testing-library/react';

// Components
import Header from '..';

describe('Header component', () => {
  test('should render Header successfully', () => {
    const { container } = render(<Header />);

    expect(container).toBeInTheDocument();
  });

  test('should match snapshot for Header', () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
