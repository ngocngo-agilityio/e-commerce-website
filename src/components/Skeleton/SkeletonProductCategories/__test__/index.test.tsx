// Libs
import { render } from '@testing-library/react';

// Components
import SkeletonProductCategories from '..';

describe('SkeletonProductCategories component', () => {
  test('should match snapshot for SkeletonProductCategories', () => {
    const { container } = render(<SkeletonProductCategories />);

    expect(container).toMatchSnapshot();
  });
});
