import React, { useContext } from 'react';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import brandImg from '../../images/brand-logo.png'
import './Header.css'
import 'font-awesome/css/font-awesome.min.css';
import { SelectPlaceContext } from '../../App';

const Header = () => {
    const [selectedPlace, setSelectedPlace, loggedInUser, setLoggedInUser] = useContext(SelectPlaceContext);

    return (
        <div className='container'>
            <Navbar className='pt-4 navbar' expand="lg">
                <Navbar.Brand className='mr-5'>
                    <Link to="/home"><img src={brandImg} alt="brand-img" /></Link>
                </Navbar.Brand>
                <Form inline>
                    <FormControl style={{ width: "300px", background: 'none' }} type="text" placeholder="&#xf002;  Search Your Destination" className="mr-5 text-white header-form" />
                </Form>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-link align-items-md-center">
                        <Link to='/news' className="mr-5 text-white font-weight-bold ">News</Link>
                        <Link to='/destination' className="mr-5 text-white font-weight-bold">Destination</Link>
                        <Link to='/blog' className="mr-5 text-white font-weight-bold">Blog</Link>
                        <Link to='/contact' className="mr-5 text-white font-weight-bold">Contact</Link>
                        {loggedInUser.email || loggedInUser.name ? <Link onClick={() => setLoggedInUser({})} className="btn btn-success">{loggedInUser.name ? loggedInUser.name.split(' ')[0] + '/Logout' : loggedInUser.email.split(' ')[0] + '/Logout'}</Link> : <Link to="/login" className="btn btn-sm btn-warning px-4 py-2 font-weight-bold">Login</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;