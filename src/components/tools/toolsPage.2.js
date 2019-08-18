import React from "react";

import { Link, Route, Switch, NavLink } from "react-router-dom";
import reactLogo from "../../images/myStack/react.png";
const ToolsPage2 = () => {
  const activeStyle = { color: "red" };
  return (
    <>
      <nav>
        <NavLink to="/tools/t2" activeStyle={activeStyle}>
          <button className="menuButton">
            {/* <img width="90px" src={reactLogo} /> */}
            <svg
              className="menuButtonLogo"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320.45 290.12"
            >
              <title>reactjs</title>
              <ellipse
                cx="377.87"
                cy="667.72"
                rx="72.79"
                ry="150.74"
                transform="translate(-500.88 -244.27) rotate(-30)"
                fill="none"
                stroke="#000"
                stroke-miterlimit="10"
                stroke-width="19"
              />
              <ellipse
                cx="377.87"
                cy="667.72"
                rx="150.74"
                ry="72.79"
                transform="translate(-606.97 138.44) rotate(-60)"
                fill="none"
                stroke="#000"
                stroke-miterlimit="10"
                stroke-width="19"
              />
              <ellipse
                cx="377.87"
                cy="667.72"
                rx="72.79"
                ry="150.74"
                transform="translate(-513.99 511.22) rotate(-89)"
                fill="none"
                stroke="#000"
                stroke-miterlimit="10"
                stroke-width="19"
              />
              <circle cx="160.85" cy="145.84" r="40" />
            </svg>
          </button>
        </NavLink>
      </nav>
    </>
  );
};

export default ToolsPage2;
