
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './style.css';


export default function MyNavbar() {

  return (
    <Navbar expand="lg" className='Navbar'>
      <Navbar.Brand href="#home"><Link to='/' style={{textDecoration:'none'}}> <h2>RideHub</h2> </Link>  </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Container className="d-flex justify-content-center">
          <Nav className="Rounded-Box">
            <Nav.Link href="#action1" className="Action1">About</Nav.Link>
            <Nav.Link href="#action2" className="Action2">Safety</Nav.Link>
            <Nav.Link href="#action3" className="Action3">Help</Nav.Link>
          </Nav>
        </Container>
        <Button
          style={{
            marginLeft: '10px',
            backgroundColor: 'white',      // Background color
            padding: '10px 15px',             // Padding (top/bottom, left/right)
            borderRadius: '20px',              // Border radius
            border: '1px solid #5E6D94',      // Border
            cursor: 'pointer',                // Cursor on hover
            fontSize: '16px',                 // Font size
            fontWeight: 'bold',               // Font weight
          }}
        >
          <Link to='/Passenger'
            style={{
              marginLeft: '-10px',
              marginRight: '8px',
              textDecoration: 'none',
              color: 'black'
            }}>
            Passenger
          </Link>
        </Button>

        <Button
          style={{
            marginLeft: '-20px',
            marginRight: '10px',
            backgroundColor: '#543CA2',      // Background color
            padding: '10px 15px',             // Padding (top/bottom, left/right)
            borderRadius: '20px',              // Border radius
            border: '1px solid #5E6D94',      // Border
            cursor: 'pointer',                // Cursor on hover
            fontSize: '16px',                 // Font size
            fontWeight: 'bold',               // Font weight
          }}
        >
          <Link to='/Driver'
            style={{
              marginLeft: '-10px',
              marginRight: '-8px',
              textDecoration: 'none',
              color: 'white'
            }}>
            Driver
          </Link>
        </Button>

      </Navbar.Collapse>
    </Navbar>
  );
}
