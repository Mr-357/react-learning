import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const LoginButton = ({user, logout}) => {
    let button;
    const history = useHistory();
    function goHome(){
        history.push('/');
    }
	if(user!=='') {
		 button = <button onClick={e => {e.preventDefault();logout();goHome();}}>Logout{','+user}</button>
	} else {
		button = <Link to='/login'>Login</Link>
    }
    return (<span>
        {button}
    </span>);
}

LoginButton.propTypes = {
    
        user:PropTypes.string.isRequired
}

export default LoginButton;