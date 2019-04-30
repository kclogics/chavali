import React from "react";

import { Link } from "react-router-dom";

const Heca = () => {
  // const activeStyle = { color: "red" };

  return (
    <>
      <h1>HECA</h1>
      <nav>
        <Link to="/heca/hire">Hire me</Link>
        <span> | </span>
        <Link to="/heca/earn">Earn</Link>
        <span> | </span>
        <Link to="/heca/collabrate">Collabrate</Link>
        <span> | </span>
        <Link to="/heca/affiliate">Affliate</Link>
      </nav>
    </>
  );
};

export default Heca;
