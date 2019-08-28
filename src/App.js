import React, {Component} from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginFrom from "./components/loginFrom";
import RegisterFrom from "./components/registerFrom";
import MovieFrom from "./components/movieFrom";
import './App.css';


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <main className="container">
                    <Switch>

                        <Route path="/register" component={RegisterFrom}></Route>
                        <Route path="/login" component={LoginFrom}></Route>
                        <Route path="/movies/:id" component={MovieFrom}></Route>
                        <Route path="/movies" component={Movies}></Route>
                        <Route path="/customers" component={Customers}></Route>
                        <Route path="/rentals" component={Rentals}></Route>
                        <Route path="/notFound" component={NotFound}></Route>
                        <Redirect from="/" exact to="/movies"/>
                        <Redirect to="/not-found"/>
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
