import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar className="bg-light col-12" variant="dark">
      <Container className="col-12">
        <div>
          <img src="../logo.jpg" alt="" />
        </div>
        <Nav className="me-auto">
          <Link to="/" className="m-2 text-decoration-none">
            Home
          </Link>
          <Link className="m-2 text-decoration-none" to="/Login">
            Login
          </Link>
          <Link className="m-2 text-decoration-none" to="/Signin">
            Sign In
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
