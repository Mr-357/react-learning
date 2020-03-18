import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter,Switch,Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Navigation from './app/components/Navigation/Navigation.js';
import rootReducer from './app/reducers/rootReducer.js'
import userReducer from './app/reducers/userReducer';
import request from './app/services/cars-service'
import thunkMiddleware from 'redux-thunk';
import Login from './app/components/Login/Login.js';
import Register from './app/components/Register/Register.js';
const store = createStore(userReducer,applyMiddleware(thunkMiddleware));
class Hello extends React.Component{  // placeholder, testing component, to be removed
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

	test(){
		console.log(request('GET','/cars/',localStorage.getItem('token')));
	}
	render(){
		return (
			<div>
				<h3 onClick={()=>alert("clicked")}>Hello World! Number: {this.props.number}, Time:{this.state.time.toLocaleTimeString()}</h3>
				<button onClick={()=>this.test()}>TEST</button>
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
			<Route path = '/login'>
				<Login></Login>
			</Route>
			<Route path = '/register'>
				<Register></Register>
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
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
	,
	document.getElementById('root')
);