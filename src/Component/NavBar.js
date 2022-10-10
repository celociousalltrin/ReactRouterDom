import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const NavLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bolder" : "normal",
    };
  };
  return (
    <nav className="primary__Nav">
      <NavLink end to="/" style={NavLinkStyles}>
        Home
      </NavLink>
      <NavLink to="/about" style={NavLinkStyles}>
        About
      </NavLink>
      <NavLink to="/product" style={NavLinkStyles}>
        Product
      </NavLink>
      <NavLink to="/users" style={NavLinkStyles}>
       User
      </NavLink>
    </nav>
  );
};

export default NavBar;
