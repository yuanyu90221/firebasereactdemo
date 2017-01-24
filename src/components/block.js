import React from 'react';
import InputField from './inputfield.js';
import InfoField from './infofield.js';
class Block extends React.Component{
	constructor(props){
		super(props);
		let classStr =  this.props.className + " block_style padding_0px";
		let key =  props.textId;
		let lastStatus = props.lastStatus;
		// console.log(lastStatus);
		this.state = {
          event: "",
          name:"",
          changeTime:"",
          isBlock:false,
          classStr: classStr,
          inputClass: '',
          storage: this.props.localStorage,
          key: key,
          lastStatus: lastStatus
		};

	}
	handleOnFocusIn(e){
	
		let me = this;
		let {storage} = me.state;

		// me.setState({event:"focusIn"});
		// me.setState({changeTime:new Date().toLocaleString()});
		// me.setState({isBlock:true});
		// me.setState({inputClass:'inputOnFocusSate'});
		// if(storage.getItem('name')!=undefined){
		// 	me.setState({name:storage.getItem('name')});
		// }
		if(window.cellsRef!=null){
			let inputKey = '/cells/'+me.state.key + "/statushist/";
		    var addCellRef = window.database.ref(inputKey);
		    addCellRef=addCellRef.push();
		    addCellRef.set({
		    	time: new Date().getTime(),
		    	id: (storage.getItem('name')!=undefined)?storage.getItem('name'):"nonam",
		    	status: {
		    		inpfoucs: 'in'
		    	}
		    });
		}
	}
	
	handleOnFocusOut(e){

		let me = this;
		let {storage} = me.state;
		// me.setState({event:"focusOut"});
		// me.setState({changeTime:new Date().toLocaleString()});
		// me.setState({isBlock:false});
		// me.setState({inputClass:'inputOnFocusOutSate'});
		// if(storage.getItem('name')!=undefined){
		// 	me.setState({name:storage.getItem('name')});
		// }
		// push into firebase db
		if(window.cellsRef!=null){
			let inputKey = '/cells/'+me.state.key + "/statushist/";
		    var addCellRef = window.database.ref(inputKey);
		    addCellRef=addCellRef.push();
		    addCellRef.set({
		    	time: new Date().getTime(),
		    	id: (storage.getItem('name')!=undefined)?storage.getItem('name'):"nonam",
		    	status: {
		    		inpfoucs: 'out'
		    	}
		    });
		}
	}
	
	handleMouseEnter(e){
		this.doMouseEnter();
	}
	handleMouseLeave(e){
		this.doMouseLeave();
	}
	doMouseEnter(){
		let originClassStr = this.state.classStr;
		originClassStr +=" mouseEnterState";
		let {storage} = this.state;
		// this.setState({classStr:originClassStr});
		// this.setState({event:"mouseEnter"});
		// this.setState({changeTime:new Date().toLocaleString()});
		// this.setState({isBlock:true});
		// if(storage.getItem('name')!=undefined){
		// 	this.setState({name:storage.getItem('name')});
		// }
		if(window.cellsRef!=null){
			let inputKey = '/cells/'+this.state.key + "/statushist/";
		    var addCellRef = window.database.ref(inputKey);
		    addCellRef=addCellRef.push();
		    addCellRef.set({
		    	time: new Date().getTime(),
		    	id: (storage.getItem('name')!=undefined)?storage.getItem('name'):"nonam",
		    	status: {
		    		tdmouseenterleave: 'in'
		    	}
		    });
		}
	}
	doMouseLeave(){
		let originClassStr = this.state.classStr;
		originClassStr= originClassStr.replace(" mouseEnterState","");
		let {storage} = this.state;
		// this.setState({classStr:originClassStr});
		// this.setState({event:"mouseLeave"});
		// this.setState({changeTime:new Date().toLocaleString()});
		// this.setState({isBlock:false});
		// if(storage.getItem('name')!=undefined){
		// 	this.setState({name:storage.getItem('name')});
		// }
		if(window.cellsRef!=null){
			let inputKey = '/cells/'+this.state.key + "/statushist/";
		    var addCellRef = window.database.ref(inputKey);
		    addCellRef=addCellRef.push();
		    addCellRef.set({
		    	time: new Date().getTime(),
		    	id: (storage.getItem('name')!=undefined)?storage.getItem('name'):"noname",
		    	status: {
		    		tdmouseenterleave: 'out'
		    	}
		    });
		}

	}
	render(){
		let classStr =  this.state.classStr;
		let inputClass = '';
    	let lastStatus = this.props.lastStatus;
    	console.log(lastStatus);
    	let lastStatusId =(lastStatus==null) ?"":(this.props.lastStatus.id!=undefined)?lastStatus.id:"";
    	let lastStatusName ="";
    	let isBlock = false;
    	if(lastStatus!=null){
    	    if(lastStatus.status.tdmouseenterleave!==undefined){
    	    	lastStatusName = (lastStatus.status.tdmouseenterleave=='in')? "mouseEnter":"mouseLeave";
    	    	if(lastStatusName=='mouseEnter'){
    	    		isBlock = true;
    	    		classStr += " mouseEnterState";    	    		
    	    	}
    	        if(lastStatusName=='mouseLeave'){
 					classStr = classStr.replace(" mouseEnterState","");   	    		
    	    	}
    	    }
    	    if(lastStatus.status.inpfoucs!==undefined){
    	    	lastStatusName = (lastStatus.status.inpfoucs=='in')?"focusIn":"focusOut";
    	    	if(lastStatusName=='focusIn'){
    	    		isBlock = true;
    	    		inputClass='inputOnFocusSate';
    	    	}
    	        if(lastStatusName=='focusOut'){
    	    		inputClass='inputOnFocusOutSate';
    	    	}
    	    }
    	    
    	}
    	let changeTime = "";
        if(lastStatus!=null){
    		if(lastStatus.time!=undefined){
    			changeTime = new Date(lastStatus.time).toLocaleString();
    		}
    	}	
		return (
			<div className={classStr} onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)}>
				<h1>{this.props.text}</h1>
				<InputField textId={this.props.textId} 
					handleOnFocusIn = {this.handleOnFocusIn.bind(this)}
					handleOnFocusOut = {this.handleOnFocusOut.bind(this)}
					inputClass = {inputClass}
				/>
				<InfoField name={lastStatusId}
					changeTime={changeTime} event={lastStatusName} isBlock={isBlock}/>
			</div>
		);
	}
}

module.exports = Block;