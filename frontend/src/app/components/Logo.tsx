import React from 'react';
import logoBlack from 'public/logo-black.png'; 
import logoWhite from 'public/logo-white.png'; 

interface LogoProps {
    darkMode: boolean;
  }

const Logo = ({ darkMode }: LogoProps) => {
    const logoSrc = darkMode ? logoWhite.src : logoBlack.src;
    return (
        <img src={logoSrc} className='w-10 h-10 m-5' alt="Logo" />
    );
}

export default Logo;