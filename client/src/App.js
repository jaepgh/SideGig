import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />

        {/*Conditional routes to be executed if the user is authenticated*/}
        {true ? (
          <React.Fragment>
            <Route exact path="/home" component={Home} />
            <Route exact path="/post" component={PostJob} />
            <Route exact path="/search" component={SearchJob} />
            <Route exact path="/settings" component={SearchJob} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Route exact path="/home" component={Unauthorized} />
            <Route exact path="/post" component={Unauthorized} />
            <Route exact path="/search" component={Unauthorized} />
            <Route exact path="/settings" component={Unauthorized} />
          </React.Fragment>
        )}

        {/*404 error page*/}
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
