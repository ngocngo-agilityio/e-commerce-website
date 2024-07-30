import { render } from '@testing-library/react';

// Components
import HomeLoading from '../loading';

describe('HomeLoading', () => {
  it('should match snapshot', () => {
    const { container } = render(<HomeLoading />);

    expect(container).toMatchSnapshot();
  });
});
