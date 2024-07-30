// Libs
import { render } from '@testing-library/react';

// Components
import SkeletonCartItems from '..';

describe('SkeletonCartItems component', () => {
  test('should match snapshot', () => {
    const { container } = render(<SkeletonCartItems />);

    expect(container).toMatchSnapshot();
  });
});
