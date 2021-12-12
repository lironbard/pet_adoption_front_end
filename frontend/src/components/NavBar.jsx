import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <header>
      <Navbar className="bg-secondary" variant="light" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">PetShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/Login">
                <i className="fas fa-user"></i> LOGIN
              </Nav.Link>
              <Nav.Link href="/Search">
                <i className="fas fa-search"></i> SEARCH
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
