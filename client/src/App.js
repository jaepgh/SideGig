import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import PostJob from "./pages/PostJob";
import SearchJob from "./pages/SearchJob";
import Settings from "./pages/Settings";
import firebase from "./config/firebase";

class App extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    this.authorizationState();
  }

  authorizationState() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <Fragment>
        {this.state.user ? (
          <Router>
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/post" component={PostJob} />
              <Route exact path="/search" component={SearchJob} />
              <Route exact path="/settings" component={Settings} />
            </Switch>
          </Router>
        ) : (
          <Router>
            <Switch>
              <Route exact path="/" component={Landing} />
            </Switch>
          </Router>
        )}
      </Fragment>
    );
  }
}

export default App;
