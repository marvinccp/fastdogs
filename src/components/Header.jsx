import React from "react";
import NavItem from "./NavItem";
import '../styles/Header.css'
const Header = () => {
  const propsItems = {
    home: "Home",
    contact: "Contact",
    about: "About",
    woman: "Woman",
    man: "Man",
  };

  return (
    <header className="soul-header-container">
      <nav className="soul-nav-container">
        <h2>SOUL</h2>
        <ul className="nav-items-container">
          <NavItem name={propsItems.home} />
          <NavItem name={propsItems.contact} />
          <NavItem name={propsItems.about} />
          <NavItem name={propsItems.woman} />
          <NavItem name={propsItems.man} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
