import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import jQuery from 'jquery';
import Moment from 'moment';
import datetimepicker from 'jquery-datetimepicker';

class Mypicker extends React.Component{
	render(){
		return (<div>
			     <input type="text" id="startdatetime" />
			     </div>);
	}
};
class JDateTimeBlock extends React.Component{
	constructor(props){
		super(props);
		window.$ = $;
		window.jQuery = jQuery;
		this.state = {
			open: false,
			starttime: Moment().format('YYYY-MM-DD HH:mm:ss'),
			endtime: Moment().format('YYYY-MM-DD HH:mm:ss')
		};
	}
	componentDidMount(){
		let {starttime} = this.state;
		console.log($("#startdatetime"));
		$('#startdatetime').datetimepicker({
			format:'Y-m-d H:i:s',
   			formatTime:'H:i:s',
   			autoClose: true,
   			step:1,                      
   			showSecond: true,
   			closeOnDateSelect: true,
   			value: starttime,
   			onChangeDateTime:function(e){
     
     			console.log(Moment(e).format("YYYY-MM-DD h:mm:ss"));
     			$("#startdatetime").val(Moment(e).format("YYYY-MM-DD h:mm:ss"));
   			}
		});
	}
	render(){
		let {endtime, starttime} = this.state;
		return(<Mypicker />);
	}
}

module.exports = JDateTimeBlock;