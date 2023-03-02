import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary container">
            <a className="navbar-brand" href="#">Crud React</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" aria-current="page" to="">Home</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link" aria-current="page" to="about">About</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link" aria-current="page" to="contact">Contact</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link" aria-current="page" to="edit">Edit</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link" aria-current="page" to="tiltle">SetContent</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link" aria-current="page" to="toggle">SetToggle</NavLink>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
}

export default Navbar