import React from "react";

// components
import "./App.css";
import Welcome from "./components/Welcome";
import Main from "./components/Main";
import Cart from "./components/Cart";

// other
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import illustration from "./images/illustration.svg";

let style = { backgroundImage: `url(${illustration})` };

function App() {
  return (
    <Router>
      <div className="app" style={style}>
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
