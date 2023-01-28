import React, { useState } from "react";
import NavItem from "./NavItem";
import "../styles/Header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  const propsItems = {
    home: "Home",
    contact: "Contact",
    menu: "Hot-Dogs",
    menu2: "Hamburguers",
    drinks: "Drinks",
  };

  return (
    <header>
      <section className="header-section">
        <div className="logo-container">
          <img src="./assets/images/fastdogs.png" alt="fast-dogs-logo" />
          <div className="logo-app title">Fast Dogs</div>
        </div>
        <div onClick={() => setClick(!click)} className="hamburguer-item">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className={`nav-bar  ${click && "active"}`}>
          <ul>
            <NavItem click={click} name={propsItems.home} />
            <NavItem click={click} name={propsItems.menu} />
            <NavItem click={click} name={propsItems.menu2} />
            <NavItem click={click} name={propsItems.drinks} />
            <NavItem click={click} name={propsItems.contact} />
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
