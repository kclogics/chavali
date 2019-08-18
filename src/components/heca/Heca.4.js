import React from "react";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Heca4 = () => {
  const activeStyle = { color: "red" };

  return (
    <>
      <nav>
        <NavLink to="/heca/affiliate" activeStyle={activeStyle}>
          {/* <span className="menuButton"> Affliate</span> */}
          <span className="menuButton">
            {" "}
            <h1 className="menuButtonLogo">A</h1>
          </span>
        </NavLink>
      </nav>
    </>
  );
};

export default Heca4;
