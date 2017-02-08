import React from 'react';

class InputField extends React.Component{
	constructor(props){
		super(props);
		console.log(this.props.value);
		this.state = {

		};
	}
	render(){
		let classStr = "margin_0px padding_0px " + this.props.inputClass;
		
		return (
			<input type="text" className={classStr} id={this.props.textId} 
			   onFocus={this.props.handleOnFocusIn.bind(this)}
			   onBlur={this.props.handleOnFocusOut.bind(this)}
			   onChange={this.props.handleOnTextChange.bind(this)}
			   value={this.props.value}
			   />
		);
	}
}

module.exports = InputField;