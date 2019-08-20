import React, {Component} from 'react';

class Movies extends Component {
    state={}
    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                </tr>
                </thead>
            </table>
        );
    }
}

export default Movies;