import React from 'react';
import './App.css';
import {Footer, Circle, Card} from './Components/StyledComponents'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav >
        <a href="1">ROADABLE</a>
        <a href="1">HOME</a>
        <a href="2">HOW IT WORKS</a>
        <a href="3">ABOUT US</a>
        <a href="4">LOGIN</a>
        <a href="5">SIGN UP</a>
        </nav>
      </header>
      <div>
      <div>
        
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
            denim pre-lights. Tower dead realism
             modem otaku dolphin hotdog bridge 
             tank-traps shrine pen nano-Kowloon
              wristwatch artisanal DIY office. 
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
          <Circle>3</Circle>
          <p className="bld">TAKE A PICTURE</p>
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
       &#169; Copyright 2020
      </Footer>
    </div>
  );
}

export default App;
