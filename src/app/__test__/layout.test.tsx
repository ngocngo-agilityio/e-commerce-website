import { render } from '@testing-library/react';

// Components
import RootLayout from '../layout';

jest.mock('@providers', () => ({
  ...jest.requireActual('@providers'),
  ChakraUIProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

jest.mock('next-auth/react', () => ({
  ...jest.requireActual('next-auth/react'),
  SessionProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe('RootLayout', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <RootLayout>
        <div>Children component</div>
      </RootLayout>,
    );

    expect(container).toMatchSnapshot();
  });
});
