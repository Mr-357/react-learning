import React from 'react';
import { connect } from 'react-redux';
import {login} from '../../actions/userActions';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

const Login = ({user,dispatch}) => {
    let username,password,error;
    const history = useHistory();
    function goHome(){
        history.push('/');
    }
    if(user!==''){
        goHome();
    }
    return(
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                if(!username.value.trim()){
                    //empty username
                    console.log('exit u')
                    return;
                }
                if(!password.value.trim()){
                    //empty password
                    console.log('exit p')
                    return;
                }
                if(error){
                    //show error
                    console.log('exit e')
                    return;
                }
                dispatch(login(username.value,password.value));

            }}>
            <label>Username:</label>
            <input type='text' ref={
                node=>{username=node;}
            }></input>
            <label>Password:</label>
            <input type='password' ref={
                node=>{password=node;}
            }></input>
            <button type='submit'>Login</button>
            </form>
            <Link to='/register'>Register</Link>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Login);