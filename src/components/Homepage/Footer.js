import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png';

export default function Footer() {
    return (

        <div
            className="text-white"
            style={{ backgroundColor: '#343541' }}

        >
            <div className="container" >
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <h1 style={{ color: '#ffffff' ,marginTop:'20px'}}>RideHub</h1>
                        <h5 style={{ color: '#FFC947' }}>About Us</h5>
                        <h5 style={{ color: '#FFC947' }}>Contact Us</h5>
                        <h5 style={{ color: '#FFC947' }}>Privacy Policy</h5>
                        <h5 > <i class="bi bi-google-play"></i> <span style={{ color: '#FFC947' }}>Google Play</span></h5>
                        <h5 > <i class="bi bi-apple"></i> <span style={{ color: '#FFC947' }}>App Store</span></h5>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <h1 style={{ color: '#ffffff' ,marginTop:'20px'}}>Follow Us</h1>
                        <h5><i class="bi bi-facebook"></i> Facebook</h5>
                        <h5><i class="bi bi-instagram"></i> Instagram</h5>
                        <h5><i class="bi bi-linkedin"></i> LinkedIn</h5>
                        <h5><i class="bi bi-youtube"></i> Youtube</h5>


                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <img src={logo} alt="" style={{ width: '50%', marginLeft: '-40px' }} />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                        <h5>© 2021 RideHub. All rights reserved.</h5>
                    </div>                    
                </div>
            </div>
        </div>
    )
}
