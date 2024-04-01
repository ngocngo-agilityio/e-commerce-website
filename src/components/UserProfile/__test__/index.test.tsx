// Libs
import { fireEvent, screen, render } from '@testing-library/react';

// Components
import UserProfile from '..';

const mockProps = {
  onLogout: jest.fn(),
};

describe('UserProfile components', () => {
  test('should render UserProfile successfully', () => {
    const { container } = render(<UserProfile {...mockProps} />);

    expect(container).toBeInTheDocument();
  });

  test('should match snapshot for UserProfile', () => {
    const { container } = render(<UserProfile {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  test('should call onLogout when click the logout button', () => {
    render(<UserProfile {...mockProps} />);

    fireEvent.click(screen.getByText('Logout'));

    expect(mockProps.onLogout).toHaveBeenCalled();
  });
});
