import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useContext, useState, useRef, useEffect, useCallback } from "react";
import { NavContext } from "../../context/NavContext";
import LogoViewer from "../../components/LogoViewer/LogoViewer";

import "./Navbar.css";

function Navbar() {
  const { navItems, activeNav, toggleMenu, isMobile } = useContext(NavContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const navRefs = useRef([]);
  const underlineRef = useRef(null);

  const updateUnderline = useCallback(() => {
    const activeEl = navRefs.current[activeIndex];
    const underlineEl = underlineRef.current;

    if (activeEl && underlineEl) {
      const itemCenter = activeEl.offsetLeft + activeEl.offsetWidth / 2;
      const underlineWidth = activeEl.offsetWidth * 0.5;

      underlineEl.style.width = `${underlineWidth}px`;
      underlineEl.style.left = `${itemCenter}px`;
      underlineEl.style.transform = `translateX(-50%)`;
    }
  }, [activeIndex]);

  useEffect(() => {
    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [updateUnderline]);

  return (
    <nav className="nav">
      <div className="sub-nav">
        <a href="tel:+011 01533999" className="hoverEffect">
          <IoIosCall />
          <span>011 01533999</span>
        </a>
        <a href="https://www.google.com/maps/..." className="hoverEffect">
          <FaLocationDot />
          <span>
            Ragaei, Qism Bani Sweif, Bani Sweif, Beni Suef Governorate, Beni
            Suef, Egypt
          </span>
        </a>
      </div>

      <div className="main-nav">
        <div className="nav-logo">
          <LogoViewer />
        </div>
        <div
          className={`nav-menu hoverEffect no-select ${
            activeNav ? "open" : ""
          }`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className={`nav-list ${isMobile ? (activeNav ? "open" : "") : ""}`}
        >
          <ul
            className={`nav-items ${isMobile ? (activeNav ? "open" : "") : ""}`}
          >
            {navItems.map((n, i) => (
              <li
                key={i}
                className={`nav-item ${i === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(i)}
                ref={(el) => (navRefs.current[i] = el)}
              >
                {n}
              </li>
            ))}
            <div className="underline" ref={underlineRef}></div>
          </ul>

          <div className="nav-btn">
            <button>Book Appointment</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
