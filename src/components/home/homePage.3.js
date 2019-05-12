import React from "react";
import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";

import devLogo from "../../images/developer.svg";

const HomePage3 = () => {
  const activeStyle = { color: "red" };

  return (
    <>
      <nav>
        <NavLink to="/home/brand" activeStyle={activeStyle}>
          <span className="menuButton">Brand</span>
        </NavLink>
      </nav>
    </>
  );
};

export default HomePage3;
