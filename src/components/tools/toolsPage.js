import React from "react";

import { Link, Route, Switch, NavLink } from "react-router-dom";

const ToolsPage = () => {
  const activeStyle = { color: "red" };
  return (
    <>
      <nav>
        <NavLink to="/tools/" activeStyle={activeStyle} exact>
          <h1>Tools</h1>
        </NavLink>
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
