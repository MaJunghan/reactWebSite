import React, { useRef } from 'react';
import logo from 'img/favicon.png';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = ({ navShow }) => {
  const navMenuRef = useRef([]);
  const navMenuItemList = [
    { id: 1, className: "navbar__menu__item", menuName: "Home" },
    { id: 2, className: "navbar__menu__item", menuName: "About" },
    { id: 3, className: "navbar__menu__item", menuName: "Skills" },
    { id: 4, className: "navbar__menu__item", menuName: "My work" },
    { id: 5, className: "navbar__menu__item", menuName: "Contact" },
  ]

  const onClickMenu = () => {
    console.log(navMenuRef.current)
  }

  const navMenuList = navMenuItemList.map((navMenuObj,index) => {
    return (
      <li key={navMenuObj.id} className={navMenuObj.className} ref={el => (navMenuRef.current[index] = el)} onClick={onClickMenu(index)}>
        {navMenuObj.menuName}
      </li>
    )
  })


  return (
    <nav id="navbar" className={navShow}>
      <div className="navbar__logo">
        <img className="logo" src={logo} alt="lo" />
        <a href="#"> JungHan </a>
      </div>
      <ul className="navbar__menu">
        {navMenuList}
      </ul>

      <button className="navbar__toggle-btn">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav >
  );
};
export default Navbar;
