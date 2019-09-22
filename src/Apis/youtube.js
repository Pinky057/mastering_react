import axios from 'axios';

const KEY='AIzaSyDxTdHgKi69o-XjpepgAP4zcyCNl06-1rw';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});