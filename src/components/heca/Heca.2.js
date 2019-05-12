import React from "react";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Heca2 = () => {
  const activeStyle = { color: "red" };

  return (
    <>
      <nav>
        <NavLink to="/heca/earn" activeStyle={activeStyle}>
          <span className="menuButton">Earn</span>
        </NavLink>
      </nav>
    </>
  );
};

export default Heca2;
