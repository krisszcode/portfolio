"use client";

import Header from '@components/Header';
import Footer from '@components/Footer';
import { useContext } from 'react';
import { LayoutModeContext } from '../pages/_app';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // const [darkMode, setDarkMode] = useState<boolean>(() => {
  //   if (typeof window !== 'undefined') {
  //     const savedPreference = localStorage.getItem('dark-mode');
  //     return savedPreference ? JSON.parse(savedPreference) : ;
  //   }
  //   return false;
  // });

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
