import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addGuestItem } from "../../actions/guestOrderActions";
// import { Link } from "react-router-dom";
// import isEmpty from "../../validation/is-empty";

class MenuContent extends Component {
  render() {
    const { menuitem } = this.props;
    return (
      <div className="card card-body bg-disabled">
        <div className="row">
          <div className="col-4">
            <img src={menuitem.imageurl} alt="" className="img-thumbnail" />
          </div>
          <div className="col-lg-6 col-md-4 col-8 text-dark text-left">
            <h3>Combo Number: {menuitem.productid}</h3>
            <h6>{menuitem.comboname}</h6>
            <h3>${menuitem.price}</h3>
            <h6>{menuitem.category}</h6>
            <p>{menuitem.description}</p>
            <code>{menuitem._id}</code>
          </div>
        </div>
        <div className="col-2-end text-right">
          <button
            className="btn btn-success"
            onClick={() => this.props.addGuestItem(menuitem)}
          >
            Add to Order
          </button>
        </div>
      </div>
    );
  }
}
MenuContent.proptype = {
  menuitem: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addGuestItem }
)(MenuContent);
