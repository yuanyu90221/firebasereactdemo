import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Block from './components/block.js';
import Setup from './components/setup.js';
import '../css/main.css';
class App extends React.Component{
	constructor(props){
		super(props);
        let currentCellsRef = window.cellsRef;
        if(currentCellsRef!={}){
        	console.log(currentCellsRef);
        	
        }
		this.state = {
			arrayContent: [{
				"key":"0x0",
				"valuehist":[],
				"statushist":[]
			},
			{
				"key":"0x1",
				"valuehist":[],
				"statushist":[]
			},
			{
				"key":"0x2",
				"valuehist":[],
				"statushist":[]
			},
			{
				"key":"1x0",
				"valuehist":[],
				"statushist":[]
			},
			{
				"key":"1x1",
				"valuehist":[],
				"statushist":[]
			},
			{
				"key":"1x2",
				"valuehist":[],
				"statushist":[]
			},
			{
				"key":"2x0",
				"valuehist":[],
				"statushist":[]
			},
			{
				"key":"2x1",
				"valuehist":[],
				"statushist":[]
			},
			{
				"key":"2x2",
				"valuehist":[],
				"statushist":[]
			}
			],

		};
	}
	
	handleDataFirstLoad(e){
		// var arrayContent = this.state.arrayContent.slice();
		// var changeObj = arrayContent.find(function(item){
		// 	return item.key == e.key;
		// });
		// changeObj.statushist.push(e.status.statushist);
		// this.setState({arrayContent:arrayContent});
	}
    handleCellDataChange(e){
    	var arrayContent = this.state.arrayContent.slice();
		var changeObj = arrayContent.find(function(item){
			return item.key == e.key;
		});
		
		changeObj.statushist.push(e.status.statushist);
		this.setState({arrayContent:arrayContent});
    }
	render(){
        let {arrayContent} = this.state;
        let {localStorage} = this.props;
        let {globalVar} = this.props;
        let showSetting = "show", hideSetting="hide",saveSetting="save";
        // console.log(this.state.arrayContent);
        const result = arrayContent.map(function(element){
        	let length = element.statushist.length;
        	// console.log(length);
        	let lastNode = null;
        	if(length > 0){
        		let lastStatus = element.statushist[length-1];
        		// console.log(lastStatus);
            	let curkey = Object.keys(lastStatus);
        		lastNode = lastStatus[curkey[curkey.length-1]];
        		// console.log(lastNode);
        	} 

        	return (<Block key={element.key} textId={element.key} className="col-xs-4 col-sm-4 col-md-4 col-lg-4 margin_0px" text={element.key} localStorage={localStorage}
        	        lastStatus={lastNode}
        	/>)
        });
        return(
         	<div className={this.props.className}>
         		<Setup classStr={this.props.className} showSetting={showSetting} hideSetting={hideSetting} saveSetting={saveSetting} 
         		localStorage={this.props.localStorage}
         		handleDataFirstLoad={this.handleDataFirstLoad.bind(this)} handleCellDataChange={this.handleCellDataChange.bind(this)}
         		/>
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
				<App className="row col-sm-12 col-md-12 col-lg-12 margin_0px padding_0px" arrayContent={arrayContent} localStorage={localStorage} />
				, 
				document.getElementById('hello'));