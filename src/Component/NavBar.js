import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const NavLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bolder" : "normal",
    };
  };
  return (
    <nav>
      <NavLink end to="/" style={NavLinkStyles}>
        Home
      </NavLink>
      <NavLink to="/about" style={NavLinkStyles}>
        About
      </NavLink>
    </nav>
  );
};

export default NavBar;
