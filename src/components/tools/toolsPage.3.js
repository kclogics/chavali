import React from "react";

import { Link, Route, Switch, NavLink } from "react-router-dom";
import adobeLogo from "../../images/myStack/adobe.png";
const ToolsPage3 = () => {
  const activeStyle = { color: "red" };
  return (
    <>
      <nav>
        <NavLink to="/tools/t3" activeStyle={activeStyle}>
          <button className="menuButton">
            {" "}
            {/* <img width="90px" src={adobeLogo} /> */}
            <svg
              className="menuButtonLogo"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 274 200"
            >
              <title>adobe</title>
              <circle cx="174" cy="100" r="100" fill="#1a1a1a" />
              <circle
                cx="170.5"
                cy="103.5"
                r="61.5"
                fill="none"
                stroke="#fff"
                stroke-miterlimit="10"
                stroke-width="14"
              />
              <circle cx="85" cy="115" r="85" fill="#1a1a1a" />
              <path
                d="M389.32,598c-24.32-1-52.91-22.52-76.71-40.88.26-4.29,1.84-8.25,5.75-10.89,29.25,19.51,55.64,34.79,77.5,40.34Z"
                transform="translate(-231 -428)"
                fill="#fff"
              />
              <path
                d="M307.11,499.93c24.24-2.18,55.39,15.46,81.37,30.58.3,4.28-.75,8.41-4.28,11.54-31.54-15.54-59.69-27.27-82.09-29.93Z"
                transform="translate(-231 -428)"
                fill="#fff"
              />
              <rect
                x="76"
                y="182"
                width="116"
                height="18"
                rx="6"
                fill="#1a1a1a"
              />
              <path
                d="M309.7,506.41c-24.68,1.32-42.61,22.1-41.07,43.29,1.26,17.3,15.36,32.77,34.59,36.45"
                transform="translate(-231 -428)"
                fill="none"
                stroke="#fff"
                stroke-miterlimit="10"
                stroke-width="14"
              />
            </svg>
          </button>
        </NavLink>
      </nav>
    </>
  );
};

export default ToolsPage3;
