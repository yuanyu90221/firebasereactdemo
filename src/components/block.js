import React from 'react';
import InputField from './inputfield.js';
import InfoField from './infofield.js';
class Block extends React.Component{
	constructor(props){

		super(props);
		let classStr =  this.props.className + " block_style padding_0px";

		this.state = {
          event: "",
          name:"",
          changeTime:"",
          isBlock:false,
          classStr: classStr,
          inputClass: '',
          storage: this.props.localStorage
		};
	}
	handleOnFocusIn(e){
	
		let me = this;
		let {storage} = me.state;
		me.setState({event:"focusIn"});
		me.setState({changeTime:new Date().toLocaleString()});
		me.setState({isBlock:true});
		me.setState({inputClass:'inputOnFocusSate'});
		if(storage.getItem('name')!=undefined){
			me.setState({name:storage.getItem('name')});
		}
	}
	
	handleOnFocusOut(e){

		let me = this;
		let {storage} = me.state;
		me.setState({event:"focusOut"});
		me.setState({changeTime:new Date().toLocaleString()});
		me.setState({isBlock:false});
		me.setState({inputClass:'inputOnFocusOutSate'});
		if(storage.getItem('name')!=undefined){
			me.setState({name:storage.getItem('name')});
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
		this.setState({classStr:originClassStr});
		this.setState({event:"mouseEnter"});
		this.setState({changeTime:new Date().toLocaleString()});
		this.setState({isBlock:true});
		if(storage.getItem('name')!=undefined){
			this.setState({name:storage.getItem('name')});
		}
	}
	doMouseLeave(){
		let originClassStr = this.state.classStr;
		originClassStr= originClassStr.replace(" mouseEnterState","");
		let {storage} = this.state;
		this.setState({classStr:originClassStr});
		this.setState({event:"mouseLeave"});
		this.setState({changeTime:new Date().toLocaleString()});
		this.setState({isBlock:false});
		if(storage.getItem('name')!=undefined){
			this.setState({name:storage.getItem('name')});
		}
	}
	render(){
		let classStr =  this.state.classStr;
    		
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