import React from "react";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Heca1 = () => {
  const activeStyle = { color: "red" };

  return (
    <>
      <nav>
        <NavLink to="/heca/hire" activeStyle={activeStyle} exact>
          {/* <span className="menuButton">Hire me</span> */}

          <span className="menuButton">
            <h1 className="menuButtonLogo">H</h1>
          </span>
        </NavLink>
      </nav>
    </>
  );
};

export default Heca1;
