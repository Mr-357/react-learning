import React from 'react';

const Register = (req) => {
    let username,password;
    let stat;
    switch(stat){
        case null: {

        }
    }
    return (<div>
        <form
        onSubmit={e=>{
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


            }}>
            <label>Username:</label>
            <input type='text' ref={
                node=>{username=node;}
            }></input>
            <label>Password:</label>
            <input type='password' ref={
                node=>{password=node;}
            }></input>
            <button type='submit'>Register</button>
            </form>
    </div>);
}

export default Register;