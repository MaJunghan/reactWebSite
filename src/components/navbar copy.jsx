import React, { useRef } from 'react';
import logo from 'img/favicon.png';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = ({ navShow }) => {
  const navMenuRef = useRef([]);
  const clickNavitem = () => {
    if (navMenuRef === 1) {
      console.log(navMenuRef.current)
    }
  }


  return (
    <nav id="navbar" className={navShow}>
      <div className="navbar__logo">
        <img className="logo" src={logo} alt="lo" />
        <a href="#"> JungHan </a>
      </div>
      <ul className="navbar__menu">
        <li className="navbar__menu__item" data-link="#home" ref={el => (navMenuRef.current[0] = el)} onClick={clickNavitem}>
          Home
        </li>
        <li className="navbar__menu__item" data-link="#about" ref={el => (navMenuRef.current[1] = el)} onClick={clickNavitem}>
          About
        </li>
        <li className="navbar__menu__item" data-link="#skills" ref={el => (navMenuRef.current[2] = el)} onClick={clickNavitem}>
          Skills
        </li>
        <li className="navbar__menu__item" data-link="#work" ref={el => (navMenuRef.current[3] = el)} onClick={clickNavitem}>
          My work
        </li >
        <li className="navbar__menu__item" data-link="#contact" ref={el => (navMenuRef.current[4] = el)} onClick={clickNavitem}>
          Contact
        </li>
      </ul>

      <button className="navbar__toggle-btn">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav >
  );
};
export default Navbar;
