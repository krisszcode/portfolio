import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

import sunIcon from "public/images/sun.svg";
import moonIcon from "public/images/moon.svg";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // Prevents rendering mismatches between server and client
  
  const toggleTheme = () => {
    if (theme === "dark" ) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <label className="swap swap-rotate">
      <input type="checkbox" onChange={toggleTheme}/>
      {theme === "dark" ? (
      <Image
        className="w-8 h-8 fill-current"
        src={moonIcon}
        alt="Dark"
      />
    ) : (
      <Image
        className="w-8 h-8 fill-current"
        src={sunIcon}
        alt="Light"
      />
    )}
    </label>
  );
};

export default ThemeSwitcher;
