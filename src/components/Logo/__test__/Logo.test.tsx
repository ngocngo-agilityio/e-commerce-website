// Libs
import { render, screen } from '@testing-library/react';

// Components
import Logo from '..';

describe('Logo component', () => {
  test('should render Logo successfully', () => {
    render(<Logo />);

    expect(screen.getByText('NorthStar')).toBeInTheDocument();
  });

  test('should match snapshot for Logo', () => {
    const { container } = render(<Logo />);

    expect(container).toMatchSnapshot();
  });
});
