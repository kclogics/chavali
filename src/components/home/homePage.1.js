import React from "react";
import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";

import devLogo from "../../images/developer.svg";

const HomePage1 = () => {
  const activeStyle = { color: "red" };

  return (
    <>
      <nav>
        <NavLink to="/home/developer" activeStyle={activeStyle}>
          <span className="menuButton">developer</span>
        </NavLink>
      </nav>
    </>
  );
};

export default HomePage1;
