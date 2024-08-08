import { render } from '@testing-library/react';

// Components
import Loading from '../loading';

describe('Loading', () => {
  it('should match snapshot', () => {
    const { container } = render(<Loading />);

    expect(container).toMatchSnapshot();
  });
});
