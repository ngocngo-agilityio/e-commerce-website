// Libs
import { render } from '@testing-library/react';

// Components
import UserProfile from '..';

describe('UserProfile components', () => {
  test('should render UserProfile successfully', () => {
    const { container } = render(<UserProfile />);

    expect(container).toBeInTheDocument();
  });

  test('should match snapshot for UserProfile', () => {
    const { container } = render(<UserProfile />);

    expect(container).toMatchSnapshot();
  });
});
