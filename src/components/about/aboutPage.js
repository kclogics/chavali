import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => (
  <>
    <h1>About</h1>
    <Link to="/about/social">Social</Link>
    <span> | </span>
    <Link to="/about/s2">About Me</Link>
  </>
);

export default AboutPage;
