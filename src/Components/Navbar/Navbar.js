import React from 'react';
import {
    Link,
    useRouteMatch
} from "react-router-dom";
import {Navs, Navlist, SButton} from '../StyledComponents'

const Navbar = ()=>{
	return(
	<Navs>
	<Link className="logo" to="/home">ROADABLE</Link>
      <Navlist>
         <Menulink to="/home" label="HOME" />
         <Menulink to="/how-it-works" label="HOW IT WORKS" activeOnlyWhenExact={true} />
         <Menulink to="/about" label="ABOUT US" />
      </Navlist>
      <Navlist access>
        <li><Link to="/login"><SButton access>LOGIN</SButton></Link></li>
        <li><Link to="/signup"><SButton access>SIGN UP</SButton></Link></li>
      </Navlist>
	</Navs>)
}


const Menulink =({ label, to, activeOnlyWhenExact })=>{
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return(
    <li className={match?"active":"links"}><Link to={to}>{label}</Link></li>
    )
}

export default Navbar;