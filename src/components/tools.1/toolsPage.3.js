import React from "react";

import { Link, Route, Switch, NavLink } from "react-router-dom";
import adobeLogo from "../../images/myStack/adobe.png";
const ToolsPage3 = () => {
  const activeStyle = { color: "red" };
  return (
    <>
      <nav>
        <NavLink to="/tools/t3" activeStyle={activeStyle}>
          <button className="menuButton">
            {" "}
            <img width="90px" src={adobeLogo} />
          </button>
        </NavLink>
      </nav>
    </>
  );
};

export default ToolsPage3;
