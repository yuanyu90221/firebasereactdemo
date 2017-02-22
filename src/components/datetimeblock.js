import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import jQuery from 'jquery';
import Moment from 'moment';
// var DateTime = require('react-datetime');

// class DateTimeBlock extends React.Component{
// 	constructor(props){
// 		super(props);
// 		window.$ = $;
// 		window.jQuery = jQuery;
// 		this.state = {
// 			open: false,
// 			starttime: DateTime.moment().format('YYYY-MM-DD HH:mm:ss'),
// 			endtime: DateTime.moment().format('YYYY-MM-DD HH:mm:ss')
// 		};
// 	}

// 	handleChange(newDate){
// 		// console.log("newStartDate", newDate._d);
// 		let currentDate = Moment(newDate._d).format('YYYY-MM-DD HH:mm:ss');
// 		let {endtime} = this.state;
// 		console.log("newStartDate",currentDate);

// 		this.setState({starttime: currentDate});
// 		let beforetime = Moment(currentDate);
// 		let aftertime = Moment(endtime);
		
// 		if(beforetime.isAfter(aftertime)){
// 			this.setState({endtime:currentDate});
// 		}
		
// 	}
//     handleToChange(newDate){
// 		let {starttime} = this.state;	
// 		let currentDate = Moment(newDate._d).format('YYYY-MM-DD HH:mm:ss');
		
// 		let beforetime = Moment(starttime);
// 		let currenttime = Moment(currentDate);
// 		if(currenttime.isAfter(beforetime)){
// 			this.setState({endtime: currentDate});
// 		}
// 	}
// 	handleOnFocus(e){
// 		console.log('onFocus');
// 	}

// 	// handleStartOnBlur(currentDate){
// 	// 	console.log('onBlur');
// 	// 	// console.log(currentDate);
// 	// 	// this.setState({starttime:currentDate});
// 	// }


// 	handleToValid(current){
// 		let {starttime} = this.state;
// 		console.log('starttime', starttime);
//         let beforetime = Moment(starttime);
//         let beforeTok = Moment(starttime).format('YYYY-MM-DD HH:mm:ss').split(" ");
//         let currentTok = current.format('YYYY-MM-DD HH:mm:ss').split(" ");
// 		return current.isAfter(beforetime)||(beforeTok[0]==currentTok[0]&&beforeTok[1]<currentTok[1]);
// 	}
//     handleSearch(e){
//     	let {starttime, endtime} = this.state;
//     	let startTok= starttime.split(" ");
//     	let endTok = endtime.split(" ");
//     	let outStarttime = startTok[0]+"_"+startTok[1];
//     	let outEndtime = endTok[0]+"_"+endTok[1];
//     	console.log("Search criteria: startime: ",outStarttime,", endtime: " ,outEndtime );
//     }
// 	render(){
		
// 		let {endtime, starttime} = this.state;

// 		return (<div className="form-inline">
// 					{<div className="form-group row">
// 					<label className="col-sm-3 col-md-3 col-lg-3 col-form-label">starttime</label><DateTime id="formGroupExampleInput" className="col-sm-3 col-md-3 col-lg-3" dateFormat="YYYY-MM-DD" timeFormat="HH:mm:ss" closeOnSelect={true}
// 					 value={starttime} onChange={this.handleChange.bind(this)}/>
// 					</div>}
// 					{<div className="form-group row">
// 					<label className="col-sm-3 col-md-3 col-lg-3 col-form-label">dentime</label><DateTime id="formGroupExampleInput1" className="col-sm-3 col-md-3 col-lg-3" dateFormat="YYYY-MM-DD" timeFormat="HH:mm:ss" closeOnSelect={true}
// 					value={endtime} onChange={this.handleToChange.bind(this)} isValidDate={this.handleToValid.bind(this)}

// 					/>
// 					<button className="btn btn-info" onClick={this.handleSearch.bind(this)}>Search</button>
// 		       		</div>}
// 		       </div>);
// 	}


// }

// module.exports = DateTimeBlock;