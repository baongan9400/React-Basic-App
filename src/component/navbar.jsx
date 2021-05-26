import React, { Component } from 'react';

//Stateless Functional Component
const NavBar = ({totalCounters}) => {
    return ( 
        <nav className="navbar navbar-light" style={{background: '#e3f2fd'}}>
        <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Total: {totalCounters}</span>
        </div>
        </nav>
        );
}

export default NavBar;