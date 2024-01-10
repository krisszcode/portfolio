"use client";

import Header from 'src/app/components/Header';
import Footer from 'src/app/components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: LayoutProps) => {

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default DefaultLayout;
