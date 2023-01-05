import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom';
import './navigation.css'

function Navigation() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const image = localStorage.getItem('image')
  const username = localStorage.getItem('username')
  function logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('image')
    navigate('/login')
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand>Take Stairs</Navbar.Brand>
        </LinkContainer>
        {token?
        <div className='user'>
        <div className='nameDiv'>
        <p>{username}</p>
        </div>
        <img src={image} className='avatar'></img>
        </div>
        :null}
        {token? 
        <>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to='/'>
            <Nav.Link>Record Stairs</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/stats'>
            <Nav.Link>Total Stats</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/monthly'>
            <Nav.Link>Monthly Stats</Nav.Link>
            </LinkContainer>
           <Nav.Link onClick={logout}>Logout</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        </>
        :null}
      </Container>
    </Navbar>
  );
}

export default Navigation;