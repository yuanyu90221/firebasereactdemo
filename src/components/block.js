import React from 'react';
import InputField from './inputfield.js';
import InfoField from './infofield.js';
class Block extends React.Component{
	constructor(props){

		super(props);
		let classStr =  this.props.className + " block_style padding_0px";
        var me = this;
		this.state = {
          event: "",
          name:"",
          changeTime:"",
          isBlock:false,
          classStr: classStr,
          inputClass: ''
		};
	}
	handleOnFocusIn(e){
	
		var me = this;
		me.setState({event:"focusIn"});
		me.setState({changeTime:new Date().toLocaleString()});
		me.setState({isBlock:true});
		me.setState({inputClass:'inputOnFocusSate'});
	}
	
	handleOnFocusOut(e){

		var me = this;
		me.setState({event:"focusOut"});
		me.setState({changeTime:new Date().toLocaleString()});
		me.setState({isBlock:false});
		me.setState({inputClass:'inputOnFocusOutSate'});
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
		this.setState({classStr:originClassStr});
		this.setState({event:"mouseEnter"});
		this.setState({changeTime:new Date().toLocaleString()});
		this.setState({isBlock:true});
	}
	doMouseLeave(){
		let originClassStr = this.state.classStr;
		originClassStr= originClassStr.replace(" mouseEnterState","");
		this.setState({classStr:originClassStr});
		this.setState({event:"mouseLeave"});
		this.setState({changeTime:new Date().toLocaleString()});
		this.setState({isBlock:false});
	}
	render(){
		let classStr =  this.state.classStr;
        
		// this.setState({classStr:classStr});
		console.log(classStr);
		
		return (
			<div className={classStr} onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)}>
				<h1>{this.props.text}</h1>
				<InputField textId={this.props.textId} 
					handleOnFocusIn = {this.handleOnFocusIn.bind(this)}
					handleOnFocusOut = {this.handleOnFocusOut.bind(this)}
					inputClass = {this.state.inputClass}
				/>
				<InfoField name={this.state.name}
					changeTime={this.state.changeTime} event={this.state.event} isBlock={this.state.isBlock}/>
			</div>
		);
	}
}

module.exports = Block;