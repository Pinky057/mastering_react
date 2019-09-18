import React, {Component} from "react";
import ReactDom from "react-dom";


class App extends Component {

    constructor(props){
        super(props);
        this.state={lat:null, errorMessage:''};

    }
componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        position => this.setState({lat:position.coords.latitude}),
        positionError => this.setState({errorMessage:positionError.message})
    );
}


    render() {
          if(this.state.errorMessage && !this.state.lat){
              return <div>Error:{this.state.errorMessage}</div>;
          }
        if(!this.state.errorMessage && this.state.lat){
            return <div>Latitude:{this.state.lat}</div>;
        }
        return <div>Loading</div>;
    }
}


ReactDom.render(
    <App/>,
    document.querySelector('#root')
);