import React from "react";
import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";

import devLogo from "../../images/developer.svg";

const HomePage2 = () => {
  const activeStyle = { color: "red" };
  const fillColor = "#D3D3D3";
  return (
    <>
      <nav>
        <NavLink to="/home/designer" activeStyle={activeStyle}>
          <span className="menuButton">
            <svg
              width="25px"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 227.39 322.54"
            >
              <title>designer_svg</title>
              <path
                d="M450,661.66a58.5,58.5,0,0,0,37.46-24.43c6.07-23.18,7-42.51,1.62-57l-14.65-19.54,4.88-6.52s17.92,17.92,19.55,24.43,8.14,37.46-1.63,60.26c-14.63,19.25-30.09,33.79-47.23,32.58Z"
                transform="translate(-275.12 -513.46)"
                fill={fillColor}
              />
              <path
                d="M446.75,546l11.4,6.51,6.51-9.77c.07-7.34-3-11.82-9.77-13L463,513.46c10.54.53,17.33,5.63,19.54,16.28,2,4,1.61,9.69,0,16.29-2.21,8-7.55,14.86-14.66,21.17A51.32,51.32,0,0,1,450,568.83l-15-7.93C435.85,548.72,439.7,543.63,446.75,546Z"
                transform="translate(-275.12 -513.46)"
                fill={fillColor}
              />
              <polygon
                points="56 133.62 59.26 247.63 171.63 247.63 178.15 133.62 56 133.62"
                fill={fillColor}
              />
              <polygon
                points="62.51 115.1 56 129.76 178.15 129.76 170 115.1 62.51 115.1"
                fill={fillColor}
              />
              <ellipse
                cx="82.06"
                cy="305.44"
                rx="21.17"
                ry="17.1"
                fill={fillColor}
              />
              <ellipse
                cx="145.57"
                cy="305.44"
                rx="21.17"
                ry="17.1"
                fill={fillColor}
              />
              <polygon
                points="67.4 259.21 95.09 259.21 103.23 316.21 60.88 316.21 67.4 259.21"
                fill={fillColor}
              />
              <polygon
                points="133.36 259.21 122.77 316.21 168.38 316.21 162.68 259.21 133.36 259.21"
                fill={fillColor}
              />
              <g>
                <path
                  d="M300.69,813.5l-8.49,13.61c-7.15-3.34-12.94-9.45-17.08-18.85.09-8.31,1.79-15.89,6.4-22.13,3.23-6,8.39-10.45,16.55-12.47,11.19-4.5,20,2.3,28.59,10.6l-6,15.61L306.87,793c-6.5-.38-10.27,2.91-11.27,9.93Z"
                  transform="translate(-275.12 -513.46)"
                  fill={fillColor}
                />
                <path
                  d="M334,670.16c-19.49,3.63-37.67,8.53-46.24,24.75-10.14,20.86-15,41.63-7.45,64.74l7.18,19.1,7.36-5.55-6-15.64c-2.6-15.86-5.14-33.62,4.49-55.29,9.63-16.2,24.34-22.9,39.33-22.43Z"
                  transform="translate(-275.12 -513.46)"
                  fill={fillColor}
                />
              </g>
              <circle cx="117.16" cy="68.4" r="42.06" fill={fillColor} />
            </svg>
          </span>
        </NavLink>
      </nav>
    </>
  );
};

export default HomePage2;
