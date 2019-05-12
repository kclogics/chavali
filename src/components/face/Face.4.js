import React from "react";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Face4 = () => {
  const activeStyle = { color: "red" };

  return (
    <>
      <nav>
        <NavLink to="/face/f4" activeStyle={activeStyle}>
          <span className="menuButton"> Enlighten</span>
        </NavLink>
      </nav>
    </>
  );
};

export default Face4;
