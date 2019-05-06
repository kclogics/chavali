import React from "react";
import { Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import devLogo from "../../images/developer.svg";

import "../../App.css";
import HomePage from "../home/homePage";
import AboutPage from "../about/aboutPage";
import ToolsPage from "../tools/toolsPage";
import Heca from "../heca/Heca";
import Face from "../face/Face";
import Header from "../common/Header";
import Chavali from "../chavali/chavali";
import PageNotFound from "../PageNotFound.js";

import HomeTag from "../tags/homeTag";
import AboutTag from "../tags/aboutTag";
import ToolTag from "../tags/toolTag";
import HecaTag from "../tags/hecaTag";
import FaceTag from "../tags/faceTag";

function Left() {
  return (
    <div className="left">
      <div className="LeftElementHeader">
        {" "}
        <Header />
      </div>
      <div className="LeftElementBody">
        <div className="LeftElementContent">
          <div className="RightElementContentStyle">
            <Switch>
              {/* <Route exact path="/" component={HomePage} /> */}
              <Route exact path="/" component={HomePage} />
              <Route path="/home" component={HomePage} />
              <Route path="/home/*" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/tools" component={ToolsPage} />
              <Route path="/heca" component={Heca} />
              <Route path="/face" component={Face} />
              <Route path="/chavali" component={Chavali} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
        <div className="LeftElementTags">
          <div className="TagContainerHome">
            <div>
              <Switch>
                <Route path="/home" component={HomeTag} />
                <Route path="/home/*" component={HomeTag} />
                <Route path="/about" component={AboutTag} />
                <Route path="/tools" component={ToolTag} />
                <Route path="/heca" component={HecaTag} />
                <Route path="/face" component={FaceTag} />
              </Switch>
            </div>
          </div>

          <div className="TagContainer">
            <div>{/* <p>:D</p> */}</div>
          </div>

          <div className="TagContainer">{/* <p>:P</p> */}</div>

          <div className="TagContainer">{/* <p>:X</p> */}</div>

          <div className="TagContainer">{/* <p>:)</p> */}</div>
        </div>
      </div>
      <div className="LeftElementFooter" />
    </div>
  );
}

export default Left;
