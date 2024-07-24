import { ReactNode } from 'react';

// Components
import { Header, Footer } from '@components';

interface Props {
  children: ReactNode;
}

export const MainLayout = async ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
