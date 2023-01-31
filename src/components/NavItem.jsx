import React, { useState } from "react";
import "../styles/NavItems.css";
import { Link } from "react-router-dom";

const NavItem = (props) => {
  console.log(props);
  return (
    <>
      <li>
        <Link to={props.path}>
          <h4>{props.name}</h4>
        </Link>
      </li>
    </>
  );
};

export default NavItem;
