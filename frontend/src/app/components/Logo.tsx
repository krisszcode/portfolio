import React, { useState, useEffect } from 'react';
import logoBlack from 'public/logoBlack.png'; 
import logoWhite from 'public/logoWhite.png'; 
import { useTheme } from 'next-themes';
import Image from 'next/image';



const Logo = () => {

  const [hasMounted, setHasMounted] = useState(false);

  
    const { resolvedTheme } = useTheme()
    let src

    useEffect(() => {
      setHasMounted(true);
    }, []);

    if (!hasMounted) return null;
  
    switch (resolvedTheme) {
      case 'light':
        src = logoBlack
        break
      case 'dark':
        src = logoWhite
        break
    }

    return <Image src={src} className='w-20 h-20 m-5' width={80} height={80} alt='Logo'/>
}

export default Logo;