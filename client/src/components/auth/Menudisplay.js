import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addGuestItem } from "../../actions/guestOrderActions";
// import { Link } from "react-router-dom";
// import isEmpty from "../../validation/is-empty";

class MenuDisplay extends Component {
  render() {
    const { basicmenu } = this.props;
    return (
      <div>
        <div className="card card-body bg-disabled mb-3">
          <div className="row">
            <div className="col-4">
              <img src={basicmenu.imageurl} alt="" className="img-thumbnail" />
            </div>
            <div className="col-lg-6 col-md-4 col-8 text-dark text-left">
              <h3>Combo Number: {basicmenu.productid}</h3>
              <h6>{basicmenu.comboname}</h6>
              <h3>${basicmenu.price}</h3>
              <h6>{basicmenu.category}</h6>
              <p>{basicmenu.description}</p>
              <code>{basicmenu._id}</code>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
MenuDisplay.proptype = {
  menuitem: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addGuestItem }
)(MenuDisplay);
