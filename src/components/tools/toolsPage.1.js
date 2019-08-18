import React from "react";

import { connect } from "react-redux";

import { Link, Route, Switch, NavLink } from "react-router-dom";
import jsLogo from "../../images/myStack/js.png";

const ToolsPage1 = () => {
  const activeStyle = { backgroundColor: "red" };
  return (
    <>
      <nav>
        <NavLink to="/tools/t1" activeStyle={activeStyle} exact>
          <button className="menuButton">
            {/* <img width="50px" src={jsLogo} /> */}
            <svg
              className="menuButtonLogo"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 446.81 315.09"
            >
              <title>javascript</title>
              <g opacity="0.98">
                <path
                  d="M326.06,740.74q0,90.62-80.08,90.62-36.53,0-56.64-21.78t-20.51-62.79l34-8q.39,29.7,11.14,44.05t31.83,14.35q14.85,0,24.12-5.56t13.77-18.27q4.5-12.69,4.5-34.57V540.15h37.89Z"
                  transform="translate(-159.26 -525.77)"
                  stroke="#000"
                  stroke-miterlimit="10"
                  stroke-width="19"
                />
                <path
                  d="M550.86,625.89q-6.25-31.25-22.75-44.72t-44.83-13.48q-18.55,0-32.81,5.47T428.2,588.69a36.35,36.35,0,0,0-8,23.33q0,13.68,7.22,21.88t22.17,13.67q14.94,5.48,42.87,11.53,38.48,8.4,61,19.33t32.81,27.05q10.26,16.11,10.25,40.14a75.63,75.63,0,0,1-13.38,43.75q-13.38,19.53-37,30.76t-53.32,11.23q-51.36,0-82.13-24t-37.4-70.12l37.31-8.79q3.9,35.16,24.31,52.83t56.35,17.68a95.88,95.88,0,0,0,34.57-6.06q15.82-6,25.1-16.89a36.47,36.47,0,0,0,9.28-24.32q0-18-8.79-28t-26.18-16.12q-14.44-5.07-42-11.52-16.41-3.71-23-5.66-29.89-8-46.59-19.34t-23.24-25.68q-6.54-14.36-6.54-34.09a64,64,0,0,1,12.79-38.86Q409.46,555,432,545.13t50.49-9.86q29.49,0,52.15,9.76t36.43,28.32q13.75,18.57,17.09,44.34l-36.53,8.2Z"
                  transform="translate(-159.26 -525.77)"
                  stroke="#000"
                  stroke-miterlimit="10"
                  stroke-width="19"
                />
              </g>
            </svg>
          </button>
        </NavLink>
      </nav>
    </>
  );
};

export default ToolsPage1;
