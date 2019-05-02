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

import Heca1 from "../heca/heca1";
import Heca2 from "../heca/heca2";
import Heca3 from "../heca/heca3";
import Heca4 from "../heca/heca4";

import F1 from "../face/F1";
import F2 from "../face/F2";
import F3 from "../face/F3";
import F4 from "../face/F4";

import Logo from "../chavali/logo";
import Logo1 from "../../logo.svg";

class ServerApp extends React.Component {
  state = { users: [] };

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())

      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user => (
          <div key={user.id}>{user.username}</div>
        ))}
        <img
          width="200px"
          src="//upload.wikimedia.org/wikipedia/commons/c/c4/Icon_Error.png"
        />
      </div>
    );
  }
}

function Right() {
  return (
    <div className="right">
      <div className="RightElementHeader">
        {" "}
        <div className="HeaderLogo">
          <Logo />
        </div>
      </div>
      <div className="RightElementBody">
        <div className="RightElementContent">
          <div className="RightElementContentStyle">
            <ServerApp />
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
        <div className="RightElementTags" />
      </div>
      <div className="RightElementFooter" />
    </div>
  );
}

export default Right;
