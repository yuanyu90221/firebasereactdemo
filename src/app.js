import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Hello from './components/block.js'

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {

		};
	}
	render(){
        let {arrayContent} = this.props;
        console.log(arrayContent);
        const result = arrayContent.map(function(element){
        	return <Hello key={element.text} className="col-xs-4 col-sm-4 col-md-4 col-lg-4 margin_0px" text={element.text}/>
        });
        return(
         	<div className={this.props.className}>
         		{result}
         	</div>
        );
	}
}

var arrayContent = [{
	"text":"0x0"
},
{
	"text":"0x1"
},
{
	"text":"0x2"
},
{
	"text":"1x0"
},
{
	"text":"1x1"
},
{
	"text":"1x2"
},
{
	"text":"2x0"
},
{
	"text":"2x1"
},
{
	"text":"2x2"
}
];
ReactDOM.render(
				<App className="row col-sm-12 col-md-12 col-lg-12 margin_0px padding_0px" arrayContent={arrayContent}/>
				, 
				document.getElementById('hello'));