import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

import sunIcon from "public/images/sun.svg";
import moonIcon from "public/images/moon.svg";

const ThemeSwitcher = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (resolvedTheme) {
      setHasMounted(true);
    }

    if (resolvedTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

  }, [resolvedTheme]);

  if (!hasMounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isChecked = resolvedTheme === "light"; 

  return (
    <label className="swap swap-rotate mr-8">
      <input type="checkbox" checked={isChecked} onChange={toggleTheme} />
      <Image
        className="swap-off fill-current w-10 h-10"
        src={moonIcon}
        alt="Dark"
      />
      <Image
        className="swap-on fill-current w-10 h-10"
        src={sunIcon}
        alt="Light"
      />
    </label>
  );
};

export default ThemeSwitcher;
