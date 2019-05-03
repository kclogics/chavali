import React from "react";

import { NavLink } from "react-router-dom";

import LogoChavali from "../../images/logo.svg";

const Logo = () => {
  const activeStyle = { color: "red" };

  return (
    <nav>
      <NavLink to="/chavali" activeStyle={activeStyle} exact>
        <img width="100px" src={LogoChavali} alt="logo" />
      </NavLink>{" "}
    </nav>
  );
};

export default Logo;
