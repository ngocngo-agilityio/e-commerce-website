// Libs
import { render } from '@testing-library/react';

// Components
import LoadingIndicator from '..';

describe('LoadingIndicator component', () => {
  test('should render LoadingIndicator successfully', () => {
    const { container } = render(<LoadingIndicator />);

    expect(container).toBeInTheDocument();
  });

  test('should match snapshot for LoadingIndicator', () => {
    const { container } = render(<LoadingIndicator />);

    expect(container).toMatchSnapshot();
  });
});
