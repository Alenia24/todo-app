import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../../assets/logo.png"

import "./Navigation.css";

export default function Navigation() {
  const expand = "lg";
  return (
    <Navbar expand={expand} className="bg-body-tertiary mb-3 px-5 custom-navbar">
      <Container fluid>
        <div className="d-flex w-100 align-items-center justify-content-between">
          <Navbar.Brand href="#" className="logo"> <img src={ Logo } alt="" width={40} className="logo-img" />Mintra</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        </div>

        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
          className="custom-offcanvas"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1">
              <Nav.Link href="#action1" className="mx-1">Features</Nav.Link>
              <Nav.Link href="#action2" className="mx-2">About</Nav.Link>
              <Nav.Link href="#action2" className="plan-btn text-nowrap mx-2">Start Planning</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
