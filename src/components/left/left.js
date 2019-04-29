import React from "react";
import { Route, Switch } from "react-router-dom";
import "../../App.css";
import HomePage from "../home/homePage";
import AboutPage from "../about/aboutPage";
import ToolsPage from "../tools/toolsPage";
import Header from "../common/Header";

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
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/tools" component={ToolsPage} />
          </Switch>
        </div>
        <div className="LeftElementTags">Tags</div>
      </div>
      <div className="LeftElementFooter"> footer</div>
    </div>
  );
}

export default Left;
