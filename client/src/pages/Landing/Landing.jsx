import React, { Component } from "react";
import AppBar from "../../components/AppBar";
import Howitworks from "../../components/HowItWorks";
import Stepper from "../../components/Stepper";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div>
        <React.Fragment>
          <AppBar />
          <Stepper />
          <Howitworks />
        </React.Fragment>
      </div>
    );
  }
}

export default Landing;
