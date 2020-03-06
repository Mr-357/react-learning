import React from 'react';
import { Link } from 'react-router-dom';
class Navigation extends React.Component{
	render(){
		return (
			<nav>
				<ul>
					<li className="navItem"><Link to="/">Home</Link></li>
					<li className="navItem"><Link to="/cars">Cars</Link></li>
				</ul>
				<span></span>
				{/* if!logged in, log in/register,else logout */}
			</nav>
		);
	}
}
export default Navigation;