import React from 'react';
import {Navs, Navlist, SButton} from '../StyledComponents'

const Navbar = ()=>{
	return(
	<Navs>
	<a className="logo" href="1">ROADABLE</a>
      <Navlist>
         <li><a href="2">HOME</a></li>
         <li><a href="3">HOW IT WORKS</a></li>
         <li><a href="3">ABOUT US</a></li>
      </Navlist>
      <Navlist access>
        <li href="4"><SButton>LOGIN</SButton></li>
        <li href="5"><SButton>SIGN UP</SButton></li>
      </Navlist>
	</Navs>)
}

export default Navbar;