import React, {Component} from 'react';
import axios from "axios";
import SearchBar from "./SearchBar";


class App extends Component {
    onSearchSubmit(term){
       axios.get('https://api.unsplash.com/search/photos', {
           params:{query: term},
           headers:{
               Authorization:
                   'Client-ID 1ffe2d23f8aa9097b8d985086170637bea838eebc6de5181363221ba5920ee89'
           }

       }).then((response)=>{      //working with promise
           console.log(response.data.results);
       })
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '20px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;