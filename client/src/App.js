import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

import PrivateRoute from "./components/common/PrivateRoute";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Order from "./components/auth/Order";
import Dashboard from "./components/dashboard/Dashboard";
import Updatemenu from "./components/restaurant/Updatemenu";
import Menu from "./components/dashboard/Menu";
import Kitchen from "./components/restaurant/Kitchen";

import "./App.css";
import CreateOrder from "./components/dashboard/Createorder";

//check for token
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  //Decode Token
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  //Look for expired tokens
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //Logout User
    store.dispatch(logoutUser());
    //Clear current profile
    store.dispatch(clearCurrentProfile());
    //redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/menu" component={Menu} />
            <div className="container">
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/updatemenu" component={Updatemenu} />
              <Route exact path="/kitchen" component={Kitchen} />

              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/order" component={Order} />
                <PrivateRoute
                  exact
                  path="/create-order"
                  component={CreateOrder}
                />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
