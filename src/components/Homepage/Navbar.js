
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';



export default function MyNavbar() {
  return (
    <Navbar bg="dark" expand="lg" >
      <Navbar.Brand href="#home" style={{color:'white'}}> <h2>Ride Share</h2> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Container className="d-flex justify-content-center">
          <Nav className="mr-auto rounded-pill bg-secondary text-white p-2">
            <Nav.Link href="#action1" >Action 1</Nav.Link>
            <Nav.Link href="#action2" >Action 2</Nav.Link>
            <Nav.Link href="#action3" >Action 3</Nav.Link>
          </Nav>
        </Container>
        <Button variant=""><Link to='/Driver'> Driver </Link> </Button>
        <Button variant=""><Link to='/Driver'> Pessenger </Link> </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
