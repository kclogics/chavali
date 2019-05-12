import React from "react";
import { Route, Switch } from "react-router-dom";
import "../../App.css";

import T1 from "../tools/T1";
import T2 from "../tools/T2";
import T3 from "../tools/T3";
import T4 from "../tools/T4";

import H1 from "../home/H1";
import H2 from "../home/H2";
import H3 from "../home/H3";
import H4 from "../home/H4";

import Social from "../about/social";
import S2 from "../about/s2";

import F1 from "../face/F1";
import F2 from "../face/F2";
import F3 from "../face/F3";
import F4 from "../face/F4";

import chavaliTools from "../tools/chavaliTools.js";
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

import Logo from "../../components/chavali/logo";

import PageNotFound from "../PageNotFound";

class ServerApp extends React.Component {
  state = { users: [], faker: [] };

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())

      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h2>Users</h2>
        {this.state.users.map(user => (
          <div key={user.id}>{user.username}</div>
        ))}

        {/* <img
          width="200px"
          src="//upload.wikimedia.org/wikipedia/commons/c/c4/Icon_Error.png"
        /> */}
      </div>
    );
  }
}

function Right() {
  const activeStyle = { color: "red" };
  return (
    <div className="right">
      <div className="RightElementBody">
        <div className="RightElementContent">
          {/* <ServerApp /> */}
          <div className="RightElementContentStyle">
            <Switch>
              <Route exact path="/home/developer" component={H1} />
              <Route exact path="/home/designer" component={H2} />
              <Route exact path="/home/brand" component={H3} />
              <Route exact path="/home/happiness" component={H4} />

              <Route exact path="/tools/t1" component={T1} />
              <Route exact path="/tools/t2" component={T2} />
              <Route exact path="/tools/t3" component={T3} />
              <Route exact path="/tools/t4" component={T4} />

              <Route exact path="/about/social" component={Social} />
              <Route exact path="/about/s2" component={S2} />

              <Route exact path="/heca/hire" component={Heca1} />
              <Route exact path="/heca/earn" component={Heca2} />
              <Route exact path="/heca/collabrate" component={Heca3} />
              <Route exact path="/heca/affiliate" component={Heca4} />

              <Route exact path="/face/f1" component={F1} />
              <Route exact path="/face/f2" component={F2} />
              <Route exact path="/face/f3" component={F3} />
              <Route exact path="/face/f4" component={F4} />
            </Switch>
            <Switch>
              <Route exact path="/chavali/tools" component={chavaliTools} />

              <Route exact path="/chavali/developer" component={H1} />
              <Route exact path="/chavali/designer" component={H2} />
              <Route exact path="/chavali/brand" component={H3} />
              <Route exact path="/chavali/happiness" component={H4} />
              <Route exact path="/chavali/t1" component={T1} />
              <Route exact path="/chavali/t2" component={T2} />
              <Route exact path="/chavali/t3" component={T3} />
              <Route exact path="/chavali/t4" component={T4} />
              <Route exact path="/chavali/social" component={Social} />
              <Route exact path="/chavali/s2" component={S2} />

              <Route exact path="/chavali/hire" component={Heca1} />
              <Route exact path="/chavali/earn" component={Heca2} />
              <Route exact path="/chavali/collabrate" component={Heca3} />
              <Route exact path="/chavali/affiliate" component={Heca4} />
              <Route exact path="/chavali/f1" component={F1} />
              <Route exact path="/chavali/f2" component={F2} />
              <Route exact path="/chavali/f3" component={F3} />
              <Route exact path="/chavali/f4" component={F4} />
            </Switch>
          </div>
        </div>

        <div className="RightElementTags">
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
            <div className="RmenuTag">
              <Logo />
            </div>
            <div className="menuContent" />
          </div>
          {/* <div className="menuContent" /> */}

          <div className="TagContainer">
            <div className="RmenuTag">
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
            <div className="RmenuTag">
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
            <div className="RmenuTag">
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
            <div className="RmenuTag">
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
    </div>
  );
}

export default Right;
