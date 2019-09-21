import React, {Component} from 'react';
import SearchBar from "./SearchBar";

class App extends Component {
    onTermSubmit=term=>{
        console.log(term);
    };


    render() {
        return (
            <div className="ui container">
               <SearchBar
               onFormSubmit={this.onTermSubmit}
               />
            </div>
        );
    }
}

export default App;