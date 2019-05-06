import React from "react";

import { connect } from "react-redux";

import { Link, Route, Switch, NavLink } from "react-router-dom";

import CoursesPage from "./CoursesPage";
import * as courseActions from "../../redux/actions/courseActions";

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

      <Switch>
        <Route exact path="/tools" component={CoursesPage} />
      </Switch>
    </>
  );
};

export default ToolsPage;
