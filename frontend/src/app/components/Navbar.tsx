import React, { useContext } from 'react';
import Logo from './Logo';
import { LayoutModeContext, LayoutMode } from '../pages/_app';

const Navbar = () => {
    const layoutModeContext = useContext(LayoutModeContext)
    const changeLayoutMode = () => {
        console.log(layoutModeContext)
        if(layoutModeContext?.layoutMode === LayoutMode.DARKMODE)
        {
            layoutModeContext.handleLayoutModeChange(LayoutMode.WHITEMODE);
            localStorage.setItem('dark-mode', 'false')
            return
        }
        layoutModeContext?.handleLayoutModeChange(LayoutMode.DARKMODE);
        localStorage.setItem('dark-mode', 'true')
    }

    return (
        <nav>
            <Logo darkMode={layoutModeContext?.layoutMode === LayoutMode.DARKMODE ? true : false} />
            <button onClick = {() => changeLayoutMode()}>
                {layoutModeContext?.layoutMode === LayoutMode.DARKMODE ? 
                'Light Mode' : 
                'Dark Mode'}
            </button>
            <p>Home</p>
            <p>Projects</p>
            <p>Contacts</p>
        </nav>
    );
}

export default Navbar;
