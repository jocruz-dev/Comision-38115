import "../../styles/NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {getCollection} from '../../utils/Firebase'
import {collection, getDocs} from 'firebase/firestore'
import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom' 
import logo from '../../assets/logo.svg'

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
                return <NavDropdown.Item key={value.key}>
                          <NavLink style={{color: 'black', textDecoration: 'none'}} to={`/categorias/${value.name}`}>{value.name}</NavLink>
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