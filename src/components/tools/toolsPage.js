import React from "react";
import { Link } from "react-router-dom";
import ToolsBody from "../common/ToolsBody";
const ToolsPage = () => (
  <div>
    <h1>Tools</h1>
    <Link to="/tools/t1">Javascript</Link>
    <span> | </span>
    <Link to="/tools/t2">React js</Link>
    <span> | </span>
    <Link to="/tools/t3">Adobe</Link>
    <span> | </span>
    <Link to="/tools/t4">AWS</Link>
  </div>
);

export default ToolsPage;
