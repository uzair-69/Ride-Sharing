import React from 'react';
import Badge from 'react-bootstrap/Badge';
import './style.css';
import img1 from "../../../assets/image/Group 16.png";
import img2 from "../../../assets/image/LocationMarker.png";
import img3 from "../../../assets/image/Event Accepted Tentatively.png";
import img4 from "../../../assets/image/ArrowNarrowRightOutline.png";
import Button from 'react-bootstrap/Button';


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
            <Badge bg="white" style={{marginLeft: '40px', borderRadius: '30px'}}>
                <div className='row'>
                    <div className='col-1'>
                    <img style={{paddingLeft: '10px', marginTop: '12px'}} src={img1} alt="" />
                    </div>

                    <div className='col-10'>
                    
                    <h4 style={{color: "black", paddingLeft: '20px', marginTop: '10px'}}><bold>Drivers Current Location!</bold></h4>
                    </div>
                </div>
                <hr/>

                <div className='row'>
                    <div className='col-1'>
                    <img  style={{paddingLeft: '10px', marginTop: '13px'}} src={img2} alt="" />
                    </div>

                    <div className='col-10'>
                    
                    <input style={{color: "black", marginLeft: '20px', marginTop: '5px'}} type="text" class="form-control custom-input" id="destination" placeholder="Enter your destination"></input>
                    </div>
                </div>

                <hr/>
                <div className='row'>
                    <div className='col-1'>
                    <img  style={{paddingLeft: '10px', marginTop: '13px'}} src={img3} alt="" />
                    </div>

                    <div className='col-10'>
                    
                    <input style={{color: "black", marginLeft: '20px', marginTop: '5px', marginBottom: '20px'}} type="time" class="form-control custom-input" id="time" placeholder="Time to start your ride"></input>
                    </div>
                </div>
                </Badge>
            </div>
            </div>

            

            <div className="row d-flex justify-content-center align-items-center mt-4 mb-4">
                <div className='col-lg-3 col-md-6 col-sm-8'>
                <div className="d-grid gap-2" style={{marginLeft: '-10px', width: '360px'}}>
                    <Button variant="dark" size="lg" style={{borderRadius: '12px'}}>
                        <div className='row'>
                            <div className='col-10 d-flex align-items-center justify-content-center'>
                            <span style={{color: "white", marginLeft: '60px',}}>Confirm</span>
                            </div>

                            <div className='col-2'>
                            
                            <img  style={{ marginTop: '10px', marginBottom: '10px'}} src={img4} alt="" />
                            </div>
                        </div>
                    
                     </Button>
      
                  </div>
                {/* <Badge className="custom-badge" bg="purple"><h4><bold>Enter your destination</bold></h4> <br/> <h6 >Tell us whenever you go</h6> </Badge> */}
            </div>
            </div>
        </div>
    ) 
}