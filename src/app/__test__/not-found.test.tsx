import { render } from '@testing-library/react';

// Components
import NotFound from '../not-found';

describe('NotFound', () => {
  it('should match snapshot', () => {
    const { container } = render(<NotFound />);

    expect(container).toMatchSnapshot();
  });
});
