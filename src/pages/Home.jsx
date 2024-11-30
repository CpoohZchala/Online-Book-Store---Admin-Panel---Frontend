import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';


const Home = () => {
    const image = require("../images/BookStore.png"); // Correct image path
    return (
        <div className="Home-Page bg-dark text-white container-fluid">
            <div className="row" style={{ height: "91.5vh" }}>
                {/* Left Column */}
                <div className="col-12 col-lg-6 d-flex justify-content-center align-items-start flex-column left-column" style={{ height: "100%" }}>
                <h2 className="text-center" style={{ fontSize: "70px" }}>BOOK STORE</h2>
                <h2 className="text-center" style={{ fontSize: "50px" }}>FOR YOU</h2>
                <h6 style={{ fontSize: "15px", color:'silver'}}>checkout The Books From Here.</h6>
                    <Link  to = "/books" className="viewBook">View Books</Link>
                </div>

                {/* Right Column (Image) */}
                <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center flex-column" style={{ height: "100%" }}>
                    <img src={image} alt="Book Store" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default Home;
