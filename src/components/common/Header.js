import React from "react";
import { NavLink, Switch } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "red" };

  var Styles = {
    emoStyle: {
      fontSize: "200%",
      paddingLeft: "6%",
      textDecoration: "none"
    }
  };

  return (
    <nav>
      <NavLink to="/home" activeStyle={activeStyle}>
        <span style={Styles.emoStyle}>🏠</span>
      </NavLink>
      <NavLink to="/tools" activeStyle={activeStyle}>
        <span style={Styles.emoStyle}>⚒</span>
      </NavLink>
      <NavLink to="/about" activeStyle={activeStyle}>
        <span style={Styles.emoStyle}>⛹</span>
      </NavLink>
      <NavLink to="/heca" activeStyle={activeStyle}>
        <span style={Styles.emoStyle}>🦄</span>
      </NavLink>
      <NavLink to="/face" activeStyle={activeStyle}>
        <span style={Styles.emoStyle}>⚔</span>
      </NavLink>
    </nav>
  );
};

export default Header;
