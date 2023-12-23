import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    setMenuOpen(false); // Close the menu when scrolling to top
    scroll.scrollToTop();
  };

  return (
    <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
      <div className="logo" onClick={scrollToTop}>
        <img src="/assets/logoEB.png" alt="logo" />
        Eduxcelerate
      </div>
      <div className="menu-button" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
