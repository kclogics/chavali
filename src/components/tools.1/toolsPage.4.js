import React from "react";

import { Link, Route, Switch, NavLink } from "react-router-dom";
import awsLogo from "../../images/myStack/aws.png";
const ToolsPage4 = () => {
  const activeStyle = { color: "red" };
  return (
    <>
      <nav>
        <NavLink to="/tools/t4" activeStyle={activeStyle}>
          <button className="menuButton">
            {" "}
            <img width="90px" src={awsLogo} />
          </button>
        </NavLink>
      </nav>
    </>
  );
};

export default ToolsPage4;
