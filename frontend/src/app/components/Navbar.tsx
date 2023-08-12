import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import Logo from './Logo';

const Navbar = () => {
    return (
        <nav className='flex'>
            <Logo/>
            <ThemeSwitcher/>
            <p>Home</p>
            <p>Projects</p>
            <p>Contacts</p>
        </nav>
    );
}

export default Navbar;
