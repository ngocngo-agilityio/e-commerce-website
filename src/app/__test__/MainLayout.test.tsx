import { render } from '@testing-library/react';

// Components
import MainLayout from '../MainLayout';

jest.mock('@components', () => ({
  Header: () => <div>Header</div>,
  Footer: () => <div>Footer</div>,
}));

describe('MainLayout', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <MainLayout>
        <div>Children component</div>
      </MainLayout>,
    );

    expect(container).toMatchSnapshot();
  });
});
