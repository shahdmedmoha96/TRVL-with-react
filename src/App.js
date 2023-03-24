import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Consulting from './components/pages/Consulting';

import Development from './components/pages/Devolopemnt';
import Marketing from './components/pages/Marketing';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/Signup';
function App() {
  return (  
    <>
    <Router>
    
    < Navbar />
    <Switch>
        <Route path='/'  exact component={Home} />
        <Route path='/products'  component={Products } />
        <Route path='/consulting'  component={Consulting} />
        <Route path='/sign-up'  component={SignUp} />
        <Route path='/marketing'  component={Marketing} />
        <Route path='/development'  component={Development} />
        <Route path='/services'  component={Services} />
        <Route path='/consulting'  component={Consulting} />
      </Switch>
         
          </Router>
          </>
  );
}

export default App;
