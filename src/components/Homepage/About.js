import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    return (
        <div>
            <div className="container text-center" style={{ marginTop: '60px', color: 'white' }}>
                <h1 style={{ fontSize: '60px', marginBottom: '40px' }}>About <span style={{ color: '#FFC947' }}>Ride</span>Hub</h1>



                <div style={{ marginBottom: '40px' }}>
                    <h1 style={{fontFamily:"initial"}} >Our Mission</h1>
                    <h4 >
                        Connecting travelers everywhere to save money and reduce environmental 
                        impacts by sharing their transportation for similar and compatible journeys.
                    </h4>
                </div>

                <div style={{ marginBottom: '40px',backgroundColor:' ' }}>
                    <h1 style={{fontFamily:"initial"}} >What is RideHub?</h1>
                    <h4>
                        RideHub is a carpooling platform that connects drivers and passengers heading the same way. 
                        It is a simple, affordable, and sustainable way to travel. RideHub is a community marketplace 
                        that connects drivers with empty seats to passengers looking for a ride.
                    </h4>
                </div>

               



                <div className="row" style={{ marginTop: '60px' , marginBottom:'60px'}}>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div style={{ backgroundColor: '#7454C7', borderRadius: '10px', padding: '20px', height: '300px' }}>
                               <img src="https://i.ibb.co/7j0Gn7n/icon1.png" alt="" style={{ width: '100px', height: '100px' }} />     
                            <h3>Visit website and sign up</h3>
                            <p>
                                Visit our website and sign up as a driver or passenger. 
                                You can also download our mobile app from the App Store or Google Play.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div style={{ backgroundColor: '#7454C7', borderRadius: '10px', padding: '20px', height: '300px' }}>
                            <img src="https://i.ibb.co/7j0Gn7n/icon1.png" alt="" style={{ width: '100px', height: '100px' }} />
                            <h3>View / Request a ride</h3>
                            <p>
                                View available rides and request a seat from a driver heading your way and negotiate the price.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div style={{ backgroundColor: '#7454C7', borderRadius: '10px', padding: '20px', height: '300px' }}>
                            <img src="https://i.ibb.co/7j0Gn7n/icon1.png" alt="" style={{ width: '100px', height: '100px' }} />
                            <h3>Meet your driver</h3>
                            <p>
                                Meet your driver at the meeting point and enjoy the ride together to your destination and pay the driver in cash.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
