import React from "react";
import "../styles/NavItems.css";

const NavItem = ({ name }) => {
  return (
    <>
      <li>
        <h4>{name}</h4>
      </li>
    </>
  );
};

export default NavItem;
