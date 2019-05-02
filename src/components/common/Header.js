import React from "react";
import { NavLink, Switch } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "red" };

  return (
    <nav>
      <NavLink to="/home" activeStyle={activeStyle}>
        Home
      </NavLink>{" "}
      {"|"}{" "}
      <NavLink to="/tools" activeStyle={activeStyle}>
        Tools
      </NavLink>{" "}
      {"|"}{" "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>{" "}
      {"|"}{" "}
      <NavLink to="/heca" activeStyle={activeStyle}>
        Heca
      </NavLink>{" "}
      {"|"}{" "}
      <NavLink to="/face" activeStyle={activeStyle}>
        Face
      </NavLink>
    </nav>
  );
};

export default Header;
