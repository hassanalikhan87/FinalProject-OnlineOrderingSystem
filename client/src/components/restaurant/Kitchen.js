import React, { Component } from "react";
// import TextFieldGroup from "../common/TextFieldGroup";
import axios from "axios";

class Kitchen extends Component {
  // constructor() {
  // super();
  state = {
    kitchenorders: []
  };
  // }
  componentDidMount() {
    axios
      .get("/api/orders")
      .then(res => {
        console.log(res.data);

        const kitchenorders = res.data[0].menuitems;
        console.log(res.data.menuitems);
        this.setState({ kitchenorders });
        console.log(this.state.kitchenorders);
        console.log(kitchenorders);
      })
      .catch(err => {
        // TODO: Handle errors mo betta
        console.log(err);
      });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    return (
      <div>
        {/* <ul>{kel.data}</ul> */}
        <div className="display-1 col-12 text-center">Guest Orders</div>
        {this.state.kitchenorders.map(kitchenorders => (
          <div>
            <div className="card card-body mb-3 col-12">
              <div>
                <div className="h3 text-dark">
                  Combo Number: {kitchenorders.productid}
                </div>
                <div className="font-weight-bold text-danger">
                  {kitchenorders.comboname}
                </div>
                <div className=" h5 text-dark">
                  Price: {kitchenorders.price}
                </div>
                <div>Description</div>
                <div className="text-info">{kitchenorders.description}</div>
                <div className="text-info">{kitchenorders.date}</div>

                <br />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Kitchen;
