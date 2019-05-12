import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const AboutPage2 = () => {
  const activeStyle = { color: "red" };
  return (
    <>
      <nav>
        <NavLink to="/about/social" activeStyle={activeStyle} exact>
          <span className="menuButton"> Social</span>
        </NavLink>
      </nav>
    </>
  );
};

export default AboutPage2;
