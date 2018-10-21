import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import PostJob from "./pages/PostJob";
import SearchJob from "./pages/SearchJob";
import Settings from "./pages/Settings";
import NoMatch from "./pages/NoMatch";
import firebase from "./config/firebase";

class App extends Component {
  state = {
    auth: false,
    registered: false,
    user: {}
  };

  componentDidMount = () => {
    this.authorizationState();
  };

  authorizationState = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ auth: true, registered: user.emailVerified, user });
      } else {
        this.setState({ auth: false, registered: false, user: null });
      }
    });
  };

  onLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ auth: false, registered: false, user: null });
      })
      .catch(error => {
        // An error happened
      });
  };

  onAuthenticate = async credentials => {
    if (credentials.register) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then(user => {
          this.setState({
            auth: true,
            registered: user.emailVerified,
            user: user
          });
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(user => {
          this.setState({ auth: true, registered: false, user: user });
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    const auth = this.state.auth;
    const registered = this.state.registered;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              !auth ? (
                <Landing onAuthenticate={this.onAuthenticate} />
              ) : (
                <Redirect to="/Register" />
              )
            }
          />
          <Route
            exact
            path="/Register"
            render={() =>
              !auth ? (
                <Redirect to="/" />
              ) : auth && !registered ? (
                <Register onLogOut={this.onLogOut} />
              ) : (
                <Redirect to="/Home" />
              )
            }
          />
          <Route
            exact
            path="/Home"
            render={() =>
              auth && registered ? (
                <Home onLogOut={this.onLogOut} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            exact
            path="/Settings"
            render={() =>
              auth && registered ? (
                <Settings onLogOut={this.onLogOut} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            exact
            path="/Search"
            render={() =>
              auth && registered ? (
                <SearchJob onLogOut={this.onLogOut} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            exact
            path="/Post"
            render={() =>
              auth && registered ? (
                <PostJob onLogOut={this.onLogOut} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route exact component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
