import React from "react";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Face3 = () => {
  const activeStyle = { color: "red" };

  return (
    <>
      <nav>
        <NavLink to="/face/f3" activeStyle={activeStyle}>
          <span className="menuButton"> challenges</span>
        </NavLink>
      </nav>
    </>
  );
};

export default Face3;
