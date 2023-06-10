import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <b style={{ color: "#b2ff33" }}>•</b>SANTHOSH KUMAR PALANI
            <b style={{ color: "#b2ff33" }}>•</b>
          </Link>
        </div>

        <div
          className={`navbar-toggler ${isOpen ? "open" : ""}`}
          onClick={handleToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={handleToggle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleToggle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={handleToggle}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={handleToggle}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contacts" onClick={handleToggle}>
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
