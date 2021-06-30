import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSearch, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import './NavbarTop.css';



const NavbarTop = () => {

    return (
        <div className="row pb-2 pt-4 px-1">

            <div className="col-md-4">
                <Link class="navbar-brand d-flex justify-content-center" style={{ fontSize: '30px' }} to="/">
                    <h1>
                        <span className="text-dark fw-bold">Abc </span> <span className="text-light fw-bold">E-commerce</span>
                    </h1>
                </Link>
            </div>

            <div class="col-md-4 mt-2">
                <div class="input-group d-flex justify-content-center">
                    <select name="" id="" className="form-select form-select-sm">
                        <option value="All">All</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                    <div class="w-75">
                        <input type="search" class="form-control" style={{ height: '45px' }} placeholder="I'm shopping for..." />
                    </div>
                    <button type="button" class="btn btn-dark">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>

            <div className="col-md-4 d-flex justify-content-end">
                <FontAwesomeIcon icon={faHeart} class="btn hover mt-1" style={{ width: '55px' }} />
                <FontAwesomeIcon icon={faShoppingBag} class="btn hover m-1" style={{ width: '55px' }} />
                <FontAwesomeIcon icon={faUser} class="btn" style={{ width: '55px' }} />

                <h5 className="me-3">
                    <Link class="navbar-brand" to="/">
                        <span className="text-dark btn btn-sm hover">Login</span>
                    </Link>

                    <br />
                    <Link class="navbar-brand" to="/">
                        <span className="text-dark btn btn-sm hover">Register</span>
                    </Link>
                </h5>

            </div>

        </div>
    );
};

export default NavbarTop;
