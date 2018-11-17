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
  componentWillMount() {
    axios
      .get("/api/orders")
      .then(res => {
        console.log(res.data);
        let kitchenorders = [];
        res.data.map(data => kitchenorders.push(data.menuitems));

        // console.log(res.data.menuitems);
        this.setState({ kitchenorders });
        // console.log(this.state.kitchenorders);
        console.log(kitchenorders);
        // this.state.kitchenorders.map(kitchenorder => console.log(kitchenorder));
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
        <div className="display-1 col-12 text-center">Guest Orders</div>
        {this.state.kitchenorders.map(kitchenorder =>
          kitchenorder.map(individualorders => (
            <div>
              <div className="card card-body mb-3 col-12">
                <div>
                  <div className="h3 text-dark">
                    Combo Number: {individualorders.productid}
                  </div>
                  <div className="font-weight-bold text-danger">
                    {individualorders.comboname}
                  </div>
                  <div className=" h5 text-dark">
                    Price: {individualorders.price}
                  </div>
                  <div>Description</div>
                  <div className="text-info">
                    {individualorders.description}
                  </div>
                  <div className="text-info">{individualorders.date}</div>

                  <br />
                </div>
              </div>
            </div>
          ))
        )}
        {/* {this.state.kitchenorders.map(kitchenorder => (
          <div>
            <div className="card card-body mb-3 col-12">
              <div>
                <div className="h3 text-dark">
                  Combo Number: {kitchenorder.productid}
                </div>
                <div className="font-weight-bold text-danger">
                  {kitchenorder.comboname}
                </div>
                <div className=" h5 text-dark">Price: {kitchenorder.price}</div>
                <div>Description</div>
                <div className="text-info">{kitchenorder.description}</div>
                <div className="text-info">{kitchenorder.date}</div>

                <br />
              </div>
            </div>
          </div>
        ))} */}
      </div>
    );
  }
}

export default Kitchen;
