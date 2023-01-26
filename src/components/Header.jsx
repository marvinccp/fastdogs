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
      <div><h2>SOUL</h2></div>
      <div class="hamburguer-item">
        <div class="line">1</div>
        <div class="line">2</div>
        <div class="line">3</div>
      </div>
      <nav className="soul-nav-container">
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
