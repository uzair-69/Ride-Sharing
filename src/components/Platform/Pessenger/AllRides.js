import React from 'react';
import Badge from 'react-bootstrap/Badge';
import img1 from "../../../assets/image/car.png";
import img2 from "../../../assets/image/Book Now.png";
import img3 from "../../../assets/image/bike.png";


const AllRides = () => {
    
  const whatsappNumber = '923337141238'; 

  const getWhatsAppLink = () => {
    // Construct the WhatsApp link with your phone number
    return `https://wa.me/${whatsappNumber}`;
  };

    return (
        <div className="container mt-5 mb-5 "  style={{ backgroundColor: "#39334F" }}>
        <div className="row d-flex justify-content-center align-items-center mt-5" >
           <div className='col-lg-5 col-md-10 col-sm-10 col-xs-10'>
            <Badge className="custom-badge my-3" bg="white">
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-2 '>
                    <img style={{paddingLeft: '10px', marginTop: '-10px'}} src={img3} alt="" />
                    </div>

                    <div className='col-6 '>
                    
                    <h4 style={{color: "black", marginRight:"100px"}}><bold>Bike</bold></h4> <br/> <p style={{color: "Black", marginLeft:'10px'}}>Sukkur IBA to Allah Wali  <br/> Masjid Bunder Road</p> 
                    </div>

                    <div className='col-4'>
                    <p style={{color: "grey", marginTop:"4px"}}>40 min</p>
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                     <img  src={img2} alt="" />
                    </a>
                    
                    </div>
                </div>
                </Badge>
                <Badge className="custom-badge  my-3" bg="white">
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-2 '>
                    <img style={{paddingLeft: '10px', marginTop: '-10px'}} src={img3} alt="" />
                    </div>

                    <div className='col-6 '>
                    
                    <h4 style={{color: "black", marginRight:"100px"}}><bold>Bike</bold></h4> <br/> <p style={{color: "Black", marginLeft:'10px'}}>Miliatry Road to Mission<br/> Road  </p> 
                    </div>

                    <div className='col-4'>
                    <p style={{color: "grey", marginTop:"4px"}}>15 min</p>
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                     <img  src={img2} alt="" />
                    </a>
                    
                    </div>
                </div>
                </Badge>
                <Badge className="custom-badge my-3" bg="white">
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-2 '>
                    <img style={{paddingLeft: '10px', marginTop: '-10px'}} src={img3} alt="" />
                    </div>

                    <div className='col-6 '>
                    
                    <h4 style={{color: "black", marginRight:"100px"}}><bold>Bike</bold></h4> <br/> <p style={{color: "Black", marginLeft:'10px'}}>Sukkur IBA to Rohri  <br/> </p> 
                    </div>

                    <div className='col-4'>
                    <p style={{color: "grey", marginTop:"4px"}}>1 Hour</p>
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                     <img  src={img2} alt="" />
                    </a>
                    
                    </div>
                </div>
                </Badge>

            

            </div>
            <div className='col-lg-5 col-md-10 col-sm-10 col-xs-10'>
            <Badge className="custom-badge my-3" bg="white">
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-2 '>
                    <img style={{paddingLeft: '10px', marginTop: '-10px'}} src={img1} alt="" />
                    </div>

                    <div className='col-6 '>
                    
                    <h4 style={{color: "black", marginRight:"100px"}}><bold>Car</bold></h4> <br/> <p style={{color: "Black", marginLeft:'10px'}}>Sukkur IBA to Bunder  <br/> Road</p> 
                    </div>

                    <div className='col-4'>
                    <p style={{color: "grey", marginTop:"4px"}}>5 min</p>
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                     <img  src={img2} alt="" />
                    </a>

                    </div>
                </div>
                </Badge>

                <Badge className="custom-badge my-3" bg="white">
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-2 '>
                    <img style={{paddingLeft: '10px', marginTop: '-10px'}} src={img1} alt="" />
                    </div>

                    <div className='col-6 '>
                    
                    <h4 style={{color: "black", marginRight:"100px"}}><bold>Car</bold></h4> <br/> <p style={{color: "Black", marginLeft:'10px'}}>Ghanta Ghar to  <br/> Hira Hospital</p> 
                    </div>

                    <div className='col-4'>
                    <p style={{color: "grey", marginTop:"4px"}}>40 min</p>
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                     <img  src={img2} alt="" />
                    </a>
                    
                    </div>
                </div>
                </Badge>

                <Badge className="custom-badge my-3" bg="white">
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-2 '>
                    <img style={{paddingLeft: '10px', marginTop: '-10px'}} src={img1} alt="" />
                    </div>

                    <div className='col-6 '>
                    
                    <h4 style={{color: "black", marginRight:"100px"}}><bold>Car</bold></h4> <br/> <p style={{color: "Black", marginLeft:'10px'}}>Birage colony to  <br/> Lab e Mehran</p> 
                    </div>

                    <div className='col-4'>
                    <p style={{color: "grey", marginTop:"4px"}}>2 hours</p>
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                     <img  src={img2} alt="" />
                    </a>
                    
                    </div>
                </div>
                </Badge>
            </div>
         </div>
        </div>
    )
}

export default AllRides;