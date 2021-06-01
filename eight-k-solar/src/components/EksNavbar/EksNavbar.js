import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './style.css';

export default function EksNavbar() {
    return (
        <div  className="sticky-top">
            <div className="eks-navbar-head">
                <a className="eks-nav-logo navbar-brand" href="#"><img className="img-fluid" src="./assets/img/transparent_logo.png" /></a>
            </div>
            <Navbar className="eks-navbar" collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="/">Get a Free Quote</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/about">Why 8K?</Nav.Link>
                        <Nav.Link href="/benefits">Solar Benefits</Nav.Link>
                        <Nav.Link href="/gallery">Installs Gallery</Nav.Link>
                        <Nav.Link href="/testimonials">Testimonials</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
