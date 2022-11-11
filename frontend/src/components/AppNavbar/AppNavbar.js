import React from "react";
import {
    Navbar,
    Nav,
    NavItem
} from "reactstrap";
import { Link }  from "react-router-dom";
import Logo from "./reading.png";

const AppNavbar = () => {
    return (
        <div>
            <Navbar dark color="success" className="shadow" container>
                <Nav className="me-auto d-flex flex-row align-items-center" navbar fill>
                    <NavItem className="m-2">
                        <Link className="text-light text-decoration-none fw-bold h5" to="/">
                            WhatHaveYouLearnt?
                            <img src={Logo} style={{ width: 50, height: 50 }}/> 
                        </Link>
                    </NavItem>
                    <NavItem className="m-2">
                        <Link className="text-light text-decoration-none" to="/create">Add Learning</Link>
                    </NavItem>
                    <NavItem className="m-2">
                        <Link className="text-light text-decoration-none" to="/">
                            Sign in
                        </Link>
                    </NavItem>                    
                    <NavItem className="m-2">
                        <Link className="text-light text-decoration-none" to="/">
                            Sign up
                        </Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default AppNavbar;
