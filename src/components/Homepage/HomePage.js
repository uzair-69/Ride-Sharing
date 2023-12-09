import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Heroimg from './images/img1.png';
import Img2 from './images/img2.png';
import Img3 from './images/img3.png';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';



export default function HomePage() {
  return (
    <div style={{ backgroundColor: '#39334F', color: 'white' }}>

      <div className=" d-flex justify-content-center align-items-center">
        <img
          style={{ marginTop: '100px', marginBottom: '100px' }}
          src={Heroimg} alt=""
        />
      </div>
      <div className="text-center justify-content-center align-items-center" style={{ padding: '20px' }}>
        <h1 style={{ fontSize: '60px' }}>Welcome to <span style={{ color: '#FFC947' }}>Ride</span>Hub</h1>
        <h5>RideHub is platform for your service so you can earn and ride any time</h5>
      </div>
      <div className="text-center justify-content-center align-items-center" style={{ marginTop: '100px', marginBottom: '100px' }}>
        <h5><i class="bi bi-play-circle"></i>  Watch Our Story</h5>

      </div>

      <img
        style={{ width: '100%' }}
        src={Img2} alt=""
      />

      <div className="text-center justify-content-center align-items-center" style={{ marginBottom: '40px' }}>
        <img
          style={{ width: '50%' }}
          src={Img3} alt=""
        />

        <h1>
          How
          <span style={{ color: '#FFC947' }}> Ride</span>Hub
          Works
        </h1>

        <h5>
          More rides, less waiting. Get a ride when you need one
        </h5>

      </div>

      <div className="container text-center justify-content-center align-items-center" style={{ marginBottom: '40px' }}>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{
              backgroundColor: '#7454C7',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 0 8px rgba(0, 0, 0, 0.8)',
              marginBottom: '20px'
            }}>
              <img src={icon1} alt="" style={{ marginTop: '20px' }} />
              <h1>Create a Profile</h1>
              <h5 style={{ marginBottom: '20px' }}>Register yourself by submitting
                your details to be part of
                our network
              </h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{
              backgroundColor: '#7454C7',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 0 8px rgba(0, 0, 0, 0.8)',
              marginBottom: '20px'
            }}>
              <img src={icon2} alt="" style={{ marginTop: '20px' }} />
              <h1>Search for rides</h1>
              <h5 style={{ marginBottom: '20px' }}>Tell us where you need to go
                and how you’d like to get
                there
              </h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{
              backgroundColor: '#7454C7',
              borderRadius: '10px',
              padding: '17px',
              boxShadow: '0 0 8px rgba(0, 0, 0, 0.8)',
              marginBottom: '20px'
            }}>
              <img src={icon3} alt="" style={{ marginTop: '20px' }} />
              <h1>Book a ride</h1>
              <h5 style={{ marginBottom: '20px' }} >Choose a ride and chat with
                your rider by clicking on Book
                Now button
              </h5>
            </div>

          </div>
        </div>
      </div>

    



    </div>
  )
}
