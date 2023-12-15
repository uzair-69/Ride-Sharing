import React from 'react';
import Badge from 'react-bootstrap/Badge';
import './style.css';
import img1 from "../../../assets/image/Group 16.png";


export default function Ride() {
   
     
    return (
    
        <div className="container mt-5 mb-5 "  style={{ backgroundColor: "#39334F"}} >
            <h1 className="d-flex justify-content-center" style={{color: "white"}}>Name! Are you ready to pick a customer</h1>

            <div className="row d-flex justify-content-center align-items-center mt-5">
                <div className='col-lg-4 col-md-6 col-sm-8'>
            <Badge className="custom-badge" bg="purple"><h4><bold>Enter your destination</bold></h4> <br/> <h6 >Tell us whenever you go</h6> </Badge>
            </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center mt-5">
                <div className='col-lg-4 col-md-6 col-sm-8'>
            <Badge className="custom-badge" bg="white">
                <div className='row'>
                    <div className='col-1'>
                    <img src={img1} alt="" />
                    </div>

                    <div className='col-11'>
                    
                    <h4 style={{color: "black"}}><bold>Drivers Current Location!</bold></h4>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-1'>
                    <img src={img1} alt="" />
                    </div>

                    <div className='col-11'>
                    
                    <h4 style={{color: "black"}}><bold>Drivers Current Location!</bold></h4>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-1'>
                    <img src={img1} alt="" />
                    </div>

                    <div className='col-11'>
                    
                    <h4 style={{color: "black"}}><bold>Drivers Current Location!</bold></h4>
                    </div>
                </div>
                </Badge>
            </div>
            </div>
        </div>
    ) 
}