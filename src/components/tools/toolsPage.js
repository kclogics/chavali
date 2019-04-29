import React from "react";
import { Link } from "react-router-dom";

const ToolsPage = () => (
  <div>
    <h1>Tools</h1>
    <Link to="home">home page</Link>
    <span> | </span>
    <Link to="about">about page</Link>
  </div>
);

export default ToolsPage;
