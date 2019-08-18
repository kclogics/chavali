import React from "react";

import { Link, Route, Switch, NavLink } from "react-router-dom";
import awsLogo from "../../images/myStack/aws.png";
const ToolsPage4 = () => {
  const activeStyle = { color: "red" };
  return (
    <>
      <nav>
        <NavLink to="/tools/t4" activeStyle={activeStyle}>
          <button className="menuButton">
            {" "}
            {/* <img width="90px" src={awsLogo} /> */}
            <svg
              className="menuButtonLogo"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 336.49 233.31"
            >
              <title>aws</title>
              <text
                transform="translate(0 131.98)"
                font-size="150"
                font-family="BIZ-UDPGothic, BIZ UDPGothic"
              >
                aws
              </text>
              <path
                d="M224.53,527l2.38.91,2.32,1,4.62,1.9c3.09,1.23,6.17,2.44,9.18,3.71l9.12,3.54,9.08,3.35a341,341,0,0,0,36.24,10.9,273.82,273.82,0,0,0,72.83,7.59c24.38-.72,48.85-4.67,73.38-10.77,12.29-3,24.58-6.56,37-10.36l4.68-1.39c1.55-.5,3.08-1,4.65-1.51,3.13-1,6.27-1.94,9.4-3,6.29-2,12.62-4,19.13-5.91l.92,1.54c-11.25,6.82-22.78,13.2-34.61,19a348.59,348.59,0,0,1-36.49,15.2c-24.88,8.7-51,14.25-77.5,15.14a220.74,220.74,0,0,1-78-11.9,237,237,0,0,1-36.21-16,282.61,282.61,0,0,1-33.15-21.51Z"
                transform="translate(-214.71 -344.59)"
              />
              <path
                d="M479.59,511.29c5.47-1.46,11-2.58,16.48-3.6s11-1.91,16.56-2.69,11.06-1.47,16.61-2,11.11-1.08,16.67-1.53l5.3-.42-1.07,5.1-1.34,6.41-1.43,6.41c-1,4.26-2,8.51-3.13,12.75s-2.28,8.46-3.55,12.67q-.95,3.17-2,6.3c-.69,2.09-1.4,4.18-2.19,6.26,0-2.22.12-4.43.25-6.63s.26-4.4.44-6.59q.54-6.57,1.32-13.09c.51-4.36,1.12-8.69,1.75-13l1-6.48,1.09-6.46,4.24,4.67c-5.56.54-11.11,1.05-16.68,1.43s-11.13.69-16.71.91-11.18.31-16.78.28S485.23,511.75,479.59,511.29Z"
                transform="translate(-214.71 -344.59)"
              />
            </svg>
          </button>
        </NavLink>
      </nav>
    </>
  );
};

export default ToolsPage4;
