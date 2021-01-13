import React from 'react'
import './Footer.css'
import Logo from './Torkel_Logo.png'

  
  export default function Footer() {
   
    return (
      <>
        <footer className='footer_toolbar'>
            <div>
            <p>Contact Us</p>
            <br/> 
            <p>Information</p> 
            <br/>
            <p>Site map</p> 
            </div>
          <img src={Logo} alt='Torkel Logo' className="footer_logo"/>
          <h1>Torkel</h1>
        </footer>

        </>
    );
  }


  







