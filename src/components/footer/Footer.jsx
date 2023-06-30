import React from 'react';
import './footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer>
      <div className="footer__logo" onClick={scrollToTop}></div>

      <ul className="permalinks">
        <li>
          <a href="#home" onClick={scrollToTop}>
            Home
          </a>
        </li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </footer>
  );
};

export default Footer;

