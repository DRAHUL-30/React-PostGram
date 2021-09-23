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

      <Nav.Link ><NavLink className="link" activeClassName="selected" exact to="/" >Home</NavLink></Nav.Link>
      <Nav.Link ><NavLink  className="link" activeClassName="selected" to="/posts" >Posts</NavLink></Nav.Link>
      <Nav.Link ><NavLink  className="link" activeClassName="selected" to="/about" >About</NavLink></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
)
}
