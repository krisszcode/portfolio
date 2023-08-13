import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import Logo from './Logo';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center'>
            <Logo/>
            <div className='flex text-xl font-bold items-center'>
                <ThemeSwitcher/>
                <div className='flex space-x-8 mr-8'> 
                    <p>Home</p>
                    <p>Projects</p>
                    <p>Contacts</p>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
