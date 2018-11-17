import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import MenuContent from "../auth/Menucontent";
import { getCurrentMenu } from "../../actions/menuActions";
import Spinner from "../common/Spinner";

class CreateOrder extends Component {
  componentDidMount() {
    this.props.getCurrentMenu();
  }

  render() {
    const { MENU, loading } = this.props.menu;
    let menuContent;

    if (MENU === null || loading) {
      menuContent = <Spinner />;
    } else {
      if (MENU.length > 0) {
        menuContent = MENU.sort((a, b) => a.productid - b.productid).map(
          menuitem => (
            <MenuContent key={menuitem.productid} menuitem={menuitem} />
          )
        );
      } else {
        menuContent = <h4>No menu found...</h4>;
      }
    }

    return (
      <div className="bg-warning">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-1 text-center text-light">Menu</h1>
              <p className="lead text-center text-light">
                Choose from the options
              </p>
              {menuContent}
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateOrder.propTypes = {
  getCurrentMenu: PropTypes.func.isRequired,
  menu: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  // menu: state.menu,
  menu: state.menu
});

export default connect(
  mapStateToProps,
  { getCurrentMenu }
)(CreateOrder);
