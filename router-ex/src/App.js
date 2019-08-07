import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={ Home } />
        <Route path='/about' component={ About } />
        <Route path='/contact' component={ Contact } />
      </div>
    </BrowserRouter>
  );
}

export default App;
