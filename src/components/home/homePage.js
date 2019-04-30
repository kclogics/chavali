import React from "react";
import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";

const HomePage = () => {
  // const activeStyle = { color: "red" };

  return (
    <>
      <h1>Home</h1>
      <nav>
        <Link to="/home/developer">Developer</Link>
        <span> | </span>
        <Link to="/home/designer">Designer</Link>
        <span> | </span>
        <Link to="/home/brand">Brand</Link>
        <span> | </span>
        <Link to="/home/happiness">Happiness</Link>
      </nav>
    </>
  );
};

export default HomePage;
