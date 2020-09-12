import React from "react";
import "./App.css";
import LandingPage from './components/Landing/LandingPage';
import HomePage from "./components/Home/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={HomePage} />
          <Route />
        </Switch>
      </Router>
      {/* {/* <LandingPage />
      <div className="home-body">
        <HomePage />
      </div> */}
    </React.Fragment>
  );
}

export default App;
