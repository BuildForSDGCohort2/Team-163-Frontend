import React from 'react';
import './App.css';
import { Footer, Circle, Navs, Card } from './Components/StyledComponents'

const App = () => {
    return (
        <div className="App">
      <header className="App-header">
        <Navs>
        <a className="logo" href="1">ROADABLE
        </a>
        
          <ul className="navLinks">
            <li>HOME</li>
            <li>HOW IT WORKS</li>
            <li>ABOUT US</li>
          </ul>
        
        <ul className="accessLinks">
          <li href="4">LOGIN</li>
          <li href="5">SIGN UP</li>
        </ul>
        
        </Navs>
      </header>
      <div className="container">
      <div className="rdiv2">
      </div>
      <div className="rdiv">
          Vehicle free-market uplink gang Tokyo
          systema silent alcohol grenade rain 
          tank-traps savant singularity boy.
           Office alcohol apophenia hacker 
           fluidity franchise engine A.I. 
           convenience store drone modem. 
           Systema shanty town girl camera 
           dome ablative tiger-team corporation
            paranoid rain convenience store Chiba 
            denim pre-lights.  
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