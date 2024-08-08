import { render } from '@testing-library/react';

// Components
import ErrorComponent from '../error';

// Mocks
import { MOCK_ERROR_MESSAGES } from '@mocks';

describe('Error', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ErrorComponent
        error={new Error(MOCK_ERROR_MESSAGES)}
        reset={jest.fn()}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
