import React from 'react';
import PropTypes from 'prop-types';
const Login = ({user}) => {
    let button;
	console.log(user);
	if(!user=='') {
		 button = <button>Logout</button>
	} else {
		button = <button>Login</button>
    }
    return (<span>
        {button},{user}
    </span>);
}

Login.propTypes = {
	user : PropTypes.string.isRequired
}

export default Login;