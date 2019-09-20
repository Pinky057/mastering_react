import axios from 'axios';

const KEY='AIzaSyDa6ocAHg7a8ueRToTRDFlVZ0qdQAFrM4U';

export default axios.create({
        baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
            part:'snippet',
        maxResults:5,
        key:KEY
    }
    });