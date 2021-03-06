import React from 'react';

class InfoField extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			
		};
	}
	render(){
		let classStr = "padding_0px";
		
		let isBlockStr =  (this.props.isBlock==true) ?"true" :"false";
		return (
			<div className={classStr}>
				<label className="labelblock">Name:{this.props.name}</label>
				<label className="labelblock">changeTime:{this.props.changeTime}</label>
				<label className="labelblock">inpfocus:{this.props.inpfocus}</label>
				<label className="labelblock">tdmouseenterleave:{this.props.tdmouseenterleave}</label>
				<label className="labelblock">IsBlock:{isBlockStr}</label>
			</div>
		);
	}
}

module.exports = InfoField;