import axios from "axios";

const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key: 'AIzaSyDpsk4T7qFuXWj34rtmJgAmzJDjDgo95P8',
    },
});

export default request;