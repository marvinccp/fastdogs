import React from "react";
import "../styles/NavItems.css";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";

const NavItem = (props) => {
  console.log(props);
  return (
    <>
      <motion.li
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
      >
        <Link to={props.path}>
          <h4>{props.name}</h4>
        </Link>
      </motion.li>
    </>
  );
};

export default NavItem;
