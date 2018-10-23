import React, { Component } from "react";
import AppBar from "../../components/AppBar";
import Users from "../../components/Users";
import Stepper from "../../components/Stepper";
import Contractors from "../../components/Contractors";

class Landing extends Component {
  state = {};
  render() {
    const { onAuthenticate } = this.props;
    return (
      <div>
        <React.Fragment>
          <AppBar onAuthenticate={onAuthenticate} />
          <Stepper />
          <Users onAuthenticate={onAuthenticate} />
          <Contractors onAuthenticate={onAuthenticate} />
        </React.Fragment>
      </div>
    );
  }
}

export default Landing;
