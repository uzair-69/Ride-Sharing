import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (

        <div
            className="text-white"
            style={{ backgroundColor: '#343541' }}

        >
            <div className="container text-center" >
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <h1 style={{ color: '#ffffff', marginTop: '20px' }}>RideHub</h1>
                        <h5 > <Link to="/About" style={{ color: '#FFC947', textDecoration: 'none' }}> About Us</Link></h5>
                        <h5 > <Link to="/Safety" style={{ color: '#FFC947', textDecoration: 'none' }}> Safety</Link></h5>
                        <a href="https://play.google.com/store/apps/details?id=com.android.chrome&hl=en&gl=US">
                            <h5 > <i class="bi bi-google-play"></i> <span style={{ color: '#FFC947' }}>Google Play</span></h5>
                        </a>
                        <a href="https://apps.apple.com/us/app/facebook/id284882215">
                            <h5 > <i class="bi bi-apple"></i> <span style={{ color: '#FFC947' }}>App Store</span></h5>
                        </a>

                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <h1 style={{ color: '#ffffff', marginTop: '20px' }}>Follow Us</h1>
                        <a
                            href="https://www.instagram.com/arif.hussain_/"
                            style={{ textDecoration: 'none', color: 'white' }}
                        >
                            <h5 > <i class="bi bi-instagram"></i> <span >Instagram</span></h5>
                        </a>
                        
                        <a
                            href="https://www.facebook.com/Arif.chohan.ah/"
                            style={{ textDecoration: 'none', color: 'white' }}
                        >
                            <h5 > <i class="bi bi-facebook"></i> <span >Facebook</span></h5>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/arif-hussain-chohan/"
                            style={{ textDecoration: 'none', color: 'white' }}
                        >
                            <h5 > <i class="bi bi-linkedin"></i> <span >LinkedIn</span></h5>
                        </a>



                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <img src={logo} alt="" style={{ width: '50%' }} />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                        <h5>© 2021 <Link to="/">RideHub</Link>. All rights reserved.</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
