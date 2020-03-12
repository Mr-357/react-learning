const users = (state = {user:''}, action) => {

    switch(action.type){
        case 'LOGIN_SUCCESS':
            return action.user;
        case 'LOGIN_ERROR':
            return {user: ''};
        case 'LOGOUT':
            return {user:''};
        default:
            return state;
    }
}

export default users;