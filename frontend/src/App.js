import React from "react";

// components
import "./App.css";
import Welcome from "./components/Welcome";
import Main from "./components/Main";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Order from "./components/Order";

// other
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import illustration from "./images/illustration-dark.svg";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

let style = { backgroundImage: `url(${illustration})` };

const promise = loadStripe(
  "pk_test_51HCr8zGrO8LMr0aUXQ0OQTnN3yG2EZOvmnm5zs01TjUVekfhGgS3b0WL7BeDxqV97ikJ7DqJR5qaFknoFIx7pnhu00rn1llTud"
);

function App() {
  return (
    <Router>
      <div className="app" style={style}>
        <Switch>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/checkout">
            <Elements stripe={promise}>
              <Checkout />
            </Elements>
          </Route>
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
