import React from "react";

import { Link, Route, Switch, NavLink } from "react-router-dom";

const ToolsPage4 = () => {
  const activeStyle = { color: "red" };
  return (
    <>
      <nav>
        <NavLink to="/tools/t4" activeStyle={activeStyle}>
          <span className="menuButton"> AWS</span>
        </NavLink>
      </nav>
    </>
  );
};

export default ToolsPage4;
