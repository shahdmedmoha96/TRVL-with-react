import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Consulting from './pages/Consulting';

import Development from './pages/Devolopemnt';
import Marketing from './pages/Marketing';
import Products from './pages/Products';
import Services from './pages/Services';
import SignUp from './pages/Signup';
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
