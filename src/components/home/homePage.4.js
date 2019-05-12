import React from "react";
import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";

import devLogo from "../../images/developer.svg";

const HomePage4 = () => {
  const activeStyle = { color: "red" };

  return (
    <>
      <nav>
        <NavLink to="/home/happiness" activeStyle={activeStyle}>
          <span className="menuButton">Satisfaction</span>
        </NavLink>
      </nav>
    </>
  );
};

export default HomePage4;
