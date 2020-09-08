import React from 'react';
import {
    Link
} from "react-router-dom";
import {Navs, Navlist, SButton} from '../StyledComponents'

const Navbar = ()=>{
	return(
	<Navs>
	<Link className="logo" to="/home">ROADABLE</Link>
      <Navlist>
         <li><Link to="/home">HOME</Link></li>
         <li><Link to="/how-it-works">HOW IT WORKS</Link></li>
         <li><Link to="/about">ABOUT US</Link></li>
      </Navlist>
      <Navlist access>
        <li><Link to="/login"><SButton>LOGIN</SButton></Link></li>
        <li><Link to="/signup"><SButton>SIGN UP</SButton></Link></li>
      </Navlist>
	</Navs>)
}

export default Navbar;