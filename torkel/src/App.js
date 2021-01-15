import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from 'react-router-dom';

import Registration from './components/Registration/Registration';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer' 
import Login from './components/Login/Login'
import HomePage from './components/HomePage/homePage';


function App() {

  return (
    
    <Router>
      <div id='Webformating'>
      <div id="Webheader">
        <Header />
      </div>

      <div id='Webbody'>
      <Switch>
        <Route exact path='/'>
          {/*Put homepage here */}
        </Route>

        <Route exact path='/homePage'>
          <HomePage />
        </Route>

        <Route exact path='/cart'>
          {/*Put cart here */}
        </Route>

        <Route exact path='/registration'>
          <Registration />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/'>
          {/*Put homepage here */}
        </Route>
      </Switch>
      </div>

      <div id="Webfooter">
        <Footer />
      </div>

      </div>  
    </Router>
    
  );
}

export default App;
