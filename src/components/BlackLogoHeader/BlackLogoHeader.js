import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SelectPlaceContext } from '../../App';
import brandImg from '../../images/Logo.png'

const BlackLogoHeader = () => {
    const [selectedPlace, setSelectedPlace, loggedInUser, setLoggedInUser] = useContext(SelectPlaceContext);
    return (
        <div>
            <Navbar className='pt-4 navbar' expand="lg">
                <Navbar.Brand className='mr-5'>
                    <Link to="/home"><img src={brandImg} alt="brand-img" /></Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-link align-items-md-center ml-auto">
                        <Link to="/news" className="mr-5 text-dark font-weight-bold">News</Link>
                        <Link to="/destination" className="mr-5 text-dark font-weight-bold">Destination</Link>
                        <Link to="/blog" className="mr-5 text-dark font-weight-bold">Blog</Link>
                        <Link to="/Contact" className="mr-5 text-dark font-weight-bold">Contact</Link>
                        {loggedInUser.email || loggedInUser.name ? <Link className="btn btn-dark">{loggedInUser.name}</Link> : <Link to="/login" className="btn btn-sm btn-warning px-4 py-2 font-weight-bold">Login</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default BlackLogoHeader;