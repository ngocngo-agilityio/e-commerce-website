// Libs
import { render } from '@testing-library/react';

// Components
import SkeletonAddCartAction from '..';

describe('SkeletonAddCartAction component', () => {
  test('should match snapshot', () => {
    const { container } = render(<SkeletonAddCartAction />);

    expect(container).toMatchSnapshot();
  });
});
