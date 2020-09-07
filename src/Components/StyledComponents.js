import styled from 'styled-components';

const Footer = styled.div `
	display: flex;
 	justify-content: center;
  	align-items: center;
	background-color: #292929;
	color: #fff;
	height: 70px; 
	position: absolute;
    bottom: 0;
    width:100%;
    margin:0 auto;
`

const Circle = styled.div `
	text-align: center;
	background-color: #b938ff;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	color: #FFF;
	margin: 0 auto;
	vertical-align: middle;
	line-height: 50px;
	font-size: 1.5em;
	:hover{
		background-color:slateblue;
	}
`

const Navs = styled.div `
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 10px;
	align-items: center;
`

const Card = styled.div `
	text-align: center;
	width: 200px;
	min-height: 220px;
	background-color: #fff;
	border-radius: 8px;
	border: 1px solid gray;
  	border-bottom: 8px solid #b938ff;
  	padding: 15px;
  	margin-left: 5px;
  	margin-right: 5px;	
  	:hover{
  		border-bottom-color: slateblue;
  	}

  	p.bld{
  		font-weight: 500;
  		font-size: 18px;
  	}
  	p{
  		font-size: 13px;
  		color: #424242;
  	}
`

const SButton =  styled.button`
	border-radius:5px;
	border: 2px solid #b938ff;
	background-color:#282c34;
	color: #fff;
	padding:7px;
	font-size: calc(5px + 1vmin);
	width: 80px;
	outline:none;

	:hover{
		background-color:#b938ff;
	}
	:active {
    background-color: slateblue;
    border-color: slateblue;
}
` 


export { Footer, Circle, Navs, Card, SButton};