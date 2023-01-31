import React, { useState } from "react";
import NavItem from "./NavItem";
import "../styles/Header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  const propsItems = [
    { name: "Home", path: "/" },
    { name: "Hot Dogs", path: "/HotDogs" },
    { name: "Burguers", path: "/Burguers" },
    { name: "Contact", path: "/mm" },
  ];

  return (
    <header>
      <section className="header-section">
        <div className="logo-container">
          <img src="./assets/images/fastdogs.png" alt="fast-dogs-logo" />
          <h2 className="logo-app title">FastDogs</h2>
        </div>
        <div onClick={() => setClick(!click)} className="hamburguer-item">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className={`nav-bar  ${click && "active"}`}>
          <ul>
            {propsItems.map((item) => (
              <NavItem key={item.name} {...item} />
            ))}
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
