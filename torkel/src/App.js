import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from 'react-router-dom';
import Header from './components/header/Header'
import Footer from './components/Footer/Footer' 
import Login from './components/Login/Login'


function App() {

  return (
    <Router>
      <div className="header">
        <Header />
      </div>

      <Switch>
        <Route exact path='/'>
          {/*Put homepage here */}
        </Route>

        <Route exact path='/cart'>
          {/*Put cart here */}
        </Route>

       
        <Route path='/login'>
          <Login />
        </Route>
     
      </Switch>

      <div className="footer">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
