import React from 'react';
import {NavLinks} from './Components/StyledComponents'

const Navbar = ()=>{
	return(
	<div>
	<nav>
	    <a href="1">ROADABLE</a>
	    <NavLinks>
		    <a href="1">HOME</a>
		    <a href="2">HOW IT WORKS</a>
		    <a href="3">ABOUT US</a>
	    </NavLinks>
	    <a href="4">LOGIN</a>
	    <a href="5">SIGN UP</a>
	</nav>
	</div>)
}