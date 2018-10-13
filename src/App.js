import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import './App.css';



const App = () => (
  <Router>
    <div>
      <React.Fragment>



        <Route exact path="/" component={Main} />
        <Route exact path="/Main" component={Main} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />






      </React.Fragment>
    </div>
  </Router>
);


export default App;
