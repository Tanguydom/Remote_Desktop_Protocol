import React from 'react';
import logo from '../../assets/images/rdp.png';
import { NavLink } from "react-router-dom";
import './Nav.css';

const Nav: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                <img src={logo} alt="Logo" className="navbar__logo" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/introduction">Introduction</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/type-attack">Types of Known Attacks</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/demonstration">Demonstration</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/security-measures">Security Measures</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/others-protocols">Other Protocols</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/analyse">Results Analysis</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/conclusion">Conclusion</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
