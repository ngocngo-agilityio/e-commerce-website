// Libs
import { render } from '@testing-library/react';

// Sections
import CartTotals from '..';

describe('CartTotals page', () => {
  it('Should render match with snapshot.', async () => {
    const { container } = render(
      <CartTotals total={12.3} onCheckout={jest.fn()} />,
    );

    expect(container).toMatchSnapshot();
  });
});
