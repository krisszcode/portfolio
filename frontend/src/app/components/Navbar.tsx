import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <Logo />
      <div className="flex text-xl font-bold items-center">
        <ThemeSwitcher />
        <div className="flex space-x-8 mr-8">
          <Link href="/">
          <div className="relative hover:after:absolute after:bg-slate-700 dark:after:bg-white after:blur after:z-0 after:inset-0 after:bottom-2 after:top-3">
            <p className="z-10">Home</p>
          </div>
          </Link>
          <Link href="/projects">
          <div className="relative hover:after:absolute after:bg-slate-700 dark:after:bg-white after:blur after:z-0 after:inset-0 after:bottom-2 after:top-3">
            <p className="z-10  sm:block hidden">Projects</p>
          </div>
          </Link>
          <Link href="/contacts">
          <div className="relative hover:after:absolute after:bg-slate-700 dark:after:bg-white after:blur after:z-0 after:inset-0 after:bottom-2 after:top-3">
            <p className="z-10 sm:block hidden" >Contacts</p>
          </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
