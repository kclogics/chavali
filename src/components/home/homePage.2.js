import React from "react";
import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";

import devLogo from "../../images/developer.svg";

const HomePage2 = () => {
  const activeStyle = { color: "red" };

  return (
    <>
      <nav>
        <NavLink to="/home/designer" activeStyle={activeStyle}>
          <span className="menuButton">Designer</span>
        </NavLink>
      </nav>
    </>
  );
};

export default HomePage2;
