// Libs
import { render } from '@testing-library/react';

// Components
import SkeletonProductList from '..';

describe('SkeletonProductList component', () => {
  test('should render SkeletonProductList successfully', () => {
    const { container } = render(<SkeletonProductList />);

    expect(container).toBeInTheDocument();
  });

  test('should match snapshot for SkeletonProductList', () => {
    const { container } = render(<SkeletonProductList />);

    expect(container).toMatchSnapshot();
  });
});
