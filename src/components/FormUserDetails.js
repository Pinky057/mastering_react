import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormUserDetails extends Component {
    //its calls the next step when the continue button is clicked
    continue=e=>{
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const{values, handleChange}=this.props;

        return (
            <MuiThemeProvider>
                 <React.Fragment>
                     <AppBar
                         title="Enter User Details"
                     />
                     <TextField
                         hintText="Enter Your First Name"
                         floatingLabelText="First Name"
                         onChange={handleChange('firstName')}
                         defaultValue={values.firstName}
                     />
                     <br/>
                     <TextField
                         hintText="Enter Your Last Name"
                         floatingLabelText="Last Name"
                         onChange={handleChange('lastName')}
                         defaultValue={values.lastName}
                     />
                     <br/>
                     <TextField
                         hintText="Enter Your Email"
                         floatingLabelText="E-mail"
                         onChange={handleChange('email')}
                         defaultValue={values.email}
                     />
                     <br/>
                     <RaisedButton
                     label="Continue"
                     primary={true}
                     style={styles.button}
                     onClick={this.continue}
                     />

                 </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
const styles={
    button:{
        margin:15
    }
}

export default FormUserDetails;