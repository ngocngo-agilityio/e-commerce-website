// Libs
import { render } from '@testing-library/react';

// Components
import SkeletonProductActions from '..';

describe('SkeletonProductActions component', () => {
  test('should match snapshot', () => {
    const { container } = render(<SkeletonProductActions />);

    expect(container).toMatchSnapshot();
  });
});
