import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons';



const NavbarTop = () => {

    return (
        <div className="row p-4" style={{ backgroundColor: 'orange' }}>

            <div className="col-md-4">
                <h1>
                    <Link class="navbar-brand fw-bold" style={{ fontSize: '40px' }} to="/">
                        <span className="text-dark">Abc</span> <span className="text-light">E-commerce</span>
                    </Link>
                </h1>
            </div>

            <div class="col-md-4">
                <div class="input-group d-flex justify-content-center">
                    <select name="" id="" className="dropdown">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                    <div class="w-75">
                        <input type="search" class="form-control" placeholder="I'm shopping for..." />
                    </div>
                    <button type="button" class="btn btn-dark">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>

            <div className="col-md-4 d-flex justify-content-center">
                <h3>asdaas</h3>
            </div>

        </div>
    );
};

export default NavbarTop;
