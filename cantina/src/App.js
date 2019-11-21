import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./client/homepage";
import NotFound from "./client/notfound";
import Navbar from "./client/navbar";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
