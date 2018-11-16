import React from "react";
import { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { removeGuestItem, submitOrder } from "../../actions/guestOrderActions";

class Order extends Component {
  render() {
    const { items } = this.props.guestorder;
    return (
      <div>
        <div className="display-1">Order Summary</div>
        <div className="card card-body bg-disabled mb-3 col-10">
          <div className="row">
            <div className="col-10">
              {items.map((item, i) => (
                <div key={`${item._id}_${i}`}>
                  <br />
                  <br />
                  <p className="h6 mt-6">Combo Number: {item.productid}</p>
                  <p className="h3 text-success">{item.comboname}</p>
                  <p className="h6">Price: ${item.price}</p>
                  <code>{item.date}</code>
                  <br />
                  <button
                    className="btn btn-info mt-3 mb-6 col-8-end"
                    onClick={() => this.props.removeGuestItem(item)}
                  >
                    Remove Item
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="h1">
          Total Amount Due: {"  "}
          {items.reduce((prev, item) => {
            return prev + item.price;
          }, 0)}
        </p>
        <button
          className="btn btn-warning"
          onClick={() => this.props.submitOrder(this.props.guestorder)}
        >
          Submit Order
        </button>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

Order.propTypes = {
  removeGuestItem: propTypes.func.isRequired,
  auth: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  guestorder: state.guestorder
});

export default connect(
  mapStateToProps,
  { removeGuestItem, submitOrder }
)(Order);
