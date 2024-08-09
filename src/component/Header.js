import React, { useEffect } from 'react';
import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Images/logo.jpg';
import '../component/Header.css';

function Header() {
    const location = useLocation();

    useEffect(() => {
        document.body.style.overflowX = 'hidden';

        return () => {
            document.body.style.overflowX = 'auto';
        };
    }, []);

    return (
        <Navbar className='navbar' expand="lg" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} style={{ marginTop: '-10px' }} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='link mr-auto'>
                        <Nav.Link className={location.pathname === '/' ? 'active' : ''} as={Link} to='/' style={{ color: location.pathname === '/' ? ' #2c4fec' : '' }}>HOME</Nav.Link>
                        <Nav.Link className={location.pathname === '/about' ? 'active' : ''} as={Link} to='/about' style={{ color: location.pathname === '/about' ? ' #2c4fec' : '' }}>ABOUT US</Nav.Link>
                        <Nav.Link className={location.pathname === '/courses' ? 'active' : ''} as={Link} to='/courses' style={{ color: location.pathname === '/courses' ? ' #2c4fec' : '' }}>COURSES</Nav.Link>
                        <NavDropdown title="PAGES" id="DD" className={(location.pathname === '/Blog' || location.pathname === '/faq') ? 'active' : ''} style={{ color: (location.pathname === '/Blog' || location.pathname === '/faq') ? '#2E8BC0' : '' }}>
                            <NavDropdown.Item as={Link} to='/Blog'>BLOG</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/faq'>FAQ</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className={location.pathname === '/contact' ? 'active' : ''} as={Link} to='/contact' style={{ color: location.pathname === '/contact' ? '#2c4fec' : '' }}>CONTACT US</Nav.Link>
                        <Nav.Link className={location.pathname === '/login' ? 'active' : ''} as={Link} to='/login' style={{ color: location.pathname === '/login' ? '#2c4fec' : '' }}>LOGIN</Nav.Link>
                    </Nav>
                    <Nav className='ml-auto'>
                        <Button as={Link} to='/signup' variant="primary">SIGN UP</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;