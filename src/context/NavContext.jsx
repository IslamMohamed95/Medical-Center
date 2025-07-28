import { createContext, useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [activeNav, setActiveNav] = useState(false);
  const isMobile = useMediaQuery("(max-width: 545px)");
  const navItems = [
    "Home",
    "About Us",
    "Doctors",
    "Service",
    "Careers",
    "Contact Us",
  ];
  const toggleMenu = () => {
    setActiveNav((prev) => !prev);
  };
  useEffect(() => {
    if (activeNav && window.innerWidth <= 768) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [activeNav]);
  return (
    <NavContext.Provider
      value={{ activeNav, setActiveNav, navItems, toggleMenu, isMobile }}
    >
      {children}
    </NavContext.Provider>
  );
};
