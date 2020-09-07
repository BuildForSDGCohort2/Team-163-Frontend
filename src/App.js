import React from 'react';
import './App.css';
import { Footer, Circle, Navs, Card, SButton } from './Components/StyledComponents'

const App = () => {
    return (
        <div className="App">
      <header className="App-header">
        <Navs>
        <a className="logo" href="1">ROADABLE
        </a>
        
          <ul className="navLinks">
            <li><a href="2">HOME</a></li>
            <li><a href="3">HOW IT WORKS</a></li>
            <li><a href="3">ABOUT US</a></li>
          </ul>
        
        <ul className="accessLinks">
          <li href="4"><SButton>LOGIN</SButton></li>
          <li href="5"><SButton>SIGN UP</SButton></li>
        </ul>
        
        </Navs>
      </header>
      <div className="container">
      <div className="rdiv2">
      </div>
      <div className="placeholder">HOW IT<span className="dark-text"> WORKS</span></div> 
      <div className="rdiv">
          <p>Vehicle free-market uplink gang Tokyo
          systema silent alcohol grenade rain 
          tank-traps savant singularity boy.
           Office alcohol apophenia hacker 
           fluidity franchise engine A.I. 
           convenience store drone modem. 
           Systema shanty town girl camera 
           dome ablative tiger-team.</p>  
      </div>
      </div>

      <section>
        <Card>
          <Circle>1</Circle>
          <p className="bld">TAKE A PICTURE</p>
          <p>
            Beef noodles corporation narrative
             refrigerator corrupted singularity 
             pre-crypto-DIY gang ablative 
             skyscraper military-grade Kowloon 
             bridge camera geodesic.  
          </p>
        </Card>
        <Card>
          <Circle>2</Circle>
          <p className="bld">ADD COMMENT</p>
          <p>
            Beef noodles corporation narrative
             refrigerator corrupted singularity 
             pre-crypto-DIY gang ablative 
             skyscraper military-grade Kowloon 
             bridge camera geodesic.  
          </p>
        </Card>
        <Card>
          <Circle>3</Circle>
          <p className="bld">ALLOW LOCATION</p>
          <p>
            Beef noodles corporation narrative
             refrigerator corrupted singularity 
             pre-crypto-DIY gang ablative 
             skyscraper military-grade Kowloon 
             bridge camera geodesic.  
          </p>
        </Card>
      </section>
      <Footer>
       <p>&#169; Copyright 2020</p>
      </Footer>
    </div>
    );
}

export default App;