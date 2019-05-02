import React from "react";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Chavali = () => {
  const activeStyle = { color: "red" };
  return (
    <>
      <h1>krishnachavali.com </h1>
      <h1>Home</h1>

      <nav>
        <NavLink to="/chavali/developer" activeStyle={activeStyle} exact>
          Developer
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/chavali/designer" activeStyle={activeStyle}>
          Designer
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/chavali/brand" activeStyle={activeStyle}>
          Brand
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/chavali/happiness" activeStyle={activeStyle}>
          Happiness
        </NavLink>
      </nav>
      <h1>Tools</h1>

      <nav>
        <NavLink to="/chavali/t1" activeStyle={activeStyle} exact>
          Javascript
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/chavali/t2" activeStyle={activeStyle}>
          React js
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/chavali/t3" activeStyle={activeStyle}>
          Adobe
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/chavali/t4" activeStyle={activeStyle}>
          AWS
        </NavLink>
      </nav>

      <h1>About</h1>

      <nav>
        <NavLink to="/chavali/social" activeStyle={activeStyle} exact>
          Social
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/chavali/s2" activeStyle={activeStyle}>
          About Me
        </NavLink>
      </nav>

      <h1>HECA</h1>

      <nav>
        <NavLink to="/chavali/hire" activeStyle={activeStyle} exact>
          Hire me
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/chavali/earn" activeStyle={activeStyle}>
          Earn
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/chavali/collabrate" activeStyle={activeStyle}>
          Collabrate
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/chavali/affiliate" activeStyle={activeStyle}>
          Affliate
        </NavLink>
      </nav>

      <h1>FACE</h1>

      <nav>
        <NavLink to="/chavali/f1" activeStyle={activeStyle} exact>
          Fun
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/chavali/f2" activeStyle={activeStyle}>
          Answers
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/chavali/f3" activeStyle={activeStyle}>
          Challenges
        </NavLink>{" "}
        {"|"}{" "}
        <NavLink to="/chavali/f4" activeStyle={activeStyle}>
          Enlighten
        </NavLink>
      </nav>
    </>
  );
};
export default Chavali;
