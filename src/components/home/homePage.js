import React from "react";
import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";

import devLogo from "../../images/developer.svg";

const HomePage = () => {
  const activeStyle = { color: "red" };

  return (
    <>
      <h1>Home </h1>
      <nav>
        <NavLink to="/home/developer" activeStyle={activeStyle}>
          Developer
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/home/designer" activeStyle={activeStyle}>
          Designer
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/home/brand" activeStyle={activeStyle}>
          Brand
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/home/happiness" activeStyle={activeStyle}>
          Happiness
        </NavLink>
      </nav>
    </>
  );
};

export default HomePage;
