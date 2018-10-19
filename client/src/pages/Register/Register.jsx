import React, { Component } from "react";
import AppBar from "../../components/AppBar";
import Checkout from "../../components/CheckOut";

class Register extends Component {
  state = {};
  render() {
    return (
      <div>
        <React.Fragment>
          <AppBar />
          <Checkout />
        </React.Fragment>
      </div>
    );
  }
}

export default Register;
