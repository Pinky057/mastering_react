import React, {Component} from 'react';

class SearchBar extends Component {
    state={term:''};
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>video search</label>
                        <input type="text"/>
                    </div>
                </form>

            </div>
        );
    }
}

export default SearchBar;