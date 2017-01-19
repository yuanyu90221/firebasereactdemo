import React from 'react';

class InputField extends React.Component{
	constructor(props){
		super(props);

		this.state = {

		};
	}
	render(){
		let classStr = "margin_0px padding_0px " + this.props.inputClass;
		console.log(classStr);
		return (
			<input type="text" className={classStr} id={this.props.textId} 
			   onFocus={this.props.handleOnFocusIn.bind(this)}
			   onBlur={this.props.handleOnFocusOut.bind(this)}/>
		);
	}
}

module.exports = InputField;