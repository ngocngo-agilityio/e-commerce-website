// Libs
import { render } from '@testing-library/react';

// Components
import Cart from '../page';

describe('Cart page', () => {
  test('should render Cart page successfully', () => {
    const { getByText } = render(<Cart />);

    expect(getByText('Home')).toBeInTheDocument();
  });

  test('should match snapshot for Cart page', () => {
    const { container } = render(<Cart />);

    expect(container).toMatchSnapshot();
  });
});
