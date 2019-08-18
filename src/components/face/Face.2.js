import React from "react";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Face2 = () => {
  const activeStyle = { color: "red" };

  return (
    <>
      <nav>
        <NavLink to="/face/f2" activeStyle={activeStyle}>
          {/* <span className="menuButton"> Answers</span> */}
          <span className="menuButton">
            {" "}
            <h1 className="menuButtonLogo">A</h1>
          </span>
        </NavLink>
      </nav>
    </>
  );
};

export default Face2;
