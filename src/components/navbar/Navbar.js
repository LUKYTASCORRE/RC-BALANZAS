import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo3 from "../imágenes/Logo_leyenda1.svg";
import "./Navbar.css";
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';

function BarraNavegadora() {
    return (
      <Navbar className="navbar" >

        <img src={logo3} alt="logo de RC" />

         <Container className="Container">
           <Nav.Link href="/" >Inicio</Nav.Link>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="me-auto">
              <Nav.Link href="/Nuestra Empresa">Nuestra Empresa</Nav.Link>
              <Nav.Link href="/Nuestros Productos">Nuestros Productos</Nav.Link>
              <Nav.Link href="Contáctanos">Contáctanos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
         </Container>

      </Navbar>

    );
    
  }
  
  export default BarraNavegadora;  