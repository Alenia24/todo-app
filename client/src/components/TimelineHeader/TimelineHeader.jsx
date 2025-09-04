import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../../assets/logo.png";

import { getName, postLogout } from "../../services/todo-api.jsx";

import "./TimelineHeader.css";

export default function TimelineHeader() {
  const expand = "lg";
  const [username, setUsername] = useState("");
  const nav = useNavigate()

  useEffect(() => {
    async function fetchName() {
      try {
        const name = await getName();
        setUsername(name);
      } catch (error) {
        console.error("Failed to fetch user name", error);
      }
    }
    fetchName();
  }, []);

  const handleLogout = async () => {
    try {
        await postLogout();
        localStorage.removeItem("token");
        nav("/login")
    } catch (error) {
        console.log("Logout failed:", error);
    }
  }

  return (
    <Navbar
      key={expand}
      expand={expand}
      className="bg-body-tertiary px-5 custom-navbar"
    >
      <Container fluid>
        <div className="d-flex w-100 align-items-center justify-content-between">
            <Navbar.Brand href="#" className="logo">
              <img src={Logo} alt="" width={40} className="logo-img" />
              Mintra
            </Navbar.Brand>
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
              <img src={Logo} alt="" width={40} className="logo-img" />
              Mintra
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1">
              <Nav.Link href="#action1">Home</Nav.Link>
              <NavDropdown
                title={`Hi ${username.charAt(0).toUpperCase()+ username.slice(1)}`}
                align="start"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="#action3">
                  Edit Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
