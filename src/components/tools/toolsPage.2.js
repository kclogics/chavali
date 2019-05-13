import React from "react";

import { Link, Route, Switch, NavLink } from "react-router-dom";

const ToolsPage2 = () => {
  const activeStyle = { color: "red" };
  return (
    <>
      <nav>
        <NavLink to="/tools/t2" activeStyle={activeStyle}>
          <span className="menuButton">React js</span>
        </NavLink>
      </nav>
    </>
  );
};

export default ToolsPage2;
