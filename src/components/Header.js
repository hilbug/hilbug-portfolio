import React from "react";
import { Link } from "react-router-dom";
//import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <header className="mb-5">
        <div className="collapse nav-bar" id="navbarHeader">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-7 py-4">
                        <h4 className="text-white">About</h4>
                        <p className="text-white">After 13 years on the operations side of healthcare technology, Hilary is
                            currently exploring a career change to full stack developer. She is on track to complete the
                            UNH Coding Bootcamp in November 2020. When not studying or rubberducking, you can find her
                            spending time with family, delving into a good book, or keeping up with the latest Royal
                            gossip.</p>
                    </div>
                    <div className="col-sm-4 offset-md-1 py-4">
                        <h4 className="text-white">Contact</h4>
                        <ul className="list-unstyled">
                            <li><a href="https://github.com/hilbug" className="text-white"><i className="fab fa-github-square fa-3x"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/hferraro/" className="text-white"><i className="fab fa-linkedin fa-3x"></i></a></li>
                            <li>
                                <a className="text-white" href="#mailgo" data-address="hil.ferraro" data-domain="gmail.com"
                                    data-subject="Portfolio Contact"
                                    data-body="Contacting you from your Portfolio site">
                                    <i className="fas fa-envelope-square fa-3x"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="navbar navbar-dark nav-bar shadow-sm">
            <div className="container d-flex justify-content-between">
                <Link to="/" className="navbar-brand"><strong>Intro</strong></Link>
                <Link to="/portfolio" className="navbar-brand"><strong>Portfolio</strong></Link>
                <Link to="/resume" className="navbar-brand"><strong>Resume</strong></Link>
                <button className="navbar-toggler btn btn-outline-dark border" type="button" data-toggle="collapse"
                    data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
    </header>
    );
}

export default Header;

// from previous portfolio