import React from 'react';
import $ from 'jquery';
import jQuery from 'jquery';
class SetupInfo extends React.Component{
	constructor(props){
		super(props);
		window.$ = $;
		window.jQuery = jQuery;
		let classStr =  "panel panel-primary";
        var me = this;
		
		this.state = {
			storage: this.props.localStorage
		}

	}
	componentDidMount(){
		let storage = this.state.storage;
		
		if(storage.getItem('name')!=undefined){
			$('#name').val(storage.getItem('name'));
		}
		if(storage.getItem('apiKey')!=undefined){
			$('#apiKey').val(storage.getItem('apiKey'));
		}
		if(storage.getItem('authDomain')!=undefined){
			$('#authDomain').val(storage.getItem('authDomain'));
		}
		if(storage.getItem('databaseURL')!=undefined){
			$('#databaseURL').val(storage.getItem('databaseURL'));
		}
		if(storage.getItem('storageBucket')!=undefined){
			$('#storageBucket').val(storage.getItem('storageBucket'));
		}
		if(storage.getItem('messagingSenderId')!=undefined){
			$('#messagingSenderId').val(storage.getItem('messagingSenderId'));
		}
	}
	render(){
		let classStr =  "panel panel-primary settupFieldBlock";
        
		
		
		return (
			<div className={classStr} >
				<div className="panel-body">
					<div className="settupFieldBlock">
						<label className="col-xs-3 col-sm-3 col-md-3 col-lg-3">{this.props.username}</label>
						<input className="col-xs-9 col-sm-9 col-md-9 col-lg-9" id={this.props.username} type="text"/>
					</div>
					<div className="settupFieldBlock">
						<label className="col-xs-3 col-sm-3 col-md-3 col-lg-3">{this.props.apiKey}</label>
						<input className="col-xs-9 col-sm-9 col-md-9 col-lg-9" id={this.props.apiKey} type="text"/>
					</div>
					<div className="settupFieldBlock">
						<label className="col-xs-3 col-sm-3 col-md-3 col-lg-3">{this.props.authDomain}</label>
						<input className="col-xs-9 col-sm-9 col-md-9 col-lg-9" id={this.props.authDomain} type="text"/>
					</div>
					<div className="settupFieldBlock">
						<label className="col-xs-3 col-sm-3 col-md-3 col-lg-3">{this.props.databaseURL}</label>
						<input className="col-xs-9 col-sm-9 col-md-9 col-lg-9" id={this.props.databaseURL} type="text"/>
					</div>
					<div className="settupFieldBlock">
						<label className="col-xs-3 col-sm-3 col-md-3 col-lg-3">{this.props.storageBucket}</label>
						<input className="col-xs-9 col-sm-9 col-md-9 col-lg-9" id={this.props.storageBucket} type="text"/>
					</div>
					<div className="settupFieldBlock">
						<label className="col-xs-3 col-sm-3 col-md-3 col-lg-3">{this.props.messagingSenderId}</label>
						<input className="col-xs-9 col-sm-9 col-md-9 col-lg-9" id={this.props.messagingSenderId} type="text"/>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = SetupInfo;