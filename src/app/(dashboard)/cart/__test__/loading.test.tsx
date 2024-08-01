import { render } from '@testing-library/react';

// Components
import CartLoading from '../loading';

describe('CartLoading', () => {
  it('should match snapshot', () => {
    const { container } = render(<CartLoading />);

    expect(container).toMatchSnapshot();
  });
});
