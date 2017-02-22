import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Block from './components/block.js';
import Setup from './components/setup.js';
import '../css/main.css';
import DateTimeBlock from  './components/datetimeblock';
import JDateTimeBlock from './components/jqdatetimepicker';
class App extends React.Component{
	constructor(props){
		super(props);
        let currentCellsRef = window.cellsRef;
        if(currentCellsRef!={}){
        	// console.log(currentCellsRef);
        	
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
		console.log('first load');
		console.log(e);
		var arrayContent = this.state.arrayContent.slice();
		var changeObj = arrayContent.find(function(item){
			return item.key == e.key;
		});
		if(e.status.valuehist !== undefined){
			console.log('before valuehist:');
    		console.log(e.status.valuehist);
    		console.log("=============================================");
    		changeObj.valuehist.push(e.status.valuehist);
    	}
	    if(e.status.statushist !== undefined){
	    	changeObj.statushist.push(e.status.statushist);	
	    }
		
		this.setState({arrayContent:arrayContent});
	}
    handleCellDataChange(e){

    	
    	
    	var arrayContent = this.state.arrayContent.slice();
		var changeObj = arrayContent.find(function(item){
			return item.key == e.key;
		});
		if(e.status.valuehist !== undefined){
			console.log('before valuehist:');
    		console.log(e.status.valuehist);
    		console.log("=============================================");
    		changeObj.valuehist.push(e.status.valuehist);
    	}
	    if(e.status.statushist !== undefined){
	    	changeObj.statushist.push(e.status.statushist);	
	    }
		
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
        	let value= {value:""};
        	if(length > 0){
        		// let inpfocus = element.statushist.inpfocus[length];
        		let lastStatus = element.statushist[length-1];
        		let inpfocus = {status: "out"};
        		let tdmouseenterleave = {status:"out"};
        		let id = "noname";
        		let time  = "";
        		// console.log(lastStatus);
        		if(lastStatus.inpfocus!==undefined){
        			let inpfocusKey = Object.keys(lastStatus.inpfocus);
        			inpfocus = lastStatus.inpfocus[inpfocusKey[inpfocusKey.length-1]];
        			id = inpfocus.id;
        			time = inpfocus.time;
        		}
        		if(lastStatus.tdmouseenterleave!==undefined){
        			let tdmouseenterleaveKey = Object.keys(lastStatus.tdmouseenterleave);
        		    tdmouseenterleave = lastStatus.tdmouseenterleave[tdmouseenterleaveKey[tdmouseenterleaveKey.length-1]];
        		    id = tdmouseenterleave.id;
        		    time = tdmouseenterleave.time;
        		} 
          // //   	let curkey = Object.keys(lastStatus);
        		// // lastNode = lastStatus[curkey[curkey.length-1]];
        		lastNode = {tdmouseenterleave:tdmouseenterleave.status, inpfocus:inpfocus.status, id: id, time: time};
        		console.log(lastNode);
        	} 
            let curpos = element.valuehist.length;
            console.log('this is valuehist:');
            console.log(curpos);
            console.log(element.valuehist);
            if(curpos > 0 ){
            	
            	let lastValue = element.valuehist[curpos-1];
            	if(lastValue!=null){
                	let valueKey = Object.keys(lastValue);
                	value = lastValue[valueKey[valueKey.length-1]];
                	console.log('current value');
                	console.log(value);
                }
            }
        	return (<Block key={element.key} textId={element.key} className="col-xs-4 col-sm-4 col-md-4 col-lg-4 margin_0px" text={element.key} localStorage={localStorage}
        	        lastStatus={lastNode} value={value}
        	/>)
        });
        return(
         	<div className={this.props.className}>
         		<Setup classStr={this.props.className} showSetting={showSetting} hideSetting={hideSetting} saveSetting={saveSetting} 
         		localStorage={this.props.localStorage}
         		handleDataFirstLoad={this.handleDataFirstLoad.bind(this)} handleCellDataChange={this.handleCellDataChange.bind(this)}
         		/>
         		{result}
         		
         		<JDateTimeBlock/>
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