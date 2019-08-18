import React from "react";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Heca2 = () => {
  const activeStyle = { color: "red" };

  return (
    <>
      <nav>
        <NavLink to="/heca/earn" activeStyle={activeStyle}>
          {/* <span className="menuButton">Earn</span> */}
          <span className="menuButton">
            <h1 className="menuButtonLogo">E</h1>
          </span>
        </NavLink>
      </nav>
    </>
  );
};

export default Heca2;
