import React from "react";
import "./App.css";
import LandingPage from './components/Landing/LandingPage';
import HomePage from "./components/Home/HomePage";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Hworks from "./components/HwItWks/Hwrks";
import Report from "./components/Report/Report"


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
          <Route />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
