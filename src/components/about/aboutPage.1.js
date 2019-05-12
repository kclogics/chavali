import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const AboutPage1 = () => {
  const activeStyle = { color: "red" };
  return (
    <>
      <nav>
        <NavLink to="/about/s2" activeStyle={activeStyle}>
          <span className="menuButton">About Me</span>
        </NavLink>
      </nav>
    </>
  );
};

export default AboutPage1;
