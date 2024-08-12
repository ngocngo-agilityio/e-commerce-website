import { render } from '@testing-library/react';

// Components
import DashboardLayout from '../layout';

jest.mock('@components', () => ({
  Footer: () => <div>Footer</div>,
}));

jest.mock('@sections', () => ({
  Header: () => <div>Header</div>,
}));

describe('DashboardLayout', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <DashboardLayout>
        <div>Children component</div>
      </DashboardLayout>,
    );

    expect(container).toMatchSnapshot();
  });
});
