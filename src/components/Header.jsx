import React, { useState } from "react";
import NavItem from "./NavItem";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);

  const propsItems = [
    { name: "Home", path: "/" },
    { name: "Hot Dogs", path: "/HotDogs" },
    { name: "Burguers", path: "/Burguers" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <header>
      <section className="header-section">
        <Link to={"/"}>
          <div className="logo-container">
            <img src="./assets/images/fastdogs.png" alt="fast-dogs-logo" />
            <h2 className="logo-app title">FastDogs</h2>
          </div>
        </Link>
        <div onClick={() => setClick(!click)} className="hamburguer-item">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className={`nav-bar  ${click && "active"}`}>
          <ul>
            {
            
            React.Children.toArray(propsItems.map((item) => (
              <NavItem  {...item} />
            )))
            
            }
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
