import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => (
  <div>
    <h1>About</h1>
    <Link to="home">home page</Link>
    <span> | </span>
    <Link to="tools">tool page</Link>
  </div>
);
export default AboutPage;
