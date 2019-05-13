import React from "react";

import { Link, Route, Switch, NavLink } from "react-router-dom";

const ToolsPage3 = () => {
  const activeStyle = { color: "red" };
  return (
    <>
      <nav>
        <NavLink to="/tools/t3" activeStyle={activeStyle}>
          <span className="menuButton"> Adobe</span>
        </NavLink>
      </nav>
    </>
  );
};

export default ToolsPage3;
