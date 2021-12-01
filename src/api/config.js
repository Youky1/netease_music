import axios from 'axios';

const baseURL = 'https://music-api-five.vercel.app/';

const instance = axios.create({
    baseURL,
})

instance.interceptors.response.use(
    res => res.data,
    err => {
        console.log('网络错误： ', err);
    }
)

export {
    baseURL,
    instance
}