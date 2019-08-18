import React from "react";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Face1 = () => {
  const activeStyle = { color: "red" };

  return (
    <>
      <nav>
        <NavLink to="/face/f1" activeStyle={activeStyle} exact>
          {/* <span className="menuButton">Fun</span> */}
          <span className="menuButton">
            <h1 className="menuButtonLogo">F</h1>
          </span>
        </NavLink>
      </nav>
    </>
  );
};

export default Face1;
