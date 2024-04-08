import { ReactNode } from 'react';

// Apis
import { getCartItems } from '@apis';

// Components
import { Header, Footer, CartStateManager } from '@components';

interface Props {
  children: ReactNode;
}

export const MainLayout = async ({ children }: Props) => {
  const { data: cartItems } = await getCartItems();

  return (
    <>
      <Header />
      {children}
      <Footer />
      <CartStateManager cartItems={cartItems} />
    </>
  );
};

export default MainLayout;
