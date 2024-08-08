import { render } from '@testing-library/react';

// Components
import AuthLayout from '../layout';

describe('AuthLayout', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <AuthLayout>
        <div>Children component</div>
      </AuthLayout>,
    );

    expect(container).toMatchSnapshot();
  });
});
