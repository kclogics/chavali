import React from "react";
import { NavLink } from "react-router-dom";

const ToolsBody = () => {
  const activeStyle = { color: "red" };

  return (
    <nav>
      <NavLink to="/tools/t1" activeStyle={activeStyle} exact>
        javascript
      </NavLink>{" "}
      {"|"}{" "}
      <NavLink to="/t2" activeStyle={activeStyle}>
        React js
      </NavLink>{" "}
      {"|"}{" "}
      <NavLink to="/t3" activeStyle={activeStyle}>
        Adobe
      </NavLink>
    </nav>
  );
};

export default ToolsBody;
