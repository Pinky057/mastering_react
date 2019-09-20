import React, {Component} from 'react';

class SearchBar extends Component {
    state={term:''};

    onInputChane=(event)=>{
        this.setState({term: event.target.value});

    };
    onFormSubmit=(event)=>{
        event.preventDefault();
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>video search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChane}
                        />
                    </div>
                </form>

            </div>
        );
    }
}

export default SearchBar;