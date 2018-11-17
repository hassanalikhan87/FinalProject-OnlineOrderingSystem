import React, { Component } from "react";
import propTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateItem } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";

class Updatemenu extends Component {
  constructor() {
    super();
    this.state = {
      comboname: "",
      productid: "",
      category: "",
      price: "",
      description: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/menuitems");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const newMenuItem = {
      comboname: this.state.comboname,
      productid: this.state.productid,
      category: this.state.category,
      price: this.state.price,
      description: this.state.description,
      imageurl: this.state.imageurl
    };
    this.props.updateItem(newMenuItem, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="updatemenu">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Update Item</h1>
              <p className="lead text-center">Add your menu item</p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <TextFieldGroup
                    placeholder="comboname"
                    name="comboname"
                    value={this.state.comboname}
                    onChange={this.onChange}
                    error={errors.comboname}
                  />
                  <TextFieldGroup
                    placeholder="productid"
                    name="productid"
                    type="productid"
                    value={this.state.productid}
                    onChange={this.onChange}
                    error={errors.productid}
                  />
                  <TextFieldGroup
                    placeholder="category"
                    name="category"
                    type="category"
                    value={this.state.category}
                    onChange={this.onChange}
                    error={errors.category}
                  />
                  <TextFieldGroup
                    placeholder="price"
                    name="price"
                    type="price"
                    value={this.state.price}
                    onChange={this.onChange}
                    error={errors.price}
                  />
                  <TextFieldGroup
                    placeholder="description"
                    name="description"
                    type="description"
                    value={this.state.description}
                    onChange={this.onChange}
                    error={errors.description}
                  />
                  <TextFieldGroup
                    placeholder="imageurl"
                    name="imageurl"
                    type="imageurl"
                    value={this.state.imageurl}
                    onChange={this.onChange}
                    error={errors.imageurl}
                  />
                </div>

                <input type="submit" className="btn btn-dark btn-block mt-4" />
                <br />
                <br />
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Updatemenu.propTypes = {
  updateItem: propTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { updateItem }
)(withRouter(Updatemenu));
