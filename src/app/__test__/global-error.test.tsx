import { render } from '@testing-library/react';

// Components
import GlobalError from '../global-error';

// Mocks
import { MOCK_ERROR_MESSAGES } from '@mocks';

describe('HomeLoading', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <GlobalError error={new Error(MOCK_ERROR_MESSAGES)} reset={jest.fn()} />,
    );

    expect(container).toMatchSnapshot();
  });
});
