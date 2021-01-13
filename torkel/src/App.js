import './App.css';
import Header from './components/header/Header' 
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'


function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
     

      <div className="login-form">
        <Login/>
      </div>


      <div className="footer">
          <Footer />      
      </div>
    </>
  );
}

export default App;
