import React from "react";

const MovieFrom =({match, history}) => {
    return(

      <div>
    <h1>Movie From{match.params.id}</h1>
          <button className="btn btn-primary"
                  onClick={()=>history.push("/movies")}>
              Save
          </button>
      </div>
    ) ;
}

export default MovieFrom;