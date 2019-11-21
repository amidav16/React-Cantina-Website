//make this component take in all components to make the menu, while also handling most functions

import React, { Component } from "react";
import { getData } from "../server/fakeMenuData";

class Menu extends Component {
  state = {
    menu: []
  };

  componentDidMount() {
      const { data: menu } = getData();
      this.setState({ menu })
  }
  render() {
      return ();
  }
}

export default Menu;
