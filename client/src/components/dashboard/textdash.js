import React, { Component } from "react";

class hassan extends Component {
  state = {};
  componentDidMount() {
    fetch("/api/menuitems/all")
      .then(res => res.json())
      .then(this.setState());
  }
  render() {
    return <div classNames="app">hello</div>;
  }
}

export default hassan;
