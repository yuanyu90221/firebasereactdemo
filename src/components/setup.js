import React from 'react';
import SetupInfo from './setupinfo.js';
import $ from 'jquery';
import jQuery from 'jquery';
class Setup extends React.Component{
	constructor(props){

		super(props);
		window.$ = $;
		window.jQuery = jQuery;
		let classStr =  this.props.className + " margin_0px  padding_0px";
        let me = this;
        
        let storage = props.localStorage;
		this.state = {
          	isShow: false,
          	apiKey: "",
        	authDomain: "",
        	databaseURL: "",
        	storageBucket: "",
        	messagingSenderId: "",
        	name: "",
        	storage: storage,
        	handleDataFirstLoad:props.handleDataFirstLoad,
        	handleCellDataChange:props.handleCellDataChange
		};
	}
	handleOnClickShow(e){
		this.setState({isShow:true});
	}
	handleOnClickHide(e){
		this.setState({isShow:false});
	}
	handleOnClickSaveSetting(e){
		let {storage} = this.state;
		this.setState({name: $("#name").val()});
		this.setState({apiKey: $("#apiKey").val()});
		this.setState({authDomain: $('#authDomain').val()});
		this.setState({databaseURL: $('#databaseURL').val()});
		this.setState({storageBucket: $('#storageBucket').val()});
		this.setState({messagingSenderId: $('#messagingSenderId').val()});
		storage.setItem('name',$("#name").val())
		storage.setItem('apiKey',$("#apiKey").val());
		storage.setItem('authDomain', $('#authDomain').val());
		storage.setItem('databaseURL', $('#databaseURL').val());
		storage.setItem('storageBucket',  $('#storageBucket').val());
		storage.setItem('messagingSenderId',$('#messagingSenderId').val());
		let config = {
			apiKey: storage.getItem('apiKey'),
		    authDomain: storage.getItem('authDomain'),
		    databaseURL: storage.getItem('databaseURL'),
		    storageBucket: storage.getItem('storageBucket'),
		    messagingSenderId: storage.getItem('messagingSenderId')
		};
		window.config = config;
		let firebase = window.firebase;
        var me = this;
		try{
			if(window.database==null){
				firebase.initializeApp(config);
				window.database = firebase.database();
				window.cellsRef = database.ref('cells/');				
				window.cellsRef.on('child_changed', function(snapshot){
					var status = snapshot.val();
					// console.log('this is current value:');
					// console.log(status);
				    me.state.handleCellDataChange({key:snapshot.key, status});
				});
				window.cellsRef.on('child_added', function(snapshot){
					var status = snapshot.val();
					me.state.handleDataFirstLoad({key:snapshot.key,status});
				});
			}
			else{
				console.log('window.database is not null');
			}
		}
		catch(e){
			console.log(e.toString());
		}
		
		
	}

	render(){
		
		let classStr =  this.state.classStr;
        let username="name",
            apiKey="apiKey",
            authDomain="authDomain",
            databaseURL="databaseURL",
            storageBucket="storageBucket", 
            messagingSenderId ="messagingSenderId";
		
		return (
			<div className={classStr} >
				<div className="btn btn-info" id={this.props.showSetting} onClick={this.handleOnClickShow.bind(this)}>{this.props.showSetting}</div>
				<div className="btn btn-danger" id={this.props.hideSetting} onClick={this.handleOnClickHide.bind(this)}>{this.props.hideSetting}</div>
				<div className="btn btn-warning" id={this.props.saveSetting} onClick={this.handleOnClickSaveSetting.bind(this)}>{this.props.saveSetting}</div>
				{this.state.isShow&&<SetupInfo 
										username={username} 
										apiKey={apiKey} 
										authDomain={authDomain} 
										databaseURL={databaseURL} 
										storageBucket={storageBucket} 
										messagingSenderId={messagingSenderId}
										localStorage={this.state.storage}
							        />}
			</div>
		);
	}
}

module.exports = Setup;