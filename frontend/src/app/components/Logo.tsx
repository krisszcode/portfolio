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

    return <Image src={src} className='w-10 h-10 m-5' width={40} height={40} alt='Logo'/>
}

export default Logo;