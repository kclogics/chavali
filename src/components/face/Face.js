import React from "react";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Face = () => {
  const activeStyle = { color: "red" };

  return (
    <>
      <h1>FACE</h1>

      <nav>
        <NavLink to="/face/f1" activeStyle={activeStyle} exact>
          Fun
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/face/f2" activeStyle={activeStyle}>
          Answers
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/face/f3" activeStyle={activeStyle}>
          challenges
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/face/f4" activeStyle={activeStyle}>
          Enlighten
        </NavLink>
      </nav>
    </>
  );
};

export default Face;
