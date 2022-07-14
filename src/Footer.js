import React from 'react'
import facebookIcon from './image/facebookIcon.jpg';
import TwitterIcon from './image/TwitterIcon.jpg'
import gmailIcon from './image/gmailIcon.jpg';


function Footer() {
  return (
    <div className='footer-wrapper'>
        <div className='footer'>
        <div>
            <h3>
                moskolEngineering
            </h3>
            <p>Moskol Engineering is an electrical and solar 
                engineering company based in Lagos. Moskol 
                Enginnering over the years has provided 
                quality and affordable electrical and 
                solar services to client all over Nigeria. 
                
            </p>
            <p className="text-center mb-0 pb-2">&copy; Copyright 2020; All rights reserved Moskol Engineering</p>
        </div>

        <div>
            
            <div className='footer-links'>
                <p className='home'><a href='/'>HOME</a></p>
                <p><a href='/cctv' >CCTV</a></p>
                <p><a href='/inverters'>INVERTERS</a></p>
                <p><a href='/batteries'>BATTERIES</a></p>
            </div>
            <div className='social-media-icon'>
                <div><a target="_blank" rel="noreferrer" href="https://www.facebook.com/adetomiwa.emmanuel"><img src={facebookIcon} className="img-fluid" alt='Ajibade'/></a></div>
                <div><a target="_blank" rel="noreferrer" href="https://www.facebook.com/adetomiwa.emmanuel"><img src={TwitterIcon} className="img-fluid" alt='Ajibade'/></a></div>
                <div><a target="_blank" rel="noreferrer" href="https://www.facebook.com/adetomiwa.emmanuel"><img src={gmailIcon} className="img-fluid" alt='Ajibade'/></a></div>
            </div>

        </div>
    </div>
    </div>
    
  )
}

export default Footer