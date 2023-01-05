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
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to='/stats'>
            <Nav.Link>Stats</Nav.Link>
            </LinkContainer>
            {token?<Nav.Link onClick={logout}>Logout</Nav.Link>:null}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;