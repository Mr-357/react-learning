import getToken  from '../services/user-service'
export const login_success = user => ({
    type: 'LOGIN_SUCCESS',
    user
});

export const login_error = error => ({
    type: 'LOGIN_ERROR',
    error
});

export const login_request = () => ({
    type: 'LOGIN_REQUEST'
});

export const logout = () => ({
    type: 'LOGOUT'
});

function fetchToken(username,password){
    
    return dispatch => {
       getToken(username,password).then(data =>{
          
           if(!(data instanceof Error)){
               console.log(data)
            localStorage.setItem('token',data.access_token);
            let response = {};
            response.user=username;
            dispatch(login_success(response));
           }
       
        else
        {
            dispatch(login_error(data));
        }

       });
    }
}

export function login(username,password){
    
   return (dispatch) => {
       dispatch(fetchToken(username,password));
   }
}