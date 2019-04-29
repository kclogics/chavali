import React from "react";
import { Route, Switch } from "react-router-dom";
import "../../App.css";
import T1 from "../tools/T1";
import T2 from "../tools/T2";
import T3 from "../tools/T3";
import T4 from "../tools/T4";
function Right() {
  return (
    <div className="right">
      <div className="RightElementHeader"> Header</div>
      <div className="RightElementBody">
        <div className="RightElementContent">
          <Switch>
            <Route exact path="/tools/t1" component={T1} />
            <Route exact path="/tools/t2" component={T2} />
            <Route exact path="/tools/t3" component={T3} />
            <Route exact path="/tools/t4" component={T4} />
          </Switch>
        </div>
        <div className="RightElementTags">Tags</div>
      </div>
      <div className="RightElementFooter"> footer</div>
    </div>
  );
}

export default Right;
