import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Driver/style.css";
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Webcam from 'react-webcam';



export default function Registration() {
  //for image
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the submitted image here
    if (selectedImage) {
      // For example, you might want to upload the file to a server
      console.log("Selected Image:", selectedImage);
    }
  };

  //for webcam
  const [showModal, setShowModal] = useState(false);
  const [webcamRef, setWebcamRef] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.getScreenshot();
    // Add your verification logic with the captured image
    console.log('Captured Image:', imageSrc);
    setShowModal(false);
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div
      className="container mt-5"
      style={{ height: "120vh", backgroundColor: "#39334F", color: "white" }}
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
        <Form.Group controlId="formImage" >
        <Form.Label className="custom-label">Upload CNIC Image:</Form.Label>
        <Form.Control
          className="custom-input"
          type="file"
          accept="image/*" // Allow only image files
          onChange={handleImageChange}
        />
        {selectedImage && (
          <div className="mt-2">
            <strong>Selected Image:</strong> {selectedImage.name}
          </div>
        )}
      </Form.Group>
        </div>
        </div>

        

        <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-7 col-md-7 col-lg-4 mt-4">
        <label for="password" class="form-label custom-label mr-3">Verification:</label>
        <br />
        <Button variant="primary" onClick={handleShow} className="custom-label">
        Open Camera
      </Button>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Live Camera Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Webcam
            audio={false}
            ref={(webcam) => setWebcamRef(webcam)}
            screenshotFormat="image/jpeg"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={capture}>
            Verify
          </Button>
        </Modal.Footer>
      </Modal>
        
        </div>
        <div className="col-sm-7 col-md-7 col-lg-4 mt-4">
        </div>
        </div>

      

        
      </div>
  );
}
