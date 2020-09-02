import styled from 'styled-components';

const Footer = styled.div`
	text-align: center;
	background-color: #292929;
	color: #fff;
	height: 100px; 
	align-content: center;`

const Circle = styled.div`
	text-align: center;
	background-color: purple;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	color: #FFF;
	margin: 0 auto;
	vertical-align: middle;
	line-height: 50px;
	font-size: 1.5em
`
const Card = styled.div`
	text-align: center;
	width: 200px;
	min-height: 220px;
	background-color: #fff;
	border-radius: 8px;
	border: 1px solid gray;
  	border-bottom: 8px solid purple;
  	padding: 15px;	

  	p.bld{
  		font-weight: 500;
  		font-size: 18px;
  	}
  	p{
  		font-size: 13px;
  		color: #424242;
  	}
`	


export {Footer, Circle, Card};