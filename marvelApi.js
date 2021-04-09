import axios from "axios"

const marvelAPI = axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public/',
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000
})
marvelAPI.defaults.params ={
    apikey: 'e80a74ca2c9af4c46aa3ce69926e4f59',
    hash: 'a0a084aec5e13f3a4022b80ff50ee2ee',
    ts: 1
};
marvelAPI.interceptors.request.use(async config => {
    return config
}, function(error){
    return Promise.reject(error)
})
export default marvelAPI;