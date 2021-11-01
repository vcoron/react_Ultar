import React, { Component } from 'react';
import {BrowserRouter ,Route} from 'react-router-dom';
import './App.css';

import Navbar from './componants/Navbar'
import Contact from './componants/Contact/index';
import Index from './componants/Index/index';

class App extends Component {
  render() { 
    return (
    

    <BrowserRouter>
      <Navbar />
      <Route exact path='/' component={Index} />
      <Route path='/Contact' component={Contact} />
 

    </BrowserRouter>
    )
  }
}
 
export default App;
