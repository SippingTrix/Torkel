import React from 'react'
import './Footer.css'
import Logo from './Torkel_Logo.png'

  
  export default function Footer() {
   
    return (
        <footer className='footer_toolbar'>
            <p>Contact Us</p> 
            <p>Information</p> 
            <p>Site map</p> 
          <img src={Logo} alt='Torkel Logo' className="logo"/>
            <h1>Torkel</h1>
        </footer>
    );
  }


  







