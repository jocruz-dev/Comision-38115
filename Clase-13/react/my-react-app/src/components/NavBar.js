import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {getCollection} from '../utils/Firebase'
import {collection, getDocs} from 'firebase/firestore'
import {useEffect, useState} from 'react'
import logo from '../assets/logo.svg'

function NavBar() {

  const [state, setState] = useState([])

  useEffect(() => {
    getCollection('categorias')
    .then((value)=>{
      setState(value.docs.map((value)=>{
        return value.data()
      }))
    })
    return () => {
      
    }
  }, [])
  

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
        <Nav.Link href="/">
          <img src={logo}></img>
        </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {state.map((value)=>{
                return <NavDropdown.Item href={`/categorias/${value.name}`} key={value.key}>
                          {value.name}
                        </NavDropdown.Item>
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;