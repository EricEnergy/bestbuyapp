import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import NoMatch from "./pages/NoMatch";
import signup from "./pages/signup";
import Nav from "./components/Nav";
// var isAuthenticated = require("../config/middleware/isAuthenticated");

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/products" component={FrontPage} />
          <Route exact path="/products/:id" component={ProductPage} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/signup" component={signup} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
