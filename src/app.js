import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Block from './components/block.js';
import Setup from './components/setup.js';
import '../css/main.css';
import '../assets/jquery/dist/jquery.min.js';
class App extends React.Component{
	constructor(props){
		super(props);
        
		this.state = {

		};
	}
	render(){
        let {arrayContent} = this.props;
        let {localStorage} = this.props;
        let showSetting = "show", hideSetting="hide",saveSetting="save";
        
        const result = arrayContent.map(function(element){
        	return <Block key={element.text} textId={element.text} className="col-xs-4 col-sm-4 col-md-4 col-lg-4 margin_0px" text={element.text} localStorage={localStorage}/>
        });
        return(
         	<div className={this.props.className}>
         		<Setup classStr={this.props.className} showSetting={showSetting} hideSetting={hideSetting} saveSetting={saveSetting} 
         		localStorage={this.props.localStorage}/>
         		{result}
         	</div>
        );
	}
}

var arrayContent = [{
	"text":"0x0"
},
{
	"text":"0x1"
},
{
	"text":"0x2"
},
{
	"text":"1x0"
},
{
	"text":"1x1"
},
{
	"text":"1x2"
},
{
	"text":"2x0"
},
{
	"text":"2x1"
},
{
	"text":"2x2"
}
];
var localStorage = window.localStorage;
ReactDOM.render(
				<App className="row col-sm-12 col-md-12 col-lg-12 margin_0px padding_0px" arrayContent={arrayContent} localStorage={localStorage}/>
				, 
				document.getElementById('hello'));