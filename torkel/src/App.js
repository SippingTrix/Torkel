import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from './components/header/Header'
import Footer from './components/header/Footer' 


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

        <Route path='/'>
          {/*Put homepage here */}
        </Route>
      </Switch>

      <div className="footer">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
