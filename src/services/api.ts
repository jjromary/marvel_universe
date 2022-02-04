import axios from 'axios'
import md5 from 'md5'

const publicKey = '50afce576b935e7a5c981f0fe0b6ca40';
const secretKey = '08d916721d25dbad094267c77ef8a1b7adf7b831';

const time = Number(new Date())

const hash = md5(time + secretKey + publicKey);

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params:{
        ts: time,
        apikey: publicKey,
        hash
    }
})

export default api;