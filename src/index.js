import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter,Switch,Route } from 'react-router-dom';
import './app/components/Navigation/nav.css'
import Navigation from './app/components/Navigation/Navigation.js'

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



const App = () => (
	<div>
		<Navigation></Navigation>
		<div>
		<Switch>
			<Route exact path ="/">
				<Hello></Hello>
				{/* home component */}
			</Route>
			<Route path="/cars">
				{/* cars list component */}
			</Route>
			<Route path="*">
				{/* 404 page */}
			</Route>
		</Switch>
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