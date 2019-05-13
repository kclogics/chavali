import React from "react";
import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";
import Radium from "radium";
import { StyleRoot } from "radium";
import devLogo from "../../images/developer.svg";

const fillColor = "#D3D3D3";

const HomePage4 = () => {
  const styles = {
    logo_active: {
      color: "white"
    }
  };

  return (
    <>
      <nav>
        <NavLink to="/home/happiness" activeStyle={styles.logo_active}>
          <span className="menuButton">
            <p className="logo_active">&#9786;</p>
          </span>
        </NavLink>
      </nav>
    </>
  );
};

export default HomePage4;
