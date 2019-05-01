import React from "react";
import { Route, Switch } from "react-router-dom";
import "../../App.css";
import HomePage from "../home/homePage";
import AboutPage from "../about/aboutPage";
import ToolsPage from "../tools/toolsPage";
import Heca from "../heca/Heca";
import Face from "../face/Face";
import Header from "../common/Header";
import Chavali from "../chavali/chavali";

function Left() {
  return (
    <div className="left">
      <div className="LeftElementHeader">
        {" "}
        <Header />
      </div>
      <div className="LeftElementBody">
        <div className="LeftElementContent">
          <Switch>
            {/* <Route exact path="/" component={HomePage} /> */}
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/home/*" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/tools" component={ToolsPage} />
            <Route path="/heca" component={Heca} />
            <Route path="/face" component={Face} />
            <Route path="/chavali" component={Chavali} />
          </Switch>
        </div>
        <div className="LeftElementTags" />
      </div>
      <div className="LeftElementFooter" />
    </div>
  );
}

export default Left;
