import {NavLink} from "react-router-dom"
import {Navbar,Container,Nav} from "react-bootstrap"
import './nav.css'
export default function NavApp()
{
return(
    <Navbar  bg="danger" variant="dark">
    <Container>
    <Navbar.Brand href="#home">PostGram</Navbar.Brand>
    <Nav className="ms-auto ">

      <Nav.Link ><NavLink className="link" activeClassName="selected" exact to="/" activeClassName="selected">Home</NavLink></Nav.Link>
      <Nav.Link ><NavLink  className="link" activeClassName="selected" to="/posts" activeClassName="selected">Posts</NavLink></Nav.Link>
      <Nav.Link ><NavLink  className="link" activeClassName="selected" to="/about" activeClassName="selected">About</NavLink></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
)
}