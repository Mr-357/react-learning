import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component{
	constructor(props){
		super(props);
		this.state = { time : new Date()};
	}

	tick(){
		this.setState({time: new Date()});
	}

	componentDidMount(){
		this.timerID = setInterval(()=>this.tick(),1000);
	}

	componentWillUnmount(){
		clearInterval(this.timerID);
	}

	render(){
		return (
			<div>
				<h3 onClick={()=>alert("clicked")}>Hello World! Number: {this.props.number}, Time:{this.state.time.toLocaleTimeString()}</h3>
			</div>
		);
	}
}


ReactDOM.render(
	<Hello number="5" />,
	document.getElementById('root')
);