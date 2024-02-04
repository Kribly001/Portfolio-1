import React from 'react';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

const MyNavbar = (props) => {
  return (
    <BootstrapNavbar expand="lg" className="custom-navbar">
      <BootstrapNavbar.Brand href="#" className="brand">
        Maxi Centeno
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" className="toggle-btn" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#about">Acerca de</Nav.Link>
          {/* Agrega más enlaces de navegación según tus secciones */}
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default MyNavbar;
