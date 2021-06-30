import React from 'react';
import NavbarTop from './NavbarTop';
import { Link } from "react-router-dom";


const Navbar = () => {

    return (
        <div style={{ backgroundColor: 'orange' }}>
            <NavbarTop></NavbarTop>
            <hr />
            
            <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'orange' }}>
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/home">
                                    Home
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="#">
                                    Features
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="#">
                                    Pricing
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="#" tabindex="-1" aria-disabled="true">
                                    Disabled
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li>asdf</li>
                            <li>asdf</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
