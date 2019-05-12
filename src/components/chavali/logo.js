import React from "react";

import { NavLink } from "react-router-dom";

import LogoChavali from "../../images/logo.svg";

const Logo = () => {
  const activeStyle = { color: "red" };

  return (
    <nav>
      <span className="menuButton">
        {" "}
        <NavLink to="/chavali" activeStyle={activeStyle} exact>
          {/* <img width="100px" src={LogoChavali} alt="logo" /> */}
          <svg
            width="70%"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 142.73 147.64"
          >
            <title>logo</title>
            <g id="Layer_6" data-name="Layer 6">
              <polygon
                points="122.42 24.41 140.03 94.54 131.73 100.67 131.23 125.97 97.48 135.75 63.31 135.12 63.31 18.87 119.61 17.98 122.42 24.41"
                fill="#333"
              />
              <path
                d="M77.66,165h78.28c-42.16-30.08-72.91-58-78-81.31Z"
                transform="translate(-13.74 -17.36)"
              />
              <path
                d="M76.52,32.37c21.93-2.08,49.91-1.5,80,0l-80,66.72V32.37"
                transform="translate(-13.74 -17.36)"
              />
            </g>
            <g id="Layer_4" data-name="Layer 4">
              <path
                d="M65.45,42.13c-25.05,4.07-35.58,18.78-38,39.46-10-6.45-15.72-15.26-13.09-28.76C19,36.21,28.14,26.37,44.77,26.89l-7-9.42c13.41-1,23.93,5.38,32.48,17.7Z"
                transform="translate(-13.74 -17.36)"
                fill="#ec2024"
              />
            </g>
            <g id="Layer_1" data-name="Layer 1">
              <path
                d="M27,108.29"
                transform="translate(-13.74 -17.36)"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
              />
              <path
                d="M78.14,165H52.21V69.53c-1.05-20.47,3.22-35.3,25.93-37.33Z"
                transform="translate(-13.74 -17.36)"
              />
              <path
                d="M67.29,146.39"
                transform="translate(-13.74 -17.36)"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
              />
              <path
                d="M67.29,146.39"
                transform="translate(-13.74 -17.36)"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
              />
              <path
                d="M27,108.29"
                transform="translate(-13.74 -17.36)"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
              />
            </g>
            <g id="top_daig">
              <path
                d="M156,32.17c-3,3.09-6.22,6-9.32,9l-9.55,8.74c-3.16,2.94-6.45,5.73-9.67,8.6L117.66,67c-6.6,5.55-13.2,11.1-20,16.45l-10.17,8c-3.47,2.58-6.86,5.25-10.4,7.75L77,99l39.38-33.57L155.87,32Z"
                transform="translate(-13.74 -17.36)"
                fill="#eb2027"
              />
            </g>
            <g id="daigonal_half">
              <path
                d="M103.41,122a122.23,122.23,0,0,1-11.65-12.53,83.26,83.26,0,0,1-5.17-6.83,71.11,71.11,0,0,1-4.31-7.41l.09,0c1.74,2.27,3.35,4.61,5,6.89s3.26,4.64,5,6.91a143.86,143.86,0,0,0,11.1,13Z"
                transform="translate(-13.74 -17.36)"
                fill="#eb2027"
              />
            </g>
            <g id="daigonal">
              <path
                d="M154.9,164.78c-3.51-2.39-6.87-4.95-10.31-7.42l-10.09-7.7c-3.38-2.54-6.64-5.23-10-7.84l-9.84-8c-6.49-5.41-13-10.82-19.31-16.44L85.9,109c-3.08-2.9-6.23-5.72-9.25-8.7l.13-.16L116,132.28,155,164.63Z"
                transform="translate(-13.74 -17.36)"
                fill="#eb2027"
              />
            </g>
            <g id="vertical">
              <path
                d="M76.57,57l.42,10,.25,10c.14,6.66.13,13.32.2,20s0,13.32-.18,20l-.23,10-.41,10h-.1l-.08-40,0-40Z"
                transform="translate(-13.74 -17.36)"
                fill="#eb2027"
              />
            </g>
          </svg>
        </NavLink>{" "}
      </span>
    </nav>
  );
};

export default Logo;
