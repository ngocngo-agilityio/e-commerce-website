// Libs
import { render } from '@testing-library/react';

// Sections
import SignInPage from '../page';

jest.mock('@sections', () => ({
  SignUpForm: () => <div>SignUpForm</div>,
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
