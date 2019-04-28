import React from "react";

import "../../App.css";

function Left() {
  return (
    <div className="left">
      <div className="LeftElementHeader"> Header</div>
      <div className="LeftElementBody">
        <div className="LeftElementContent">LContent</div>
        <div className="LeftElementTags">Tags</div>
      </div>
      <div className="LeftElementFooter"> footer</div>
    </div>
  );
}

export default Left;
