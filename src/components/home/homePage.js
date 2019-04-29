import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
    <h1>Home</h1>
    <Link to="about">About page</Link>
    <span> | </span>
    <Link to="tools">Tools page</Link>
  </div>
);
export default HomePage;
