import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Driver/style.css";
import { useState } from 'react';

export default function Login() {

    const [rememberMe, setRememberMe] = useState(false);

    
  
    const handleCheckboxChange = () => {
      setRememberMe(!rememberMe);
    };
  
    const handleLogin = () => {
      // Add your login logic here
      console.log('Logging in with "Remember Me" status:', rememberMe);
    };

    return (
        <div>
            <div
      className="container mt-5 mb-5"
      style={{ backgroundColor: "#39334F", color: "white" }}
    >
      <h1 className=" d-flex justify-content-center ">Login</h1>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-8 col-md-8 col-lg-4 mt-4">
        <label for="email" class="form-label custom-label">Email address:</label>
        <input type="email" class="form-control custom-input" id="email" placeholder="Enter your email"></input>
        </div>
      </div>

      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-8 col-md-8 col-lg-4 mt-4">
        <label for="password" class="form-label custom-label">Password:</label>
        <input type="password" class="form-control custom-input" id="password" placeholder="Enter your password"></input>
        </div>
        </div>

        <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-8 col-md-8 col-lg-4 mt-4">
        <label>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={handleCheckboxChange}
        />
        Remember Me
      </label>

      {/* <button onClick={handleLogin}>Login</button> */}
        </div>
        </div>
        

        <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center align-items-center">
        <Button variant="success" type="submit" className="Custom-label" style={{ width: '400px', marginTop: '230px' }} ><Link to='/ViewRides' style={{ color: '#ffffff', textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: 'bold'}}>Login</Link></Button>{' '}
        
        </div>
        </div>

      

        
      </div>
        </div>
    )
}