import React from 'react';
import InputField from './inputfield.js';
import InfoField from './infofield.js';
class Block extends React.Component{
	constructor(props){
		super(props);
		let classStr =  this.props.className + " block_style padding_0px";
		let key =  props.textId;
		let lastStatus = props.lastStatus;
		let lastValue = props.value;
		console.log('first Value');
		console.log(lastValue);
		console.log('lastValue');
		this.state = {
          event: "",
          name:"",
          changeTime:"",
          isBlock:false,
          classStr: classStr,
          inputClass: '',
          storage: this.props.localStorage,
          key: key,
          lastStatus: lastStatus,
          lastValue: lastValue
		};

	}
	handleOnTextChange(e){
		let me = this;
		let {storage} = me.state;
		let value = e.target.value;
		if(window.cellsRef!=null){
			let inputKey = '/cells/'+me.state.key + "/valuehist";
		    var addCellRef = window.database.ref(inputKey);
		    addCellRef=addCellRef.push();
		    addCellRef.set({
		    	time: new Date().getTime(),
		    	id: (storage.getItem('name')!=undefined)?storage.getItem('name'):"nonam",
		    	value: value
		    });
		}	
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
			let inputKey = '/cells/'+me.state.key + "/statushist/inpfocus";
		    var addCellRef = window.database.ref(inputKey);
		    addCellRef=addCellRef.push();
		    addCellRef.set({
		    	time: new Date().getTime(),
		    	id: (storage.getItem('name')!=undefined)?storage.getItem('name'):"nonam",
		    	status: 'in'
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
			let inputKey = '/cells/'+me.state.key + "/statushist/inpfocus";
		    var addCellRef = window.database.ref(inputKey);
		    addCellRef=addCellRef.push();
		    addCellRef.set({
		    	time: new Date().getTime(),
		    	id: (storage.getItem('name')!=undefined)?storage.getItem('name'):"nonam",
		    	status: 'out'
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
			let inputKey = '/cells/'+this.state.key + "/statushist/tdmouseenterleave";
		    var addCellRef = window.database.ref(inputKey);
		    addCellRef=addCellRef.push();
		    addCellRef.set({
		    	time: new Date().getTime(),
		    	id: (storage.getItem('name')!=undefined)?storage.getItem('name'):"nonam",
		    	status: 'in'
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
			let inputKey = '/cells/'+this.state.key + "/statushist/tdmouseenterleave";
		    var addCellRef = window.database.ref(inputKey);
		    addCellRef=addCellRef.push();
		    addCellRef.set({
		    	time: new Date().getTime(),
		    	id: (storage.getItem('name')!=undefined)?storage.getItem('name'):"noname",
		    	status: 'out'
		    	
		    });
		}

	}
	render(){
		let classStr =  this.state.classStr;
		let inputClass = '';
    	let lastStatus = this.props.lastStatus;
    	let value = this.props.value.value;
    	console.log('now value:');
    	console.log(value);
    	console.log("========================");
    	// console.log(lastStatus);
    	let lastStatusId =(lastStatus==null) ?"":(this.props.lastStatus.id!=undefined)?lastStatus.id:"";
    	let lastStatusName ="";
    	let inpfocus  = "";
    	let tdmouseenterleave = "";
    	let isBlock = false;
    	if(lastStatus!=null){
    	    if(lastStatus.tdmouseenterleave!==undefined){
    	    	lastStatusName = (lastStatus.tdmouseenterleave=='in')? "mouseEnter":"mouseLeave";
    	    	tdmouseenterleave = lastStatus.tdmouseenterleave;
    	    	if(lastStatusName=='mouseEnter'){
    	    		isBlock = true;
    	    		classStr += " mouseEnterState";    	    		
    	    	}
    	        else {
 					classStr = classStr.replace(" mouseEnterState","");   	    		
    	    	}
    	    }
    	    if(lastStatus.inpfocus!==undefined){
    	    	inpfocus = lastStatus.inpfocus;
    	    	lastStatusName = (lastStatus.inpfocus=='in')?"focusIn":"focusOut";
    	    	if(lastStatusName=='focusIn'){
    	    		isBlock = true;
    	    		inputClass='inputOnFocusSate';
    	    	}
    	        else {
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
					handleOnTextChange = {this.handleOnTextChange.bind(this)}
					inputClass = {inputClass}
					value = {value}
				/>
				<InfoField name={lastStatusId}
					changeTime={changeTime} isBlock={isBlock}
					tdmouseenterleave={tdmouseenterleave} inpfocus={inpfocus} />
			</div>
		);
	}
}

module.exports = Block;