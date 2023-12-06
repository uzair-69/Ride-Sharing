import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Your Name</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* Actions in the middle */}
          <div className="d-flex align-items-center">
            <div className="rounded-pill bg-secondary text-white p-2">
              <span>Action 1</span>
              <span className="mx-2">Action 2</span>
              <span>Action 3</span>
            </div>
          </div>
        </Nav>
        <Nav className="ml-auto">
          {/* Login/Signup buttons */}
          <Button variant="outline-primary" className="mr-2">
            Login
          </Button>
          <Button variant="primary">Signup</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
