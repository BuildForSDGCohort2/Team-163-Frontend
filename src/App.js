import React from "react";
import LandingPage from './components/Landing/LandingPage';
import HomePage from "./components/Home/HomePage";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Hworks from "./components/HwItWks/Hwrks";
import Report from "./components/Report/Report";
import "./App.css"
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";


function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/landing" />
          <Route exact path="/landing" component={LandingPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/how-it-works" component={Hworks} />
          <Route exact path="/report" component={Report} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
