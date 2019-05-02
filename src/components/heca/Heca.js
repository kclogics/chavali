import React from "react";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Heca = () => {
  const activeStyle = { color: "red" };

  return (
    <>
      <h1>HECA</h1>

      <nav>
        <NavLink to="/heca/hire" activeStyle={activeStyle} exact>
          Hire me
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/heca/earn" activeStyle={activeStyle}>
          Earn
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/heca/collabrate" activeStyle={activeStyle}>
          Collabrate
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/heca/affiliate" activeStyle={activeStyle}>
          Affliate
        </NavLink>
      </nav>
    </>
  );
};

export default Heca;
