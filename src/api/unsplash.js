import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization:
            'Client-ID 1ffe2d23f8aa9097b8d985086170637bea838eebc6de5181363221ba5920ee89'
    }
});