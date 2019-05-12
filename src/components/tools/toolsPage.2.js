import React from "react";

import { connect } from "react-redux";

import { Link, Route, Switch, NavLink } from "react-router-dom";

import CoursesPage from "./CoursesPage";
import * as courseActions from "../../redux/actions/courseActions";

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
