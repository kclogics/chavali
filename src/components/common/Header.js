import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "red" };

  return (
    <nav>
      <NavLink to="/home" activeStyle={activeStyle} exact>
        Home
      </NavLink>{" "}
      {"|"}{" "}
      <NavLink to="/tools" activeStyle={activeStyle}>
        Tools
      </NavLink>{" "}
      {"|"}{" "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
