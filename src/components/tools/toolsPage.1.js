import React from "react";

import { connect } from "react-redux";

import { Link, Route, Switch, NavLink } from "react-router-dom";

const ToolsPage1 = () => {
  const activeStyle = { color: "red" };
  return (
    <>
      <nav>
        <NavLink to="/tools/t1" activeStyle={activeStyle} exact>
          <span className="menuButton"> Javascript</span>
        </NavLink>
      </nav>
    </>
  );
};

export default ToolsPage1;
