import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Badge from 'react-bootstrap/Badge';
import img1 from "../../../assets/image/car.png";
import img2 from "../../../assets/image/Book Now.png";


const AllRides = () => {
    const [map, setMap] = useState(null);
  
    const containerStyle = {
      width: '400px',
      height: '400px',
    };
  
    const center = {
      lat: -34.397,
      lng: 150.644,
    };
  
    useEffect(() => {
      // Ensure the map is loaded before accessing it
      if (map) {
        // You can perform additional setup or interactions with the map here
        // For example, add a marker
        new window.google.maps.Marker({
          position: center,
          map: map,
          title: 'My Marker',
        });
      }
    }, [map]);

    return (
        <div className="container mt-5 mb-5 "  style={{ backgroundColor: "#39334F"}} >
        <div className="row d-flex justify-content-center align-items-center mt-5">
           <div className='col-lg-5 col-md-10 col-sm-10 col-xs-10'>
           <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onLoad={(map) => setMap(map)}
      ></GoogleMap>
    </LoadScript>

            </div>
            <div className='col-lg-5 col-md-10 col-sm-10 col-xs-10'>
            <Badge className="custom-badge" bg="white">
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-2'>
                    <img style={{paddingLeft: '10px', marginTop: '12px'}} src={img1} alt="" />
                    </div>

                    <div className='col-6'>
                    
                    <h4 style={{color: "black"}}><bold>Car</bold></h4> <br/> <p style={{color: "Black"}}>Sukkur IBA to Allah <br/> Wali Masjid Bunder Road</p> 
                    </div>

                    <div className='col-4'>
                    
                    <img  src={img2} alt="" />
                    </div>
                </div>
                
                </Badge>
            </div>
         </div>
        </div>
    )
}

export default AllRides;