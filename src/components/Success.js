import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

class Success extends Component {
    //its calls the next step when the continue button is clicked
    continue=e=>{
        e.preventDefault();
        //Process From//

        this.props.nextStep();
    }
    back=e=>{
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar
                        title="Success"
                    />
                    <h1>Thank You for the Submission </h1>
                    <p>We Will Notify you with an E-mail for further instruction.</p>

                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Success;