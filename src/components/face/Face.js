import React from "react";

import { Link } from "react-router-dom";

const Face = () => {
  // const activeStyle = { color: "red" };

  return (
    <>
      <h1>FACE</h1>
      <nav>
        <Link to="/face/f1">Fun</Link>
        <span> | </span>
        <Link to="/face/f2">Answers</Link>
        <span> | </span>
        <Link to="/face/f3">challenges</Link>
        <span> | </span>
        <Link to="/face/f4">Enlighten</Link>
      </nav>
    </>
  );
};

export default Face;
