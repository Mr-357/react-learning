import axios from 'axios';

axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.baseURL = 'http://localhost:1357';

export default function request(method,url,params){
    const token = localStorage.getItem('token');
    const headers = {
        'Authorization':'Bearer '+token
    }
    const config = {
        method,
        url,
        body:params||{},
        headers
    }
    return axios.request(config);
}