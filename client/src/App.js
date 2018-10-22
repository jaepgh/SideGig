import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import PostJob from "./pages/PostJob";
import SearchJob from "./pages/SearchJob";
import Settings from "./pages/Settings";
import NoMatch from "./pages/NoMatch";
import firebase from "./config/firebase";

const history = createHistory();

class App extends Component {
  constructor(props) {
    super(props);
  }

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
        this.setState({
          auth: true,
          registered: user.displayName ? true : false,
          user
        });
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
        history.push("/");
        this.setState({ auth: false, registered: false, user: null });
        window.location.reload();
      })
      .catch(error => {
        // An error happened
      });
  };

  onRegister = name => {
    firebase
      .auth()
      .currentUser.updateProfile({ displayName: name })
      .then(() => {
        this.setState({ auth: true, registered: true });
      })
      .catch(error => {
        // An error happened
      });
  };

  onAuthenticate = credentials => {
    if (credentials.register) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then(user => {
          this.setState({
            auth: true,
            registered: user.displayName ? true : false,
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
      <Router history={history}>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              !auth ? (
                <Landing onAuthenticate={this.onAuthenticate} />
              ) : (
                <Redirect
                  to="/Register"
                  onRegister={this.onRegister}
                  id_firebase={this.state.user.uid}
                />
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
                <Register
                  onLogOut={this.onLogOut}
                  onRegister={this.onRegister}
                  id_firebase={this.state.user.uid}
                />
              ) : (
                <Redirect to="/Home" />
              )
            }
          />
          <Route
            exact
            path="/Home"
            render={() =>
              registered ? <Home onLogOut={this.onLogOut} /> : <Fragment />
            }
          />
          <Route
            exact
            path="/Settings"
            render={() =>
              registered ? (
                <Settings
                  onLogOut={this.onLogOut}
                  id_firebase={this.state.user.uid}
                />
              ) : (
                <Fragment />
              )
            }
          />
          <Route
            exact
            path="/Search"
            render={() =>
              registered ? <SearchJob onLogOut={this.onLogOut} /> : <Fragment />
            }
          />
          <Route
            exact
            path="/Post"
            render={() =>
              registered ? <PostJob onLogOut={this.onLogOut} /> : <Fragment />
            }
          />
          <Route exact component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
