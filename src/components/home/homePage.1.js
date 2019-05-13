import React from "react";
import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";

import devLogo from "../../images/developer.svg";

const HomePage1 = () => {
  const activeStyle = { color: "red" };
  const fillColor = "#D3D3D3";
  var styles = {
    devmaker: {
      // position: 'absolute',
      // display: 'block',
      zIndex: "100001",
      width: "60px",
      height: "auto",
      // backgroundColor: "pink",

      // right: '1%',
      // top: '0',
      // marginTop: '3%',

      cursor: "pointer",
      "@media only screen and (max-width: 360px) and (min-width: 0px)": {
        display: "none"
      },
      "@media only screen and (max-width: 460px) and (min-width: 361px)": {},
      "@media only screen and (max-width: 500px) and (min-width: 461px)": {
        display: "none"
      },
      "@media only screen and (max-width: 640px) and (min-width: 540px)": {
        display: "none"
      },
      "@media only screen and (min-width: 760px) and (max-width: 1024px)": {
        display: "none"
      }
    }
  };

  return (
    <>
      <nav>
        <NavLink to="/home/developer" activeStyle={activeStyle}>
          <span className="menuButton">
            {" "}
            <svg
              width="50px"
              style={styles.devmaker}
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 395.28 244.66"
            >
              <title>developer_svg</title>
              <path
                d="M337.38,792.28l-2.93-61.37-7.3,2.92V709l-11.69-8.76c.5-43.13,2.9-82.79,13.15-108.13l23.38-11,2.19-23.38c7.2-15.07,15.71-11.88,24.84,0l2.92,24.84c20.46,11.69,26.3,20.46,31.42,42.37v27.77l-12.42,13.88,12.42,56.25-14.61,8.77-5.85-8,4.38,66.49-19,2.19c-1.1-24.07-4-48.95-10.23-65.75-8.85-7.21-11.9,3.63-10.23,29.22l-1.46,36.53Z"
                transform="translate(-177.72 -547.62)"
                fill={fillColor}
              />
              <path
                d="M444.26,707.81q21.45-18.22,50.15-39.43T558,624.12a326.71,326.71,0,0,0-36.21-15,227.07,227.07,0,0,0-43.18-10.73c-1.8-.36-2.68-1.25-2.68-2.69q0-3.21,4.55-7.51a15.48,15.48,0,0,1,11-4.29,9.19,9.19,0,0,1,3.76.54q7,1.08,28.43,8.85a416.48,416.48,0,0,1,46.67,20.65c1.78,1.07,2.68,2.33,2.68,3.76,0,2.14-1.34,4.47-4,7a32.77,32.77,0,0,1-7.24,5.37q-45.62,30.57-79.93,56.32t-59.55,48.82a8.63,8.63,0,0,1-2.14,1.61c-1.79,1.07-2.69,1.42-2.69,1.07q0-2.16,7.51-11.27A139.17,139.17,0,0,1,444.26,707.81Z"
                transform="translate(-177.72 -547.62)"
                fill={fillColor}
              />
              <path
                d="M307.54,588.57q-22,17.19-51,38.9T192.2,672.8q15.56,7,37,14.75A196.89,196.89,0,0,0,272.67,698c1.78,0,2.68,1.07,2.68,3.22a10,10,0,0,1-3.75,8.31,15.24,15.24,0,0,1-9.66,3,33.49,33.49,0,0,1-8.05-1.07q-9.12-2.68-29.5-10.19a438,438,0,0,1-44-19.31q-2.68-1.62-2.68-3.76,0-4.29,4-7.24t7.78-5.63q45.58-30.59,79.93-55.53A624.26,624.26,0,0,0,329,561.22c.72-.71,1.61-1.52,2.69-2.42s1.78-1.15,2.14-.8q0,2.14-7.51,11.53A143.37,143.37,0,0,1,307.54,588.57Z"
                transform="translate(-177.72 -547.62)"
                fill={fillColor}
              />
            </svg>
          </span>
        </NavLink>
      </nav>
    </>
  );
};

export default HomePage1;
