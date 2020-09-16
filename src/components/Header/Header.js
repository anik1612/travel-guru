import React, { useState } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import brandImg from '../../images/brand-logo.png'
import './Header.css'
import 'font-awesome/css/font-awesome.min.css';

const Header = () => {

    return (
        <div className='container'>
            <Navbar className='pt-4 navbar' expand="lg">
                <Navbar.Brand className='mr-5'>
                    <Link to="/home"><img src={brandImg} alt="brand-img" /></Link>
                </Navbar.Brand>
                <Form inline>
                    <FormControl style={{ width: "300px", background: 'none', fontFamily: "FontAwesome"}} type="text" placeholder="&#xf002;    Search Your Destination" className="mr-5 text-white"/>
                </Form>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-link d-flex align-items-center">
                        <Link className="mr-5 text-white font-weight-bold " to="/news">News</Link>
                        <Link className="mr-5 text-white font-weight-bold" to="/destination">Destination</Link>
                        <Link className="mr-5 text-white font-weight-bold" to="/blog">Blog</Link>
                        <Link className="mr-5 text-white font-weight-bold" to="/Contact">Contact</Link>
                        <Button className="btn btn-sm btn-warning px-4 py-2 font-weight-bold">Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;