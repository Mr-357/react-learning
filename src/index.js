import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter,Switch,Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Navigation from './app/components/Navigation/Navigation.js';
import rootReducer from './app/reducers/rootReducer.js'
import userReducer from './app/reducers/userReducer';
import getToken from './app/services/user-service';//
import {login_success,logout} from './app/actions/userActions.js';
import thunkMiddleware from 'redux-thunk';
import Login from './app/components/Login/Login.js';
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

	 async testLogin(){
		let token;
		console.log(await getToken('asdf','asdf'));
	
	}

	testLogout(){
		store.dispatch(logout());
	}

	render(){
		return (
			<div>
				<h3 onClick={()=>alert("clicked")}>Hello World! Number: {this.props.number}, Time:{this.state.time.toLocaleTimeString()}</h3>
				<button onClick={()=>this.testLogin()}>TEST login</button>
				<button onClick={()=>this.testLogout()}>TEST logout</button>
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