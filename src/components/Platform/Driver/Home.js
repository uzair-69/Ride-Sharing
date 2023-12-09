import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
    <div className="container d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
      {/* <div className="row"> */}
        {/* <div className="col-8"> */}
         <Button variant="outline-success " style={{ width: '200px', // Adjust the width as needed
        borderRadius: '8px', // Optional: Add rounded corners
        fontSize: '18px', // Optional: Adjust the font size
        fontWeight: 'bold', // Optional: Adjust the font weight
        }} className=''><Link to='/Driver'> Login </Link></Button>{' '}

        
         <Button variant="outline-info" style={{  width: '200px', // Adjust the width as needed
        borderRadius: '8px', // Optional: Add rounded corners
        fontSize: '18px', // Optional: Adjust the font size
        fontWeight: 'bold', // Optional: Adjust the font weight
       }} className=''><Link to='/Registration'>Signup</Link></Button>{' '}
        {/* </div>x */}
      {/* </div> */}
    </div>
    </>
  )
}