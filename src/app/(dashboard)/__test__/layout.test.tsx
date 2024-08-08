import { render } from '@testing-library/react';

// Components
import DashboardLayout from '../layout';

jest.mock('@components', () => ({
  Header: () => <div>Header</div>,
  Footer: () => <div>Footer</div>,
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
