import React, {Component} from 'react';

class LoginFrom extends Component {
    handleSubmit= e=>{
        e.preventDefault();
        console.log("Submitted");
    };


    render() {
        return (
            <div>
                <h1>Login</h1>
                <form  onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input id="username"   type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id= "password" type="text" className="form-control"/>
                    </div>
                </form>

              <button className="btn btn-primary">Login</button>

            </div>
        );
    }
}

export default LoginFrom;