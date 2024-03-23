import React from 'react'
import image from '../../assets/logo_white_bg.png'

const Header = () => {
  return (
    <div className="w3-padding-64 w3-white">
    <div className="w3-row-padding">
      <div className="w3-col l8 m6">
        <h1 className="w3-jumbo "><b>FarmLink Connect:</b> <br/>  Bridging the Gap Between Merchants, Farmers, and Investors</h1>
        <p>FarmLink Connect is an innovative digital solution designed to revolutionize the way merchants, farmers, and investors interact and collaborate within the agricultural ecosystem. With a focus on connectivity, efficiency, and sustainability, FarmLink Connect serves as a comprehensive platform that facilitates seamless communication, trade, and investment opportunities across the agricultural value chain.</p>


        <h1 className="w3-xxxlarge w3-text-green"><b>Connect with Local Farmers</b></h1>
        <p>At its core, FarmLink Connect empowers merchants to easily discover and connect with local farmers, enabling them to efficiently source high-quality produce directly from the source. Through intuitive search and filtering functionalities, merchants can browse through a diverse range of farming profiles, each showcasing unique specialties, crop varieties, and cultivation practices. By fostering direct relationships between merchants and farmers, FarmLink Connect eliminates intermediaries, streamlines procurement processes, and promotes fair and transparent transactions.</p>
        
        
      </div>
      <div className="w3-col l4 m6">
        <img src={image} className="w3-image w3-right w3-hide-small" width="335" height="471" alt='sample images' />
        <div className="w3-center w3-hide-large w3-hide-medium">
          <button className="w3-button w3-block w3-padding-large" onclick="document.getElementById('download').style.display='block'">
            <i className="fa fa-download"></i> Download Application
          </button>
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header