import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Driver/style.css";




export default function Registration() {

  return (
    <div
      className="container mt-5 mb-5"
      style={{ backgroundColor: "#39334F", color: "white" }}
    >
      <h1 className=" d-flex justify-content-center ">Register Yourself</h1>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-7 col-md-7 col-lg-4 mt-4">
        <label for="name" class="form-label custom-label">Name:</label>
        <input type="text" class="form-control custom-input" id="name" placeholder="Enter your name"></input>
        </div>
        <div className="col-sm-7 col-md-7 col-lg-4 mt-4">
        <label for="email" class="form-label custom-label">Email address:</label>
        <input type="email" class="form-control custom-input" id="email" placeholder="Enter your email"></input>
        
        </div>
        </div>

        <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-7 col-md-7 col-lg-4 mt-4">
        <label for="password" class="form-label custom-label">Password:</label>
        <input type="password" class="form-control custom-input" id="password" placeholder="Enter your password"></input>
        </div>
        <div className="col-sm-7 col-md-7 col-lg-4 mt-4">
        <label for="confirmPass" class="form-label custom-label">Confirm password</label>
        <input type="password" class="form-control custom-input" id="confirmPass" placeholder="Re-enter password"></input>
        </div>
        </div>
        
        <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-7 col-md-7 col-lg-4 mt-4">
        <label for="cnic" class="form-label custom-label">CNIC:</label>
        <input type="number" class="form-control custom-input" id="cnic" placeholder="Enter your CNIC"></input>
        </div>
        <div className="col-sm-7 col-md-7 col-lg-4 mt-4">
        
        </div>
        </div>

        

    

        <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-7 col-md-7 col-lg-4 mt-4">
        <Form.Check
              required
              name="terms"
              label="I’ve read and agree with Terms of Service and our 
              Privacy Policy"
              // onChange={handleChange}
              // isInvalid={!!errors.terms}
              // feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
        </div>
        </div>

        <div className="row">
        <div className="col-sm-7 col-md-7 col-lg-12 mt-4  d-flex justify-content-center align-items-center">
        <Button variant="danger" type="submit" className="Custom-label" style={{ width: '400px', marginBottom: '70px'}} ><Link to='/ViewRides' style={{ color: '#ffffff', textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Create Account</Link></Button>{' '}
        
        </div>
        </div>

      

        
      </div>
  );
}
