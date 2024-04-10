// Libs
import { render } from '@testing-library/react';

// Components
import SaleBanner from '..';

describe('SaleBanner components', () => {
  test('should render SaleBanner successfully', () => {
    const { container } = render(<SaleBanner />);

    expect(container).toBeInTheDocument();
  });

  test('should match snapshot for SaleBanner', () => {
    const { container } = render(<SaleBanner />);

    expect(container).toMatchSnapshot();
  });
});
