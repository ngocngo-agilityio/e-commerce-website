// Libs
import { Table } from '@chakra-ui/react';
import { render } from '@testing-library/react';

// Components
import CartTableHeader from '..';

describe('CartItem components', () => {
  test('should render CartTableHeader successfully', () => {
    const { container } = render(<CartTableHeader />, {
      wrapper: Table,
    });

    expect(container).toBeInTheDocument();
  });

  test('should match snapshot for CartTableHeader', () => {
    const { container } = render(<CartTableHeader />, {
      wrapper: Table,
    });

    expect(container).toMatchSnapshot();
  });
});
