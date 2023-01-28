import React, { useState } from "react";
import NavItem from "./NavItem";
import '../styles/Header.css'





const Header = () => {

const [click, setClick] = useState(false)


  const propsItems = {
    home: "Home",
    contact: "Contact",
    about: "About",
    woman: "Woman",
    man: "Man",
  };

  return (
    <header>
      <section className="header-section">
        <div className="logo-app title">SOUL</div>
        <div onClick={() => setClick(!click)} className="hamburguer-item">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className={`nav-bar  ${click && "active"}`}>
          <ul>
            <NavItem click={click} name={propsItems.home} />
            <NavItem click={click} name={propsItems.contact} />
            <NavItem click={click} name={propsItems.about} />
            <NavItem click={click} name={propsItems.woman} />
            <NavItem click={click} name={propsItems.man} />
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
