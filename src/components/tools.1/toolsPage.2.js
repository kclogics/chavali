import React from "react";

import { Link, Route, Switch, NavLink } from "react-router-dom";
import reactLogo from "../../images/myStack/react.png";
const ToolsPage2 = () => {
  const activeStyle = { color: "red" };
  return (
    <>
      <nav>
        <NavLink to="/tools/t2" activeStyle={activeStyle}>
          <button className="menuButton">
            <img width="90px" src={reactLogo} />
          </button>
        </NavLink>
      </nav>
    </>
  );
};

export default ToolsPage2;
