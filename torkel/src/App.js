import './App.css';
import React from 'react';
import Header from './components/header/Header'
import Footer from './components/header/Footer' 


function App() {

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="footer">
        <Footer />      
      </div>
    </>
  );
}

export default App;
