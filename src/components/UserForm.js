import React, {Component} from 'react';

class UserForm extends Component {
    state={
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        occupation:'',
        city:'',
        bio:''

    };
    //proceed to the next step

    nextStep=()=>{
        const{step}=this.state;
        this.setState({
            step:step+1
        });
    };

    //going back to previous step

    prevStep=()=>{
        const{step}=this.state;
        this.setState({
            step:step-1
        });
    };

    //handle fields change

    handleChange=()=>{

    };

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default UserForm;