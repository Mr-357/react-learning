import request from '../services/cars-service';

export const fetch_success = list =>({
    type:'FETCH_SUCCESS',
    list:list
});

export const fetch_error = error =>({
    type:'FETCH_ERROR',
    error:error
});

export const fetch = () => ({
    type:'FETCH'
})

export const edit = () =>({
    type:'EDIT'
});

export const edit_success = car =>({
    type:'EDIT_SUCCESS',
    car:car
});

export const edit_error = error =>({
    type:'EDIT_ERROR',
    error:error
});

export const _delete = () =>({
    type:'DELETE'
});

export const delete_error = error =>({
    type:'DELETE_ERROR',
    error:error
});

export const delete_success = () =>({
    type:'DELETE_SUCCESS'
});

export const get = () =>({
    type:'GET'
});

export const get_error = error =>({
    type:'GET_ERROR',
    error:error
});

export const get_success = car =>({
    type:'GET_SUCCESS',
    car:car
});