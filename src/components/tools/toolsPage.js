import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const ToolsPage = () => {
  const activeStyle = { color: "red" };
  return (
    <>
      <h1>Tools</h1>

      <nav>
        <NavLink to="/tools/t1" activeStyle={activeStyle} exact>
          Javascript
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/tools/t2" activeStyle={activeStyle}>
          React js
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/tools/t3" activeStyle={activeStyle}>
          Adobe
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/tools/t4" activeStyle={activeStyle}>
          AWS
        </NavLink>
      </nav>
    </>
  );
};

export default ToolsPage;
