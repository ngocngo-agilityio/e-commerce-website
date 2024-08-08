// Libs
import { render } from '@testing-library/react';

// Sections
import SignInPage from '../page';

jest.mock('@sections', () => ({
  LoginForm: () => <div>LoginForm</div>,
}));

describe('SignInPage page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render match with snapshot.', () => {
    const { container } = render(<SignInPage />);

    expect(container).toMatchSnapshot();
  });
});
