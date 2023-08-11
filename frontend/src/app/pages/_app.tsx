import { AppProps } from 'next/app';
import DefaultLayout from '@components/DefaultLayout';
import { createContext, useCallback, useEffect, useState } from 'react';


interface ExtendedAppProps extends AppProps {
  Component: AppProps['Component'] & { Layout?: React.ComponentType };
}

export enum LayoutMode {
  DARKMODE, WHITEMODE
}

export interface LayoutContextType {
  handleLayoutModeChange: (layoutMode: LayoutMode) => void;
  layoutMode: LayoutMode;
} 

//!window.matchMedia('(prefers-color-scheme: dark)').matches || 

export const LayoutModeContext = createContext<LayoutContextType | null>(null);

const MyApp = ({ Component, pageProps }: ExtendedAppProps) => {
  const Layout = Component.Layout || DefaultLayout;
  const [layoutMode, setLayoutMode] = useState<LayoutMode>(LayoutMode.DARKMODE)

  const handleLayoutModeChange = (layoutMode_: LayoutMode) : void => {
    setLayoutMode(layoutMode_)
  } 
  
  const checkLayoutMode = useCallback(() => {
    const darkModeStored = localStorage.getItem('dark-mode');

    console.log(darkModeStored)
    
    if(darkModeStored === null || darkModeStored === "false") {
      setLayoutMode(LayoutMode.WHITEMODE);
    } else {
      setLayoutMode(LayoutMode.DARKMODE);
    }
  }, []);

  useEffect(() => {
    if(!layoutMode){
      checkLayoutMode();
    }
    
    if (layoutMode === LayoutMode.DARKMODE) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    localStorage.setItem('dark-mode', JSON.stringify(layoutMode === LayoutMode.DARKMODE));
  }, [layoutMode]);

  return (
    <LayoutModeContext.Provider value={{handleLayoutModeChange, layoutMode}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LayoutModeContext.Provider>
  );
}

export default MyApp;
