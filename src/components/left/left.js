import React from "react";
import { Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import devLogo from "../../images/developer.svg";

import "../../App.css";
import HomePage from "../home/homePage";
import HomePage1 from "../home/homePage.1";
import HomePage2 from "../home/homePage.2";
import HomePage3 from "../home/homePage.3";
import HomePage4 from "../home/homePage.4";
import AboutPage from "../about/aboutPage";
import AboutPage1 from "../about/aboutPage.1";
import AboutPage2 from "../about/aboutPage.2";
import ToolsPage from "../tools/toolsPage";
import ToolsPage1 from "../tools/toolsPage.1";
import ToolsPage2 from "../tools/toolsPage.2";
import ToolsPage3 from "../tools/toolsPage.3";
import ToolsPage4 from "../tools/toolsPage.4";
import Heca from "../heca/Heca";
import Heca1 from "../heca/Heca.1";
import Heca2 from "../heca/Heca.2";
import Heca3 from "../heca/Heca.3";
import Heca4 from "../heca/Heca.4";
import Face from "../face/Face";
import Face1 from "../face/Face.1";
import Face2 from "../face/Face.2";
import Face3 from "../face/Face.3";
import Face4 from "../face/Face.4";
import Header from "../common/Header";
import Chavali from "../chavali/chavali";
import PageNotFound from "../PageNotFound.js";

import HomeTag from "../tags/homeTag";
import AboutTag from "../tags/aboutTag";
import ToolTag from "../tags/toolTag";
import HecaTag from "../tags/hecaTag";
import FaceTag from "../tags/faceTag";
import Logo from "../../components/chavali/logo";

function Left() {
  const activeStyle = { color: "red" };
  return (
    <div className="left">
      <div className="LeftElementBody">
        {/* <div className="LeftElementHeader">
          {" "}
          <Header />
        </div> */}
        <div className="LeftElementContent">
          <div className="LeftElementContentStyle">
            <Switch>
              <Route path="/chavali" component={Chavali} />
            </Switch>
          </div>
        </div>
        <div className="LeftElementTags">
          <div className="menuContentStyle" />
          {/* <div className="TagContainerHome">
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
          </div> */}

          <div className="TagContainer">
            <div className="menuTag">
              <Logo />
            </div>
            <div className="menuContent">
              <div className="LeftElementHeader">
                {" "}
                <Header />
              </div>
            </div>
          </div>
          {/* <div className="menuContent" /> */}

          <div className="TagContainer">
            <div className="menuTag">
              <Switch>
                {/* <Route exact path="/" component={HomePage1} /> */}
                <Route path="/home" component={HomePage1} />
                <Route path="/about" component={AboutPage1} />
                <Route path="/tools" component={ToolsPage1} />
                <Route path="/heca" component={Heca1} />
                <Route path="/face" component={Face1} />
              </Switch>
            </div>
            <div className="menuContent" />
          </div>

          <div className="TagContainer">
            {" "}
            <div className="menuTag">
              <Route path="/home" component={HomePage2} />
              <Route path="/about" component={AboutPage2} />
              <Route path="/tools" component={ToolsPage2} />
              <Route path="/heca" component={Heca2} />
              <Route path="/face" component={Face2} />
            </div>
            <div className="menuContent" />
          </div>

          <div className="TagContainer">
            {" "}
            <div className="menuTag">
              {" "}
              <Route path="/home" component={HomePage3} />
              <Route path="/tools" component={ToolsPage3} />
              <Route path="/heca" component={Heca3} />
              <Route path="/face" component={Face3} />
            </div>
            <div className="menuContent" />
          </div>

          <div className="TagContainer">
            {" "}
            <div className="menuTag">
              {" "}
              <Route path="/home" component={HomePage4} />
              <Route path="/tools" component={ToolsPage4} />
              <Route path="/heca" component={Heca4} />
              <Route path="/face" component={Face4} />
            </div>
            <div className="menuContent" />
          </div>
        </div>
      </div>
      {/* <div className="LeftElementFooter" /> */}
    </div>
  );
}

export default Left;
