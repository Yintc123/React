import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import DropdownComp from "../DropdownComp/DropdownComp";
import "./NavBar.css";

const NavBar = () => {
    // const learning = {

    // }

    const debugging = [
        {
            "name":"Error-01",
            "pages":[
                {"pageName":"Page1", "path":"/React/page1"},
                {"pageName":"Page2", "path":"/React/page2"},
                {"pageName":"Page3", "path":"/React/page3"},
            ]
        },
    ];

    return (
        <div id="navBar">
            <Navbar bg="aliceblue" expand="lg">
                <Container>
                    <Navbar.Brand href="/React/">HOME</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Learning" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Debugging" id="basic-nav-dropdown">
                                {debugging.map((error) => {
                                    return (
                                        <DropdownComp key={error.name} direction="end" name={error.name} pages={error.pages}/>
                                    )
                                })}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;