//make this component take in all components to make the menu, while also handling most functions

import React, { Component } from "react";
import { getData } from "../server/fakeMenuData";

class Menu extends Component {
  state = {
    menus: getData()
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
          <table className="table">
            <thead>
              <tr>
                <th>Dish</th>
                <th>Price</th>
                <th>Description</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.state.menus.map(menu => (
                <tr key={menu._id}>
                  <td>{menu.title}</td>
                  <td>{menu.price + "$"}</td>
                  <td>{menu.description}</td>
                  <td>
                    <button
                      onClick={() => this.handleLike()}
                      className="btn btn-primary btn-sm"
                    >
                      Like
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
