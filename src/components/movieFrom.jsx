import React from "react";

const MovieFrom =({match}) => {
    return <h1>Movie From{match.params.id}</h1>;


}

export default MovieFrom;