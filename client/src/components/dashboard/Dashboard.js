import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import Spinner from "../common/Spinner";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
    console.log(this);
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    let guestName;
    let dashboardContent;
    if (profile === null || loading) {
      dashboardContent = <Spinner />;
      console.log(user);
    } else {
      dashboardContent = (
        <div className="col-sm=6">
          <h6>Email: </h6>
          <div>{user.email}</div>
          <br />
          <h6>Phone Number: </h6>
          <div>{user.phoneNumber}</div>
          <br />
          <h6>Location: </h6>
          <div>{user.location}</div>
          <br />
          <br />
        </div>
      );
      guestName = (
        <div className="display-3">
          <div className="text-primary">{user.name}</div>
        </div>
      );
      console.log(this.props.history);
      console.log(this.props.auth);
      console.log(this.props);
      console.log(user);
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h6 className="display-4">
                Welcome back
                {guestName}
              </h6>
              {dashboardContent}
              <Link to="/create-order" className="btn btn-lg btn-info">
                Start Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
