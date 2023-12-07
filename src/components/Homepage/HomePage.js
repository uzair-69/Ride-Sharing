import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Heroimg from './images/img1.png';
import Img2 from './images/img2.png';
import Img3 from './images/img3.png';


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



    </div>
  )
}
