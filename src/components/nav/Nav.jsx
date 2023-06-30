import React from 'react';
import './nav.css';
// import { AiOutlineHome } from 'react-icons/ai'; // Commented out the Home button
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  const handleNavClick = (navId) => {
    setActiveNav(navId);
  };

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  return (
    <nav>
      {/* causing deployment failure. temp removing the button so proj can be submitted. will re-eval
          <a
        href="#"
        onClick={() => {
          handleNavClick('#');
          scrollToTop();
        }}
        className={activeNav === '#' ? 'active' : ''}
      >
        <span>Home</span>
        <AiOutlineHome aria-hidden="true" />
      </a> */}
      <a
        href="#about"
        onClick={() => handleNavClick('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <span>About</span>
        <AiOutlineUser aria-hidden="true" />
      </a>
      <a
        href="#experience"
        onClick={() => handleNavClick('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <span>Experience</span>
        <BiBook aria-hidden="true" />
      </a>
      <a
        href="#services"
        onClick={() => handleNavClick('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <span>Services</span>
        <RiServiceLine aria-hidden="true" />
      </a>
      <a
        href="#contact"
        onClick={() => handleNavClick('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <span>Contact</span>
        <BiMessageSquareDetail aria-hidden="true" />
      </a>
    </nav>
  );
};

export default Nav;
