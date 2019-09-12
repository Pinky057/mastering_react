import React, {Component} from "react";
import ReactDom from "react-dom";


class App extends Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            positionError => console.log(positionError)
        );

        return <div>hi there !!!</div>
    }
}


ReactDom.render(
    <App/>,
    document.querySelector('#root')
);