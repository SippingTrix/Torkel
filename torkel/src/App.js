import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer' 

import Registration from './components/Registration/Registration';


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

        <Route exact path='/registration'>
          <Registration />
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
