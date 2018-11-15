import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-1 mb-4 text-light">Menu PAge</h1>
                <p className="lead"> Lets make the menu here</p>
                <hr />
                <Link to="/signup" className="btn btn-lg btn-info mr-2">
                  Make an Order
                </Link>
                <Link to="/login" className="btn btn-lg btn-success ml-2">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
