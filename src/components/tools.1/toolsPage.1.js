import React from "react";

import { connect } from "react-redux";

import { Link, Route, Switch, NavLink } from "react-router-dom";
import jsLogo from "../../images/myStack/js.png";

const ToolsPage1 = () => {
  const activeStyle = { backgroundColor: "red" };
  return (
    <>
      <nav>
        <NavLink to="/tools/t1" activeStyle={activeStyle} exact>
          <button className="menuButton">
            <img width="50px" src={jsLogo} />
          </button>
        </NavLink>
      </nav>
    </>
  );
};

export default ToolsPage1;
