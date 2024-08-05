import { render } from '@testing-library/react';

// Components
import ProductDetailLoading from '../loading';

describe('ProductDetailLoading', () => {
  it('should match snapshot', () => {
    const { container } = render(<ProductDetailLoading />);

    expect(container).toMatchSnapshot();
  });
});
