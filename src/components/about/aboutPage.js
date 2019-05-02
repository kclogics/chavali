import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const AboutPage = () => {
  const activeStyle = { color: "red" };
  return (
    <>
      <h1>About</h1>

      <nav>
        <NavLink to="/about/social" activeStyle={activeStyle} exact>
          Social
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/about/s2" activeStyle={activeStyle}>
          About Me
        </NavLink>
      </nav>
    </>
  );
};

export default AboutPage;
