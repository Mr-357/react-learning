import React, { useEffect, useState } from 'react';
import { login } from '../../actions/userActions';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    let username, password;
    const history = useHistory();
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [loginUser, setUser] = useState('');
    function handleSubmit() {
        if (!username.value.trim()) {
            //empty username
            console.log('exit u')
            return;
        }
        if (!password.value.trim()) {
            //empty password
            console.log('exit p')
            return;
        }
        // if(error){
        //     //show error
        //     console.log('exit e')
        //     return;
        // }
        setUser({ username: username.value, password: password.value });

    }
    function goHome() {
        history.push('/');
    }


    useEffect(() => {
        if (loginUser != '') {
            dispatch(login(username.value, password.value));
        }
        if (user !== '') {
            goHome();
        }
    });
    
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}>
                <label>Username:</label>
                <input type='text' ref={
                    node => { username = node; }
                }></input>
                <label>Password:</label>
                <input type='password' ref={
                    node => { password = node; }
                }></input>
                <button type='submit'>Login</button>
            </form>
            <Link to='/register'>Register</Link>
        </div>
    );
}

export default Login;