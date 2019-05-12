import React from "react";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Heca3 = () => {
  const activeStyle = { color: "red" };

  return (
    <>
      <nav>
        <NavLink to="/heca/collabrate" activeStyle={activeStyle}>
          <span className="menuButton"> Collabrate</span>
        </NavLink>
      </nav>
    </>
  );
};

export default Heca3;
