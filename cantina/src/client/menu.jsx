//make this component take in all components to make the menu, while also handling most functions

import React, { Component } from "react";
import { getData, getDays } from "../server/fakeMenuData";
import MenuTable from "./menuTable";

class Menu extends Component {
  state = {
    menus: getData(),
    days: getDays()
  };

  componentDidMount() {}

  handleLike = () => {
    //not functinal for now
    console.log("like pressed.");
  };
  render() {
    const { length: count } = this.state.menus;
    if (count === 0) return <p>There are no dishes in this weeks menu.</p>;
    return (
      <React.Fragment>
        <div>
          <p>Showing {count} dishes in the menu.</p>
          <MenuTable
            days={this.state.days}
            LikeButton={this.handleLike}
            items={this.state.menus}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
