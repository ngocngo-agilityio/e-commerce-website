// Libs
import { render } from '@testing-library/react';

// Components
import SaleBanner from '..';

describe('SaleBanner components', () => {
  test('should render CartTableHeader successfully', () => {
    const { container } = render(<SaleBanner />);

    expect(container).toBeInTheDocument();
  });

  test('should match snapshot for SaleBanner', () => {
    const { container } = render(<SaleBanner />);

    expect(container).toMatchSnapshot();
  });
});
