import React from "react";
import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";

import devLogo from "../../images/developer.svg";

const HomePage3 = () => {
  const fillColor = "#D3D3D3";

  return (
    <>
      <nav>
        <NavLink to="/home/brand">
          <button className="menuButton">
            <svg
              width="25px"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 289.37 337.38"
            >
              <title>brand_svg</title>
              <polygon
                points="66.77 337.38 121.76 336.59 94.4 289.23 66.77 337.38"
                fill={fillColor}
              />
              <polygon
                points="167.81 337.38 222.8 336.59 195.43 289.23 167.81 337.38"
                fill={fillColor}
              />
              <polygon
                points="0 250.77 43.74 321.33 94.26 237.13 144.78 321.33 195.3 237.13 245.82 321.33 289.38 250.44 208.02 109.53 81.54 109.53 0 250.77"
                fill={fillColor}
              />
              <polygon
                points="144.78 0 195.3 87.5 94.26 87.5 144.78 0"
                fill={fillColor}
              />
            </svg>
          </button>
        </NavLink>
      </nav>
    </>
  );
};

export default HomePage3;
