// Libs
import { fireEvent, render, waitFor } from '@testing-library/react';

// Components
import UserProfile from '..';

const mockLogout = jest.fn();
const mockPush = jest.fn();

jest.mock('@actions', () => ({
  ...jest.requireActual('@actions'),
  logout: () => mockLogout(),
}));

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: () => ({
    push: () => mockPush(),
  }),
}));

describe('UserProfile components', () => {
  test('should match snapshot for UserProfile', () => {
    const { container } = render(<UserProfile />);

    expect(container).toMatchSnapshot();
  });

  test('should call logout when click logout', () => {
    const { getByText } = render(<UserProfile />);

    fireEvent.click(getByText('Logout'));

    waitFor(() => {
      expect(mockLogout).toHaveBeenCalled();
    });
  });
});
