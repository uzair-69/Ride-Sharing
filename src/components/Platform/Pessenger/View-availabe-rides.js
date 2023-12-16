import Button from 'react-bootstrap/Button';
import React from 'react';
import img4 from "../../../assets/image/ArrowNarrowRightOutline.png";
import {Link} from 'react-router-dom';


export default function ViewRides() {
    return (
        <div className="container mt-5 mb-5 "  style={{ backgroundColor: "#39334F"}} >
             <div className="row d-flex justify-content-center align-items-center mt-5">
                <div className='col-lg-6 col-md-10 col-sm-10 col-xs-10'>
            <h1 style={{color: "white", marginTop: '120px'}}>Name! Are you looking for a Ride?</h1>

            </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center mt-5">
                <div className='col-lg-4 col-md-10 col-sm-10 col-xs-10'>
                <div className="d-grid gap-2" style={{marginLeft: '-30px', width: '500px', marginTop: '25px', marginBottom: '300px'}}>
                    <Button variant="dark" size="lg" style={{borderRadius: '12px'}}>
                    <Link to='/AllRides' style={{ color: '#ffffff', textDecoration: 'none', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                    <div className='row'>
                            <div className='col-10 d-flex align-items-center justify-content-center'>
                            <span style={{color: "white", marginLeft: '60px',}}>View Available Rides</span>
                            </div>

                            <div className='col-2'>
                            
                            <img  style={{ marginTop: '10px', marginBottom: '10px'}} src={img4} alt="" />
                            </div>
                        </div>
                    </Link>
                       
                    
                     </Button>
      
                  </div>
            </div>
            </div>
        </div>
    )
}