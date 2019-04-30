import React from "react";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

const Chavali = () => (
  <>
    <h1>krishnachavali.com </h1>
    <h1>Home</h1>
    <nav>
      <Link to="/chavali/developer">Developer</Link>
      <span> | </span>
      <Link to="/chavali/designer">Designer</Link>
      <span> | </span>
      <Link to="/chavali/brand">Brand</Link>
      <span> | </span>
      <Link to="/chavali/happiness">Happiness</Link>
    </nav>
    <h1>Tools</h1>
    <Link to="/chavali/t1">Javascript</Link>
    <span> | </span>
    <Link to="/chavali/t2">React js</Link>
    <span> | </span>
    <Link to="/chavali/t3">Adobe</Link>
    <span> | </span>
    <Link to="/chavali/t4">AWS</Link>
    <h1>About</h1>
    <Link to="/chavali/social">Social</Link>
    <span> | </span>
    <Link to="/chavali/s2">About Me</Link>
    <h1>HECA</h1>
    <nav>
      <Link to="/chavali/developer">Hire me</Link>
      <span> | </span>
      <Link to="/chavali/designer">Earn</Link>
      <span> | </span>
      <Link to="/chavali/brand">Collabrate</Link>
      <span> | </span>
      <Link to="/chavali/happiness">Affliate</Link>
    </nav>
    <h1>FACE</h1>
    <nav>
      <Link to="/chavali/f1">Fun</Link>
      <span> | </span>
      <Link to="/chavali/f2">Answers</Link>
      <span> | </span>
      <Link to="/chavali/f3">Challenges</Link>
      <span> | </span>
      <Link to="/chavali/f4">Enlighten</Link>
    </nav>
  </>
);
export default Chavali;
