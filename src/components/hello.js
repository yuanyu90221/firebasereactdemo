import React from 'react';

class Hello extends React.Component{
	constructor(props){
		super(props);
		this.state = {

		};
	}
	render(){

		return (
			<div className={this.props.className}>
				<h1>{this.props.text}</h1>
			</div>
		);
	}
}

module.exports = Hello;