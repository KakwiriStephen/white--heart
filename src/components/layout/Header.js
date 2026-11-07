import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaHeart, FaTimes } from "react-icons/fa";
import "./Header.css";

const navItems = [
  { to: "/about", label: "About" },
  { to: "/causes", label: "Causes" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/shop", label: "Shop" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("wh-menu-open", menuOpen);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("wh-menu-open");
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`wh-header${menuOpen ? " is-open" : ""}`}>
      <div className="wh-header__inner">
        <Link to="/" className="wh-header__brand" onClick={closeMenu}>
          <img src="/images/wlogo.png" alt="" aria-hidden="true" />
          <span className="wh-header__brand-copy">
            <strong>WhiteHeart</strong>
            <small>CHARITY</small>
          </span>
        </Link>

        <nav className="wh-header__nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? "is-active" : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="wh-header__actions">
          <Link to="/donate" className="wh-header__donate" onClick={closeMenu}>
            <FaHeart aria-hidden="true" />
            <span>Donate now</span>
          </Link>
          <button
            className="wh-header__toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="wh-mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
            <span className="visually-hidden">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="wh-header__mobile" id="wh-mobile-menu">
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "is-active" : undefined
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/donate" className="wh-header__mobile-donate" onClick={closeMenu}>
              <FaHeart aria-hidden="true" /> Donate now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
