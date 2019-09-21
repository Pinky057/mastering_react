import React, {Component} from 'react';

class SearchBar extends Component {
    state={term:''};
    oInputChange=(event)=>{
        this.setState({term:event.target.value});

    };
    onFormSubmit=(event)=>{
       event.preventDefault();
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form
                    onSubmit={this.onFormSubmit}
                    className="ui form">

                    <div className="field">
                        <label>Video Search</label>

                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.oInputChange}
                        />
                    </div>
                </form>

            </div>
        );
    }
}

export default SearchBar;