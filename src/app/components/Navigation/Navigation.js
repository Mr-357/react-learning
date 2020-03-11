import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import LoginUser from '../../containers/LoginUser'
function Navigation() {
	
	return (
		<nav>
			<ul>
				<li className="navItem"><Link to="/">Home</Link></li>
				<li className="navItem"><Link to="/cars">Cars</Link></li>
			
			<li className="navItem login"><LoginUser></LoginUser></li>
			</ul>
		</nav>
	);
};

export default Navigation;