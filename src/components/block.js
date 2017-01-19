import React from 'react';

class Block extends React.Component{
	constructor(props){
		super(props);
		this.state = {

		};
	}
	render(){
		let classStr =  this.props.className + " block_style padding_0px";
		console.log(classStr);
		return (
			<div className={classStr}>
				<h1>{this.props.text}</h1>
			</div>
		);
	}
}

module.exports = Block;