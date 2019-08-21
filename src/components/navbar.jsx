import React, {Component} from 'react';

//stateless functional component
const NavBar=({totalCounters})=>{  //simplifying by object destructuring
                                   // in functional components we add props as a parameter
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
};



export default NavBar;