import React from "react";

import { NavLink } from "react-router-dom";

const Logo = () => {
  const activeStyle = { color: "red" };

  return (
    <nav>
      <NavLink to="/chavali" activeStyle={activeStyle} exact>
        Chavali
      </NavLink>{" "}
    </nav>
  );
};

export default Logo;
