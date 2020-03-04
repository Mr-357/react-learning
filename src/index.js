import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter,
	Switch,
	Route,
	Link } from 'react-router-dom';

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

let int = 0;
function inc(){
	int++;
}
const App = () => (
	<div>
		<nav>
			<Link to="/test" onClick={inc}>Test</Link>
		</nav>
		<div>
			<Route path="/test" //component={Hello}></Route>
				render={(props)=><Hello {...props} number={int} ></Hello>}
			></Route>
		</div>
	</div>
);

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
	,
	document.getElementById('root')
);