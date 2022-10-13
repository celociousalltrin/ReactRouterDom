import React from "react";
import { NavLink } from "react-router-dom";
import { UseUserContext } from "../Utilities/Context";

const NavBar = () => {
  const NavLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bolder" : "normal",
    };
  };

  const {person} = UseUserContext()

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
      <NavLink to="/profile" style={NavLinkStyles}>
       Profile
      </NavLink>
      
      {person.isGuest && (
            <NavLink to="/signIn" style={NavLinkStyles}>
            SignIn
           </NavLink>
      )}

    </nav>
  );
};

export default NavBar;
