import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Form from './Components/Form';
import About from './Components/About';
import Services from './Components/Services';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Form/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/service' element={<Services/>}/>
        </Routes>
      </Router>
    </>
  );
}
export default App;
