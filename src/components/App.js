import React from "react";
import Right from "./right/right";
import Left from "./left/left";

import "../App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div className="left" /> */}
        {/* <div className="right" /> */}
        <>
          <Left />

          <Right />
        </>
      </header>
    </div>
  );
}

export default App;
