import React from 'react';
import Logo from './Logo';
import { useTheme } from '../context/store';  // Importing the useTheme hook

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();  // Using the context

    return (
        <nav>
            <Logo darkMode={theme === 'dark'} />
            <button onClick={toggleTheme}>
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
            <p>Home</p>
            <p>Projects</p>
            <p>Contacts</p>
        </nav>
    );
}

export default Navbar;
