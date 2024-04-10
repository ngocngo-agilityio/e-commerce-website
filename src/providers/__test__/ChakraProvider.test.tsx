// Libs
import { render, screen } from '@testing-library/react';

// Components
import { ChakraUIProvider } from '..';

jest.mock('next/font/google', () => ({
  Lato: jest.fn().mockReturnValue({ style: { fontFamily: 'lato' } }),
  Arimo: jest.fn().mockReturnValue({ style: { fontFamily: 'arimo' } }),
  Baloo_2: jest.fn().mockReturnValue({ style: { fontFamily: 'baloo' } }),
  Inter: jest.fn().mockReturnValue({ style: { fontFamily: 'inter' } }),
}));

describe('ChakraUIProvider component', () => {
  test('should render ChakraUIProvider successfully', () => {
    render(
      <ChakraUIProvider>
        <div>Test</div>
      </ChakraUIProvider>,
    );

    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('should match snapshot for ChakraUIProvider', () => {
    const { container } = render(
      <ChakraUIProvider>
        <div>Test</div>
      </ChakraUIProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
