import jasonPlaceholder from "../apis/jasonPlaceholder";

export const fetchPosts=async ()=>{
    //bad approach
    const response= await jasonPlaceholder.get('/posts');
    return{
        type:'FETCH_POSTS',
        payload:response
    };
};