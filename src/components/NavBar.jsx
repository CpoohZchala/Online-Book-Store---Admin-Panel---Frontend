import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Import the logo image

const NavBar = () => {
    return (
        <div style={{ borderBottom: "2px solid white" }}>
            <nav className="navbar navbar-expand-lg navbar-dark" p-2 style={{ backgroundColor: "#F57C51" }}>
                <div className="container">
                    {/* Logo instead of text */}
                    <a className="navbar-brand text-white" href="#">
                        <img src={logo} alt="BooksStore Logo" style={{ width: '60px', height: '60px', borderRadius: '10px' }} />
                        BooksStore
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <Link className="nav-item nav-link text-white active" to="/">
                                HOME
                            </Link>
                            <Link className="nav-item nav-link text-white active" to="/books">
                                BOOKS
                            </Link>
                            <Link className="nav-item nav-link text-white active" to="/addBooks">
                                ADD BOOKS
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
