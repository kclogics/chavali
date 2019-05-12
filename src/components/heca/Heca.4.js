import React from "react";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Heca4 = () => {
  const activeStyle = { color: "red" };

  return (
    <>
      <nav>
        <NavLink to="/heca/affiliate" activeStyle={activeStyle}>
          <span className="menuButton"> Affliate</span>
        </NavLink>
      </nav>
    </>
  );
};

export default Heca4;
