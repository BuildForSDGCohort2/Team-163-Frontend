import styled from 'styled-components';

const Navs = styled.div `
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 10px;
	align-items: center;
`

const Navlist = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width:${props => props.access?'190px':'300px'};
  flex-grow: 1;
  font-size: calc(8px + 1vmin);
  margin: 0;
  padding-left: calc(2px + .5vmin);
  
  li{
  	  display: inline;
  	  margin-left: 10px;
  }

  li.active{
  	 border-bottom: 5px solid #FFF;
  }
  li.links{border-bottom:5px solid transparent}
  li.links:hover{
  	border-bottom: 5px solid #b938ff;
  }

   a{text-decoration: none;
     color: #fff;}
`

const buttonShadow =  `0px 1px 2px 1px rgba(0,0,0,0.33)`;
const SButton =  styled.button`
	border-radius:${props=>props.access||props.report?
		"5px":"0px"};
	border: ${props=>props.access||props.report?"2px solid #b938ff":
	"none"};
	background-color:${props=>props.access?"#282c34":"#FFF"};
	color:${props=>props.userInput?"#5e5e5e":props.report?"#282c34":"#fff"};
	margin-left:${props=>props.userInput?"20px":""};
	padding:${props=>props.userInput?"8px":props.access?"7px":"6px"};
	font-size: ${props=>props.userInput||props.report?"calc(7px + 1vmin)":"calc(5px + 1vmin)"};
	width: ${props=>props.access?"80px":props.report?"120px":""};
	outline:none;
	float: ${props=>props.report?"right":""};
	margin-right:${props=>props.report?"10px":""};
	cursor: pointer;
	box-shadow: ${props=>props.userInput?buttonShadow:""};
	-webkit-box-shadow: ${props=>props.userInput?buttonShadow:""};
-moz-box-shadow: ${props=>props.userInput?buttonShadow:""};
	height: ${props=>props.userInput?"29px":""};
	:hover{
		background-color:${props=>props.access?"#b938ff":""};
	}
	:active{
    background-color: ${props=>props.access?"slateblue":""};
    border-color: slateblue;
    box-shadow: none;
    border: ${props=>props.userInput?"1px solid rgba(0,0,0,0.63)":""}
}
` 

const boxShadow =`0px 1px 9px 0px rgba(0,0,0,0.75)`;
const ReportCard = styled.div`
width: 330px;
height: 525px;
background-color: #FFF;
border-radius:10px;
margin: 0 auto;
justify-self: center;
align-self: center;
-webkit-box-shadow: ${boxShadow};
-moz-box-shadow: ${boxShadow};
box-shadow: ${boxShadow};

	.report-label{
		border-radius: 10px;
		width: 100%;
		height: 35px;
		line-height: 35px;
		font-size: 1.5em;
		vertical-align: middle;
		background-color:#dedcdb;
		text-align: center;
		font-weight: 500;
	}
`
const InputLabel = styled.div`
display: flex;
align-items: center;
height: 40px;
padding-left: 10px;
margin-top:5px;
span{
	margin-left:20px;
	font-size:calc(8px + 1vmin);
	
}
label{
	display: flex;
}
`
const CommentBoxShadow=`0px 1px 3px 0px rgba(0,0,0,0.65)`;
const CommentBox = styled.textarea`
 padding: 10px;
    line-height: 1.5;
    border-radius: 5px;
    border: 1px solid #ccc;
-webkit-box-shadow: ${CommentBoxShadow};
-moz-box-shadow: ${CommentBoxShadow};
box-shadow: ${CommentBoxShadow};
    background-color:#f7f5f3;
      resize: none;
      width:217px;
      outline:0;
	
	:focus{
		border-color:#b938ff;
	}
`
const Card = styled.div `
	text-align: center;
	width:200px;
	min-height: 220px;
	background-color: #fff;
	border-radius: 8px;
	border: 1px solid #5e5e5e;
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
  		color: #5e5e5e;
  	}
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


const FooterDiv = styled.div `
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

export {Navs, Navlist, SButton, ReportCard, InputLabel,CommentBox, Card, Circle, FooterDiv};