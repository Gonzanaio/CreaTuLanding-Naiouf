import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../styles/NavBar.css";
import logo from "../assets/Logo.png";
import CardWidget from "./CartWidget";
import logoNombre from "../assets/LogoNombre.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary w-100 navBar">
      <Container>
        <img src={logo} alt="logo" className="logo" />
        <Navbar.Brand as={NavLink} to="/">
          <img src={logoNombre} alt="logoNombre" className="logoN" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav w-100" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Mas Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/categoria/promos">
                Promociones
                <NavDropdown.Divider />
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/categoria/mayorista">
                Mayorista
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/categoria/pedidos">
                Pedidos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CardWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
