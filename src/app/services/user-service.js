const axios = require('axios').default;
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.baseURL = 'http://localhost:1357'
const client_id = 'test';
const client_secret = 'secret';


export default async function getToken(username, password) {
    const login = {
        'client_id': client_id,
        'client_secret': client_secret,
        'grant_type': 'password',
        'password': password,
        'username': username
    };

   let req = (await axios.post('/login', login)).data;
   return req;
}