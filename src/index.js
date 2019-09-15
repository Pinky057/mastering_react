import React, {Component} from "react";
import ReactDom from "react-dom";


class App extends Component {

    constructor(props){
        super(props);
        this.state={lat:null};

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat:position.coords.latitude});
            },
            positionError => console.log(positionError)
        );
    }

    render() {


        return <div>Latitude:{this.state.lat}</div>
    }
}


ReactDom.render(
    <App/>,
    document.querySelector('#root')
);