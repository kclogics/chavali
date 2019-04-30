import React from "react";
import { Link } from "react-router-dom";

const ToolsPage = () => (
  <>
    <h1>Tools</h1>
    <Link to="/tools/t1">Javascript</Link>
    <span> | </span>
    <Link to="/tools/t2">React js</Link>
    <span> | </span>
    <Link to="/tools/t3">Adobe</Link>
    <span> | </span>
    <Link to="/tools/t4">AWS</Link>
  </>
);

export default ToolsPage;
