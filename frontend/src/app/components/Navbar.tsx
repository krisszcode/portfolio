import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <Logo />
      <div className="flex text-xl font-bold items-center">
        <ThemeSwitcher />
        <div className="flex space-x-8 mr-8">
          <button className="relative hover:after:absolute after:bg-slate-700 dark:after:bg-white after:blur after:z-0 after:inset-0 after:bottom-2 after:top-3">
            <p className="z-10">Home</p>
          </button>
          <button className="relative hover:after:absolute after:bg-slate-700 dark:after:bg-white after:blur after:z-0 after:inset-0 after:bottom-2 after:top-3">
            <p className="z-10  sm:block hidden">Projects</p>
          </button>
          <button className="relative hover:after:absolute after:bg-slate-700 dark:after:bg-white after:blur after:z-0 after:inset-0 after:bottom-2 after:top-3">
            <p className="z-10 sm:block hidden" >Contacts</p>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
