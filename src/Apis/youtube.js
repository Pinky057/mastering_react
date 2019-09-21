import axios from 'axios';

const KEY='AIzaSyB9qY1QDIwh3FiIIpBxofrIxtzcc4jJCPM';

export default axios.create({
    baseURL:'https://www.gooleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key:KEY
    }
});