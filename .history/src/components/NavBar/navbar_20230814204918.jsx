import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import React from 'react';
// import { Link } from 'react-router-dom';
import belgrano from "../../img/belgrano.jpg";
import SearchBar from "../SearchBar/searchBar";

function Navbar1() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          {" "}
          <Nav.Link to="/">
            <img
              src={belgrano}
              alt="Recargar productos"
              className="img-fluid w-25"
            />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/news">Productos</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
            <Nav.Link href="/login">Ingresar</Nav.Link>
          </Nav>
          <SearchBar />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
