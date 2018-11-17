import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import MenuDisplay from "../auth/Menudisplay";
import { getCurrentMenu } from "../../actions/menuActions";
import Spinner from "../common/Spinner";

class Menu extends Component {
  componentDidMount() {
    this.props.getCurrentMenu();
  }

  render() {
    const { MENU, loading } = this.props.menu;
    let menuDisplay;

    if (MENU === null || loading) {
      menuDisplay = <Spinner />;
    } else {
      if (MENU.length > 0) {
        menuDisplay = MENU.sort((a, b) => a.productid - b.productid).map(
          basicmenu => (
            <MenuDisplay key={basicmenu.productid} basicmenu={basicmenu} />
          )
        );
      } else {
        menuDisplay = <h4>No menu found...</h4>;
      }
    }

    return (
      <div>
        <div className="container">
          <div className="col-12 text-center menubackdrop">
            <h1 className="display-1 text-center text-light">Menu</h1>
            <p className="lead text-center text-light">
              Choose from the options
            </p>
            {menuDisplay}
            <br />
          </div>
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
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
)(Menu);
