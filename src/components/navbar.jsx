import React, {Component} from 'react';

//stateless functional component  //we cant use life cycle hooks in stateless functional component
const NavBar=({totalCounters})=>{  //simplifying by object destructuring
    console.log('NavBar Rendered');  // in functional components we add props as a parameter
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