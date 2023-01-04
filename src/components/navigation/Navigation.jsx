import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
        <Navbar.Brand href="#home">Take Stairs</Navbar.Brand>
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
            <Nav.Link href="#features">Features</Nav.Link>
            {token?<Nav.Link onClick={logout}>Logout</Nav.Link>:null}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;