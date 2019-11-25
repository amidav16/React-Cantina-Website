import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./client/common/notfound";
import Reservation from "./client/common/reservation";
import HomePage from "./client/homepage";
import Navbar from "./client/navbar";
import Menu from "./client/menu";
import Login from "./client/login";
import Register from "./client/register";
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
            <Route path="/reservation" component={Reservation} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/menu" component={Menu} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
