import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Hworks from './Components/Hworks/Hworks'
import Footer from './Components/Footer/Footer';

const App = () => {

return (
 <Router>
  <div className="App">
    <header className="App-header">
      <Navbar/>
    </header>
    <Switch>
      <Route exact path ="/">
        <Hworks/>
      </Route>
      <Route path ="/how-it-works">
        <Hworks/>
      </Route>
      <Route path="/about">
        <Sample/>
      </Route>
      <Route path="/home">
        <Sample/>
      </Route>
      <Route path="/login">
        <Sample/>
      </Route>  <Route path="/signup">
        <Sample/>
      </Route>
    </Switch>
    <Footer/>
  </div>
 </Router>
    );

}

const Sample =()=>{
  return (
    <div>
      <h2>Sample</h2>
    </div>
  );
}

export default App;