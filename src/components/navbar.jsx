import React, { useState } from 'react';
import logo from 'img/favicon.png';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = ({ navShow }) => {
  const [barsToggle, setBarsToggle] = useState(false);

  const onClickBars = () => {
    setBarsToggle(!barsToggle);
  }
  const topHomeInterval = () => {
    setBarsToggle(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const topAboutInterval = () => {
    setBarsToggle(false);
    window.scrollTo({ top: 600, behavior: 'smooth' });
  }
  const topSkilInterval = () => {
    setBarsToggle(false);
    window.scrollTo({ top: 1300, behavior: 'smooth' });
  }
  const topWorkInterval = () => {
    setBarsToggle(false);
    window.scrollTo({ top: 2000, behavior: 'smooth' });
  }
  const topContactInterval = () => {
    setBarsToggle(false);
    window.scrollTo({ top: 2900, behavior: 'smooth' });
  }

  return (
    <nav id="navbar" className={navShow} >
      <div className="navbar__logo">
        <img className="logo" src={logo} alt="lo" />
        <a href="#"> JungHan </a>
      </div>
      <ul className={barsToggle ? "navbar__menu open" : "navbar__menu"}>
        <li className="navbar__menu__item" onClick={topHomeInterval}>Home</li>
        <li className="navbar__menu__item" onClick={topAboutInterval}>About</li>
        <li className="navbar__menu__item" onClick={topSkilInterval}>Skills</li>
        <li className="navbar__menu__item" onClick={topWorkInterval}>My work</li>
        <li className="navbar__menu__item" onClick={topContactInterval}>Contact</li>
      </ul>
      <button className="navbar__toggle-btn" onClick={onClickBars}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav >
  );
};
export default Navbar;
