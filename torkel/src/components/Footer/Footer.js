import React from 'react'
import './Footer.css'
import Logo from './Torkel_Logo.png'

  
  export default function Footer() {
   
    return (
      <>
        <footer className='footer_toolbar'>
            
            <div id="links">
            <p>Contact Us<br/>
            Information<br/> 
            Site map</p> 
            </div>
            
          <img src={Logo} alt='Torkel Logo' className="footer_logo"/>
          <h3>Follow us on Twitter!</h3>
        </footer>

        </>
    );
  }


  







