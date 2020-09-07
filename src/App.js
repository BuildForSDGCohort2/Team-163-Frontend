import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
import {Card, Circle} from './Components/StyledComponents'

const App = () => {
    return (
<div className="App">
  <header className="App-header">
    <Navbar/>
  </header>
<div className="main-container">
  <div className="image-div">
    </div>
  <div className="placeholder">HOW IT<span className="dark-text"> WORKS</span></div> 
  <div className="text-div">
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
<section className="campaign">
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
<Footer/>

</div>
  );
}

export default App;