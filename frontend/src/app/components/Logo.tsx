import React, { useState, useEffect } from 'react';
import logoBlack from 'public/logoBlack.png'; 
import logoWhite from 'public/logoWhite.png'; 
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Logo = () => {
  const [logo, setLogo] = useState(logoWhite)
  
    const { resolvedTheme } = useTheme()

    useEffect(() => {
      if(resolvedTheme === 'light') {
        setLogo(logoBlack)
      } else {
        setLogo(logoWhite)
      }
    }, [resolvedTheme]);

    return <Image src={logo} className='w-20 h-20 m-5' width={80} height={80} alt='Logo'/>
}

export default Logo;