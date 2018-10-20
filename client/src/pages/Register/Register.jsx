import React, { Component } from "react";
import AppBarSimple from "../../components/AppBarSimple";
import Checkout from "../../components/CheckOut";

class Register extends Component {
  state = {};
  render() {
    return (
      <div>
        <React.Fragment>
          <AppBarSimple onLogOut={this.props.onLogOut} />
          <Checkout />
        </React.Fragment>
      </div>
    );
  }
}

export default Register;
