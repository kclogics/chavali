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
        <button style={Styles.emoStyle}>🏠</button>
      </NavLink>
      <NavLink to="/tools" activeStyle={activeStyle}>
        <button style={Styles.emoStyle}>⚒</button>
      </NavLink>
      <NavLink to="/about" activeStyle={activeStyle}>
        <button style={Styles.emoStyle}>⛹</button>
      </NavLink>
      <NavLink to="/heca" activeStyle={activeStyle}>
        <button style={Styles.emoStyle}>🦄</button>
      </NavLink>
      <NavLink to="/face" activeStyle={activeStyle}>
        <button style={Styles.emoStyle}>⚔</button>
      </NavLink>
    </nav>
  );
};

export default Header;
